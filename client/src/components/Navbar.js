import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { witthRouter } from 'react-router'
import Header from './layouts/Header'
import plus from '../assets/icons/add (1).svg'

import "../css/Navbar.css"
import Auth from '../utils/Auth'
const auth = new Auth();

export default class Navbar extends Component {
  state = {
    user: null
  }
  handleLogout = (e) => {
    e.preventDefault();
    var fixProps = this.props;
    auth.logout()
      .then(() => {
        this.setState({ user: null }, () => {
        fixProps.history.push('/login')
      })
      })
      .catch((error) => {
      this.setState({error:error.message})
    })
  }
  // componentDidMount() {
  //   localStorage.setItem('length', 32)
  //   debugger
  //   JSON.parse(localStorage.getItem('length'))
  // }
  render() {
    const user = auth.getUser();
    return (
      <>
        <Header />
        <nav className="Nav">
          <div className="Nav_link_container">
            <div className="navbar_link">
              <div className="navbar_link-box">
                <Link to={"/plants/all"}>
                  <p
                    style={{
                      fontFamily: "Nunito",
                      fontWeight: "bold",
                      color: "white"
                    }}
                  >
                    Plants
                  </p>
                </Link>
                <div className="number_box">32</div>
              </div>
              {/* <Link to={`/myJungle`}><p>Plants</p><p>{user.user.counter.plants}</p></Link>  */}
            </div>

            <div className="navbar_link">
              <div className="navbar_link-box">
                <Link to={"/wish"}>
                  <p
                    style={{
                      fontFamily: "Nunito",
                      fontWeight: "bold",
                      color: "white"
                    }}
                  >
                    Wishlist
                  </p>
                </Link>
                <div>32</div>
              </div>
              {/* <Link to={`/myWishList`}><p>Wishlist</p><p>{user.user.counter.wish}</p></Link> */}
            </div>
            <div>
              <button className='pinkButton'>
                <Link to={"/myPlant"}>
                  <img style={{width: '20px',height: '20px', color: "white" }} src={plus} alt="" />
                </Link>
              </button>
            </div>
          </div>
        </nav>
      </>
    );
      }
    }
