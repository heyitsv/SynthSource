import lyricsgenius, json, random, requests 
from math import floor 
import re
import os 

geniusToken = os.getenv('GENIUS')

genius = lyricsgenius.Genius(geniusToken, sleep_time=0.2)
genius.verbose = False


ALL_SONGS = [["Never Gonna Give you Up", "Rick Astley"], 
		   ["Back in Black", "AC/DC"],
		   ["Thriller", "Michael Jackson"],
		   ["Shut Up and Dance", "Walk the Moon"],
		   ["Best day of my life", "American Authors"],
		   ["Africa", "Toto"],
		   ["Bohemian Rhapsody", "Queen"],
		   ["Dancing Queen", "ABBA"],
		   ["Eye of the Tiger", "Survivor"],
		   ["Sugar", "Maroon 5"],
		   ["Paradise", "Coldplay"],
		   ["Walking On Sunshine", "Katrina & The Waves"],
		   ["We Didn't Start the Fire", "Billy Joel"]]

def performSearch(songInput, artist):

	song = genius.search_song(songInput, artist)


	musicID = vars(song)["_body"]["apple_music_id"] 
	musicWords = song.lyrics.split("\n")
	finalWords = []

	for word in musicWords:
		if word and not "[" in word:
			finalWords.append(word)

	start = random.randrange(0, floor(len(finalWords)/2))

	choiceLyrics = finalWords[start] + " / " + finalWords[start+1]


	previewURL = f"https://embed.music.apple.com/us/song/{musicID}"; print(songInput)
	

	# headers = {
	# 	'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
	# 	'accept-encoding': 'gzip, deflate, br',
	# 	'accept-language': 'en-US,en;q=0.9',
	# 	'Cache-Control': 'max-age=0',
	# 	'Connection': 'keep-alive',
	# 	'Host': 'tools.applemusic.com',
	# 	'upgrade-insecure-requests': '1',
	# 	'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36',
	# }
	# r = requests.get(previewURL, headers=headers, verify=False)
	# found = re.findall('href="(https:\/\/music\.apple\.com[^"]+)', r.text)[0]
	# found = found.replace("https://music", "https://embed.music")


	IFRAME_CODE =  f'''<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="150" style="width:100%;max-width:660px;overflow:hidden;background:transparent; margin-top: -165px; transform: scale(0.825); margin-left: 335.75px; opacity: 0.05; filter: blur(10px);" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="{previewURL}"></iframe>'''



	return [choiceLyrics, IFRAME_CODE]