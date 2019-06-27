import React, { Component } from 'react';
import './index.css'
import './magnific-popup.css'
import './templatemo-style.css'
 import { Navbar, Nav, Container, NavDropdown, Form, InputGroup, FormControl, Image, Button, Divider, Sidebar, Transition } from 'react-bootstrap';

class Header extends Component {

    state = {
        open: false
    }
    componentDidMount() {
      //window.addEventListener('scroll', this.handleScroll.bind(this)) //监听滚动
      //window.addEventListener('resize', this.handleResize.bind(this)) //监听窗口大小改变
    }
  
    componentWillUnmount() { //一定要最后移除监听器，以防多个组件之间导致this的指向紊乱
      window.removeEventListener('scroll', this.handleScroll.bind(this)) 
      window.removeEventListener('resize', this.handleResize.bind(this))
    }
  
    handleScroll = e => {
      console.log(
        '浏览器滚动事件',
        e.srcElement.scrollingElement.scrollTop,
        e.srcElement.scrollingElement.scrollHeight
      )
      //e.srcElement.scrollingElement.scrollTop为距离滚动条顶部高度
      // e.srcElement.scrollingElement.scrollHeight为整个文档高度
    }
  
    handleResize = e => {
      console.log('浏览器窗口大小改变事件', e.target.innerWidth)
    }

    render() {


        return (
            <div>
            {/*<section className="preloader">
               <div className="spinner">
                  <span className="spinner-rotate"></span>
               </div>
            </section>
        */}
           
            <section className="navbar custom-navbar navbar-fixed-top top-nav-collapse" role="navigation">
               <div className="container">
           
                  <div className="navbar-header">
                   <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                      <span className="icon icon-bar"></span>
                      <span className="icon icon-bar"></span>
                      <span className="icon icon-bar"></span>
                   </button>
           
                   <a href="index.html" className="navbar-brand">Hydro</a>
                  </div>
           
                  <div className="collapse navbar-collapse">
                   <ul className="nav navbar-nav navbar-nav-first">
                      <li><a href="#home" className="smoothScroll">Home</a></li>
                      <li><a href="#about" className="smoothScroll">About</a></li>
                      <li><a href="#blog" className="smoothScroll">Blog</a></li>
                      <li><a href="#work" className="smoothScroll">Our Work</a></li>
                      <li><a href="#contact" className="smoothScroll">Contacts</a></li>
                   </ul>
           
                   <ul className="nav navbar-nav navbar-right">
                      <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                      <li className="section-btn"><a href="#" data-toggle="modal" data-target="#modal-form">Sign in / Join</a></li>
                   </ul>
                  </div>
           
               </div>
            </section>
           
           
            <section id="home" data-stellar-background-ratio="0.5">
               <div className="overlay"></div>
               <div className="container">
                  <div className="row">
           
                   <div className="col-md-6 col-sm-12">
                      <div className="home-info">
                         <h1>We make beautiful websites for all people.</h1>
                         <a href="#about" className="btn section-btn smoothScroll">Start a project</a>
                         <span>
                            CALL US (+66) 010-020-0340
                            <small>For any inquiry</small>
                         </span>
                      </div>
                   </div>
           
                   <div className="col-md-6 col-sm-12">
                      <div className="home-video">
                         <div className="embed-responsive embed-responsive-16by9">
                            <iframe src="" frameBorder="0" allowFullScreen></iframe>
                         </div>
                      </div>
                   </div>
                   
                  </div>
               </div>
            </section>
           
           
            <section id="about" data-stellar-background-ratio="0.5">
               <div className="container">
                  <div className="row">
           
                   <div className="col-md-5 col-sm-6">
                      <div className="about-info">
                         <div className="section-title">
                            <h2>Let us introduce</h2>
                            <span className="line-bar">...</span>
                         </div>
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                      </div>
                   </div>
           
                   <div className="col-md-3 col-sm-6">
                      <div className="about-info skill-thumb">
           {/*
                         <strong>Web Design</strong>
                            <span className="pull-right">85%</span>
                             <div className="progress">
                                <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width=" 85%"}}></div>
                             </div>
           
                         <strong>Photography</strong>
                            <span className="pull-right">90%</span>
                             <div className="progress">
                                <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width=" 90%"}}></div>
                             </div>
           
                         <strong>Content Marketing</strong>
                            <span className="pull-right">75%</span>
                             <div className="progress">
                                <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width= "75%"}}></div>
                             </div>
           
                         <strong>CMS Admin</strong>
                            <span className="pull-right">70%</span>
                             <div className="progress">
                                <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width="70%"}}></div>
                             </div>
           */}
                      </div>
                   </div>
           
                   <div className="col-md-4 col-sm-12">
                      <div className="about-image">
                         <img src="images/about-image.jpg" className="img-responsive" alt=""/>
                      </div>
                   </div>
                   
                  </div>
               </div>
            </section>
           
           
            <section id="blog" data-stellar-background-ratio="0.5">
               <div className="container">
                  <div className="row">
           
                   <div className="col-md-12 col-sm-12">
                      <div className="section-title">
                         <h2>Our Blog</h2>
                         <span className="line-bar">...</span>
                      </div>
                   </div>
           
                   <div className="col-md-6 col-sm-6">
                      <div className="media blog-thumb">
                         <div className="media-object media-left">
                            <a href="blog-detail.html"><img src="images/blog-image1.jpg" className="img-responsive" alt=""/></a>
                         </div>
                         <div className="media-body blog-info">
                            <small><i className="fa fa-clock-o"></i> December 22, 2017</small>
                            <h3><a href="blog-detail.html">How To Find Out Beautiful Workspace.</a></h3>
                            <p>Lorem ipsum dolor sit consectetur adipiscing morbi venenatis.</p>
                            <a href="blog-detail.html" className="btn section-btn">Read article</a>
                         </div>
                      </div>
                   </div>
           
                   <div className="col-md-6 col-sm-6">
                      <div className="media blog-thumb">
                         <div className="media-object media-left">
                            <a href="blog-detail.html"><img src="images/blog-image2.jpg" className="img-responsive" alt=""/></a>
                         </div>
                         <div className="media-body blog-info">
                            <small><i className="fa fa-clock-o"></i> December 18, 2017</small>
                            <h3><a href="blog-detail.html">woman sportwear.</a></h3>
                            <p>Lorem ipsum dolor sit consectetur adipiscing morbi venenatis.</p>
                            <a href="blog-detail.html" className="btn section-btn">Read more</a>
                         </div>
                      </div>
                   </div>
           
                   <div className="col-md-6 col-sm-6">
                      <div className="media blog-thumb">
                         <div className="media-object media-left">
                            <a href="blog-detail.html"><img src="images/blog-image3.jpg" className="img-responsive" alt=""/></a>
                         </div>
                         <div className="media-body blog-info">
                            <small><i className="fa fa-clock-o"></i> December 14, 2017</small>
                            <h3><a href="blog-detail.html">new creative fashion.</a></h3>
                            <p>Lorem ipsum dolor sit consectetur adipiscing morbi venenatis.</p>
                            <a href="blog-detail.html" className="btn section-btn">Read article</a>
                         </div>
                      </div>
                   </div>
           
                   <div className="col-md-6 col-sm-6">
                      <div className="media blog-thumb">
                         <div className="media-object media-left">
                            <a href="blog-detail.html"><img src="images/blog-image4.jpg" className="img-responsive" alt=""/></a>
                         </div>
                         <div className="media-body blog-info">
                            <small><i className="fa fa-clock-o"></i> December 10, 2017</small>
                            <h3><a href="blog-detail.html">minimalist design trend in 2018.</a></h3>
                            <p>Lorem ipsum dolor sit consectetur adipiscing morbi venenatis.</p>
                            <a href="blog-detail.html" className="btn section-btn">View Detail</a>
                         </div>
                      </div>
                   </div>
                   
                  </div>
               </div>
            </section>
           
           
            <section id="work" data-stellar-background-ratio="0.5">
               <div className="container">
                  <div className="row">
           
                   <div className="col-md-12 col-sm-12">
                      <div className="section-title">
                         <h2>Our work</h2>
                         <span className="line-bar">...</span>
                      </div>
                   </div>
           
                   <div className="col-md-3 col-sm-6">
                      <div className="work-thumb">
                         <a href="images/work-image1.jpg" className="image-popup">
                            <img src="images/work-image1.jpg" className="img-responsive" alt="Work"/>
           
                            <div className="work-info">
                             <h3>Clean &amp; Minimal</h3>
                             <small>Product Design</small>
                            </div>
                         </a>
                      </div>
                   </div>
           
                   <div className="col-md-3 col-sm-6">
                      <div className="work-thumb">
                         <a href="images/work-image2.jpg" className="image-popup">
                            <img src="images/work-image2.jpg" className="img-responsive" alt="Work"/>
           
                            <div className="work-info">
                             <h3>Studio Bag</h3>
                             <small>Branding</small>
                            </div>
                         </a>
                      </div>
                   </div>
           
                   <div className="col-md-3 col-sm-6">
                      <div className="work-thumb">
                         <a href="images/work-image3.jpg" className="image-popup">
                            <img src="images/work-image3.jpg" className="img-responsive" alt="Work"/>
           
                            <div className="work-info">
                             <h3>Frame Design</h3>
                             <small>Photography</small>
                            </div>
                         </a>
                      </div>
                   </div>
           
                   <div className="col-md-3 col-sm-6">
                      <div className="work-thumb">
                         <a href="images/work-image4.jpg" className="image-popup">
                            <img src="images/work-image4.jpg" className="img-responsive" alt="Work"/>
           
                            <div className="work-info">
                             <h3>Paint Work</h3>
                             <small>Art, Design</small>
                            </div>
                         </a>
                      </div>
                   </div>
           
                  </div>
               </div>
            </section>
           
            <section id="contact" data-stellar-background-ratio="0.5">
               <div className="container">
                  <div className="row">
           
                   <div className="col-md-12 col-sm-12">
                      <div className="section-title">
                         <h2>Contact us</h2>
                         <span className="line-bar">...</span>
                      </div>
                   </div>
           
                   <div className="col-md-8 col-sm-8">
                     
                      <form id="contact-form" role="form" action="#" method="post">
                         <div className="col-md-6 col-sm-6">
                            <input type="text" className="form-control" placeholder="Full Name" id="cf-name" name="cf-name" required=""/>
                         </div>
           
                         <div className="col-md-6 col-sm-6">
                            <input type="email" className="form-control" placeholder="Your Email" id="cf-email" name="cf-email" required=""/>
                         </div>
           
                         <div className="col-md-6 col-sm-6">
                            <input type="tel" className="form-control" placeholder="Your Phone" id="cf-number" name="cf-number" required=""/>
                         </div>
           
                         <div className="col-md-6 col-sm-6">
                            <select className="form-control" id="cf-budgets" name="cf-budgets">
                             <option>Budget Level</option>
                             <option>$500 to $1,000</option>
                             <option>$1,000 to $2,200</option>
                             <option>$2,200 to $4,500</option>
                             <option>$4,500 to $7,500</option>
                             <option>$7,500 to $12,000</option>
                             <option>$12,000 or more</option>
                            </select>
                         </div>
           
                         <div className="col-md-12 col-sm-12">
                            <textarea className="form-control" rows="6" placeholder="Your requirements" id="cf-message" name="cf-message" required=""></textarea>
                         </div>
           
                         <div className="col-md-4 col-sm-12">
                            <input type="submit" className="form-control" name="submit" value="Send Message"/>
                         </div>
           
                      </form>
                   </div>
           
                   <div className="col-md-4 col-sm-4">
                      <div className="google-map">
                         <iframe src="" allowFullScreen></iframe>
                      </div>
                   </div>
           
                  </div>
               </div>
            </section>
           
           
            <footer data-stellar-background-ratio="0.5">
               <div className="container">
                  <div className="row">
           
                   <div className="col-md-5 col-sm-12">
                      <div className="footer-thumb footer-info"> 
                         <h2>Hydro Company</h2>
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>
                   </div>
           
                   <div className="col-md-2 col-sm-4"> 
                      <div className="footer-thumb"> 
                         <h2>Company</h2>
                         <ul className="footer-link">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Join our team</a></li>
                            <li><a href="#">Read Blog</a></li>
                            <li><a href="#">Press</a></li>
                         </ul>
                      </div>
                   </div>
           
                   <div className="col-md-2 col-sm-4"> 
                      <div className="footer-thumb"> 
                         <h2>Services</h2>
                         <ul className="footer-link">
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Documentation</a></li>
                            <li><a href="#">Support</a></li>
                         </ul>
                      </div>
                   </div>
           
                   <div className="col-md-3 col-sm-4"> 
                      <div className="footer-thumb"> 
                         <h2>Find us</h2>
                         <p>123 Grand Rama IX, <br/> Krung Thep Maha Nakhon 10400</p>
                      </div>
                   </div>                    
           
                   <div className="col-md-12 col-sm-12">
                      <div className="footer-bottom">
                         <div className="col-md-6 col-sm-5">
                            <div className="copyright-text"> 
                             <p>Copyright &copy; 2018.Company name All rights reserved.</p>
                            </div>
                         </div>
                         <div className="col-md-6 col-sm-7">
                            <div className="phone-contact"> 
                             <p>Call us <span>(+66) 010-020-0340</span></p>
                            </div>
                            <ul className="social-icon">
                             <li><a href="#" className="fa fa-facebook-square" attr="facebook icon"></a></li>
                             <li><a href="#" className="fa fa-twitter"></a></li>
                             <li><a href="#" className="fa fa-instagram"></a></li>
                            </ul>
                         </div>
                      </div>
                   </div>
                   
                  </div>
               </div>
            </footer>
           
           
            <section className="modal fade" id="modal-form" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
               <div className="modal-dialog modal-lg">
                  <div className="modal-content modal-popup">
           
                   <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                         <span aria-hidden="true">&times;</span>
                      </button>
                   </div>
           
                   <div className="modal-body">
                      <div className="container-fluid">
                         <div className="row">
           
                            <div className="col-md-12 col-sm-12">
                             <div className="modal-title">
                                <h2>Hydro Co</h2>
                             </div>
           
                             <ul className="nav nav-tabs" role="tablist">
                                <li className="active"><a href="#sign_up" aria-controls="sign_up" role="tab" data-toggle="tab">Create an account</a></li>
                                <li><a href="#sign_in" aria-controls="sign_in" role="tab" data-toggle="tab">Sign In</a></li>
                             </ul>
           
                             <div className="tab-content">
                                <div role="tabpanel" className="tab-pane fade in active" id="sign_up">
                                   <form action="#" method="post">
                                      <input type="text" className="form-control" name="name" placeholder="Name" required/>
                                      <input type="telephone" className="form-control" name="telephone" placeholder="Telephone" required/>
                                      <input type="email" className="form-control" name="email" placeholder="Email" required/>
                                      <input type="password" className="form-control" name="password" placeholder="Password" required/>
                                      <input type="submit" className="form-control" name="submit" value="Submit Button"/>
                                   </form>
                                </div>
           
                                <div role="tabpanel" className="tab-pane fade in" id="sign_in">
                                   <form action="#" method="post">
                                      <input type="email" className="form-control" name="email" placeholder="Email" required/>
                                      <input type="password" className="form-control" name="password" placeholder="Password" required/>
                                      <input type="submit" className="form-control" name="submit" value="Submit Button"/>
                                      <a href="#">Forgot your password?</a>
                                   </form>
                                </div>
                             </div>
                            </div>
           
                         </div>
                      </div>
                   </div>
           
                  </div>
               </div>
            </section>

            </div>
        );
    }
}

export default Header;
