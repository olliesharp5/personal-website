from storages.backends.azure_storage import AzureStorage
from azure.storage.blob import BlobServiceClient
import os

class AzureMediaStorage(AzureStorage):
    """
    Custom storage class for using Azure Blob Storage as the default file storage backend.
    """
    account_name = os.getenv('AZURE_ACCOUNT_NAME')  
    account_key = os.getenv('AZURE_ACCOUNT_KEY')  
    azure_container = os.getenv('AZURE_CONTAINER') 
    expiration_secs = None  # None to avoid automatic expiration of the blobs

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        print(f"Initializing AzureMediaStorage with account: {self.account_name} and container: {self.azure_container}")

class AzureBlobClient:
    """
    Custom client for directly interacting with Azure Blob Storage.
    Useful for manual uploads, listings, or other direct operations.
    """
    def __init__(self):
        self.account_name = os.getenv('AZURE_ACCOUNT_NAME')
        self.account_key = os.getenv('AZURE_ACCOUNT_KEY')
        self.container_name = os.getenv('AZURE_CONTAINER')

        # Create the BlobServiceClient for accessing the storage account
        self.blob_service_client = BlobServiceClient(
            account_url=f"https://{self.account_name}.blob.core.windows.net",
            credential=self.account_key
        )
        self.container_client = self.blob_service_client.get_container_client(self.container_name)

    def upload_file(self, file, filename):
        """
        Uploads a file to Azure Blob Storage.
        Args:
            file (file-like object): The file to upload (e.g., Django's InMemoryUploadedFile).
            filename (str): The name to save the file as in the Azure container.
        Returns:
            str: The URL of the uploaded file if successful, None otherwise.
        """
        try:
            # Get a client for the specific blob (file)
            blob_client = self.container_client.get_blob_client(filename)

            # Upload the file, overwriting any existing blob with the same name
            blob_client.upload_blob(file, overwrite=True)

            # Construct the URL for the uploaded file
            file_url = f"https://{self.account_name}.blob.core.windows.net/{self.container_name}/{filename}"
            print(f"File '{filename}' uploaded successfully to {file_url}.")
            return file_url

        except Exception as e:
            print(f"Upload failed: {str(e)}")
            return None
