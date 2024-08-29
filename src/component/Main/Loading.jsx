import { Spinner } from "@material-tailwind/react";
import React from "react";

function Loading() {
  return (
    <div>
      <Spinner
        color="blue"
        className="h-screen w-16 mx-auto text-gray-900/50 grid place-content-center"
      />
    </div>
  );
}

export default Loading;
