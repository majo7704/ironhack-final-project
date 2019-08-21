import axios from "axios";
import qs from "querystring";


export default class Auth {
    constructor(domain) {
        this.domain = domain || process.env.REACT_APP_API;
        this.login = this.login.bind(this);
    }

    login(username, password) {
        return axios({
            method: "POST",
            baseURL: this.domain,
            url: "/users/login",
            withCredentials: true,
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify({ username, password })
        })
        .then((response)=> {
            debugger
            this.setUser(response.data)
        })
    }
  
    signup({username, password, email}) {
        
        return axios({
            method: "POST",
            url: "/users/signup",
            withCredentials: true,
            baseURL: this.domain,
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify({username, password, email}),
        })
        .then((response)=> {
          
            this.setUser(response.data);
        })
        .catch((error)=> {
            console.log(`Error!!! ${error}`)
          })
    }

    loggedIn(){
        const user = this.getUser()
        return !!user; 
    }
    
    setUser(user){
        localStorage.setItem('user', JSON.stringify(user));
    }
    
    getUser(){
        return JSON.parse(localStorage.getItem('user'));
    }

    // setUserId(){
    //     localStorage.setItem('user_id', JSON.stringify(user));
    // }

    logout(){
       return axios({
            baseURL: this.domain,
            url: "/users/logout",
            withCredentials: true,
        })
        .then((res)=> {
            localStorage.removeItem('user');
        })
    }    
}
