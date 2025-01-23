import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';

export const AddToCart = ({ name, category, price, image }) => {
  const { cart, addToCart, decrementQuantity } = useContext(CartContext);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const productCart = cart.find((item) => item.name === name);
    if (productCart) {
      setNumber(productCart.quantity);
    } else {
      setNumber(0);
    }
  }, [cart, name]);

  const handleAddToCart = () => {
    addToCart({ name, category, price, image });
  };

  return (
    <div
      onClick={number == 0 ? handleAddToCart : null}
      className={` lg:mt-[-24px] mt-[-38px]  rounded-3xl p-2 h-12 flex gap-2 items-center w-40  cursor-pointer ${
        number == 0
          ? 'text-sm font-bold justify-center bg-rose-50 text-rose-900 border hover:border-2 border-rose-500  hover:text-red hover:border-red'
          : 'justify-between bg-red text-rose-50 p-4'
      } `}
    >
      {number == 0 ? (
        <>
          <img
            src="/icon-add-to-cart.svg"
            alt="add-to-cart"
          />
          <p>Add to Cart</p>
        </>
      ) : (
        <>
          <p
            className=" flex justify-center items-center border rounded-full h-6 w-6 text-xl cursor-pointer hover:bg-rose-50 hover:text-red select-none"
            onClick={() => decrementQuantity(name)}
          >
            -
          </p>
          {number}
          <p
            className="flex justify-center items-center border rounded-full h-6 w-6 text-xl cursor-pointer hover:bg-rose-50 hover:text-red select-none"
            onClick={handleAddToCart}
          >
            +
          </p>
        </>
      )}
    </div>
  );
};
