/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';

export const AddToCart = ({ name, category, price }) => {
  const { cart, addToCart, decrementQuantity } = useContext(CartContext);
  const [numero, setNumero] = useState(0);

  useEffect(() => {
    const productCart = cart.find((item) => item.name === name);
    if (productCart) {
      setNumero(productCart.quantity);
    } else {
      setNumero(0);
    }
  }, [cart, name]);

  const handleAddToCart = () => {
    addToCart({ name, category, price });
  };

  return (
    <div
      onClick={numero == 0 ? handleAddToCart : null}
      className={` lg:mt-[-24px] mt-[-38px]  rounded-3xl p-2 h-12 flex gap-2 items-center w-40  cursor-pointer ${
        numero == 0
          ? 'text-sm font-bold justify-center bg-rose-50 text-rose-900 border hover:border-2 border-rose-500  hover:text-red hover:border-red'
          : 'justify-between bg-red text-rose-50 p-4'
      } `}
    >
      {numero == 0 ? (
        <>
          <img
            src="/src/assets/images/icon-add-to-cart.svg"
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
          {numero}
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
