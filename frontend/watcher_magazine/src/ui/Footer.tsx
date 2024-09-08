function Footer() {
    return (
        <footer className="bg-dark footer1 padding-top-0">
            <div className="container">

                <div className="footer-bottom">
                    <div className="row margin-bottom-30">
                        <div className="col-md-4 col-sm-4 margin-bottom-30 footer-info">
                            <a href="./index.html"><img src="images/flogo.png" className="img-responsive" alt="" /></a>
                            <p></p>
                            <span><i className="fa fa-envelope"></i> <a href="mailto:info@watcher.com">www.markocakmak.de</a></span>
                            <span><i className="fa fa-phone"></i> +49 000 000 000</span>
                        </div>

                        <div className="col-md-4 col-sm-4 margin-bottom-30 footer-trending">
                            <h5>Follow</h5>
                            <div className="footer-social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-youtube-play"></i></a>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-4 margin-bottom-30 footer-follow">
                            <ul className="footer-links">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Terms of Use</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer