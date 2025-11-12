import React, { useState } from 'react'
import { useEffect } from 'react'

export default function Github() {

    const [data, setData] = useState([]);

    //jub bhi ye componenet render/load hoga tab hum api call karenge yani hum github se data fetch karenge aur uske followers ko display karwayenge
    useEffect(() => {
        fetch('https://api.github.com/users/naeemnz')
        .then(response => response.json()) //convert karna he jason men 
        .then(data => { 
            console.log(data);
            setData(data);
    
    })
      }, [])  
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-2xl'>Github followers: {data.followers}
        <img src={data.avatar_url}  alt="Git avatar" width={300} className='mx-auto block p-4'/> 50
        </div>

    )
}