export interface Article {
    id: number;
    image: string;
    category: Category
    title: string;
    link?: string;
    date: string;
    iconClass?: string;
    comment_count: number;
}

export interface Category {
    id: number;
    name: string;
}