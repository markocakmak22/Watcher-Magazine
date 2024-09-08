import { Article } from "../../Types/types";

interface Layout1Props {
    Article: Article;
    isFirstItem?: boolean;
}

function Layout1Item({ Article, isFirstItem = false }: Layout1Props) {
    const TitleTag = isFirstItem ? 'h4' : 'h5';

    return (
        <div className="layout_1--item">
            <a href="./post_page_01.html">
                <span className="badge text-uppercase badge-overlay badge-tech">{Article?.category.name}</span>
                <div className="overlay"></div>
                <img src={"images/home/01/" + Article?.image} className="img-responsive" alt={Article?.title} />
                <div className="layout-detail padding-25">
                    <TitleTag><a style={{ color: "white" }} href={"#"}>{Article?.title}</a></TitleTag>
                    <div className="meta">
                        <span className="date">{Article?.date}</span>
                        <span className="comments">{Article?.comment_count} comments</span>
                    </div>
                </div>
            </a>
        </div>
    )
}
export default Layout1Item;