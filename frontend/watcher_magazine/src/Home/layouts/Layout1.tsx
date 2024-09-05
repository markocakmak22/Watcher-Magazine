import { ItemProps } from "../Content";

interface Layout2Props {
    items: ItemProps[]; // Koristite ItemProps
}

function Layout1({ items }: Layout2Props) {
    return (
        <div className="layout_1 margin-bottom-30">
            <div key={0} className="row">
                <div className="col-md-8">
                    <div className="layout_1--item">
                        <a href="./post_page_01.html">
                            <span className="badge text-uppercase badge-overlay badge-tech">{items[0]?.category.name}</span>
                            <div className="overlay"></div>
                            <img src={"images/home/01/" + items[0]?.image} className="img-responsive" alt={items[0]?.title} />
                            <div className="layout-detail padding-25">
                                <h4>{items[0]?.title}</h4>
                                <div className="meta">
                                    <span className="date">{items[0]?.date}</span>
                                    <span className="comments">{items[0]?.comment_count}</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="layout_1--item">
                        <a href="./post_page_01.html">
                            <span className="badge text-uppercase badge-overlay badge-tech">{items[1]?.category.name}</span>
                            <div className="overlay"></div>
                            <img src={"images/home/01/" + items[1]?.image} className="img-responsive" alt={items[1]?.title} />
                            <div className="layout-detail padding-20">
                                <h5>{items[1]?.title}</h5>
                                <div className="meta">
                                    <span className="date">{items[0]?.date}</span>
                                    <span className="comments">{items[0]?.comment_count}</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="layout_1--item">
                        <a href="./post_page_01.html">
                            <span className="badge text-uppercase badge-overlay badge-tech">{items[2]?.category.name}</span>
                            <div className="overlay"></div>
                            <img src={"images/home/01/" + items[2]?.image} className="img-responsive" alt={items[2]?.title} />
                            <div className="layout-detail padding-20">
                                <h5>{items[2]?.title}</h5>
                                <div className="meta">
                                    <span className="date">{items[2]?.date}</span>
                                    <span className="comments">{items[2]?.comment_count}</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout1;
