import Axios from 'axios'
import { useState, useEffect } from 'react';

function GenerateRandomExcuse() {

    const [excuse, setExcuse] = useState("")

    const handleClick = (param) => {

        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${param}/`).then((res) => {
            setExcuse(res.data[0].excuse);
            console.log("Done!");
        })
    }
    
    return(
        <div>
            <h1>Welcome to Excuse Generator</h1>
            <p>Click the button that relates to your excuse.</p>
            <button onClick={()=> handleClick('party')}>Party</button>
            <button onClick={()=>handleClick('family')}>Family</button>
            <button onClick={()=>handleClick('office')}>Office</button>
            <button onClick={()=>handleClick('children')}>Children</button>
            <button onClick={()=>handleClick('college')}>College</button>
            <button onClick={()=>handleClick('unbelievable')}>Unbelievable</button>
            <button onClick={()=>handleClick('developers')}>Developer</button>
            <button onClick={()=>handleClick('gaming')}>Gaming</button>
            <p>{excuse}</p>
        </div>
    );
}

export default GenerateRandomExcuse