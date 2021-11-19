import { Component } from "react";
import "./App.css";
import data from './data/productData';

class App extends Component {
   constructor(){
     super();
     this.state = {
      saleList: data.productData,
      itemList: [],
      itemName: "",
      itemPrice: "",
      itemDescription: ""
     }
   }

// this.setState({

// })




 render(){

  // const {name, price, img, description,} = this.state.productData



   
  return (
    <div>
      <div id="gsBody">

          <div className="products">
            <h2>My Garage Sale</h2>
            <div id="gsContain">
              <form id="gsForm">
                <div id="itemName"><strong>Baseball Glove</strong></div><br />
                <div id="itemPrice">Price: $00.00</div><br />
                <button id="addCart" input="submit" >Add To Cart</button><br />
                <img src="" alt="itemPic" id="itemPic" /><br />
                <div><p id="itemDescript">Item Description</p></div><br />
              </form>
            </div>
          </div>


          <div className="postOneThird">

              <div id="cartContain">
                <body><h2>Cart</h2>
                <li id="olItems">
                        <ol></ol>
                      </li>
                  <div className="cartAmounts">
                    <form id="cartForm">
                      <div id="sub"><strong>Subtotal: $ 00.00</strong></div><br />
                      <div id="tax"><strong>Tax: $ 00.00</strong></div><br />
                      <div id="sub"><strong>Total: $ 00.00</strong></div><br />
                    </form>
                  </div>
                </body> 
              </div>

              <div id="coContain">
                <h2>Checkout</h2>
                <div className="customerInfo">
                  <form id="checkout">
                      <div>
                        <label>First Name</label><br />
                        <input id="firstName"></input><br />
                      </div><br />
                      <div>
                        <label>Last Name</label><br />
                        <input id="lastName"></input><br />
                      </div><br />
                      <div>
                        <label>Email</label><br />
                        <input id="email"></input><br />
                      </div><br />
                      <div>
                        <label>Credit Card</label><br />
                        <input id="credCard"></input><br />
                      </div><br />
                      <div>
                        <label>Zip Code</label><br />
                        <input id="zipCode"></input><br />
                      </div><br />
                      <button id="butNow">Buy Now</button>
                  </form>
                </div>
              </div>

            </div>

      </div>
    </div>
  )
 }
};

export default App;
