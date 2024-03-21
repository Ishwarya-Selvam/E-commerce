import "./Login.css";

function Login(props){
    console.log("login Component rendered")
    const onBtnClick = () =>{
        console.log("Login component: login button is clicked")
        props.onLogin()
    }
    return ( 
        <div className="login">
            <form className="form">
                <h3>Login-in</h3>
                <hr style={{backgroundColor: "white"}}></hr>
                <div className="Username">
                    <h3>Username</h3>
                    <input type="text" placeholder="username"/>
                </div>
                <div className="password">
                    <h3>Password</h3>
                    <input type="password" placeholder="Password"/>
                </div>
                <div className="submit">
                    <button onClick={onBtnClick}>Login</button>
                </div>
            </form>            
        </div>
    )
}

export default Login