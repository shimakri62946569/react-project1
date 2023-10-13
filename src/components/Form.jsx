import React, { useState, useRef } from 'react'
import '../styles/Form.css'


function Form({setData}) {

    const [success, setSuccess] = useState(false)

    const [cardHolderName, setCardHolderName] = useState('')
    const [nameError, setNameError] = useState(false)
    const [nameError2, setNameError2] = useState(false)
    

    const [cardNumber, setCardNumber] = useState('')
    const [numberError, setNumberError] = useState(false)
    const [numberError2, setNumberError2] = useState(false)

    const [expMonth, setexpMonth] = useState('')
    const [MonthError, setMonthError] = useState(false)
    // const [MonthError2, setMonthError2] = useState(false)
    const [MonthError2, setMonthError2] = useState(false)

    const [expYear, setexpYear] = useState('')
    const [YearError, setYearError] = useState(false)
    const [YearError2, setYearError2] = useState(false)

    const [cardCvv, setCardCvv] = useState('')
    const [CvvError, setCvvError] = useState(false)
    const [CvvError2, setCvvError2] = useState(false)

    

    function checkName(){
        
        const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        
        for(let i=0; i<cardHolderName.length; i++){
            let char = cardHolderName[i];
            if(numericCharacters.includes(char)){
                setNameError(true)
            }
            else{
                setNameError(false)
            }
        }
        if(cardHolderName.length <= 0){
            setNameError(false);
        }
        
    }

    function checkNumber(){
        
        for(let i=0; i<cardNumber.length; i++){
            let charCode = cardNumber.charCodeAt(i)
            if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
                setNumberError(true); // Found an alphabetic character
            }
            else{
                setNumberError(false);
            }
        }
        
        if(cardNumber.length <= 0){
            setNumberError(false);
        }
        
    }

    function checkMonth(){
        
        for(let i=0; i<expMonth.length; i++){
            let charCode = expMonth.charCodeAt(i)
            if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
                setMonthError(true);
            }
            else{
                setMonthError(false);
            }
        }
        
        if(expMonth.length <= 0){
            setMonthError(false);
        }
        
    }

    function checkYear(){
        
        for(let i=0; i<expYear.length; i++){
            let charCode = expYear.charCodeAt(i)
            if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
                setYearError(true); 
            }
            else{
                setYearError(false);
            }
        }

        if(expYear.length <= 0){
            setYearError(false);
        }
        
    }
    function checkCvv(){
        
        for(let i=0; i<cardCvv.length; i++){
            let charCode = cardCvv.charCodeAt(i)
            if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
                setCvvError(true); 
            }
            else{
                setCvvError(false);
            }
        }

        if(cardCvv.length <= 0){
            setCvvError(false);
        }
        
    }

    const formRef = useRef(null);
   
    function getData(e){
        e.preventDefault()
        e.stopPropagation()

        if(cardHolderName.length <= 0){
            setNameError2(true)
            
        }

        if(cardNumber.length <= 0){
            setNumberError2(true)
            
        }

        if(expMonth.length <= 0){
            setMonthError2(true)
            
        }

        if(expYear.length <= 0){
            setYearError2(true)
            setYearError2(true)
            
        }

        if(cardCvv.length <= 0){
            setCvvError2(true)

        }

        let flag = true;
        function CheckForm(cardHolderName, cardNumber, expMonth, expYear, cardCvv){
            if(cardHolderName.length <= 0){
                flag = false;
            }

            if(cardNumber.length < 16){
                
                flag = false;
            }

            if(expMonth.length <= 0 || parseInt(expMonth) > 12){
                flag = false;
                
                
            }

            if(expYear.length <= 0){
                
                flag = false;
            }
    
            if(cardCvv.length < 3){
                
                flag = false;
            }
            
        }

        CheckForm(cardHolderName, cardNumber, expMonth, expYear, cardCvv)
        
        if(flag === true){
            setSuccess(true)
            const cardInfo = {
                name : cardHolderName.toUpperCase(),
                number: cardNumber,
                month: expMonth+'/',
                year: expYear,
                cvv: cardCvv
            }
            
            setData(cardInfo)
        }

        
        if (formRef.current) {
            formRef.current.reset();
        }
        
    }
  return (
    <div className='main'>
        <form ref={formRef} onSubmit={getData}>
            <section>
                <p>Cardholder name</p>

                <input type="text" placeholder='e.g. Jane Appleseed' onChange= { (e) => {setCardHolderName(e.target.value); setNameError2(false)} } onBlur={checkName}/>
                
                {nameError ? <p className='red-font'>Numbers not allowed</p> : <p className='red-font'></p>}

                {nameError2 ? <p className='red-font'>Carholder name required</p> : <p></p>}

            </section>

            <section>
                <p>Card number</p>

                <input type="text" placeholder='e.g. 1234 5678 9123 0000' maxLength="16" onChange= { (e) => {setCardNumber(e.target.value); setNumberError2(false); } } onBlur={checkNumber} />

                {numberError ? <p className='red-font'>Alphabets not allowed</p> : <p className='red-font'></p>}

                {numberError2 ? <p className='red-font'>Card number required</p> : <p></p>}

            </section>
            <section className='date-and-cvv'>
                
                <div className="par">
                    <p>Exp. date (mm/yy)</p>
                    <div className="m-y">
                        <input id='month-input' type="text" placeholder='MM' maxLength="2" onChange= { (e) => {setexpMonth(e.target.value); setMonthError2(false); } } onBlur={checkMonth} />
                        <input id='year-input' type="text" placeholder='YY' maxLength="2"  onChange= { (e) => {setexpYear(e.target.value); setYearError2(false); } } onBlur={checkYear}/>
                    </div>
                    {/* for month */}
                    {MonthError === true || YearError === true? <p className='red-font'>Alphabets not allowed</p> : <p className='red-font'></p>}

                    {MonthError2 ? <p className='red-font'>Month required</p> : <p></p>}

                    {/* for year */}

                    {YearError2 ? <p className='red-font'>Year required</p> : <p></p>}

                </div>
    
                <div className="cvv">
                    <p>cvv</p>
                    <input id='cvv-input' type="text" placeholder='e.g. 123' maxLength="3" onChange= { (e) => {setCardCvv(e.target.value); setCvvError2(false); } } onBlur={checkCvv} />

{CvvError ? <p className='red-font'>Alphabets not allowed</p> : <p className='red-font'></p>}

{CvvError2 ? <p className='red-font'>CVV required</p> : <p></p>}
</div>
</section>

<section>
<button style={{ backgroundColor: 'var(--confirm-btn-color)', color : '#FFFFFF'}}>Confirm</button>
</section>
</form>
{
success ? <p style={{display: 'inline', marginLeft: '50px', color: '#4CAF50', fontWeight: '600', letterSpacing: '1px'}}>Great News! Card Is Ready.</p> : <p></p>
}


</div>
)
}
export default Form