from django.contrib import admin
from .models import Category, Article, Comment

admin.site.register([Category, Article, Comment])
