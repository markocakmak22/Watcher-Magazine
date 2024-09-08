import Content from "./Content"
import Aside from "../ui/Aside/Aside"

function Home() {
    return (
        <div className="container margin-top-30">
            <div className="row">
                <Content />
                <Aside />
            </div >
        </div >
    )
}
export default Home