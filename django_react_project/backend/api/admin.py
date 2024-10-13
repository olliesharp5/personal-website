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

class ContactAdmin(admin.ModelAdmin):
    def has_change_permission(self, request, obj=None):
        return False  # Disable the ability to change any contact instance

    list_display = ('name', 'email', 'subject', 'created_at')
    readonly_fields = ('name', 'email', 'subject', 'message', 'created_at')

# Register your models here.
admin.site.register(Skill)
admin.site.register(Project, ProjectAdmin)
admin.site.register(ProjectImage)
admin.site.register(Company, CompanyAdmin)
admin.site.register(Role)
admin.site.register(Contact, ContactAdmin)