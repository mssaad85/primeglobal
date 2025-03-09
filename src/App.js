import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import emailjs from "@emailjs/browser";
import product1 from './assets/images/logomain.png';


// Product Data (35 products)
const products = [
  {
    id: 1,
    name: 'CakeRusk Orig SOONFI Box 28pcs (28pc x 13 packs per case)',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 48.00,
    qtyPerBox: 13.00,
    pricePerItem: 3.69,
  },
  {
    id: 2,
    name: 'CakeRusk Special EggFREE 21pcs (21pc x 9packs per case)',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 33.00,
    qtyPerBox: 9.00,
    pricePerItem: 3.67,
  },
  {
    id: 3,
    name: 'CakeRusk Special 21pc (21pc x 9 packs per case)',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 33.00,
    qtyPerBox: 9.00,
    pricePerItem: 3.67,
  },
  {
    id: 4,
    name: 'CakeRusk Orig Box 18pcs (18pc x 18 packs per case)',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 45.00,
    qtyPerBox: 18.00,
    pricePerItem: 2.50,
  },
  {
    id: 5,
    name: 'CakeRusk Original 28pc (28pc x 13 packs per case)',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 48.00,
    qtyPerBox: 13.00,
    pricePerItem: 3.69,
  },
  {
    id: 6,
    name: 'CakeRusk Egg-Free 28pc (28pc x 13 packs per case)',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 48.00,
    qtyPerBox: 13.00,
    pricePerItem: 3.69,
  },
  {
    id: 7,
    name: 'Regal Puff Pastry Delight 220g (220g x 12 packs per case)',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 38.00,
    qtyPerBox: 12.00,
    pricePerItem: 3.17,
  },
  {
    id: 8,
    name: 'Regal Puff Pastry Fingers 200g (200g x 12 packs per case)',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 28.00,
    qtyPerBox: 12.00,
    pricePerItem: 2.33,
  },
  {
    id: 9,
    name: 'Regal Puff Pastry Twist 230g (230g x 12 packs per case)',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 38.00,
    qtyPerBox: 12.00,
    pricePerItem: 3.17,
  },
  {
    id: 10,
    name: 'Regal Sweet Baqar Khani 350g (350g x 12 packs per case)',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 38.00,
    qtyPerBox: 12.00,
    pricePerItem: 3.17,
  },
  {
    id: 11,
    name: 'Regal Tea Rusk 200g (200g x 9 packs per case)',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 17.00,
    qtyPerBox: 9.00,
    pricePerItem: 1.89,
  },
  {
    id: 12,
    name: 'Regal Tea Rusk Soonfi 200g (200g x 9 packs per case)',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 17.00,
    qtyPerBox: 9.00,
    pricePerItem: 1.89,
  },
  {
    id: 13,
    name: 'Regal Tea Rusk Zeera 200g (200g x 9 packs per case)',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 17.00,
    qtyPerBox: 9.00,
    pricePerItem: 1.89,
  },
  {
    id: 14,
    name: 'Regal Tea Toast 200g (200g x 9 packs per case)',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 17.00,
    qtyPerBox: 9.00,
    pricePerItem: 1.89,
  },
  {
    id: 15,
    name: 'Regal Snack Cakes Milk 250g (250g x 12 packs per case 10 cake bars)',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 42.00,
    qtyPerBox: 12.00,
    pricePerItem: 3.50,
  },
  {
    id: 16,
    name: 'Regal Snack Cakes Strawberry 250g (250g x 12 packs per case 10 cake bars)',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 42.00,
    qtyPerBox: 12.00,
    pricePerItem: 3.50,
  },
  {
    id: 17,
    name: 'Snack Cake Choc & Honey 250g (250g x 12 packs per case 10 cake bars)',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 42.00,
    qtyPerBox: 12.00,
    pricePerItem: 3.50,
  },
  {
    id: 18,
    name: 'Regal Wafers Chocolate 350g (12 packs per case)',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 42.00,
    qtyPerBox: 12.00,
    pricePerItem: 3.50,
  },
  {
    id: 19,
    name: 'Regal Wafers Vanilla 350g (12 packs per case)',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 42.00,
    qtyPerBox: 12.00,
    pricePerItem: 3.50,
  },
  {
    id: 20,
    name: 'Wafers Choc & Hazlnt 350gms (12 packs per case)',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 42.00,
    qtyPerBox: 12.00,
    pricePerItem: 3.50,
  },
  {
    id: 21,
    name: 'Mini Almond Cookie EggLess 350g (350g x 6 packs per case)',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 19.00,
    qtyPerBox: 6.00,
    pricePerItem: 3.17,
  },
  {
    id: 22,
    name: 'Minis Cashew Cookie Eggless (350g x 6 packs per case)',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 19.00,
    qtyPerBox: 6.00,
    pricePerItem: 3.17,
  },
  {
    id: 23,
    name: 'Minis Coconut Cookies Egg-FREE (350g x 6 packs per case)',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 19.00,
    qtyPerBox: 6.00,
    pricePerItem: 3.17,
  },
  {
    id: 24,
    name: 'Minis Pistachio Cookies EggFREE (350g x 6 packs per case)',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 19.00,
    qtyPerBox: 6.00,
    pricePerItem: 3.17,
  },
  {
    id: 25,
    name: 'Minis Zeera Cookie EggFREE 350g (350g x 6 packs per case)',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 19.00,
    qtyPerBox: 6.00,
    pricePerItem: 3.17,
  },
  {
    id: 26,
    name: 'Regal Minis Nan Khatie Egg-FREE (350g x 6 packs per case)',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 19.00,
    qtyPerBox: 6.00,
    pricePerItem: 3.17,
  },
  {
    id: 27,
    name: 'Regal Hand-made Pastry Cashew Box 250g',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 22.00,
    qtyPerBox: 6.00,
    pricePerItem: 3.67,
  },
  {
    id: 28,
    name: 'Regal Hand-made Pastry Coconut Box 250g',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 22.00,
    qtyPerBox: 6.00,
    pricePerItem: 3.67,
  },
  {
    id: 29,
    name: 'Regal Butter Crunch Biscuits Box 250g',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 22.00,
    qtyPerBox: 6.00,
    pricePerItem: 3.67,
  },
  {
    id: 30,
    name: 'Regal Almond Puffs Box 250g',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 22.00,
    qtyPerBox: 6.00,
    pricePerItem: 3.67,
  },
  {
    id: 31,
    name: 'Regal Shortbread Biscuits 300g',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 22.00,
    qtyPerBox: 6.00,
    pricePerItem: 3.67,
  },
  {
    id: 32,
    name: 'Regal Bakery Shortbread Cookies Box 200g',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 22.00,
    qtyPerBox: 6.00,
    pricePerItem: 3.67,
  },
  {
    id: 33,
    name: 'Regal Butter Puffs Box 250g',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 22.00,
    qtyPerBox: 6.00,
    pricePerItem: 3.67,
  },
  {
    id: 34,
    name: 'Chocolate Wafer Box 350g',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 25.00,
    qtyPerBox: 6.00,
    pricePerItem: 4.17,
  },
  {
    id: 35,
    name: 'Chocolate Hazelnut Wafer Box 350g',
    image: 'https://via.placeholder.com/100', // Replace with actual image URLs
    boxPrice: 25.00,
    qtyPerBox: 6.00,
    pricePerItem: 4.17,
  }
];

const users = [
  { username: 'admin', password: '921161789Acca12', name: 'John Doe' },
  { username: 'user2', password: 'password2', name: 'Jane Smith' },
];

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');
  const [loginDateTime, setLoginDateTime] = useState('');
  const [buyerDetails, setBuyerDetails] = useState({ company: '', address: '', phone: '' });
  const [orderQuantities, setOrderQuantities] = useState({});

  // Handle buyer details input
  const handleBuyerInput = (e) => {
    const { name, value } = e.target;
    setBuyerDetails({ ...buyerDetails, [name]: value });
  };

  // Handle order quantity change
  const handleQuantityChange = (productId, quantity) => {
    setOrderQuantities({ ...orderQuantities, [productId]: parseInt(quantity, 10) || 0 });
  };

  // Submit Order
  const handleSubmitOrder = () => {
    const orderedProducts = products
      .filter((p) => orderQuantities[p.id] > 0)
      .map((p) => ({
        name: p.name,
        quantity: orderQuantities[p.id],
        boxPrice: p.boxPrice,
        total: (orderQuantities[p.id] * p.boxPrice).toFixed(2),
      }));

    if (!buyerDetails.company || !buyerDetails.address || !buyerDetails.phone) {
      alert("Please fill in all buyer details!");
      return;
    }

    if (orderedProducts.length === 0) {
      alert("Please add at least one product to your order!");
      return;
    }

    sendEmail(buyerDetails, orderedProducts);
  };

  // Function to send email via EmailJS
  const sendEmail = (buyerDetails, orderedProducts) => {
    const currentDateTime = new Date().toLocaleString(); // Get the current date and time
    const templateParams = {
      company_name: buyerDetails.company,
      address: buyerDetails.address,
      contact_number: buyerDetails.phone,
      order_details: orderedProducts
        .map((p) => `${p.name} - ${p.quantity} boxes ($${p.total})`)
        .join("\n"),
      user_name: userName, // Send the user's name
      order_date_time: currentDateTime, // Send the current date and time
    };

    emailjs
      .send(
        "service_qc5avv3", // Replace with your EmailJS Service ID
        "template_37qmurk", // Replace with your EmailJS Template ID
        templateParams,
        "6lulP6PvxhtVfKnuX" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          alert("Order submitted successfully!");
          console.log("Email sent:", response);
        },
        (error) => {
          alert("Error sending order. Please try again.");
          console.error("Email error:", error);
        }
      );
  };

  const handleLogin = (username, password) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      setIsAuthenticated(true);
      setUserName(user.name);
      setLoginDateTime(new Date().toLocaleString()); // Set the login time
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <header>
            <div className="company-logo">
              <img src={product1} alt="Company Logo" style={{ width: '150px', height: 'auto' }} />
            </div>
            <div className="company-contact">
              <p>📞 +1 469 267 8008</p>
              <p>📧 primeglobaltradersinc@gmail.com</p>
            </div>
          </header>

          <h1>Product Order Form</h1>
          <div className="user-info">
            <p><strong>Welcome, {userName}!</strong></p>
            <p><strong>Login Time:</strong> {loginDateTime}</p>
          </div>

          {/* Buyer Details Form */}
          <div className="buyer-details">
            <legend>Buyer Details</legend>
            <div className="form-group">
              <label>Company Name:</label>
              <input type="text" name="company" placeholder="Enter company name" onChange={handleBuyerInput} />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <textarea name="address" placeholder="Enter company address" onChange={handleBuyerInput}></textarea>
            </div>
            <div className="form-group">
              <label>Contact Number:</label>
              <input type="text" name="phone" placeholder="Enter contact number" onChange={handleBuyerInput} />
            </div>
          </div>

          {/* Product List */}
          <div className="product-order">
            {products.map((product) => (
              <div className="product" key={product.id}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-details">
                  <div className="product-name">{product.name}</div>
                  <div className="product-info">
                    <p><strong>Box Price:</strong> ${product.boxPrice.toFixed(2)}</p>
                    <p><strong>Qty per Box:</strong> {product.qtyPerBox}</p>
                    <p><strong>Price per Item:</strong> ${product.pricePerItem.toFixed(2)}</p>
                  </div>
                  <div className="product-quantity">
                    <label>Order Quantity:</label>
                    <input
                      type="number"
                      min="0"
                      placeholder="Enter quantity"
                      onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Submit Order Button */}
          <div className="submit-order">
            <button onClick={handleSubmitOrder}>Submit Order</button>
          </div>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;