# Generated by Django 5.0.7 on 2024-07-31 16:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0007_article_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='is_featured',
            field=models.BooleanField(default=False),
        ),
    ]
