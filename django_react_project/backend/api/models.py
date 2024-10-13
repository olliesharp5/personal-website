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