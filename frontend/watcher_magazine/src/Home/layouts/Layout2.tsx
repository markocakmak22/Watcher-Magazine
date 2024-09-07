import { Article } from "../../Types/types";
import Layout2Item from "../items/Layout2Item";

interface Layout2Props {
    Articles: Article[];
}
function Layout2({ Articles }: Layout2Props) {
    return (
        <div className="layout_2 margin-bottom-20">
            <div className="row">
                {Articles.map((Article) => (
                    <div className="col-md-4 col-sm-4" key={Article.id}>
                        <Layout2Item Article={Article} />
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Layout2;
