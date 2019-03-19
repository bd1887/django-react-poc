from django.urls import path
from app import views

urlpatterns = [
    path("", views.index, name="index"),
    path("students/", views.index, name="index"),
    path("exams/", views.index, name="index"),
    path("chart/", views.index, name="index"),
    
]