import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {


  const { cart } = useSelector((state) => state)

  const [totalAmount, setTotalAmount] = useState();

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));


  }, [cart])


  return (
    <div >

      {
        cart.length > 0 ? (

          <div>
            <div>

              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                })
              }
            </div>


            <div>
              <div> Your Cart</div>
              <div>Summary</div>

              <p>
                <span>Total Items : {cart.length}</span>
              </p>

            </div>


            <div>
              <p>Total Amount : ${totalAmount}</p>
              <button>
                CheckOut Now
              </button>
            </div>
          </div>
        )
          :
          (
            <div className="flex flex-col items-center justify-center h-[80vh] gap-6">
              <h1 className="text-3xl font-semibold text-gray-700">Cart Empty</h1>


              <Link to={"/"}>
                <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 rounded-lg font-semibold text-gray-800 shadow-md">
                  Shop Now
                </button>
              </Link>
            </div>
          )
      }

    </div >
  );
};

export default Cart;
