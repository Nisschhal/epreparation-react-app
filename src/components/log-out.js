const Logout = ()=>{
    localStorage.clear();
    window.location.replace("/home")
}

export default Logout;