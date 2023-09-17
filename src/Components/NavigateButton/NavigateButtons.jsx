import React from "react";
import { Button } from "@material-tailwind/react";
import clothes from "../../assets/Images/clothesss.jpg";
import { filterProducts } from "../../features/slideSlicer/productSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const NavigateButtons = () => {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];

  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex flex-wrap justify-center py-8 gap-2">
        {buttons.map((button, index) => {
          return (
            <div key={index} className="mb-4 sm:w-1/3 lg:w-auto">
              <Link to={"/filteredProducts/" + button}>
                <Button
                  color="gray"
                  size="lg"
                  variant="outlined"
                  ripple={true}
                  className="text-black hover:bg-purple-900 duration-300 ease-in-out hover:text-white"
                  onClick={() => dispatch(filterProducts(button))}
                >
                  {button}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="bg-black p-2 w-[70%] mx-auto rounded-md">
        <h3 className="text-purple-100 text-center text-lg font-inter font-bold tracking-normal leading-none  animate-pulse hover:animate-none cursor-pointer">
          SALES UP TO 50%
        </h3>
      </div>
      <div className="flex justify-center items-center py-4">
        <img
          className="h-[300px] w-full sm:h-[600px] sm:w-[70%] rounded-md shadow-lg shadow-gray-600"
          src={clothes}
          alt="clothes"
        />
      </div>
    </div>
  );
};

export default NavigateButtons;
