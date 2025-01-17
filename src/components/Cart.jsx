export const Cart = () => {
  return (
    <div className="md:w-[460px] w-full h-80 bg-white p-8 rounded-lg">
      <h2 className="text-red font-bold text-2xl">Your Cart (0)</h2>
      <div className="flex flex-col items-center gap-4 mt-5">
        <img
          src="/src/assets/images/illustration-empty-cart.svg"
          alt="Empety Cart"
        />
        <p className="text-sm text-rose-500">
          Your added items will appear here
        </p>
      </div>
    </div>
  );
};
