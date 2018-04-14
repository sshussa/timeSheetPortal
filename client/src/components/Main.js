import React, { Component } from "react";
import { Navbar, Jumbotron, Button, Images, Carousel } from 'react-bootstrap';
import { render } from 'react-dom';


import {
  Route,
  Link,
  NavLink,
  HashRouter,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import Home from "./Home";
import Timesheet from "./Timesheet";
import Project from "./Project";
import Contact from "./Contact";
import logo from '../images/avatar_default.jpg'; // Import using relative path


 
class Main extends Component {
  render() {
    return (
	<HashRouter>
		 <div className="container-fluid">
		 <header>
			<img src={logo} alt="Logo" />
			<h1 className="logoTitle">  Time Sheet Portal</h1>
			<i className="fa fa-fa-bell" aria-hidden="true"></i> 
			
			<ul className="nav navbar-nav navbar-right pull-right">
			<li>
			<div className="notification-box">
				<ul className="list-inline">
					<li>
						<div className="noti-dot">
							<button className="btn btn-success right-bar-toggle">
								<span className="fa fa-search"></span>
							</button>
							
						</div>
					</li>
				</ul>
			</div> 
		</li>

		<li>
			<div className="notification-box">
				<ul className="list-inline">
					<li>
						<div className="noti-dot">
							<button className="btn btn-success right-bar-toggle">
								<span className="fa fa-bell-o"></span>
							</button>
							<span id="noti-count" className="badge badge-notify">1</span>

						</div>
					</li>
				</ul>
			</div> 
		</li>
		
			

	</ul>
		</header>
		
		  <ul className="header">
				<li><NavLink exact to="/">Home</NavLink></li>
				<li><NavLink to="/contact">Contact</NavLink></li>
				<li><Link to="/admin">Admin</Link></li>
          </ul>
		  
		  <nav>
			<ul>
				<li><NavLink to="/timesheet"><i class="fa fa-calendar" aria-hidden="true"></i> TimeSheet</NavLink></li>
				<li><NavLink to="/resource"><i class="fa fa-users" aria-hidden="true"></i> Resource</NavLink></li>
				<li><NavLink to="/project"><i class="fa fa-clipboard" aria-hidden="true"></i> Project</NavLink></li>
				<li><NavLink to="/orgProject"><i class="fa fa-paper-plane" aria-hidden="true"></i> Org Project</NavLink></li>
				<li><NavLink to="/resourceList"><i class="fa fa-list" aria-hidden="true"></i> Resource List</NavLink></li>
			</ul>
		  </nav>
		  
	<div className="content">
          <article>
			<Route exact path="/" component={Home}/>
            <Route path="/timesheet" component={Timesheet}/>
			<Route path="/project" component={Project}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/login" component={Login}/>
            <PrivateRoute authed={fakeAuth.isAuthenticated} path="/admin" component={Admin} />
          </article>
	 </div>
	 <div className="container comment-section">
	 <header id="main-nav" data-tracking-area="main-nav"><nav className="nav nav-primary"><ul><li className="nav-tab nav-tab--primary tab-conversation active" data-role="post-count"><a className="publisher-nav-color"><span className="comment-count">10 comments</span><span className="comment-count-placeholder">Comments</span></a></li><li className="nav-tab nav-tab--primary tab-community"><a href="https://disqus.com/home/forums/daveceddia/" className="publisher-nav-color" data-action="community-sidebar" data-forum="daveceddia" id="community-tab" name="Dave Ceddia"><span className="community-name"><strong>Syed Hussain</strong></span><strong className="community-name-placeholder">Community</strong></a></li><li className="nav-tab nav-tab--primary dropdown user-menu" data-role="logout"><a href="#" className="dropdown-toggle" data-toggle="dropdown" role="menuitem" name="Login"><span className="dropdown-toggle-wrapper"><span>Login</span> </span> <span className="caret"></span></a><ul className="dropdown-menu"><li><a href="#" data-action="auth:disqus">Disqus</a></li><li><a href="#" data-action="auth:facebook">Facebook</a></li><li><a href="#" data-action="auth:twitter">Twitter</a></li><li><a href="#" data-action="auth:google">Google</a></li></ul></li><li className="nav-tab nav-tab--primary notification-menu unread" data-role="notification-menu"><a href="https://disqus.com/home/inbox/" className="notification-container" data-action="home" data-home-path="home/inbox/"><i className="fa fa-comment" aria-hidden="true"></i><span className="notification-count" data-role="notification-count">1</span></a></li></ul></nav></header>
	 
	 <div id="form" className="textarea-wrapper--top-level">
		<form className="reply">
			<div className="postbox">
				<div className="avatar">
					<span className="user">
						<img data-role="user-avatar" src="https://c.disquscdn.com/next/embed/assets/img/noavatar92.7b2fde640943965cc88df0cdee365907.png" alt="Avatar" />
					</span>
				</div>
				<div className="textarea-wrapper" data-role="textarea" dir="auto">
					<div><span className="placeholder">Join the discussion…</span>
						<div className="textarea" tabindex="0" role="textbox" aria-multiline="true" contenteditable="PLAINTEXT-ONLY" data-role="editable" aria-label="Join the discussion…">
						<p><br/></p>
						</div>
					</div>
				</div>
			</div>
		</form>
</div>
</div>
		 <footer className="footer" role="contentinfo">
  <div className="container ">
       
    <ul className="footer-list">
        <li className="footer-item footer-social-item">
          <a title="Twitter" className="footer-social-link" target="_blank" href="http://twitter.com/">
		  <i class="fa fa-twitter" aria-hidden="true"></i>
		  </a>
        </li>
        <li className="footer-item footer-social-item">
          <a title="Youtube" className="footer-social-link" target="_blank" href="http://youtube.com/user/">
		  <i class="fa fa-youtube" aria-hidden="true"></i>
		  </a>
        </li>
        <li className="footer-item footer-social-item">
          <a title="Facebook" className="footer-social-link" target="_blank" href="http://facebook.com/teamth">
		  <i class="fa fa-facebook" aria-hidden="true"></i>
		  </a>
        </li>
        <li className="footer-item footer-social-item">
          <a title="Google Plus" className="footer-social-link" target="_blank" href="http://plus.google.com/110278003536476194286/posts">
		  <i class="fa fa-calendar" aria-hidden="true"></i>
		  </a>
        </li>
        <li className="footer-item footer-social-item">
          <a title="LinkedIn" className="footer-social-link" target="_blank" href="http://linkedin.com/company/th-island-inc-">
		  <i class="fa fa-linkedin" aria-hidden="true"></i>
		  </a>
        </li>
        <li className="footer-item footer-social-item">
          <a title="Instagram" className="footer-social-link" target="_blank" href="http://instagram.com">
		  <i class="fa fa-instagram" aria-hidden="true"></i>
		  </a>
        </li>
			 
			  <li className="footer-item footer-item-text"><a rel="nofollow" className="footer-item-text-link" href="/privacy">Privacy Policy</a></li>
			  <li className="footer-item footer-item-text"><a rel="nofollow" className="footer-item-text-link" href="/terms">Terms &amp; Conditions</a></li>
			  <li className="footer-item footer-item-copyright">© 2018 Timesheet Portal, Inc.</li>
    </ul>
</div></footer>
	</div>
		</HashRouter>
    );
  }
}

const Admin = () => {
  return (
    <div className="jumbotron">
      <h3 className="display-3">Admin Access granted</h3>
    </div>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

class Login extends React.Component {
  
    constructor() {
      super();
  
      this.state = {
        redirectToReferrer: false
      }
      // binding 'this'
      this.login = this.login.bind(this);
    }
  
    login() {
  
      fakeAuth.authenticate(() => {
        this.setState({ redirectToReferrer: true })
      })
    }
  
    render() {
      const { from } = this.props.location.state || { from: { pathname: '/' } }
      const { redirectToReferrer } = this.state;
  
      if (redirectToReferrer) {
        return (
          <Redirect to={from} />
        )
      }
  
      return (
        <div className="jumbotron">
            <h1 className="display-3">Login required</h1>
            <p className="lead">You must log in to view the page at {from.pathname}.</p>
            <p className="lead">
            <a className="btn btn-primary btn-lg" onClick={this.login} role="button">Login</a>
            </p>
        </div>
      )
    }
  }
  
  /* A fake authentication function */
  export const fakeAuth = {
  
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true
       setTimeout(cb, 100)
    },
  }

export default Main;