from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class Skill(models.Model):
    name = models.CharField(max_length=100)
    proficiency = models.PositiveIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(10)],
        help_text="Proficiency level from 1 to 10"
    )
    icon = models.ImageField(upload_to='skills/icons/', blank=True, null=True)

    def __str__(self):
        return self.name