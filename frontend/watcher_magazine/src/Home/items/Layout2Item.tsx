import { Article } from '../../Types/types';

interface Layout1Props {
    Article: Article;
}

function Layout2Item({ Article }: Layout1Props) {
    return (
        <div className="layout_2--item">
            <div className="thumb margin-bottom-10">
                {Article.iconClass && <div className={`icon-24 ${Article.iconClass}`}></div>}
                {Article.link ? (
                    <a href={Article.link}><img src={"images/home/01/" + Article.image} className="img-responsive" alt="" /></a>
                ) : (
                    <img src={"images/home/01/" + Article.image} className="img-responsive" alt="" />
                )}
            </div>
            <span className="cat">{Article.category.name}</span>
            <h4>{Article.link ? <a href={Article.link}>{Article.title}</a> : Article.title}</h4>
            <div className="meta">
                <span className="date">{Article.date}</span>
                {Article.comment_count && <span className="comments">{Article.comment_count}</span>}
            </div>
        </div>
    );
}

export default Layout2Item;
