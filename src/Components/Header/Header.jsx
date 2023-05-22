import React from "react";
import { Button, Stack, Typography, styled } from "@mui/material";
import fondo from "../../assets/images/fondo.webp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import perfil from "../../assets/images/perfil.webp";

const Contenedor = styled("section")({
  width: "100%",
  height: 600,
  display: "grid",
  placeContent: "center",
  backgroundImage: `url(${fondo})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  boxSizing: "border-box",
});

const CV = styled("div")({
  position: "absolute",
  top: "20px",
  right: "20px",
});

const Redes = styled("div")({
  display: "flex",
  justifyContent: "flex-start",
  marginTop: "1rem",
});

const Enlace = styled("a")({
  color: "inherit",
  textDecoration: "none",
  cursor: "pointer",
  marginLeft: "2rem",
});

const Header = () => {
  return (
    <Contenedor>
      <CV>
        <Button
          variant="contained"
          href="/Azael-Lara-CV.pdf"
          download
          size="small"
        >
          Download Cv
        </Button>
      </CV>
      <Stack
        spacing={{ sm: 1, lg: 2 }}
        direction="row-reverse"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
      >
        <div>
          <img src={perfil} />
        </div>
        <div>
          <Typography
            variant="h1"
            fontSize={{ xs: "3em", sm: "4em", md: "6em" }}
          >
            Azael Lara
          </Typography>
          <Typography
            variant="h2"
            fontSize={{ xs: "2em", sm: "2em", md: "4em" }}
          >
            Frontend Jr. developer
          </Typography>
          <Redes>
            <Button
              href="#formulario"
              variant="outlined"
              color="secondary"
              size="small"
            >
              contact me
            </Button>
            <Enlace href="https://github.com/azaellara" target="_blank">
              <GitHubIcon fontSize="large" />
            </Enlace>
            <Enlace
              href="https://www.linkedin.com/in/azael-lara-abaa80266/"
              target="_blank"
            >
              <LinkedInIcon fontSize="large" />
            </Enlace>
          </Redes>
        </div>
      </Stack>
    </Contenedor>
  );
};

export default Header;
