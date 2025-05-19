
const TopBar = () => {
  return (
    <div className="relative h-40 bg-cover bg-center flex items-center w-full max-w-md justify-between px-6 text-black font-semibold"
        >
      <button className="text-3xl rounded-2xl bg-white px-2">←</button>
      <div>
        <p className="text-3xl font-bold text-white">Sunday</p>
        <p className="text-lg text-white font-semibold mt-3">Today’s Meal Plan</p>
      </div>
      <button className="text-3xl rounded-2xl bg-white px-2">→</button>
    </div>
  );
};
export default TopBar;