import { Article } from "../../Types/types";
import Item1 from "./items.tsx/item1";
import Item2 from "./items.tsx/item2";

interface Layout1Props {
    articles: Article[];
}

function Layout1({ articles }: Layout1Props) {
    return (
        <>
            <div className="col-md-6 col-sm-6 margin-bottom-30">
                <Item1 article={articles[0]} />
                <Item2 article={articles[1]} />
                <Item2 article={articles[2]} />
                <div className="margin-bottom-30"></div>
            </div>
        </>
    );
}
export default Layout1;
