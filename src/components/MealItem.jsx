const MealItem = ({ title, calories, protein, carbs, fat, image }) => {
  return (
    <div className="flex items-start gap-4 bg-white shadow p-4 rounded-lg mb-4 w-full max-w-md">
      <img src={image} alt={title} className="w-16 h-16 object-cover rounded" />
      <div className="flex-1">
        <h4 className="font-bold">{title}</h4>
        <p className="text-sm text-gray-500">Under 15 mins • 1 serving • <span className="underline">Ingredients</span></p>
        <p className="text-xs text-gray-500 mt-1">{calories}kcal, {protein}g Prot, {carbs}g Carbs, {fat}g Fat</p>
      </div>
    </div>
  );
};
export default MealItem;