import { useContext } from 'react';
import { AddToCart } from './AddToCart';
import { CartContext } from '../context/CartContext';

export const Card = ({ imageUrl, name, category, price }) => {
  const { isInCart } = useContext(CartContext);

  const selected = isInCart(name);

  return (
    <div>
      <picture className="flex flex-col items-center">
        <source srcSet={imageUrl.desktop} media="(min-width: 1280px)" />
        <source srcSet={imageUrl.tablet} media="(min-width: 785px)" />
        <img
          src={imageUrl.mobile}
          alt={name}
          className={`h-64 object-contain rounded-lg ${
            selected ? 'border-red border-2' : ''
          } `}
        />
        <AddToCart
          name={name}
          category={category}
          price={price}
          image={imageUrl.thumbnail}
        />
      </picture>
      <div className="mt-4">
        <p className="text-sm text-rose-500">{category}</p>
        <h3 className="text-lg font-semibold text-rose-900">{name}</h3>
        <p className="text-red font-bold">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};
