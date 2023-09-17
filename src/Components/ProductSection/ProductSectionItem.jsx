import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/slideSlicer/cartSlice";

const ProductSectionItem = ({
  id,
  img,
  name,
  text,
  size,
  price,
  color,
  totalPrice,
}) => {
  const dispatch = useDispatch();

  const defaultSize = size[2];
  const defaultColor = color[2];

  return (
    <div className="mb-4 p-2 md:p-0">
    <Card className="relative">
      <Typography
        variant="h4"
        className="absolute -rotate-45 top-4 md:top-12 right-2 md:right-8 z-10 text-red-500"
      >
        SALE 10%
      </Typography>
      <CardHeader className="h-60 md:h-96">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography color="gray" className="hidden md:block font-medium" textGradient>
          {text}
        </Typography>
        <div className="flex justify-between items-center pt-2 md:pt-4">
          <Typography color="red" className="hidden md:block font-bold" textGradient>
            Size left:{" "}
            <span className="text-gray-400 text-sm font-extralight">
              {defaultSize}
            </span>
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="flex justify-center pt-2">
        <Tooltip content="Add to Cart" placement="bottom">
          <Button
            onClick={() => {
              dispatch(
                addToCart({
                  id: id,
                  img: img,
                  text: text,
                  amount: 1,
                  price: price,
                  totalPrice: totalPrice,
                  name: name,
                  size: defaultSize,
                  color: defaultColor,
                })
              );
              alert(name + " Added To Your Cart :)");
            }}
            size="sm"
            color="gray"
            variant="outlined"
            ripple={true}
          >
            Add to Cart
          </Button>
        </Tooltip>
      </CardFooter>
    </Card>
  </div>
  
  );
};

export default ProductSectionItem;
