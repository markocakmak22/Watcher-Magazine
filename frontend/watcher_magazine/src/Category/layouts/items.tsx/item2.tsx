import { Article } from "../../../Types/types";

interface Item2Props {
    article: Article;
}

function Item2({ article }: Item2Props) {
    return (
        <div style={{ paddingBottom: "20px" }} className="layout_2--item row">
            <div className="col-md-6">
                <div className="thumb">
                    <div className="icon-24 video2"></div>
                    <a href="">
                        <img src={"images/home/01/" + article?.image} className="img-responsive" alt="" />
                    </a>
                </div>
            </div>
            <div className="col-md-6">
                <h4>
                    <a href={"#"}>{article?.title}</a>
                </h4>
                <div className="meta">
                    <span className="comments">{article.comment_count} comments</span>
                </div>
            </div>
        </div>
    )
}
export default Item2;