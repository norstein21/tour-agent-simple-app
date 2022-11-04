import React, { useState } from 'react'

const IsiTours = (props) => {
    const {id,image,info,price,name, hapus} = props;

    const [readBanyak,setReadBanyak] = useState(false);

  return (
    <article className='single-tour'>
        <img src={image} alt={name} />
        <footer>
            <div className='tour-info'>
            <h4>{name}</h4>
            <h4 className='tour-price'>{price}</h4>
       </div>
        <p>{readBanyak===true ? info : `${info.substring(0,200)}...` }</p>
        <button onClick={()=>setReadBanyak(!readBanyak)}>
            {readBanyak===true ? 'Show Less' : "Show More"}
        </button>

        <button className='delete-btn' onClick={()=>{hapus(id)}}>Not Interested</button>
         </footer>
    </article>
  )
}

export default IsiTours