import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <footer itemScope itemType="https://schema.org/Organization">
      <div className="footer-about">
        <h1 itemProp="name">HostingOke</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque corporis ex iure ipsa harum voluptatum adipisci. Nihil repellat eligendi excepturi consectetur reiciendis possimus, libero in? Molestiae quod cupiditate nobis voluptatem.</p>
      
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque corporis ex iure ipsa harum voluptatum adipisci. Nihil repellat eligendi excepturi consectetur reiciendis possimus, libero in? Molestiae quod cupiditate nobis voluptatem.</p>
      </div>
      <div className="footer-contact">
        <div className="left">
          <h3 itemProp="address" ><strong>Address</strong></h3>
          <ul>
            <li>PT HostingOke</li>
            <li itemProp="streetAddress">Jl. Diponegoro no. 77, Malang</li>
            <li itemProp="addressLocality">Indonesia</li>
          </ul>
        </div>
        <div className="right">
          <h3><strong>Contact</strong></h3>
          <ul>
            <li itemProp="telephone">+77777</li>
            <li itemProp="email">contact@hostingoke.com</li>
            <li>@hostingoke</li>
          </ul>
        </div>
      </div>
      <div className="footer-member">
        <h2><strong>Join Our Club!</strong></h2>
        <p>Get bigger discount and more offers!</p>
      </div>
    </footer>
  )
}

export default Footer
