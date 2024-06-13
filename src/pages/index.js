import CarouselComponent from "@/components/home/Carousel";
import Card from "@/components/home/Card";
import { Inter } from "next/font/google";
import cardData from '../store/cardData.json'
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  let categories = new Set()
  let categoryArray;
  let foodData = [];
  const handleData = ()=>{
    cardData.map((data)=>{
      return foodData.push(data),categories.add(data.category);
    });
    // console.log(foodData);
    };
    
    handleData()
    categoryArray = [...categories]
    // console.log(categoryArray)
  return (
    <>
      <CarouselComponent/>
      {/* <Card/> */}
      <div className="container mx-auto">
      {
        categoryArray.map((category)=>{
          return <>
            <div key={category} className="text-4xl mt-10 mb-3 uppercase font-bold">
              {category}
            </div>
            <hr />
            <div className="flex flex-col items-center justify-center">
              
                <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                  foodData?.filter((foodData) => category === foodData.category)?.map((data)=>{
                    return <Card key={data.name} foodData={data}/>
                  })}
                </div>
            </div>
          </>
        })
      }
      </div>
      
    </>
  );
}
