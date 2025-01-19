/* eslint-disable react/prop-types */
export const Button = ({ text }) => {
  return (
    <button className="bg-red hover:bg-redDark w-full p-4 rounded-3xl font-medium text-rose-50">
      {text}
    </button>
  );
};
