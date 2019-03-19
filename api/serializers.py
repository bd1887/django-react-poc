from rest_framework import serializers
from .models import Student, Exam, Grade

class GradeSerializer(serializers.ModelSerializer):
    exam = serializers.StringRelatedField(read_only=True)
    exam_id = serializers.PrimaryKeyRelatedField(read_only=True)
    student = serializers.PrimaryKeyRelatedField(read_only=True)
    studentName = serializers.StringRelatedField(source='student', read_only=True)
    class Meta:
        model = Grade
        fields = ('id', 'student', 'exam', 'exam_id', 'score', 'studentName')

class StudentSerializer(serializers.ModelSerializer):
    grades = GradeSerializer(many=True, read_only=True)
    class Meta:
        model = Student
        fields = ('id', 'firstName', 'lastName', 'grades', 'average')

    def create(self, validated_data):
        student = Student.objects.create(**validated_data)
        exams = Exam.objects.all()

        for exam in exams:
            grade = Grade.objects.create(
                student=student,
                exam=exam,
            )

        return student

    
class ExamSerializer(serializers.ModelSerializer):
    grades = GradeSerializer(many=True, read_only=True)
    class Meta:
        model = Exam
        fields = ('id' ,'name', 'grades', 'average')

    def create(self, validated_data):
        exam = Exam.objects.create(**validated_data)
        students = Student.objects.all()

        for student in students:
            grade = Grade.objects.create(
                student=student,
                exam=exam,
            )

        return exam