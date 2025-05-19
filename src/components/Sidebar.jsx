const Sidebar = () => {
  return (
    <div className="w-64 bg-black text-white h-screen flex flex-col justify-between p-4">
      <div>
        {/* Logo */}
            <div className="flex items-center gap-1 cursor-pointer">
                <img src="/icon2.png" alt="Logo" className="h-9 w-9" />
                <span className="text-3xl font-bold text-lime-400">NutriFlow</span>
            </div>
        <div className="flex flex-col items-center mt-6">
          
            <img src="/profile.png" alt="Logo" className="w-22 h-22" />
        
          <p className="mt-1 text-lg mb-2">username</p>
          <button className="mt-2 px-4 py-1 border border-lime-400 rounded-full">Create Plan</button>
        </div>

        <nav className="mt-8 space-y-4">
          {["Meal Planner", "Grocery List", "My Progress", "Recipes", "Meal Plan Settings", "Account Settings"].map(item => (
            <div key={item} className={`px-4 py-2 ${item === "Meal Planner" ? "bg-lime-500 text-black font-semibold rounded" : "hover:bg-gray-700 rounded"}`}>
              {item}
            </div>
          ))}
        </nav>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between items-center px-4">
          <span>Current meal plan</span>
          <span className="bg-yellow-400 text-black px-2 rounded text-xs">PREMIER</span>
        </div>
        <div className="space-y-1 px-4">
          <p>Download Plan</p>
          <p>Save Plan</p>
          <p>Load Plan</p>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;