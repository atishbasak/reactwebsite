import React from 'react'

export default function BlogcardFlex() {

    const blogcardFlex_data = [
        {
            "img":"./images/blog sample.jpeg"
        },
        {
            "img":"./images/blog sample.jpeg"
        },
        {
            "img":"./images/blog sample.jpeg"
        },
        {
            "img":"./images/blog sample.jpeg"
        },
        {
            "img":"./images/blog sample.jpeg"
        }        
    ]

  return (
    <>
      <section className='blogcardFlex-section'>
        {blogcardFlex_data.map((element)=>{
            return <>
            <div className='blogcardFlex-div'><img src={element.img} alt="" /></div>
            </>
        })}

      </section>
    </>
  )
}
