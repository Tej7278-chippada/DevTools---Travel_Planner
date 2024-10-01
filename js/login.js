import { Utilities } from "./utilities.js";
//login
const login = (e) => {
    // fetch form data
    const loginFormData = {
        username: e.target.user.value,
        password: e.target.pass.value
    }
    //check if user exists in backend
    const user = Utilities.authenticateUser(loginFormData)// authenticate the user
    if (user) {
        //set the local storage
        sessionStorage.setItem('userName', user);
        //navigate the user to the home page
        window.location = '../html/home.html';
    } else {
        alert("Invalid Credentials");
    }

}

//called after the login.html completes the load event
window.onload = () => {
    //get the login form
    const loginForm = document.getElementById('loginform');
    // bind the onSubmit event to login function
    loginForm.onsubmit = (e) => {
        e.preventDefault();
        login(e);
    };
}

