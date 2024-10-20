import os
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.utils.text import slugify


class Skill(models.Model):
    name = models.CharField(max_length=100)
    proficiency = models.PositiveIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(10)],
        help_text="Proficiency level from 1 to 10"
    )
    icon = models.ImageField(upload_to='skill', blank=True, null=True)

    def save(self, *args, **kwargs):
        if self.icon:
            # Replace spaces in the filename with underscores
            self.icon.name = self.icon.name.replace(" ", "_")
        print(f"Attempting to save icon: {self.icon}")
        super().save(*args, **kwargs)
        print(f"Icon saved at URL: {self.icon.url}")

    def __str__(self):
        return self.name
    

class Project(models.Model):
    STATUS_CHOICES = [
        ('in_progress', 'In Progress'),
        ('completed', 'Completed'),
    ]

    title = models.CharField(max_length=200)
    description = models.TextField()
    technology = models.ManyToManyField(Skill, related_name='projects')
    github_link = models.URLField(max_length=200, default='https://github.com/olliesharp5')
    completed_date = models.DateField(blank=True, null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='in_progress')
    is_code_institute = models.BooleanField(default=False, help_text="Check if the project was completed as part of Code Institute")

    def __str__(self):
        return self.title
    
def project_image_upload_to(instance, filename):
    # Create a slugified version of the project title
    project_folder = slugify(instance.project.title)
    
    # Set the path to 'projects/<project_folder>/<filename>'
    return os.path.join('projects', project_folder, filename)

class ProjectImage(models.Model):
    project = models.ForeignKey(Project, related_name='project_images', on_delete=models.CASCADE)
    images = models.ImageField(upload_to=project_image_upload_to)

    def __str__(self):
        return f"Image for {self.project.title}"
    

class Company(models.Model):
    name = models.CharField(max_length=200)
    logo = models.ImageField(upload_to='experiences/logos/', blank=True, null=True)  # Company logo

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = "Employer"
        verbose_name_plural = "Employers"

class Role(models.Model):
    company = models.ForeignKey(Company, related_name='roles', on_delete=models.CASCADE)  # Link to the company
    title = models.CharField(max_length=200)  # Job title or role
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)  # Leave blank for ongoing roles
    description = models.TextField()

    def __str__(self):
        return f"{self.title} at {self.company.name}"
    
    class Meta:
        verbose_name = "Position"
        verbose_name_plural = "Positions"


class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name} - {self.subject}"
