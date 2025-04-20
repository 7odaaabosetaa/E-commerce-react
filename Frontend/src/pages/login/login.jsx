import React from 'react';
import "./login.css"


function Login (){
    return (
        <div className='login'>
            <div className="container">
                <h3>Login</h3>
                <form action="">
                    <input type="email" name="" placeholder='email' className='write' id="" />
                    <input type="password" name="" placeholder='password' className='write' id="" />
                    <button type="submit">
                        continue
                    </button>
                    <p>Create an account ? <a href="#"> Sign Up</a></p>
                    <div><input type="checkbox" name="" id="" />
                    <label htmlFor="">By continuing . i agree to the terms of use & privacy policy.</label></div>
                </form>

            </div>
            
        </div>
    );
}

export default Login;
