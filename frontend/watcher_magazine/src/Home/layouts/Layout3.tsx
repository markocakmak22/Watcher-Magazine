import { Article } from "../../Types/types";
import Layout2Item from "../items/Layout2Item";

interface Layout3Props {
    Articles: Article[];
}
function Layout3({ Articles }: Layout3Props) {
    return (
        <div className="layout_2 margin-bottom-20">
            <div className="row">
                {Articles.map((Article) => (
                    <div className="col-md-3 col-sm-6" key={Article.id}>
                        <Layout2Item Article={Article} />
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Layout3;
