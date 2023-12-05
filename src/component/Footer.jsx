import React from 'react'
import './Footer.css'
import logo from '../assets/Images/boostuplogo.png'

const Footer = () => {
  return (
    <div className='footer  '>
        <div className='footerup  '>
            
                <img src={logo} alt="" height={50} width={200} />
               
                <div className='right1'>
                    <h3>PRODUCTS</h3>
                    <h6>Jira Software</h6>
                    <h6>Jira Align</h6>
                    <h6>Jira Service Management</h6>
                    <h6>Jira Product Discovery</h6>
                    <h6>Confluence</h6>
                    <h6>Trello</h6>
                    <h6>Bitbucket</h6>
                    <h5>View all products</h5>
                </div>
                <div className='right1'>
                <h3>RESOURCES</h3>
                    <h6>Technical Support</h6>
                    <h6>Purchasing & licensing</h6>
                    <h6>Atlassian Community</h6>
                    <h6>Knowledge base</h6>
                    <h6>Marketplace</h6>
                    <h6>My Account</h6>
                    <h5>Create support ticket</h5>
                </div>
                <div className='right1'>
                <h3>EXPAND & LEARN</h3>
                    <h6>Partners</h6>
                    <h6>Training & Certification</h6>
                    <h6>Documentation</h6>
                    <h6>Developer Resources</h6>
                    <h6>Enterprise services</h6>
                    <h5>View all resources</h5>
                </div>
                <div className='right1'>
                <h3>ABOUT ATLASSIAN</h3>
                    <h6>Company</h6>
                    <h6>Careers</h6>
                    <h6>Events</h6>
                    <h6>Blogs</h6>
                    <h6>Atlassian Foundation</h6>
                    <h6>Investor Relations</h6>
                    <h6>Trust & Security</h6>
                    <h5>Contact us</h5>
                </div>
        </div>
        <div className='w-100'>
        <hr />
        </div>
        <div className='footerdown'>
            <div>
        <i class="ri-dribbble-line"></i>
           <select>
        <option value="">English</option>
        <option value="">Hindi</option>
        <option value="">Nederland</option>
        <option value="">Magyar</option>
        <option value="">Italiano</option>
        <option value="">Polski</option>
        <option value="">Portugues</option>
        <option value="">Sanskrit</option>
      </select>
      </div>
          <h6>Privacy policy</h6>
          <h6>Notice at Collection</h6>
          <h6>Terms</h6>
          <h6>Impressum</h6>
          <h6>Copyright <span><i class="ri-copyright-line"></i></span> 2023 Atlassian</h6>
          <div className='lasticons'>
          <i class="ri-facebook-fill"></i>
          <i class="ri-twitter-fill"></i>
          <i class="ri-linkedin-fill"></i>
          <i class="ri-youtube-fill"></i>
          </div>
        </div>
    </div>
  )
}

export default Footer