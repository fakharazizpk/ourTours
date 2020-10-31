import React, {useState} from 'react'

const Tour = ({image,id, name, price ,info , removeTour}) => {
    const [ readMore , setreadMore] = useState(false);
    return (
        <article className='single-tour'>
           <img src={image} alt={name} />
           <footer>
                <div className='tour-info'>
                    <h4>{name }</h4>
                    <h4 className='tour-price'>${ price }</h4>
                </div>
                <p> { readMore ? info : info.substring(0,200)}
                    <button onClick={()=> setreadMore(!readMore)}  >
                    {readMore ? 'show less' : 'readmore' }
                    </button>
                </p>
                <button className='delete-btn' onClick={()=> removeTour(id)}>not interisted</button>
           </footer>
        </article>
    )
}
export default Tour;
