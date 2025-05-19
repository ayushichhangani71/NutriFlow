import Sidebar from "../components/Sidebar";
import TopBar from "../components/Topbar";
import NutritionCard from "../components/NutritionCard";
import MealSection from "../components/MealSection";
import BackgroundImage from "../components/BackgroundImage";

// Static images
import avocadoWrap from "../assets/avocado-wrap.jpg";
import stuffedEggs from "../assets/stuffed-eggs.jpg";
import granolaBowl from "../assets/granola-bowl.jpg";
import fruitSmoothie from "../assets/fruit-smoothie.jpg";
import chiaSeedPudding from "../assets/chia-seed-pudding.jpg";
import lentilBowl from "../assets/lentil-bowl.jpg";

// Dynamically get day names
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const todayIndex = new Date().getDay();
const today = dayNames[todayIndex];
const tomorrow = dayNames[(todayIndex + 1) % 7];
const nextDay = dayNames[(todayIndex + 2) % 7];

const MealPlan = () => {
  const meals = [
    {
      title: "Avocado, Cucumber and Feta Wrap",
      calories: 515,
      protein: 23,
      carbs: 54,
      fat: 24,
      image: avocadoWrap
    },
    {
      title: "Avocado Stuffed Eggs",
      calories: 124,
      protein: 6,
      carbs: 4,
      fat: 10,
      image: stuffedEggs
    },
    {
      title: "Chia Seed Pudding with Almond Milk",
      calories: 250,
      protein: 10,
      carbs: 18,
      fat: 14,
      image: chiaSeedPudding
    }
  ];
  
  const tomorrowMeals = [
    {
      title: "Granola Bowl with Berries",
      calories: 420,
      protein: 12,
      carbs: 60,
      fat: 14,
      image: granolaBowl
    },
    {
      title: "Fruit Smoothie",
      calories: 200,
      protein: 5,
      carbs: 35,
      fat: 4,
      image: fruitSmoothie
    },
    {
      title: "Lentil & Quinoa Power Bowl",
      calories: 520,
      protein: 25,
      carbs: 45,
      fat: 20,
      image: lentilBowl
    }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      
      <BackgroundImage />

      <div className="relative z-10 p-6 w-auto grid grid-cols-1 lg:grid-cols-3 overflow-scroll gap-15">
        {/* Today */}
        <div className="w-[375px] mr-10">
          
          <div className="relative h-40 bg-cover bg-center flex items-center w-full max-w-md px-27">
            <div className="items-center">
              <p className="text-3xl font-bold text-white text-center">{today}</p>
              <p className="text-lg text-white font-semibold mt-3 text-center">Today’s Meal Plan</p>
            </div>
          </div>
          <NutritionCard calories={1910} protein={89} carbs={255} fat={66} />
          <MealSection title="Dinner" totalCalories={515} meals={[meals[0]]} />
          <MealSection title="Breakfast" totalCalories={250} meals={[meals[2]]} />
          <MealSection title="Snack 2" totalCalories={124} meals={[meals[1]]} />
        </div>

        {/* Tomorrow */}
        <div className="w-[375px] mr-10">
          <div className="relative h-40 bg-cover bg-center flex items-center w-full max-w-md px-27">
            <div className="items-center">
              <p className="text-3xl font-bold text-white text-center">{tomorrow}</p>
              <p className="text-lg text-white font-semibold mt-3 text-center">Tomorrow’s Meal Plan</p>
            </div>
          </div>
          <NutritionCard calories={1500} protein={55} carbs={190} fat={40} />
          <MealSection title="Breakfast" totalCalories={420} meals={[tomorrowMeals[0]]} />
          <MealSection title="Lunch" totalCalories={520} meals={[tomorrowMeals[2]]} />
          <MealSection title="Snack 1" totalCalories={200} meals={[tomorrowMeals[1]]} />
        </div>

        {/* Next Day */}
        <div className="w-[375px] mr-10">
          <div className="relative h-40 bg-cover bg-center flex items-center w-full max-w-md px-27">
            <div className="items-center">
              <p className="text-3xl font-bold text-white text-center">{nextDay}</p>
              <p className="text-lg text-white font-semibold mt-3 text-center">Upcoming Meal Plan</p>
            </div>
          </div>
          <NutritionCard calories={1500} protein={55} carbs={190} fat={40} />
          <MealSection title="Breakfast" totalCalories={420} meals={[tomorrowMeals[0]]} />
          <MealSection title="Lunch" totalCalories={520} meals={[tomorrowMeals[2]]} />
          <MealSection title="Snack 1" totalCalories={200} meals={[tomorrowMeals[1]]} />
        </div>
      </div>
    </div>
  );
};

export default MealPlan;
