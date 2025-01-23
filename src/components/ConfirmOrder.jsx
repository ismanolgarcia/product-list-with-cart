import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Modal } from './Modal';
import { Button } from './Button';
import iconOrder from '../assets/images/icon-order-confirmed.svg';

export const ConfirmOrder = ({ isOpen, onClose }) => {
  const { cart, orderTotal, clearCart } = useContext(CartContext);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-2 mb-6">
        <img src={iconOrder} alt="" className="w-10" />
        <h2 className="font-bold text-2xl">Order Confirmed</h2>
        <span className="text-sm">We hope you enjoy your food!</span>
      </div>
      <div className="bg-rose-50 h-72 md:h-80 p-6 rounded-md  overflow-y-auto">
        {cart.map((product) => (
          <div
            key={product.key}
            className="flex  justify-between w-full  items-center border-b h-16 mb-2"
          >
            <div className="flex gap-4">
              <img
                src={product.image}
                alt="image"
                className="w-12 h-12 rounded-md"
              />
              <div className="flex flex-col justify-center gap-1">
                <span className=" text-rose-900 font-semibold">
                  {product.name}
                </span>
                <div className="flex gap-4">
                  <span className="text-xs text-red font-bold">
                    x {product.quantity}
                  </span>
                  <span className="text-xs text-gray-500">
                    @ ${product.price.toFixed(2)} $
                  </span>
                </div>
              </div>
            </div>
            <span className="text-xs text-gray-700 font-bold">
              ${(product.price * product.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>
      <div className="flex w-full  justify-between items-center h-10 bg-rose-50 p-6 mb-6">
        <p className='text-sm'>Order Total: </p>
        <span className="text-rose-900 font-bold text-sm mr-4">
          ${orderTotal.toFixed(2)}
        </span>
      </div>
      <Button text="Start New Order" action={(onClose, clearCart)} />
    </Modal>
  );
};
