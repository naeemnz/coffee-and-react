import { useEffect, useState } from 'react'
function useCurrencyInfo(currency) {
    const [data, setData] = useState({}) //state for storing currency info, initially empty object, aur crash na ho isliye empty object

    //function + dependency array
    useEffect(() => { fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`) 
        .then((res) => res.json()) //{res.json baghair {} k he kuk return staement ki zarorat nahi he, agr ese {} likho ge to return bhi lazmi likhna hoga}
        .then((res) => {
            setData(res.rates) // ✅ Store only the 'rates' key from the response
            //  setData(res) // ✅ Store entire response with all 7 keys
            console.log(data);
        }) //mjhe yahan pata he k ye jo res he wo json format me he
        .catch((error) => {
            console.error("Error fetching currency data: ", error);
            setData({}); //agr error aata he to data ko empty object set kar do
        })
}, 
[currency]) //agr currency change hoti he to ye effect dobara chalega matlab ye hook dobara chalega
console.log(data);

return data
}
export default useCurrencyInfo; //then the import should be import useCurrencyInfo from './hooks/useCurrencyInfo';
