import React, { useId } from 'react'

const InputBox = (props) => {
  console.log(props);
  const inputID = useId();
  
  return (
<>
      <div className={`bg-white p-3 rounded-lg text-sm flex`}>
        <div className="w-1/2">
         <label htmlFor={inputID}  className="text-black/40 mb-2 inline-block">
                    {props.label}
                </label>
                <input
                    id={inputID}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={props.amount}
                    //In onchange used && to confirm whether the onAmountChange function exist or not
                    onChange={(e) => props.onAmountChange && props.onAmountChange(Number(e.target.value))}
                />
        </div>
           <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>
               <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={props.currencyType}
                    onChange={(e) => props.onCurrencyChange && props.onCurrencyChange(e.target.value)}
                >
                     {props.currencyOptions.map((currency) => (
                  <option key={currency} value={currency}>{currency}</option>
               ))}
                </select>
           </div>
      </div>
    </>
  )
}

export default InputBox;