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
    introduction = serializers.CharField(required=False, allow_blank=True)

    class Meta:
        model = Article
        fields = ['id', 'title', 'introduction', 'content_paragraph_1', 'content_paragraph_2', 'content_paragraph_3', 'content_paragraph_4', 'category', 'category_id', 'comment_count', 'created_at', 'image', 'is_main', 'is_featured']

    def get_comment_count(self, obj):
        return obj.comments.count()