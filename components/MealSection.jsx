import MealItem from "./MealItem";

const MealSection = ({ title, totalCalories, meals }) => {
  return (
    <div className="mb-6">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-sm text-gray-500 mb-4">Total: {totalCalories} Calories</p>
      {meals.map((meal, idx) => (
        <MealItem key={idx} {...meal} />
      ))}
    </div>
  );
};
export default MealSection;