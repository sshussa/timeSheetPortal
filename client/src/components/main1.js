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
		 <footer className="footer" role="contentinfo">
  <div className="container ">
      <dl className="footer-meta-list footer-meta-list-th">
        <dt className="footer-meta-title"><a className="footer-meta-th-icon-link" href="/"></a></dt>
        <dd className="footer-meta-item">This is time sheet <a className="footer-meta-th-link" href="/">portal so that </a> all CTS resources can enter their timesheets efficiently</dd>
      </dl>
      <dl className="footer-meta-list">
        <dt className="footer-meta-title">Our Company</dt>
        <dd className="footer-meta-item"><a rel="nofollow" className="footer-meta-link" href="/about">About Us</a></dd>
        <dd className="footer-meta-item"><a className="footer-meta-link" href="/support">Contact Us</a></dd>
      </dl>
     
	 <dl className="footer-meta-list">
        <dt className="footer-meta-title">Topics</dt>
        <dd className="footer-meta-item"><a className="footer-meta-link" href="/library/topic:html"></a></dd>
		<dd className="footer-meta-item"><a rel="nofollow" className="footer-meta-link" href="/about">Get Started</a></dd>
		<dd className="footer-meta-item"><a rel="nofollow" className="footer-meta-link" href="/about">Comments</a></dd>
		<dd className="footer-meta-item"><a rel="nofollow" className="footer-meta-link" href="/about">Search</a></dd>
		<dd className="footer-meta-item"><a rel="nofollow" className="footer-meta-link" href="/about">Follow</a></dd>
       
      </dl>
    
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