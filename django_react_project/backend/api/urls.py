from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SkillViewSet, ProjectViewSet, ProjectImagesViewSet

router = DefaultRouter()
router.register(r'skills', SkillViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'project images', ProjectImagesViewSet)

urlpatterns = [
    path('', include(router.urls)),
]