const NutritionCard = ({ calories, protein, carbs, fat }) => {
  return (
    <div className="bg-white shadow p-4 rounded-lg w-full max-w-md">
      <h3 className="text-gray-500 mb-2">Total Nutritional Value</h3>
      <div className="flex justify-between text-sm">
        <div className="bg-gray-50 px-4 py-2 rounded-xl text-center">
          <p className="font-bold text-lg">{calories}</p>
          <p>Calories</p>
        </div>
        <div className="bg-gray-50 px-4 py-2 rounded-xl text-center" >
          <p className="font-bold text-lg">{protein}g</p>
          <p>Protein</p>
        </div>
        <div className="bg-gray-50 px-4 py-2 rounded-xl text-center">
          <p className="font-bold text-lg">{carbs}g</p>
          <p>Carbs</p>
        </div>
        <div className="bg-gray-50 px-4 py-2 rounded-xl text-center">
          <p className="font-bold text-lg">{fat}g</p>
          <p>Fat</p>
        </div>
      </div>
    </div>
  );
};
export default NutritionCard;