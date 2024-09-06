import { ItemProps } from "../../Content";

interface Item1Props {
    article: ItemProps; // Očekuješ pojedinačni članak kao props
}

function Item1({ sportArticles }: any) {

    return (
        <div className="layout_3--item">
            <div className="thumb">
                <a href="#"> {/* Ako nema linka, koristi "#" */}
                    <img src={"images/home/01/" + sportArticles?.image} className="img-responsive" alt="" />
                </a>
            </div>
            <h4>
                <a href="">{sportArticles?.title}</a>
            </h4>
            <div className="meta">
                <span className="comments">5 comments</span> {/* Ispravi za komentare */}
            </div>
        </div>
    )
}
export default Item1;