from django.urls import path
from app import views

urlpatterns = [
    path("", views.index, name="index"),
    path("page-one/", views.index, name="index"),
    path("page-two/", views.index, name="index"),
    
]