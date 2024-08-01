import React from "react";

export const Headers = ({ children }) => {
  return (
    <>
      <div className="form-search">
        <img src="images/dragonballz.png" alt="" width="200px" />
        {children}
      </div>
    </>
  );
};
