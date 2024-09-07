import { Article } from "../../../Types/types";

interface Item1Props {
    sportArticles: Article;
}

function Item1({ sportArticles }: Item1Props) {

    return (
        <div className="layout_3--item">
            <div className="thumb">
                <a href="#">
                    <img src={"images/home/01/" + sportArticles?.image} className="img-responsive" alt="" />
                </a>
            </div>
            <h4>
                <a href="">{sportArticles?.title}</a>
            </h4>
            <div className="meta">
                <span className="comments">5 comments</span>
            </div>
        </div>
    )
}
export default Item1;