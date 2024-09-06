import Content from "./Content"
import Aside from "../Layout/Aside"

function Category() {
    return (

        <div className="container margin-top-30">
            <div className="row">
                <Content />
                <Aside />
            </div>
        </div >
    )
}
export default Category