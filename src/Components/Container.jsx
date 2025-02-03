import React from "react";

const Container = ({children}) => {
  return (
    <>
      <div className="w-full h-125 flex justify-center items-center">{children}</div>
    </>
  );
};

export default Container;
