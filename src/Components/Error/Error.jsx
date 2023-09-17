import React from "react";
import { Alert } from "@material-tailwind/react";

const Error = () => {
  return (
    <div className="grid grid-cols-1 h-screen items-center justify-items-center">
      <div className="w-[96]">
        <Alert color="red" className="text-xl font-inter font-bold">
          Sorry NO! matching Products found With Your Filter.!!. Clear The Filter✨🎶
        </Alert>
      </div>
    </div>
  );
};

export default Error;