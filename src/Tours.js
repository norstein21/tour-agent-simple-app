import React from 'react'
import IsiTours from './IsiTours'

function Tours(props) {
    const {apayak, hapus} = props;
    console.log('tourr',apayak)


  return (
    <section>
        <div className='title'>
            <h2>HabieTravel</h2>
            <h5>Your traveling bestfriend</h5>
            <div className='underline'></div>
        </div>
        <div>
            {apayak.map((t)=>{
                return <IsiTours key={t.id} {...t} hapus={hapus} />
            })}
        </div>
    </section>
  )
}

export default Tours;