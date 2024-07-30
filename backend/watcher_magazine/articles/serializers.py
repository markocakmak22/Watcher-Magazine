from rest_framework import serializers
from .models import Article, Category, Comment
from users.models import CustomUser

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class CommentSerializer(serializers.ModelSerializer):
    article_id = serializers.PrimaryKeyRelatedField(
        queryset=Article.objects.all(), source='article'
    )
    author_id = serializers.PrimaryKeyRelatedField(
        queryset=CustomUser.objects.all(), source='author', write_only=True
    )
    author_username = serializers.CharField(source='author.username', read_only=True)
    
    class Meta:
        model = Comment
        fields = ['id', 'author', 'text', 'created_at', 'article_id', 'author_id', 'author_username']

class ArticleSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    category_id = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(), source='category', write_only=True
    )
    comment_count = serializers.SerializerMethodField()

    class Meta:
        model = Article
        fields = ['id', 'title', 'content', 'category', 'category_id', 'comment_count', 'created_at']

    def get_comment_count(self, obj):
        return obj.comments.count()