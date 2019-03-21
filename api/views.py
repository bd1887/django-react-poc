from django.shortcuts import render, HttpResponse
from django.shortcuts import get_object_or_404
from api.models import Student, Exam, Grade
from api.serializers import StudentSerializer, ExamSerializer, GradeSerializer
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view
from api.azure_ml import azure_test
import pyodbc
# Create your views here.

@api_view(['GET'])
def azure_test(response):
    data = azure_test()
    html = f"<h1>{data}</h1>"
    return HttpResponse(html)

@api_view(['GET'])
def db_test(response):
    cnxn = pyodbc.connect('DRIVER={SQL Server};SERVER=natheandemos.database.windows.net;DATABASE=RianProjectDB1;UID=DIT265A_USR;PWD=479M1LZ5Uk')
    cursor = cnxn.cursor()
    # get one record from the database and print it 
    cursor.execute("select id, name from tbl_D17125388")
    row = cursor.fetchone()

    html = ""

    if row: 
        print(row) 
        html = f"<h1>{row}</h1>"
        
    return HttpResponse(html)


class StudentViewSet(viewsets.ModelViewSet):
    serializer_class = StudentSerializer
    queryset = Student.objects.all()

class ExamViewSet(viewsets.ModelViewSet):
    serializer_class = ExamSerializer
    queryset = Exam.objects.all()

class GradeViewSet(viewsets.ModelViewSet):
    serializer_class = GradeSerializer
    queryset = Grade.objects.all()

@api_view(['POST'])
def grade_batch(request):
    for grade_id in request.data['updatedScores']:
        score = request.data['updatedScores'][grade_id]
        grade = Grade.objects.get(id=grade_id)
        grade.score = score
        grade.save()
    return HttpResponse(status=204)