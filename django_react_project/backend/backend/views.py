from django.shortcuts import render
import os

def index(request):
    return render(request, os.path.join('staticfiles', 'build', 'index.html'))