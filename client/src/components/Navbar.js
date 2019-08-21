import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { witthRouter } from 'react-router'
import Header from './layouts/Header'
import plus from '../assets/icons/add (1).svg'
import "../css/Navbar.css"
import Auth from '../utils/Auth'
import PlantUtils from "../utils/Plants"

const auth = new Auth();

const plantUtils = new PlantUtils()


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
    const numberOfPlants = auth.getUser().listOfCreatedPlants.length
    debugger
    return (
      <div>
        <Header />
        <nav className="Nav">
            <div className="navbar_link">
                <Link to={"/plants/all"}>
                  <p
                    style={{
                      fontFamily: "Nunito",
                      fontWeight: "bold",
                      color: "white"
                    }}
                  >
                    Plants
                    <div className="number_box">{numberOfPlants}
                    </div>
                  </p>
                </Link>
              {/* <Link to={`/myJungle`}><p>Plants</p><p>{user.user.counter.plants}</p></Link>  */}
            </div>

            <div className="navbar_link">
                <Link to={"/wish"}>
                  <p
                    style={{
                      fontFamily: "Nunito",
                      fontWeight: "bold",
                      color: "white"
                    }}
                  >
                    Wishlist
                    <div>32</div>
                  </p>
                </Link>
              {/* <Link to={`/myWishList`}><p>Wishlist</p><p>{user.user.counter.wish}</p></Link> */}
            </div>
            <div>
              <button className='pinkButton'>
                <Link to={"/all"}>
                  <img style={{width: '20px',height: '20px', color: "white" }} src={plus} alt="" />
                </Link>
              </button>
            </div>
        </nav>
        </div>
    );
      }
    }
