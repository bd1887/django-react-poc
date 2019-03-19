from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.core.exceptions import ValidationError

# Create your models here.

class Exam(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return f"{self.name}"

    def average(self):
        grades = Grade.objects.filter(exam = self.id)
        scores = [grade.score for grade in grades]
        average = sum(scores) / len(scores) if len(scores) != 0 else 0
        return round(average, 2)

class Student(models.Model):
    firstName = models.CharField(max_length=30)
    lastName = models.CharField(max_length=30)

    def __str__(self):
        return f"{self.lastName}, {self.firstName}"

    def average(self):
        grades = Grade.objects.filter(student = self.id)
        scores = [grade.score for grade in grades]
        average = sum(scores) / len(scores) if len(scores) != 0 else 0
        return round(average, 2)

class Grade(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name="grades")
    exam = models.ForeignKey(Exam, on_delete=models.CASCADE, related_name="grades")
    score = models.DecimalField(
        default=0,
        decimal_places=2,
        max_digits=5,
        validators=[MaxValueValidator(100), MinValueValidator(0)]
     )

    def __str__(self):
        return f"{self.exam.name}: {self.student.lastName}, {self.student.firstName} [{self.score}]"
