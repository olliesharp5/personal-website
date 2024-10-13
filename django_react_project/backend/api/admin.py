from django.contrib import admin
from .models import Skill, Project, ProjectImage

class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1  # Number of empty forms to display initially
    max_num = 10  # Maximum number of images to upload

# Register the Project model with the inline ProjectImage form
class ProjectAdmin(admin.ModelAdmin):
    inlines = [ProjectImageInline]

# Register your models here.
admin.site.register(Skill)
admin.site.register(Project, ProjectAdmin)
admin.site.register(ProjectImage)