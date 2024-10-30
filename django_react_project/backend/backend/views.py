from django.shortcuts import render
import os

def index(request):
    return render(request, 'staticfiles/build/index.html')