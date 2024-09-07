import { Article } from "../../Types/types";
import Layout1Item from "../items/Layout1Item";

interface Layout1Props {
    Articles: Article[];
}

function Layout1({ Articles }: Layout1Props) {
    return (
        <div className="layout_1 margin-bottom-30">
            <div key={0} className="row">
                <div className="col-md-8">
                    <Layout1Item Article={Articles[0]} />
                </div>
                <div className="col-md-4">
                    <div className="layout_1--item">
                        <a href="./post_page_01.html">
                            <span className="badge text-uppercase badge-overlay badge-tech">{Articles[1]?.category.name}</span>
                            <div className="overlay"></div>
                            <img src={"images/home/01/" + Articles[1]?.image} className="img-responsive" alt={Articles[1]?.title} />
                            <div className="layout-detail padding-20">
                                <h5>{Articles[1]?.title}</h5>
                                <div className="meta">
                                    <span className="date">{Articles[0]?.date}</span>
                                    <span className="comments">{Articles[0]?.comment_count}</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="layout_1--item">
                        <a href="./post_page_01.html">
                            <span className="badge text-uppercase badge-overlay badge-tech">{Articles[2]?.category.name}</span>
                            <div className="overlay"></div>
                            <img src={"images/home/01/" + Articles[2]?.image} className="img-responsive" alt={Articles[2]?.title} />
                            <div className="layout-detail padding-20">
                                <h5>{Articles[2]?.title}</h5>
                                <div className="meta">
                                    <span className="date">{Articles[2]?.date}</span>
                                    <span className="comments">{Articles[2]?.comment_count}</span>
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
