from django.urls import path
from .views import ArticleListCreate, ArticleDetail, CommentListCreate, CommentDetail, CategoryListCreate, CategoryDetail

urlpatterns = [
    path('categories/', CategoryListCreate.as_view(), name='category-list-create'),
    path('categories/<int:pk>/', CategoryDetail.as_view(), name='category-detail'),
    path('articles/', ArticleListCreate.as_view(), name='article-list-create'),
    path('articles/<int:pk>/', ArticleDetail.as_view(), name='article-detail'),
    path('articles/<int:article_pk>/comments/', CommentListCreate.as_view(), name='comment-list-create'),
    path('articles/<int:article_pk>/comments/<int:pk>/', CommentDetail.as_view(), name='comment-detail')
]