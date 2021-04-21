import React,{useState} from 'react';
import axios from 'axios';

const Login = () => {

    const[username,setUserName]= useState('')
    const[password,setPassword]= useState('')
    const[errmsg,setErrMsg]= useState('')

    const login=(event)=>{

        event.preventDefault()

        var user = {

            username:username,
            password:password
        }

       axios.post('/api/user/login',user)
       .then(res=>{
           console.log(res);
           setErrMsg(res.data)
       }).catch(err=>{
           console.log(err);
       })
    }

    return(
        <div>
            <form onSubmit={login}>
                <h3>Login</h3>
                <input type="text" placeholder="Username" className="form-control" value={username} onChange={(e)=>{setUserName(e.target.value)}} required />
                <input type="password" placeholder="Password" className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value)}} required />
                <input type="submit" value="Login" className="btn btn-primary" />
                <div className="msg">
                    <h4>{errmsg}</h4>
                </div>
            </form>
        </div>
    );
};

export default Login;