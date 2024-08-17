import axios from 'axios';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';


export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://66b3a04c7fba54a5b7eda71e.mockapi.io/fakeDatas`)
        .then((response) => {
            setAPIData(response.data);
        })
    }, [])
    const setData = (setAPIData) => {
        let { id, firstName, lastName, checkbox } = setAPIData;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)     
    }

        const onDelete = (id) => {
            axios.delete(`https://66b3a04c7fba54a5b7eda71e.mockapi.io/fakeDatas/${id}`)
            .then(() => {
            getData();
    })
            
        }
     
        const getData = () => {
            axios.get(`https://66b3a04c7fba54a5b7eda71e.mockapi.io/fakeDatas/`)
                .then((getData) => {
                     setAPIData(getData.data);
                 })
        }
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Checked</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        APIData.map((data)=>{
                            return(
                                <tr key={data.id}>
                                    <td>{data.firstName}</td>
                                    <td>{data.lastName}</td>
                                    <td>{data.checkbox ? 'Checked' : 'Unchecked'}</td>
                                    <td>
                                        <Link to="/update">
                                            <button onClick={() => setData(data)}>Update</button>
                                        </Link>                                       
                                    </td>
                                    <td>
                                    <button onClick={() => onDelete(data.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </>
        )
}