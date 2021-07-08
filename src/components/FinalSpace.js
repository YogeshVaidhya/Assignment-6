import React,{useState, useEffect} from 'react';
import './FinalSpace.css';

const FinalSpace = () => {
    const [finals, Setfinals] = useState([]);
    
    useEffect(()=>{
        const url = `https://finalspaceapi.com/api/v0/character/`;
        fetch(url)  
            .then(res=>res.json())
            .then(
                (res)=>{
                    Setfinals(res);
                }
            )
    },[])

    return (
        <div className="content">
            <h1>Final Space Project</h1>
            <ul>
                {finals.map(item=>{
                    return(
                        <div key={item.id}>
                            <img src={item.img_url}></img>
                            <h3>Name : {item.name}</h3>
                            <h3>Gender : {item.gender}</h3> 
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default FinalSpace
