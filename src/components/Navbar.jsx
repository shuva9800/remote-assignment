import React from 'react'
import './Navbar.css'
import { FiAlignRight } from "react-icons/fi";

export default function Navbar() {
  return (
    <div>
         <div className='navbar'>
        <div className='nav-img'>
            <img src="https://s3-alpha-sig.figma.com/img/2544/a167/04e564242973d6e3db745e96ce43e6c2?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=axz24vjTRngqjTPzt2xD8wNkfac8PnYtx-BTGbxtVdiiPOw6aJHj~3xwXZqmwH0wW5X2p6XjBOwQku47wwlgjADUYuVnnOf7wSnmeHSSKpsMiTWweLLXXekAC-f3JbuKGXsNXOYdPU4p6CLcPrntT3nlxEaRXaOzUaIUuEeqljhhW0NkG-~RiaexEV4S28HfyG1VUvVFOum-kTQzX5oci0SfyWn61E0V3SOAjU61B-TgE2D9OtrMEsdQa96TKOU1fFDL2BerO85cwg9AmI-RIwo5pTE6HalxjrET7mu5PouAVovwXVpnmkD-li~FIVUuGEKL59qyUZx7sgsUTq1WKw__"
    
            />      
        </div>
        <div>
            <ul className='ui-list'>
                <li>Home</li>
                <li>About</li>
                <li>Check Our Designs</li>
                <li>Contact us</li>

            </ul>
        </div>
        <button className='login-btn'>LOGIN/SIGNUP</button>
        <div className='sidebar'>
        <FiAlignRight className='sidebar-img'/>
        </div>
    </div>
        <div>
            <h1>
            MEET <span> MR.STYLESTER</span>
            </h1>
            <h2>HE WILL DESIGN FOR YOU!</h2>
        </div>
        <div>
            <img src='https://s3-alpha-sig.figma.com/img/c66c/25ea/5ec02fbbb5692f94358d1f1320ebd309?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bl9aFqvd1WhSDvGtl9Io-YHYx6CntbiH6~WIXEsEa7mxc-sRrMSUgAvoniCVhmcSb~JT6jVVYu80pMsErJp82QKv1F7V9ob7Fjur1ZHYpaZV-8c6SdIUoO7R83xSNn~kE~99pT6tlq8nH4DTwvswFNlkFEC3JgaCgvGBY3GS8HEeBu8E6-7Mu62EK3jb64Tbh2Omoud-XRBaHX~BaycExt2aJNLziDMIaNt6EDclPIPM6vUUxUoUrDraXUxBC3wNBOc4rtOJOl3HxoyLwUBBbVeQ-tkKlSGMAiIT~NEzTh974cVSECDC0PEG2uBnfUdxqJ9DQKjhTZBNJW7uK2cYDQ__'
            />
        </div>
        <div>
            <h2>  Lorem ipsum dolor </h2>
            <h2> sit amet, </h2>
            <h2>   consectetur </h2>
            <h2> adipiscing elit </h2>
           
        </div>

    </div>
 
  )
}
