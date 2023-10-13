import React from 'react'
import '../styles/Cardback.css'

function Cardback({card}) {

   
  return (
    <>
        <div className='cardback'>
            <div className="black-strip">
            </div>
            <div className="cvv-strip">
                <input className='input-placeholder-color' placeholder='000' readOnly type="text" value={card?.cvv || ''}/>
            </div>
            <div className="random-strip">
                <section className='section-1'>
                    <div className="div-1"></div>
                    <div className="div-2"></div>
                    <div className="div-3"></div>
                    <div className="div-4"></div>
                </section>
                <section className='section-2'>
                    <div className="div-1"></div>
                    <div className="div-2"></div>
                    <div className="div-3"></div>
                    <div className="div-4"></div>
                    
                </section>
                <section className='section-3'>
                    <div className="div-1"></div>
                    <div className="div-2"></div>
                    <div className="div-3"></div>
                    <div className="div-4"></div>
                </section>
            </div>
        </div>
        <div></div>
    </>
    
  )
}
export default Cardback