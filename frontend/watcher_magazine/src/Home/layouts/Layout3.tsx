import { ItemProps } from "../Content";
import Layout2Item from "./Layout2Item";

interface Layout2Props {
    items: ItemProps[]; // Koristite ItemProps
}
function Layout3({ items }: Layout2Props) {
    return (
        <div className="layout_2 margin-bottom-20">
            <div className="row">
                {items.map((item) => (
                    <div className="col-md-3 col-sm-6" key={item.id}>
                        <Layout2Item {...item} />
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Layout3;
