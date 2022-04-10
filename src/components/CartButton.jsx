// keep the add to cart component here
import React,{useState} from "react";
const CartButton = (props) => {
    //manage state of the count 
    const [count, setCount] = useState(0);

    const handleInc=() =>{
      setCount(count+1)
  };
const handleDec=()=>{
  setCount(count-1)
}

    
  return <>
  {/* add to cart button */}
  {/* count with - and  + button */}

  <div>
      <button  onClick={handleInc} className="minus-btn">+</button>
      <p className="count-item">{count}</p>
      <button  onClick={handleDec}  className="plusbtn">-</button>
  </div>
  </>;
};
export default CartButton