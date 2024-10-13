from rest_framework import viewsets
from django.core.mail import send_mail

from .models import Skill, Project, ProjectImage, Company, Role, Contact
from .serializers import SkillSerializer, ProjectSerializer, ProjectImageSerializer, CompanySerializer, RoleSerializer, ContactSerializer

class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectImagesViewSet(viewsets.ModelViewSet):
    queryset = ProjectImage.objects.all()
    serializer_class = ProjectImageSerializer

class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class RoleViewSet(viewsets.ModelViewSet):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def perform_create(self, serializer):
        # Save the contact form submission to the database
        contact = serializer.save()

        # Email to my Gmail
        send_mail(
            subject=f"New Contact Form Submission: {contact.subject}",
            message=f"Name: {contact.name}\nEmail: {contact.email}\n\nMessage:\n{contact.message}",
            from_email=contact.email,
            recipient_list=['olliesharp5@gmail.com'],
        )

        # Confirmation email to the user who submitted the form
        send_mail(
            subject="Your Contact Form Submission",
            message=f"Hi {contact.name},\n\nThank you for getting in touch with me. "
                    f"I have received your message and will endeavour to respond shortly.\n\n"
                    f"Here is a copy of your message:\n\n"
                    f"Subject: {contact.subject}\n\n"
                    f"Message:\n{contact.message}\n\n"
                    f"Best regards,\nOliver Sharp",
            from_email='olliesharp5@gmail.com',
            recipient_list=[contact.email],
            html_message=f"""
            <p>Hi {contact.name},</p>
            <p>Thank you for getting in touch with me. I have received your message and will endeavour to respond shortly.</p>
            <p><strong>Here is a copy of your message:</strong></p>
            <ul>
                <li><strong>Subject:</strong> {contact.subject}</li>
                <li><strong>Message:</strong><br>{contact.message}</li>
            </ul>
            <p>Best regards,<br>Oliver Sharp</p>
            """
        )