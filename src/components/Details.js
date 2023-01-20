import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import Todo from './Todo.js'

const Details = () => {

    const [logindata, setLoginData] = useState([]);


    const history = useNavigate();

  

    const detailFun = () => {
        const getuser = localStorage.getItem("user_login");
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
         
            setLoginData(user);


           

        
        }
    }

    const userlogout = ()=>{
        localStorage.removeItem("user_login")
        history("/");
    }

    useEffect(() => {
        detailFun();
    }, [])

    return (
        <>
    
            {
                logindata.length === 0 ? "errror" :
                    <>
                        <h5>detials page</h5>
                        <h6>{logindata[0].name}</h6>
                        <Button onClick={userlogout}>LogOut</Button>

                 
                     
                    </>
            }
            <Todo/>
            
        </>
    )
}

export default Details






















