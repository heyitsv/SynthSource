from django.shortcuts import render
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .models import quizQuestion, learnQuiz, Song 
from .triviagen import ALL_SONGS, performSearch
import json, random, time, os
import lyricsgenius 
from spotipy.oauth2 import SpotifyClientCredentials

geniusToken = os.getenv('GENIUS')

client_id = os.getenv('SPOTIFY_ID')
client_secret = os.getenv('SPOTIFY_SECRET')

genius = lyricsgenius.Genius(geniusToken, sleep_time=0.2)

genius.verbose = False

 
allowed_ip = "130.211.3.106" #my ip

#pkill python && ./manage.py runserver 0.0.0.0:8000

SAFEMODE = False

def badIP(request):
  uid = request.META.get('HTTP_X_REPLIT_USER_ID')
  print(uid)
  if uid != '1952233': 
    return HttpResponse("<h1>Welcome</h1>")
  else: 
    return False
  

# Create your views here.
def home(request):
    ipCheck = False
    if SAFEMODE:
      ipCheck = badIP(request)
    
    if ipCheck:
      return ipCheck
  
    return render(request, 'main/index.html')


def learn(request):
    ipCheck = False
    if SAFEMODE:
      ipCheck = badIP(request)
    
    if ipCheck:
      return ipCheck

    quizID = int(request.GET.get("id"))
    questionNumber = int(request.GET.get("q"))

    validQuestions = quizQuestion.objects.filter(quiz__id=quizID)
    focusQuestion = validQuestions[questionNumber-1]

    context = {
       "question": focusQuestion.questionText,
       "option1": focusQuestion.option1,
       "option2": focusQuestion.option2,
       "option3": focusQuestion.option3,
       "option4": focusQuestion.option4,
       "correctIndex": focusQuestion.correctIndex,
    }


    return render(request, 'main/learn.html', context)

def start(request):
    ipCheck = False
    if SAFEMODE:
      ipCheck = badIP(request)
    
    if ipCheck:
      return ipCheck
    
    context = {"chapters": []}

    coreData = {}

    for quiz in learnQuiz.objects.all():
      try:
        coreData[quiz.chapter].append({"id": quiz.id, "name": quiz.name})
      except:
        coreData[quiz.chapter] = [{"id": quiz.id, "name": quiz.name}]
      

    for key in coreData:
      context["chapters"].append({'title': key, 'values': coreData[key]})

    return render(request, 'main/start.html', context)

@login_required
def create(request):
    ipCheck = False
    if SAFEMODE:
      ipCheck = badIP(request)
    
    if ipCheck:
      return ipCheck

    mySongs = Song.objects.filter(author=request.user).all() 
    context = {"songs": []}
    for song in mySongs:
      context["songs"].append({ "author": request.user.username, "data": song.data, "name": song.name, "id": song.id})

    return render(request, 'main/create.html', context)

@login_required
@csrf_exempt
def newSong(request):
  if request.method == "POST":
    newSong = Song(author=request.user)
    newSong.save()
    newSong.name = f"Track {newSong.id}"
    newSong.data = ""
    newSong.save()
    return JsonResponse({"songid": newSong.id, "success": True}) 
  return JsonResponse({"success": False, "reason": "GET not allowed"})

@login_required
@csrf_exempt
def updateSong(request):
  if request.method == "POST":
    songID = request.POST["songid"]
    newData = request.POST["data"]
    newName = request.POST["name"]

    songObj = Song.objects.get(id=songID)
    if songObj.author.id != request.user.id: 
      return HttpResponse("Forbidden")
    
    songObj.data = newData 
    songObj.name = newName 
    songObj.save()

  return JsonResponse({"success": False, "reason": "GET not allowed"})


def studio(request):
    ipCheck = False
    if SAFEMODE:
      ipCheck = badIP(request)
    
    if ipCheck:
      return ipCheck

    songID = request.GET.get("q")
    songObj = Song.objects.get(id=songID)
    
    context = {}
    context["song"] = { "author": songObj.author.username, "data": songObj.data, "name": songObj.name, "isOwner": songObj.author.id == request.user.id, "id": songObj.id}

    return render(request, 'main/studio.html', context)

@csrf_exempt
@login_required
def copySong(request):
    ipCheck = False
    if SAFEMODE:
      ipCheck = badIP(request)
    
    if ipCheck:
      return ipCheck

    originalSong = Song.objects.get(id=request.POST["songid"])
    originalSong.pk = None 
    originalSong.save()

    originalSong.author = request.user 
    originalSong.save()

    return JsonResponse({"url": "/editor/?q="+str(originalSong.id)})


def editor(request):
    ipCheck = False
    if SAFEMODE:
      ipCheck = badIP(request)
    
    if ipCheck:
      return ipCheck

    songID = request.GET.get("q")
    songObj = Song.objects.get(id=songID)
    
    context = {}
    context["song"] = { "author": songObj.author.username, "data": songObj.data, "name": songObj.name, "isOwner": songObj.author.id == request.user.id, "id": songObj.id}

    context["is_authenticated"] = request.user.is_authenticated

    return render(request, 'main/editor.html', context)

def search(request):
    ipCheck = False
    if SAFEMODE:
      ipCheck = badIP(request)
    
    if ipCheck:
      return ipCheck

    searchTerm = request.GET.get('q')

    allSongs = Song.objects.all() 
    
    if searchTerm:
      allSongs = Song.objects.filter(name__icontains=searchTerm)[:6]

    context = {"songs": []}
    for song in allSongs:
      context["songs"].append({ "author": song.author.username[:12], "data": song.data, "name": song.name, "id": song.id})

    return JsonResponse(context)
    

def explore(request):
    ipCheck = False
    if SAFEMODE:
      ipCheck = badIP(request)
    
    if ipCheck:
      return ipCheck

    
    allSongs = Song.objects.all()[:6] 
    context = {"songs": []}
    for song in allSongs:
      context["songs"].append({ "author": song.author.username[:12], "data": song.data, "name": song.name, "id": song.id})

    return render(request, 'main/explore.html', context)

def game(request):
    ipCheck = False
    if SAFEMODE:
      ipCheck = badIP(request)
    
    if ipCheck:
      return ipCheck

    return render(request, 'main/game.html')


def loginPage(request):
    ipCheck = False
    if SAFEMODE:
      ipCheck = badIP(request)
    
    if ipCheck:
      return ipCheck

    return render(request, 'main/login.html')


def signup(request):
    ipCheck = False
    if SAFEMODE:
      ipCheck = badIP(request)
    
    if ipCheck:
      return ipCheck

    return render(request, 'main/signup.html')


def tuneSynth(request):
    ipCheck = False
    if SAFEMODE:
      ipCheck = badIP(request)
    
    if ipCheck:
      return ipCheck

    return render(request, 'main/tunesynth.html')

def portal(request):
    ipCheck = False
    if SAFEMODE:
      ipCheck = badIP(request)
    
    if ipCheck:
      return ipCheck

    return render(request, 'main/portal.html')



@login_required
def trivia(request):
    ipCheck = False
    if SAFEMODE:
      ipCheck = badIP(request)
    
    if ipCheck:
      return ipCheck

    chosenArtist = random.choice(ALL_SONGS)
    results = performSearch(*chosenArtist)
    fakeChoices = []
    random.shuffle(ALL_SONGS)
    for song in ALL_SONGS:
      if song[1] != chosenArtist[1] and len(fakeChoices) < 3:
        fakeChoices.append(song[1])

    correctIndex = random.randrange(0,4)
    fakeChoices.insert(correctIndex, chosenArtist[1])

    context = {
      "question": results[0],
      "option1": fakeChoices[0],
      "option2": fakeChoices[1],
      "option3": fakeChoices[2],
      "option4": fakeChoices[3],
      "correctIndex": correctIndex+1,
      "iframeCode": results[1]
    }

    return render(request, 'main/trivia.html', context)

@csrf_exempt
def createUser(request):
    ipCheck = False
    if SAFEMODE:
      ipCheck = badIP(request)
    
    if ipCheck:
      return ipCheck

    if request.method == "POST":
      userName = request.POST['username']
      userPass = request.POST['password']

      results = User.objects.filter(username=userName)
      print(len(results))

      if len(results) > 0:
        return JsonResponse({'success': False, 'reason': 'That username is already taken!'})

      user = User.objects.create_user(userName, None, userPass)
      user.save()

      login(request, user)

      return JsonResponse({'success': True})


@csrf_exempt 
def login_web(request):
    if request.method == "POST":
      userName = request.POST['username']
      userPass = request.POST['password']
      nextVal = request.GET.get("next")
      user = authenticate(username=userName, password=userPass)

      if user:
        login(request, user)
        if nextVal:
          return JsonResponse({"redirect": nextVal})
        else:
          return JsonResponse({"redirect": "/"})
      else:
        return JsonResponse({"success": False})

def songSearch(request):
    ipCheck = False
    if SAFEMODE:
      ipCheck = badIP(request)
    
    if ipCheck:
      return ipCheck


    return render(request, 'main/songsearch.html')

def spotifycredentials(request):
    ipCheck = False
    if SAFEMODE:
      ipCheck = badIP(request)
    
    if ipCheck:
      return ipCheck

    client_credentials_manager = SpotifyClientCredentials(client_id, client_secret)

    # sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

    tk = client_credentials_manager.get_access_token()
    return JsonResponse({'token': tk})


@csrf_exempt
def addcovers(request):
    ipCheck = False
    if SAFEMODE:
      ipCheck = badIP(request)
    
    if ipCheck:
      return ipCheck


    currentList = json.loads(request.POST["songList"])[:1]
    finalList = []
    for song in currentList:
      try:
        data = genius.search_song(*song)
        albumCover = vars(data)["_body"]["album"]["cover_art_url"]
        bandCover = vars(data)["_body"]["album"]["artist"]["image_url"]
        ytURL = "null"
        for src in vars(data)["_body"]["media"]:
          if src["provider"] == "youtube":
            ytURL = src["url"]

        finalData = {
          "albumCover": albumCover,
          "bandCover": bandCover,
          "songName": song[0],
          "bandName": song[1],
          "ytURL": ytURL,
        }
        finalList.append(finalData)
      except Exception as e:
        print(str(e))

    return JsonResponse(finalList, safe=False)

def musicplayer(request):
    ipCheck = False
    if SAFEMODE:
      ipCheck = badIP(request)
    
    if ipCheck:
      return ipCheck

    return render(request, 'main/musicplayer.html')


def mapview(request):
    ipCheck = False
    if SAFEMODE:
      ipCheck = badIP(request)
    
    if ipCheck:
      return ipCheck

    return render(request, 'main/map.html')



@csrf_exempt
def searchArt(request):
    ipCheck = False
    if SAFEMODE:
      ipCheck = badIP(request)
    
    if ipCheck:
      return ipCheck

    q = request.POST["q"]

    x = genius.search_genius_web(q)
    artists = [sec for sec in x["sections"] if sec["type"]=="artist"]

    finalData = []
    for artist in artists[0]['hits']:
      if "default_avatar" in artist["result"]["image_url"]: continue
      finalData.append({"name": artist["result"]["name"], "image": artist["result"]["image_url"], "genid": artist["result"]["id"]})

    return JsonResponse(finalData, safe=False)



@csrf_exempt 
def logout_web(request):
    logout(request)
    return HttpResponseRedirect('/')


