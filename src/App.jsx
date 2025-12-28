import { useState, useMemo } from 'react'

export default function App(){
  const rates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  JPY: 156.7
};

  const [fromCurrency,setFromCurrency]=useState('USD')
  const [toCurrency,setToCurrency]=useState('EUR')
  const [amount,setAmount]=useState('1')

const baseAmount = useMemo(() => {
  return amount / rates[fromCurrency];
}, [amount, fromCurrency])



return (
  <div>
 <h2> Currency Converter</h2>
  <input
   type="number"
   value={amount}
   onChange={(e)=>setAmount(e.target.value)}
   />
  <select 
  value={fromCurrency}
  onChange={(e)=>setFromCurrency(e.target.value)}>
  <option value="USD">USD</option>
  <option value="EUR">EUR</option>
  <option value="GBP">GBP</option>
  <option value="JPY">JPY</option>
  </select>
  <select
  value={toCurrency}
   onChange={(e)=>setToCurrency(e.target.value)}>
  <option value="USD">USD</option>
  <option value="EUR">EUR</option>
  <option value="GBP">GBP</option>
  <option value="JPY">JPY</option>
  </select>

  <p>{ (baseAmount * rates[toCurrency]).toFixed(2) } {toCurrency}</p>
 </div>
)
}