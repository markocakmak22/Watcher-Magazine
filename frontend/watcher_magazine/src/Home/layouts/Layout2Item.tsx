import React from 'react';

interface Category {
    id: number;
    name: string;
}

interface Layout2ItemProps {
    image: string;
    category: Category;
    title: string;
    link?: string; // Napravite link opcioni
    author?: string;
    date: string;
    comments?: number;
    iconClass?: string;
}

const Layout2Item: React.FC<Layout2ItemProps> = ({ image, category, title, link, author, date, comments, iconClass }) => (
    <div className="layout_2--item">
        <div className="thumb margin-bottom-10">
            {iconClass && <div className={`icon-24 ${iconClass}`}></div>}
            {link ? (
                <a href={link}><img src={"images/home/01/" + image} className="img-responsive" alt="" /></a>
            ) : (
                <img src={"images/home/01/" + image} className="img-responsive" alt="" />
            )}
        </div>
        <span className="cat">{category.name}</span>
        <h4>{link ? <a href={link}>{title}</a> : title}</h4>
        <div className="meta">
            {author && <span className="author">by {author}</span>}
            <span className="date">{date}</span>
            {comments && <span className="comments">{comments}</span>}
        </div>
    </div>
);

export default Layout2Item;
