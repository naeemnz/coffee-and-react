import { useState } from 'react'
import useCurrencyInfo  from './hooks/useCurrencyInfo';
import {InputBox} from './components'


function App() {
 
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("eur")
  const [to, setTo] = useState("selected currency")
  const [convertedAmount, setConvertedAmount] = useState(0)
  
  
  //hook ka use kese karenge hum idhar uska tariqa he ye jo hum ne banaya he useCurrencyInfo 
  const currencyInfo = useCurrencyInfo(from) //from me already eur he 
  //is hook men hum ne data return kia tha us men objects hen aur un objects ki sari keys yani currencies humen chahiye
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    //ye isliya kiya kuk hume na sirf currency change karni he balke value yani amount bhi change karni he
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  //jub user convert pe click kare to us hook ke return object ki keys ki values yani numbers se multiplication ho 
  const convert = () => {
    setConvertedAmount( amount * currencyInfo[to]) //ise [] kuk objectName["propertyName"] dosra tariqa he property/key ko access karne ka kisi object ki

  }

  return (
    <>
      {/* <h1 className='text-3xl bg-orange-500 py-2'>Currency Converter</h1> */}
      {/* <UseCurrencyInfo /> */}
     
      <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                // backgroundImage: `url('${BackgroundImage}')`, // hum direct url dal rahe 
                backgroundImage: `url('https://images.pexels.com/photos/12960362/pexels-photo-12960362.jpeg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
           
<div className="w-full max-w-md mx-auto mb-4">
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm">
        <h3 className="font-bold text-yellow-800 mb-2">💰 How to Convert:</h3>
        <ol className="list-decimal list-inside space-y-1 text-yellow-700">
            <li><strong>To convert from Euros:</strong> Simply select your target currency in "To" field</li>
            <li><strong>To convert from other currencies:</strong></li>
            <ul className="list-disc list-inside ml-4 mt-1">
                <li>Click <strong>"From" dropdown</strong> and select <strong>"ALL"</strong></li>
                <li>Choose your source currency (e.g., USD, TRY, INR)</li>
            </ul>
            <li>Enter amount and click <strong>Convert</strong></li>
            <li>Use <strong>Swap</strong> button to exchange currencies</li>
        </ol>
    </div>
</div>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            //jab user convert pe click kare to ye function chalega aur hum ye data kahin send nahi karrhe hen isliye e.preventDefault(); likha he 
                            convert();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                selectCurrency={from}
                                onCurrencyChange={(currency) => {
                                //   setAmount(amount)
                                  setFrom(currency) 
                                }}
                                onAmountChange={(amount) => setAmount(amount)}
                                 amountDisabled={false}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap} //call karani ki zarorat nahin he kuk hum yahan function reference de rahe hen
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                 selectCurrency={to} //pass as prop to ki jagah par
                                onCurrencyChange={(currency) => {
                                  setTo(currency) // tak change na ho conversionk bad
                                }}
                                  // selectCurrency={from}
                                  // chaho to ese bhi hosakta he amountDisabled={true}, kuch bhi pass karo ge wo true mana jana he agr explicitly false na kia hoto, ye isliye tak user To ko men value pass na kre 
                                   amountDisabled={true}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>

    </>
  )
}
export default App
