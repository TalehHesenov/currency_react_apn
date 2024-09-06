import React, { useState } from 'react'
import './css/currency.css';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios';
let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = 'fca_live_eggkPNXqp4BWUbRptCmnutscZwpwwke0UKPkm0UB';


const Currency = () => {

    const [amount,setAmount] = useState(1);
    const[fromCurrency,setFromCurrency] = useState('USD');
    const [toCurrency,setToCurrency] = useState('TRY');
    const [result,setResult] = useState(0)


const exchange = async ()=>{
    
    // console.log(amount);
    // console.log(fromCurrency);
    // console.log(toCurrency);
    // console.log(result);
    
    const response =  await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
   setResult((response.data.data[toCurrency] * amount).toFixed(2))
}



  return (
    <div className='currency-div'>
        <div className='header'>
            <h3>Valyuta Mubadilesi</h3>
        </div>
      <div className='currency-main'>  
        <input type="number" className='amount' value={amount} onChange={(e)=>setAmount(e.target.value)} />
        <select className='form-currency-option' value={fromCurrency} onChange={(e)=>setFromCurrency(e.target.value)}>
             <option>USD</option>
        <option >TRY</option>
            <option>EUR</option>

        </select>


        <FaRegArrowAltCircleRight  style={{fontSize:'25px',marginRight:'10px'} }/>


        <select className='to-currency-option' onChange={(e)=>setToCurrency(e.target.value)}> 
            <option>TRY</option>
            <option>USD</option>
            <option>EUR</option>
           

        </select>

        <input type="number" className='result' value={result} onChange={(e)=>setResult(e.target.value)} />


        </div>

        <div>
            
        <button onClick={exchange} className='exchange-button'>Hesabla</button>

        </div>
        </div>
  )
}

export default Currency