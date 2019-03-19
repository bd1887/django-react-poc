from django.urls import path
from api import views
from api.views import StudentViewSet, ExamViewSet, GradeViewSet, grade_batch
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

urlpatterns = [
    path("test", views.test, name="test"),
    path("grade-batch", grade_batch, name="grade-batch")
]

router.register(r'students', StudentViewSet, basename='student')
router.register(r'exams', ExamViewSet, basename='exam')
router.register(r'grades', GradeViewSet, basename='grade')

urlpatterns += router.urls