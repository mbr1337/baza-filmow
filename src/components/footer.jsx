import React, { Component } from "react";
import '../styles/footerStyle.scss';
export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="flex-rw">

                    <ul className="footer-list-top">
                        <li>
                            <h4 className="footer-list-header">About</h4></li>
                        <li><a href='/shop/about-mission' className="generic-anchor footer-list-anchor" itemProp="significantLink">GET TO KNOW US</a></li>
                        <li><a href='/promos.html' className="generic-anchor footer-list-anchor" itemProp="significantLink">PROMOS</a></li>
                        <li><a href='/retailers/new-retailers.html' className="generic-anchor footer-list-anchor" itemProp="significantLink">RETAIL</a></li>

                        <li><a href='/job-openings.html' itemProp="significantLink" className="generic-anchor footer-list-anchor">DEALS</a></li>

                        <li><a href='/shop/about-show-schedule' className="generic-anchor footer-list-anchor" itemProp="significantLink">EVENTS</a></li>
                    </ul>
                    <ul className="footer-list-top">
                        <li>
                            <h4 className="footer-list-header">Newsletter</h4></li>
                        <li><a href='/shop/about-mission' className="generic-anchor footer-list-anchor" itemProp="significantLink">GET TO KNOW US</a></li>
                        <li><a href='/promos.html' className="generic-anchor footer-list-anchor" itemProp="significantLink">PROMOS</a></li>
                        <li><a href='/retailers/new-retailers.html' className="generic-anchor footer-list-anchor" itemProp="significantLink">RETAIL</a></li>

                        <li><a href='/job-openings.html' itemProp="significantLink" className="generic-anchor footer-list-anchor">DEALS</a></li>

                        <li><a href='/shop/about-show-schedule' className="generic-anchor footer-list-anchor" itemProp="significantLink">EVENTS</a></li>
                    </ul>
                    <ul className="footer-list-top">
                        <li>
                            <h4 className="footer-list-header">Jobs</h4></li>
                        <li><a href='/shop/about-mission' className="generic-anchor footer-list-anchor" itemProp="significantLink">GET TO KNOW US</a></li>
                        <li><a href='/promos.html' className="generic-anchor footer-list-anchor" itemProp="significantLink">PROMOS</a></li>
                        <li><a href='/retailers/new-retailers.html' className="generic-anchor footer-list-anchor" itemProp="significantLink">RETAIL</a></li>

                        <li><a href='/job-openings.html' itemProp="significantLink" className="generic-anchor footer-list-anchor">DEALS</a></li>

                        <li><a href='/shop/about-show-schedule' className="generic-anchor footer-list-anchor" itemProp="significantLink">EVENTS</a></li>
                    </ul>
                    <section className="footer-social-section flex-rw">
                        <span className="footer-social-overlap footer-social-connect">
                            CONNECT <span className="footer-social-small">with</span> US
                        </span>
                        <span className="footer-social-overlap footer-social-icons-wrapper">
                            <a href="" className="generic-anchor" target="_blank" title="Facebook" itemProp="significantLink"><i className="fa fa-facebook"></i></a>
                            <a href="" className="generic-anchor" target="_blank" title="Twitter" itemProp="significantLink"><i className="fa fa-twitter"></i></a>
                            <a href="" className="generic-anchor" target="_blank" title="Instagram" itemProp="significantLink"><i className="fa fa-instagram"></i></a>
                            <a href="" className="generic-anchor" target="_blank" title="Youtube" itemProp="significantLink"><i className="fa fa-youtube"></i></a>
                            <a href="" className="generic-anchor" target="_blank" title="Spotify" itemProp="significantLink"><i className="fa fa-spotify"></i></a>
                        </span>
                    </section>
                    <section className="footer-bottom-section flex-rw">
                        <div className="footer-bottom-wrapper">
                            <i className="fa fa-copyright" role="copyright">

                            </i> 2022 Mikołaj Bryndal <address className="footer-address" role="company address">ANS, Tarnów</address><span className="footer-bottom-rights"> - All Rights Reserved - </span>
                        </div>
                        <div className="footer-bottom-wrapper">
                            <a href="/terms-of-use.html" className="generic-anchor" rel="nofollow">Terms</a> | <a href="/privacy-policy.html" className="generic-anchor" rel="nofollow">Privacy</a>
                        </div>
                    </section>
                </footer>
            </div>
        );
    }
} 