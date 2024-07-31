function Header() {
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
                <div className="container">
                    <span className="offset-trigger hidden-xs">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    <a href="./index.html" className="navbar-brand"><img src="images/logo.png" className="img-responsive"
                        alt="" /></a>
                    <div className="ad-banner pull-right hidden-xs">
                        <a href="#"><img src="images/ads/728x90.jpg" className="img-responsive" alt="" /></a>
                    </div>
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
                            <ul className="dropdown-menu">
                                <li><a href="./index.html">Homepage 1</a></li>
                                <li><a href="./home-2.html">Homepage 2</a></li>
                                <li><a href="./home-3.html">Homepage 3</a></li>
                                <li><a href="./home-4.html">Homepage 4</a></li>
                                <li><a href="./home-5.html">Homepage 5</a></li>
                                <li><a href="./home-6.html">Homepage 6</a></li>
                                <li><a href="./home-7.html">Homepage 7</a></li>
                                <li><a href="./home-8.html">Homepage 8</a></li>
                                <li><a href="./home-9.html">Homepage 9</a></li>
                            </ul>
                        </li>

                        <li className="dropdown dropdown-v2">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                aria-haspopup="true" aria-expanded="false">Category</a>
                            <ul className="dropdown-menu">
                                <li><a href="./category_01.html">Category 1</a></li>
                                <li><a href="./category_02.html">Category 2</a></li>
                                <li><a href="./category_03.html">Category 3</a></li>
                                <li><a href="./category_04.html">Category 4</a></li>
                                <li><a href="./category_05.html">Category 5</a></li>
                                <li><a href="./category_06.html">Category 6</a></li>
                                <li><a href="./category_07.html">Category 7</a></li>
                                <li><a href="./category_08.html">Category 8</a></li>
                                <li><a href="./category_09.html">Category 9</a></li>
                            </ul>
                        </li>

                        <li className="dropdown dropdown-v2">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                aria-haspopup="true" aria-expanded="false">Post pages</a>
                            <ul className="dropdown-menu">
                                <li><a href="./post_page_01.html">Post Page 1</a></li>
                                <li><a href="./post_page_02.html">Post Page 2</a></li>
                                <li><a href="./post_page_03.html">Post Page 3</a></li>
                                <li><a href="./post_page_04.html">Post Page 4</a></li>
                                <li><a href="./post_page_05.html">Post Page 5</a></li>
                            </ul>
                        </li>

                        <li className="dropdown dropdown-v2">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                aria-haspopup="true" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu">
                                <li><a href="./shop-full.html">Shop - Fullwidth</a></li>
                                <li><a href="./shop-sidebar.html">Shop - Sidebar</a></li>
                                <li><a href="./shop-single.html">Shop - Single</a></li>
                                <li><a href="./shop-categories.html">Shop - Categories</a></li>
                                <li><a href="./shop-cart.html">Shop - Cart</a></li>
                            </ul>
                        </li>

                        <li className="dropdown dropdown-v2">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                aria-haspopup="true" aria-expanded="false">Extras</a>
                            <ul className="dropdown-menu">
                                <li><a href="./header_menus_01.html">Header styles - 1</a></li>
                                <li><a href="./headers_01.html">Header styles - 2</a></li>
                                <li><a href="./headers_02.html">Header styles - 3</a></li>
                                <li><a href="./headers_03.html">Header styles - 4</a></li>
                                <li><a href="./header_sidemenu_01.html">Header Sidemenu</a></li>
                                <li><a href="./header_search_01.html">Search Styles</a></li>
                                <li><a href="./footer.html">Footer</a></li>
                            </ul>
                        </li>

                        <li className="dropdown megamenu megamenu-5col megamenu-border">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                aria-haspopup="true" aria-expanded="false">More <span
                                    className="fa fa-angle-down"></span></a>
                            <ul className="dropdown-menu no-padding">
                                <li>
                                    <div className="row row-eq-height no-margin">
                                        <div className="col-md-3 padding-20">
                                            <h5>Homepages</h5>
                                            <a href="./index.html">Homepage 1</a>
                                            <a href="./home-2.html">Homepage 2</a>
                                            <a href="./home-3.html">Homepage 3</a>
                                            <a href="./home-4.html">Homepage 4</a>
                                            <a href="./home-5.html">Homepage 5</a>
                                            <a href="./home-6.html">Homepage 6</a>
                                            <a href="./home-7.html">Homepage 7</a>
                                            <a href="./home-8.html">Homepage 8</a>
                                            <a href="./home-9.html">Homepage 9</a>
                                        </div>

                                        <div className="col-md-3 padding-20">
                                            <h5>Category</h5>
                                            <a href="./category_01.html">Category 1</a>
                                            <a href="./category_02.html">Category 2</a>
                                            <a href="./category_03.html">Category 3</a>
                                            <a href="./category_04.html">Category 4</a>
                                            <a href="./category_05.html">Category 5</a>
                                            <a href="./category_06.html">Category 6</a>
                                            <a href="./category_07.html">Category 7</a>
                                            <a href="./category_08.html">Category 8</a>
                                            <a href="./category_09.html">Category 9</a>
                                        </div>

                                        <div className="col-md-3 padding-20">
                                            <h5>Post Page</h5>
                                            <a href="./post_page_01.html">Post Page 1</a>
                                            <a href="./post_page_02.html">Post Page 2</a>
                                            <a href="./post_page_03.html">Post Page 3</a>
                                            <a href="./post_page_04.html">Post Page 4</a>
                                            <a href="./post_page_05.html">Post Page 5</a>
                                        </div>

                                        <div className="col-md-3 padding-20">
                                            <h5>Shop</h5>
                                            <a href="./shop-full.html">Shop - Fullwidth</a>
                                            <a href="./shop-sidebar.html">Shop - Sidebar</a>
                                            <a href="./shop-single.html">Shop - Single</a>
                                            <a href="./shop-categories.html">Shop - Categories</a>
                                            <a href="./shop-cart.html">Shop - Cart</a>
                                        </div>

                                        <div className="col-md-3 padding-20">
                                            <h5>Extras</h5>
                                            <a href="./header_menus_01.html">Header styles - 1</a>
                                            <a href="./headers_01.html">Header styles - 2</a>
                                            <a href="./headers_02.html">Header styles - 3</a>
                                            <a href="./headers_03.html">Header styles - 4</a>
                                            <a href="./header_sidemenu_01.html">Header Sidemenu</a>
                                            <a href="./header_search_01.html">Search Styles</a>
                                            <a href="./footer.html">Footer</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </header>
    )
}
export default Header