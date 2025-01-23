export const Button = ({ text, action }) => {
  return (
    <button
      onClick={action}
      className="bg-red hover:bg-redDark w-full p-4 rounded-3xl font-medium text-rose-50"
    >
      {text}
    </button>
  );
};
