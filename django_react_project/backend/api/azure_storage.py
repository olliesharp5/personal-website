from storages.backends.azure_storage import AzureStorage
from azure.storage.blob import BlobServiceClient
import os

class AzureMediaStorage(AzureStorage):
    account_name = os.getenv('AZURE_ACCOUNT_NAME')  
    account_key = os.getenv('AZURE_ACCOUNT_KEY')  
    azure_container = os.getenv('AZURE_CONTAINER') 
    expiration_secs = None

class AzureBlobClient:
    def __init__(self):
        self.account_name = os.getenv('AZURE_ACCOUNT_NAME')
        self.account_key = os.getenv('AZURE_ACCOUNT_KEY')
        self.container_name = os.getenv('AZURE_CONTAINER')

        self.blob_service_client = BlobServiceClient(
            account_url=f"https://{self.account_name}.blob.core.windows.net",
            credential=self.account_key
        )
        self.container_client = self.blob_service_client.get_container_client(self.container_name)

    def upload_file(self, file, filename):
        try:
            blob_client = self.container_client.get_blob_client(filename)
            blob_client.upload_blob(file, overwrite=True)
            print(f"File '{filename}' uploaded successfully.")
            return f"https://{self.account_name}.blob.core.windows.net/{self.container_name}/{filename}"
        except Exception as e:
            print(f"Upload failed: {str(e)}")
            return None
