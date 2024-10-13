from rest_framework import serializers
from .models import Skill, Project, ProjectImage, Company, Role, Contact

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'

class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = ['id', 'project', 'image']

class ProjectSerializer(serializers.ModelSerializer):
    project_images = ProjectImageSerializer(many=True, read_only=True)  # Nested serializer for related images
    technology = SkillSerializer(many=True, read_only=True)  # Nested serializer for skills

    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'technology', 'completed_date', 'status', 'is_code_institute', 'project_images']

class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ['title', 'start_date', 'end_date', 'description']

class CompanySerializer(serializers.ModelSerializer):
    roles = RoleSerializer(many=True, read_only=True)  # Nested serializer for roles

    class Meta:
        model = Company
        fields = ['id', 'name', 'logo', 'roles']

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'