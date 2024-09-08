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
                    <Layout1Item Article={Articles[0]} isFirstItem={true} />
                </div>
                <div className="col-md-4">
                    <Layout1Item Article={Articles[1]} />
                    <Layout1Item Article={Articles[2]} />
                </div>
            </div>
        </div>
    )
}

export default Layout1;
