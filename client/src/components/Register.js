import React,{useState} from 'react';
import axios from 'axios'


const Register = ()=>{

    const[name,setName]= useState('')
    const[username,setUserName]= useState('')
    const[password,setPassword]= useState('')
    const[errmsg,setErrMsg]= useState('')


    const register = (event) => {

        event.preventDefault()

        var user = {
            name:name,
            username:username,
            password:password
        };

        axios.post('/api/user/registeruser',user)
        .then(res=>{
            console.log(res);
            setErrMsg(res.data)
        }).catch(err=>{
            console.log(err);
        })
        console.log(user);
    };

    return(
        <div>
            <form onSubmit={register}>
                <h3>Register</h3>
                <input type="text" placeholder="Name" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}} required />
                <input type="text" placeholder="Username" className="form-control" value={username} onChange={(e)=>{setUserName(e.target.value)}} required />
                <input type="password" placeholder="Password" className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value)}} required />
                <input type="submit" value="Register" className="btn btn-primary" />
                <div className="msg">
                    <h4>{errmsg}</h4>
                </div>
            </form>
        </div>
    );
};

export default Register;