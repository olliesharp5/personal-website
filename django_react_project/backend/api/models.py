from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile

class Skill(models.Model):
    name = models.CharField(max_length=100)
    proficiency = models.PositiveIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(10)],
        help_text="Proficiency level from 1 to 10"
    )
    icon = models.ImageField(upload_to='skills/icons/', blank=True, null=True)

    def save(self, *args, **kwargs):
        print(f"Attempting to save icon: {self.icon}")
        super().save(*args, **kwargs)
        print(f"Icon saved at URL: {self.icon.url}")

    def __str__(self):
        return self.name