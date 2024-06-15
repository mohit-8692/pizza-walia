import CarouselComponent from "@/components/home/Carousel";
import Card from "@/components/home/Card";
import { Inter } from "next/font/google";
import cardData from '../store/cardData.json';
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [typeFilter, setTypeFilter] = useState('');
  const [categories, setCategories] = useState([]);
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    const categorySet = new Set();
    const foodArray = [];

    cardData.forEach(data => {
      foodArray.push(data);
      categorySet.add(data.category);
    });

    setFoodData(foodArray);
    setCategories([...categorySet]);
  }, []);

  return (
    <>
      <CarouselComponent />
      <div className="container mx-auto">
        <div className="my-6 space-x-5">
          <button
            className={`border-white rounded-full border-2 py-1 px-3 ${!typeFilter && "bg-slate-800 "}`}
            onClick={() => setTypeFilter('')}
          >
            All
          </button>
          <button
            className={`border-white rounded-full border-2 py-1 px-3 ${typeFilter === "Veg" && "bg-slate-800 "}`}
            onClick={() => setTypeFilter("Veg")}
          >
            <span className="lowercase font-thin bg-white border-green-500 border mr-2 px-0.1 text-green-500">●</span> Veg
          </button>
          <button
            className={`border-white rounded-full border-2 py-1 px-3 ${typeFilter === "Non-Veg" && "bg-slate-800 "}`}
            onClick={() => setTypeFilter("Non-Veg")}
          >
            <span className="lowercase font-thin bg-white border-red-500 border mr-2 px-0.1 text-red-500">●</span> Non Veg
          </button>
        </div>
      </div>

      {categories.map(category => (
        <div key={category}>
          <div className="text-4xl mt-10 mb-3 uppercase font-bold">
            {category}
          </div>
          <hr />
          <div className="flex flex-col items-center justify-center">
            <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {foodData
                .filter(food => category === food.category)
                .filter(food => typeFilter ? typeFilter === food.foodType : food)
                .map(data => (
                  <Card key={data.name} foodData={data} />
                ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
