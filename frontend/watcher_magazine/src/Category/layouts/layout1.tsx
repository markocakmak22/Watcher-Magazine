import { ItemProps } from "../Content";
import Item1 from "./items.tsx/item1";
import Item2 from "./items.tsx/item2";


interface Layout1Props {
    sportArticles: ItemProps[]; // Definišeš da Layout1 prima niz članaka
}

function Layout1({ sportArticles }: any) {

    return (
        <>
            <div className="col-md-6 col-sm-6 margin-bottom-30">
                <Item1 sportArticles={sportArticles[0]} />
                <Item2 sportArticles={sportArticles[1]} />
                <hr className="l2" />
                <Item2 sportArticles={sportArticles[2]} />
                <div className="margin-bottom-30"></div>
            </div>
        </>
    );
}
export default Layout1;
