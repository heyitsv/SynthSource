from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class learnQuiz(models.Model):
  name = models.CharField(max_length=200)
  chapter = models.CharField(max_length=50)

  def __str__(self):
    return self.name


class quizQuestion(models.Model):
  questionText = models.CharField(max_length=200, blank=True, null=True)
  option1 = models.CharField(max_length=200)
  option2 = models.CharField(max_length=200)
  option3 = models.CharField(max_length=200)
  option4 = models.CharField(max_length=200)
  correctIndex = models.IntegerField()
  quiz = models.ForeignKey(learnQuiz, on_delete=models.CASCADE, null=True, blank=True)

  def __str__(self):
    return f"[{str(self.quiz)}] "  + self.questionText 


class Song(models.Model):
  author = models.ForeignKey(User, blank=True, null=True, on_delete=models.CASCADE)
  data = models.TextField(blank=True, null=True)
  name = models.CharField(max_length=200, blank=True, null=True)



