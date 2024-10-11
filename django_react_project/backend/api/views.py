from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets, status
from .azure_storage import AzureBlobClient
from .models import Skill
from .serializers import SkillSerializer

class FileUploadView(APIView):
    def post(self, request):
        file = request.FILES.get('file')
        if not file:
            return Response({'error': 'No file provided'}, status=status.HTTP_400_BAD_REQUEST)

        # Instantiate the Azure client and upload the file
        azure_client = AzureBlobClient()
        filename = file.name
        file_url = azure_client.upload_file(file, filename)

        if file_url:
            return Response({'url': file_url}, status=status.HTTP_201_CREATED)
        return Response({'error': 'Upload failed'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
