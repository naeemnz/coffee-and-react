import React, { use } from 'react'
import { useParams } from 'react-router-dom'    
export default function User() {

    const {userid} = useParams();
    return(
        //ye same hona cghahoye url se, ise different mat rakhna url se ya jo tumne userid 
        <div className='bg-gray-600 text-white text-2xl p-2 m-4'>User: { userid }</div>
    )
}
