from django.conf.urls import url
from django.contrib import admin
from main import views

urlpatterns = [
  url(r'^admin/', admin.site.urls),
  url(r'^$', views.home, name='home'),
  url('^learn/', views.learn, name='learn'),
  url('^start/', views.start, name='start'),
  url('^create/', views.create, name='create'),
  url('^studio/', views.studio, name='studio'),
  url('^editor/', views.editor, name='editor'),
  url('^explore/', views.explore, name='explore'),
  url('^game/', views.game, name='game'),
  url('^login/', views.loginPage, name='login'),
  url('^signup/', views.signup, name='signup'),
  url('^trivia/', views.trivia, name='trivia'),
  url('^createuser/', views.createUser, name='createuser'),
  url('^loginuser/', views.login_web, name='loginuser'),
  url('^logout/', views.logout_web, name='logout'),
  url('^newsong/', views.newSong, name='newsong'),
  url('^updatesong/', views.updateSong, name='updatesong'),
  url('^copysong/', views.copySong, name='copysong'),
  url('^search/', views.search, name='search'),
  url('^songsearch/', views.songSearch, name='songsearch'),
  url('^spotifycredentials/', views.spotifycredentials, name='spotifycredentials'),
  url('^addcovers/', views.addcovers, name='addcovers'),
  url('^musicplayer/', views.musicplayer, name='musicplayer'),
  url('^searchart/', views.searchArt, name='searchart'),
  url('^tunesynth/', views.tuneSynth, name='tunesynth'),
  url('^portal/', views.portal, name='portal'),
  url('^map/', views.mapview, name='map'),


]
