import React from 'react'
import "./Princingthird.css"

const Pricingthird = () => {
    return (
        <div>

            <div className='pricingthirdrotate'>
            </div>
            <div className='princingthirdmain'>
                <div className='princingthirdmaincontent'>
                    <h6>EXPLAINER VIDEO</h6>
                    <h2>Learn more about how Jira Align is priced</h2>
                </div>

                <div className='princingthirdmainvideo'>
                    <div className='princingthirdmainvideobox'>
                        <iframe src="https://www.youtube.com/embed/sF36YlzKbJo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>

                <div className='princingthirdmainbottom'>
                    <h5>Ready to discuss your needs with one of our Enterprise Advocates?</h5>
                    <ul>
                        <li>Discuss your needs and user licenses</li>
                        <li>Learn about our advisory services to help get you started</li>
                        <li>Outline a joint success plan and timeframes</li>
                    </ul>
                    <button>Contact us</button>
                </div>
            </div>
        </div>
    )
}

export default Pricingthird