# Generated by Django 5.1.1 on 2024-10-22 15:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_project_github_link'),
    ]

    operations = [
        migrations.AddField(
            model_name='skill',
            name='category',
            field=models.CharField(choices=[('code', 'Code'), ('toolbox', 'Toolbox'), ('soft', 'Soft')], null=True),
        ),
    ]