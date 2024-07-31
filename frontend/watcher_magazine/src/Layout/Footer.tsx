function Footer() {
    return (
        <footer className="bg-dark footer1 padding-top-60">
            <div className="container">
                <div className="row margin-bottom-30">
                    <div className="col-md-4 col-sm-4 margin-bottom-30 footer-info">
                        <a href="./index.html"><img src="images/flogo.png" className="img-responsive" alt="" /></a>
                        <p></p>
                        <span><i className="fa fa-map-marker"></i> 1610 Connecticut Avenue, NW, Suite 500</span>
                        <span><i className="fa fa-envelope"></i> <a href="mailto:info@watcher.com">info@watcher.com</a></span>
                        <span><i className="fa fa-phone"></i> +1-202-555-0113</span>
                    </div>

                    <div className="col-md-4 col-sm-4 margin-bottom-30 footer-trending">
                        <h5>Trending</h5>
                        <ul className="trending">
                            <li>
                                <a href="./post_page_01.html" className="pull-left"><img src="images/footer/trend/1.jpg"
                                    className="img-responsive" alt="" /></a>
                                <h4><a href="./post_page_02.html">Why Uber Is Trying To Make Nice With Its Drivers</a></h4>
                                <span>Sep. 25, 2016</span>
                            </li>
                            <li>
                                <a href="./post_page_01.html" className="pull-left"><img src="images/footer/trend/2.jpg"
                                    className="img-responsive" alt="" /></a>
                                <h4><a href="./post_page_02.html">How to See If Your Dropbox Account Was Hacked</a></h4>
                                <span>Sep. 23, 2016</span>
                            </li>
                            <li>
                                <a href="./post_page_01.html" className="pull-left"><img src="images/footer/trend/3.jpg"
                                    className="img-responsive" alt="" /></a>
                                <h4><a href="./post_page_02.html">You Can Now Bid on Steve Jobs' Famous Black Turtleneck</a>
                                </h4>
                                <span>Sep. 21, 2016</span>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-4 col-sm-4 margin-bottom-30 footer-follow">
                        <h5>Follow</h5>
                        <div className="footer-newsletter">
                            <form id="invite1" method="POST">
                                <i className="fa fa-envelope"></i>
                                <input type="email" placeholder="Email address" className="e-mail" name="email" id="address1"
                                    data-validate="validate(required, email)" />
                                <button>Subscribe</button>
                            </form>
                            <span>Don't worry we hate spam as much as you do</span>
                            <div id="result1"></div>
                        </div>
                        <div className="footer-social">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-linkedin"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                            <a href="#"><i className="fa fa-youtube-play"></i></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                        </div>
                        <div className="col-md-8 col-sm-12">
                            <ul className="footer-links">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Terms of Use</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Advertising</a></li>
                                <li><a href="#">Subscribe</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer