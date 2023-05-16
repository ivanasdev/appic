import React, { useState } from "react";
import axios from "axios";

const baseURL="http://localhost:5001";

const ApiLogin=(user,password)=>{



    const fetchUser = async ()=>{
        const configObj={
            method:'get',
            url:'${baseUrl}/appusers',
        };
        const response=await axios(configObj);
        console.log(response.data)
        

    }



    
}

export default ApiLogin