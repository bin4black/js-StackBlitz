// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
console.log("mi primer proyecto")

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 let order = (call_production) =>{

    console.log("Order placed. Please call production")
    
    // function 👇 is being called 
      call_production();
    };
    
    let production = () =>{
    
    console.log("Production has started")
    
    };