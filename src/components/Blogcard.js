import React from 'react'

export default function Blogcard() {

    const blogArticle = [
        {
            "heading": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, commodi!",
            "descriptionBlog": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque nesciunt laudantium dolore. Quae corporis odit, earum at reiciendis hic consectetur?"
        },
        {
            "heading": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, commodi!",
            "descriptionBlog": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque nesciunt laudantium dolore. Quae corporis odit, earum at reiciendis hic consectetur?"
        },
        {
            "heading": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, commodi!",
            "descriptionBlog": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque nesciunt laudantium dolore. Quae corporis odit, earum at reiciendis hic consectetur?"
        }
    ]

    return (
        <>
            <section className='blogcard-section'>
                {blogArticle.map((element) => {
                    return <>
                        <div className='blog-card-positioning-div'>
                            <div className='img-section'><img src="./images/blog sample.jpeg" alt="" /></div>
                            <article>
                                <div className='card-heading'>{element.heading}</div>
                                <div class>{element.descriptionBlog}</div>
                                <div className='blog-card-more-btn'><a href="">More...</a></div>
                            </article>
                        </div>
                    </>
                })}


            </section>

        </>
    )
}
