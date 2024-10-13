from django.contrib import admin
from .models import Skill, Project, ProjectImage, Company, Role, Contact

class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1
    max_num = 10  # Maximum number of images to upload

# Register the Project model with the inline ProjectImage form
class ProjectAdmin(admin.ModelAdmin):
    inlines = [ProjectImageInline]

class RoleInline(admin.TabularInline):
    model = Role
    extra = 1

class CompanyAdmin(admin.ModelAdmin):
    inlines = [RoleInline]

# Register your models here.
admin.site.register(Skill)
admin.site.register(Project, ProjectAdmin)
admin.site.register(ProjectImage)
admin.site.register(Company, CompanyAdmin)
admin.site.register(Role)
admin.site.register(Contact)