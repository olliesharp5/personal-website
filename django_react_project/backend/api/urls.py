from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SkillViewSet, ProjectViewSet, ProjectImagesViewSet, CompanyViewSet, RoleViewSet, ContactViewSet

router = DefaultRouter()
router.register(r'skills', SkillViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'project images', ProjectImagesViewSet)
router.register(r'companies', CompanyViewSet)
router.register(r'roles', RoleViewSet)
router.register(r'contact', ContactViewSet)

urlpatterns = [
    path('', include(router.urls)),
]