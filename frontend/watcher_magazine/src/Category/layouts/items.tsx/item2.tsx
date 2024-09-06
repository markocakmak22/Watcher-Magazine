function Item2({ sportArticles }: any) {
    return (
        <div className="layout_2--item row">
            <div className="col-md-6">
                <div className="thumb">
                    <div className="icon-24 video2"></div>
                    <a href="">
                        <img src={"images/home/01/" + sportArticles?.image} className="img-responsive" alt="" />
                    </a>
                </div>
            </div>
            <div className="col-md-6">
                <h4>
                    <a href={"#"}>{sportArticles?.title}</a>
                </h4>
                <div className="meta">
                    <span className="comments">5 comments</span> {/* Ispravi za komentare */}
                </div>
            </div>
        </div>
    )
}
export default Item2;