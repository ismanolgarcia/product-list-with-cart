import { AddToCart } from './AddToCart';

/* eslint-disable react/prop-types */
export const Card = ({ imageUrl, name, category, price }) => {
  return (
    <div className=" ">
      <picture className="flex flex-col items-center">
        <source srcSet={imageUrl.desktop} media="(min-width: 1280px)" />
        <source srcSet={imageUrl.tablet} media="(min-width: 785px)" />
        <img
          src={imageUrl.mobile}
          alt={name}
          className="h-64 object-contain rounded-lg"
        />
        <AddToCart />
      </picture>
      <div className="mt-4">
        <p className="text-sm text-rose-500">{category}</p>
        <h3 className="text-lg font-semibold text-rose-900">{name}</h3>
        <p className="text-red font-bold">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};
