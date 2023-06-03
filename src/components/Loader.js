import React from "react";
import LoaderImg from ".././assets/loader.svg";

const Loader = () => {
  return (
    <div className="mx-auto mt-40 w-20 bg-white">
      <img src={LoaderImg} alt="loader" />
    </div>
  );
};

export default Loader;
