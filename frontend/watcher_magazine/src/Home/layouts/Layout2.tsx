import { ItemProps } from "../Content";
import Layout2Item from "./Layout2Item";

interface Layout2Props {
    items: ItemProps[]; // Koristite ItemProps
}
function Layout2({ items }: Layout2Props) {
    return (
        <div className="layout_2 margin-bottom-20">
            <div className="row">
                {items.map((item) => (
                    <div className="col-md-4 col-sm-4" key={item.id}>
                        <Layout2Item {...item} />
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Layout2;
