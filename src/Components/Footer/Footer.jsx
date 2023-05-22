import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import fondo from "../../assets/images/fondo.webp";

const Contenedor = styled("div")({
  backgroundImage: `url(${fondo})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  textAlign: "center",
  padding: "2rem 0 1rem 0",
});

const Footer = () => {
  const [añoActual, setAñoActual] = useState("");

  useEffect(() => {
    const fecha = new Date();
    const año = fecha.getFullYear();
    setAñoActual(año.toString());
  }, []);

  return (
    <Contenedor>
      <Typography variant="h5">
        © Copyright Desarrollado por Azael Lara
      </Typography>
      <Typography variant="h5">
        <p>{añoActual}</p>
      </Typography>
    </Contenedor>
  );
};

export default Footer;
