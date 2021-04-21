import React,{useEffect, useState} from 'react';
import axios from 'axios';


const Userslist =()=>{

    const [userlist,setUserList]=useState([]);

    useEffect(()=>{

        axios.post('/api/user/getusers')
        .then(res=>{
            console.log(res);
            setUserList(res.data)
        }).catch(err=>{
            console.log(err);
        })

    },[]);

    const usersData = userlist.map((obj)=>{

        return  <tr>
                    <td>{obj.name}</td>
                    <td>{obj.username}</td>
                    <td>{obj.password}</td>
                </tr>

    });

    return(
        <div>
            <h2>User List</h2>

            <table className="table table-dark">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Password</th>
                    </tr>
                </thead>
                {usersData}
            </table>
        </div>
    )
};
export default Userslist;