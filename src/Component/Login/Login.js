import React from "react";
import { useForm } from "react-hook-form";
import Helper from "../../Api/Helper";
import { useNavigate } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

const Login = ()=> {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    
    const onSubmit = async(data) =>{
        data.blocked = 0;

        const {data:{basic_info, jwt, user_id}} = await Helper.post({url:"https://myphysio.digitaldarwin.in/api/login/", data});
        localStorage.setItem("authorization", jwt); 
        localStorage.setItem("user", JSON.stringify(basic_info));
        localStorage.setItem("user_id", user_id);
        navigate("/dashboard");

    }
  
    return (
        <div className="login-body d-flex justify-content-center align-items-center">
            <form onSubmit={handleSubmit(onSubmit)} method="post" className="login-form d-flex flex-column justify-content-evenly">
                <div className="text-center login-header">
                    <div className="login-title">PHYSIOAI</div>
                    <div className="login-greeting">Welcome Back!</div>
                </div>
                <div className="d-grid">
                    <label for="uid"><span className="required-field">*</span>Username</label>
                    <input className="login-input mt-3" type="text" placeholder="Enter User Name" {...register("uid")} required/>
                </div>
                <div className="d-grid">
                    <label for="password"><span className="required-field">*</span>Password</label>
                    <input className="login-input mt-3" type="password" placeholder="Enter Password" {...register("password")} required/>
                </div>
                <div className="text-center">Forgot Password?</div>
                <button className="login-button align-self-center" type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;