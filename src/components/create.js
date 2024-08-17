import axios from 'axios'
import React, { useState } from 'react';
import { useNavigate  } from "react-router-dom";


export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    let navigate = useNavigate()

    const postData = (e) => {
        e.preventDefault();
        axios.post(`https://66b3a04c7fba54a5b7eda71e.mockapi.io/fakeDatas`, {
            firstName,
            lastName,
            checkbox,
        })
        .then(()=>{
            navigate('/read')
        })
    }

    
    return(
    <form>
        <div>
            <label>First Name</label>
            <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
            
        </div>
        <div>
            <label>Last Name</label>
            <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
            </div>
        <div>
        <input type="checkbox" label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
        </div>
        <button onClick={postData} type='submit'>Submit</button>
        </form>
)

}