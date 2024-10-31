from django.shortcuts import render

def index(request):
    return render(request, os.path.join('build', 'index.html'))