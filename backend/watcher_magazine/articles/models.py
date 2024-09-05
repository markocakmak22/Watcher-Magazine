from django.db import models
from users.models import CustomUser

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Article(models.Model):
    title = models.CharField(max_length=200)
    introduction = models.TextField(null=True)
    content_paragraph_1 = models.TextField(null=True, blank=True)
    content_paragraph_2 = models.TextField(null=True, blank=True)
    content_paragraph_3 = models.TextField(null=True, blank=True)
    content_paragraph_4 = models.TextField(null=True, blank=True)
    category = models.ForeignKey(Category, related_name='articles', on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.CharField(max_length=200, null=True, blank=True)
    is_main = models.BooleanField(default=False)
    is_featured = models.BooleanField(default=False)


    def __str__(self):
        return self.title

class Comment(models.Model):
    article = models.ForeignKey(Article, related_name='comments', on_delete=models.CASCADE, null=True)
    author = models.ForeignKey(CustomUser, related_name='comments', on_delete=models.CASCADE, null=True)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Comment by {self.author} on {self.article}'