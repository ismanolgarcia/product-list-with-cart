import { Card } from './components/Card';
import { Cart } from './components/Cart';
import data from '../data.json';

export const App = () => {

  return (
    <main className="p-5 lg:p-20 bg-rose-100 flex justify-center flex-col md:flex-row lg:gap-0 gap-20">
      <div className="w-[100%]  2xl:w-[60%]">
        <h2 className="mb-10 text-5xl font-bold text-rose-900">Desserts</h2>
        <div className="flex flex-wrap gap-10 justify-center md:justify-start">
          {data.map(({ name, category, image, price }) => (
            <Card
              key={name}
              imageUrl={image}
              price={price}
              category={category}
              name={name}
            />
          ))}
        </div>
      </div>
      <Cart />
    </main>
  );
};
