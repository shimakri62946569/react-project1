import '../styles/Cardfront.css'
import cardFrontimg from '../assets/card-front.png';

function Cardfront({card}) {

  let number = card.number
  let n1 = ''
  let n2 = ''
  let n3 = ''
  let n4 = ''

  for(let i=0; i<=3; i++){
    if(number !== undefined)
        n1 += number[i]
  }
  for(let i=4; i<=7; i++){
    if(number !== undefined)
        n2 += number[i]
  }
  for(let i=8; i<=11; i++){
    if(number !== undefined)
        n3 += number[i]
  }
  for(let i=12; i<=15; i++){
    if(number !== undefined)
        n4 += number[i]
  }

  return (
    <div className='container'>
        
        <div className="circle-1"></div>
        <div className="circle-2"></div>

        <div className="card-number">
            <input className='input-placeholder-color' type="text" placeholder='0000' value={number?n1 : ''}  readOnly/>

            <input className='input-placeholder-color' type="text" placeholder='0000' value={number?n2 : ''} readOnly/>

            <input className='input-placeholder-color' type="text" placeholder='0000' value={number?n3 : ''} readOnly/>

            <input className='input-placeholder-color' type="text" placeholder='0000' value={number?n4 : ''} readOnly/>
        </div>

        <div className="card-holder-name">
          <input type="text" placeholder='JANE APPLESEED' className='name input-placeholder-color' value={card?.name || ''} readOnly/>

            <input type="text" placeholder='00/00' className='month input-placeholder-color' value={(card?.month || '') + (card?.year || '')} readOnly/> 
            
        </div>


        <img src={cardFrontimg} alt="" />

    </div>
  )
}

export default Cardfront