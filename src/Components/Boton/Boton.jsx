import styled from "@emotion/styled";
import React from "react";
import whatsapp from "../../assets/images/whatsapp.svg";

const Caja = styled("div")({
  position: "fixed",
  bottom: "5px",
  right: "-15px",
});

const Img = styled("img")({
  width: "80%",
});

const Boton = () => {
  return (
    <Caja>
      <a href="https://wa.link/tjcbnn" target="_blank">
        <Img src={whatsapp} />
      </a>
    </Caja>
  );
};

export default Boton;
