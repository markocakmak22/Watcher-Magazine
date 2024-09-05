import { useQuery } from '@tanstack/react-query';

interface Category {
    id: number;
    name: string;
}

function Header() {

    const fetchData = async () => {
        const response = await fetch('http://localhost:8000/api/categories/');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    };

    const { data, error, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: fetchData,
    });

    return (
        <header className="header1 header-megamenu">
            <div className="topbar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-8 hidden-xs">
                            <div className="newsfeed">
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="pull-right account-options">
                                <span>|</span>
                                <a href="#" className="login">Sign In</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
            <div className="navbar-header padding-vertical-10">
                <div style={{ paddingBottom: "30px" }} className="container">
                    <span className="offset-trigger hidden-xs">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    <a href="./index.html" className="navbar-brand"><img src="images/logo.png" className="img-responsive"
                        alt="" /></a>

                </div>
            </div>
            <div className="clearfix"></div>
            <div className="container">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                    aria-expanded="false" aria-controls="navbar">
                    <span>Navigation</span>
                    <span className="fa fa-navicon"></span>
                </button>

                <div className="search-wrap2">
                    <form>
                        <input type="text" placeholder="Search by typing" />
                        <div className="sw2-close"><span className="fa fa-close"></span></div>
                    </form>
                </div>

                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li className="dropdown dropdown-v2">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                aria-haspopup="true" aria-expanded="false">Home</a>
                        </li>

                        {data?.map((category: Category) => (
                            <li key={category.id} className="dropdown dropdown-v2">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                    aria-haspopup="true" aria-expanded="false">{category.name}</a>
                            </li>
                        ))}

                    </ul>

                </div>
            </div>
        </header>
    )
}
export default Header