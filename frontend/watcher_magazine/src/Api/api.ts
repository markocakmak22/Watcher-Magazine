import { Article } from "../Types/types";

export async function fetchFeaturedArticles(): Promise<Article[]> {
    const response = await fetch("http://localhost:8000/api/feature-articles/");
    if (!response.ok) {
        throw new Error("Error fetching articles");
    }
    return response.json();
}

export async function fetchArticlesByCategory(categoryName: string): Promise<Article[]> {
    const response = await fetch(`http://localhost:8000/api/articles/${categoryName}`);
    if (!response.ok) {
        throw new Error('Error fetching articles');
    }
    return response.json();
}