import { useeffect, useState } from 'react'

function useCurrencyInfo(currency) {
    const [data, setData] = useState({}) //state for storing currency info, initially empty object, aur crash na ho isliye empty object
    //function + dependency array
    useeffect(() => { fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`) 
        .then((res) => res.json) //{res.json baghair {} k he kuk return staement ki zarorat nahi he, agr ese {} likho ge to return bhi lazmi likhna hoga}
    .then((res) => {setData[currency]}) //mjhe yahan pata he k ye jo res he wo json format me he
    console.log(data);
}, 
[currency]) //agr currency change hoti he to ye effect dobara chalega matlab ye hook dobara chalega
console.log(data);

return data
}

export default useCurrencyInfo;
