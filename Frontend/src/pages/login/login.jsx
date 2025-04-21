import React, { useState } from 'react';
import "./login.css"


function Login (){

    const [page,setPage] = useState("login");
    if (page == "login"){
        console.log("login")

    }else {
        console.log("signup")

    }

    return (
        <div className='login'>
            <div className="container">
                {page == "login" ? <h3>Login</h3> : <h3>signup</h3>  }
                <form action="">
                    <input type="email" name="" placeholder='email' className='write' id="" />
                    <input type="password" name="" placeholder='password' className='write' id="" />
                    {page == "signup" ? <input type="password" name="" placeholder='confirm password' className='write' id="" /> :"" }
                    <button type="submit" className='submit'>
                        continue
                    </button>
                    <p>
                        {page == "login" ? "Create an account ?" : "Already have an account  "}
                        <button className='signup'
                         onClick={(e)=>{e.preventDefault();
                            if (page =="login"){
                                setPage("signup")
                            }else {
                                setPage("login")
                            }
                            }}>
                             {page == "login" ? "Sign Up" : "login"  }
                        </button>
                    </p>
                    <div><input type="checkbox" name="" id="" />
                    <label htmlFor="">By continuing . i agree to the terms of use & privacy policy.</label></div>
                </form>

            </div>
            
        </div>
    );
}

export default Login;
