import { Article } from "../../../Types/types";

interface Item1Props {
    article: Article;
}

function Item1({ article }: Item1Props) {
    return (
        <div style={{ marginBottom: "20px" }} className="layout_1--item">
            <a href="./post_page_01.html">
                <span className="badge text-uppercase badge-overlay badge-tech">{article?.category.name}</span>
                <div className="overlay"></div>
                <img src={"images/home/01/" + article?.image} className="img-responsive" alt={article?.title} />
                <div className="layout-detail padding-25">
                    <h6><a style={{ color: "white" }} href={"#"}>{article?.title}</a></h6>
                    <div className="meta">
                        <span className="date">{article?.date}</span>
                        <span className="comments">{article?.comment_count} comments</span>
                    </div>
                </div>
            </a>
        </div>
    )
}
export default Item1;