import React from 'react'

const Brand = (props) => {
  return (
    <div >
      <section className="brand">
        <article className="brand-image"><img src={props.img} alt="recognition-log" className='brand-img' />   </article>
        <h1 className="brand-head">{props.title}</h1>
        <article className="brand-content">{props.text} </article>
      </section>
    </div> 
  )
}

export default Brand
