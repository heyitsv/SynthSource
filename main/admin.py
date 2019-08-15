from django.contrib import admin 
from .models import learnQuiz, quizQuestion, Song


#Register models

admin.site.register(quizQuestion)
admin.site.register(learnQuiz)
admin.site.register(Song)
