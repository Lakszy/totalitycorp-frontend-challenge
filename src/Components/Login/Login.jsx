import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { login } from "../../features/slideSlicer/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const intitalState = {
    name: "",
    password: "",
    image: "",
  };
  const [values, setValues] = useState(intitalState);
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-1 items-center justify-items-center h-screen">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Name"
            size="lg"
            type="text"
            name="name"
            value={values.name}
            onChange={onChange}
          />
          <Input
            label="Password"
            size="lg"
            type="password"
            name="password"
            value={values.password}
            onChange={onChange}
          />
          <Input
            label="Avatar URL address"
            size="lg"
            type="text"
            name="image"
            value={values.image}
            onChange={onChange}
          />
          <div className="-ml-2.5"></div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            fullWidth
            onClick={() => {
              dispatch(login(values));
              window.location.reload(true);
            }}
          >
            Sign In
          </Button>
          <Typography
            className="mt-6 flex justify-center animate-bounce hover:text-blue-500 hover:cursor-wait"
            style={{ fontSize: "15px", fontWeight: "bold" }}
          >
            The Page Will Automatically Refresh. Please use the same credentials after the refresh :)
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
