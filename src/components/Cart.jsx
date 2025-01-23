import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Button } from './Button';
import { ConfirmOrder } from './ConfirmOrder';
export const Cart = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { cart, removeFromCart, totalQuantity, orderTotal } =
    useContext(CartContext);

  return (
    <div className="md:w-[460px] w-full h-full bg-white p-8 rounded-lg">
      <h2 className="text-red font-bold text-2xl">
        Your Cart ({totalQuantity})
      </h2>
      <div className="flex flex-col  gap-4 mt-5  items-center ">
        {cart.length === 0 ? (
          <div className=" flex flex-col justify-center items-center text-sm text-gray-500">
            <img src="/illustration-empty-cart.svg" alt="Empty Cart" />
            <p className="text-sm text-rose-500">
              Your added items will appear here
            </p>
          </div>
        ) : (
          cart.map((product) => (
            <div
              key={product.key}
              className="flex  justify-between w-full border-b py-2 items-center"
            >
              <div className="flex flex-col gap-1">
                <div className="text-rose-900 font-semibold">
                  {product.name}
                </div>
                <div className="flex gap-10">
                  <span className="text-red font-bold">
                    x {product.quantity}
                  </span>
                  <span className="text-gray-500">
                    @ ${product.price.toFixed(2)} $
                  </span>
                  <span className="text-rose-400 font-bold">
                    {(product.price * product.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(product.key)}
                className="flex justify-center items-center border rounded-full text-gray-400 border-gray-400  hover:border-black h-6 w-6 cursor-pointer hover:text-black select-none"
              >
                x
              </button>
            </div>
          ))
        )}
        {cart.length >= 1 ? (
          <>
            <div className="flex w-full  justify-between items-center">
              <p>Order Total: </p>
              <span className="text-rose-900 font-bold text-xl">
                ${orderTotal.toFixed(2)}
              </span>
            </div>
            <div className="flex items-center justify-center bg-rose-100 w-full h-14 rounded-lg gap-2">
              <img src="/icon-carbon-neutral.svg" alt="icon-carbon-neutral" />
              <p className="text-gray-600">
                This is a{' '}
                <span className="font-bold text-rose-900">carbon-neutral</span>
                delivery
              </p>
            </div>
            <ConfirmOrder
              isOpen={isModalOpen}
              onClose={() => setModalOpen(false)}
            />
            <Button text="Confirm Order" action={() => setModalOpen(true)} />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
