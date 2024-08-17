import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useNavigate  } from "react-router-dom";


export default function Update() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);   
    const [id, setID] = useState(null); 

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(Boolean(localStorage.getItem('Checkbox Value')))
}, []);

let navigate = useNavigate();

const updateAPIData = (e) => {
    e.preventDefault();
    axios.put(`https://66b3a04c7fba54a5b7eda71e.mockapi.io/fakeDatas/${id}`, {
        firstName,
         lastName,
         checkbox
	})
    .then(()=>{
        navigate('/read');
    })
}

    return(
        <>
            <div>
    <form className="create-form">
        <div className="form-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="form-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        </div>
        <div className="form-field">
            <input type="checkbox" id="terms" checked={checkbox} onChange={(e) => setCheckbox(!checkbox)}/>
            <label htmlFor="terms">I agree to the Terms and Conditions</label>
        </div>
        <Link to="/read">
            <button type="submit" onClick={updateAPIData}>Update</button>
        </Link>
    </form>
</div>

        </>
)
}