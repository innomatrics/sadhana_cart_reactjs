import React from 'react';

const Navbar = () => {
  return (

    <div className="Navbar">

      <div className="item" id="Logo">
        <img className="Logo" src="./src/CompanyProject/assets/Sadhana Cart.jpeg" alt="App Logo" height="80px" width="80px" />
        <p className="SC">Sadhana Cart</p>
      </div>

      <div className="item" id="location">
        <img className="location" src="https://indiashoppe.com/Content/assets/Images/svg/location-update.svg" alt="Location" height="30px" width="30px" />
        <p className="DL">Location</p>
      </div>

      <div className="item" id="delivery">
        <img className="delivery" src="https://indiashoppe.com/Content/assets/Images/svg/standard-icon.svg" alt="Delivery" height="40px" width="40px" />
        <p className="D">Delivery</p>
      </div>

      <input className="input" type="text" placeholder="🔎 Search for product" />
      <button>Search</button>

      <div className="item" id="Cart">
        <div className="cart-icon">🛒</div>
        <p className="C">Cart</p>
      </div>

      <div className="item" id="user">
        <div className="user-icon">👤</div>
        <p className="L">Login</p>
      </div>
      
    </div>


  )
}

export default Navbar;