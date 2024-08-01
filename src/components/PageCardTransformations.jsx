import React from "react";
import imgRota from "../../images/imagen-rota.png";

export const PageCardTransformations = ( item ) => {
    

  let imagen = item.image ? item.image : imgRota;

  return (
    <div
      className="pagecard-content-img"
      style={{ flexDirection: "column", paddingTop: "30px", gap: "30px" }}
    >
      <img src={imagen} alt={item.name} height="460px" />
      <div className="descriptions-titles">
        <div className="descriptions-power">
          <p>
            <span>Name:</span> {item.name}
          </p>
          <p>
            <span>Ki:</span> {item.ki}
          </p>
        </div>
      </div>
    </div>
  );
};
