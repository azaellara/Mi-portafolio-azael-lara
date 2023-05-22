import styled from "@emotion/styled";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import encriptador from "../../assets/images/encriptador.webp";
import miorg from "../../assets/images/miorg.webp";
import GitHubIcon from "@mui/icons-material/GitHub";
import background1 from "../../assets/images/background1.svg";

const Seccion = styled("section")({
  margin: "1rem 0",
  backgroundImage: `url(${background1})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
});

const Raya = styled("p")({
  textDecorationLine: "underline",
  marginLeft: "1rem",
  color: "#336b87",
});

const Img = styled("img")({
  margin: "0 1rem",
  width: "100%",
  maxWidth: "800px",

  "@media (max-width: 768px)": {
    maxWidth: "500px",
  },

  "@media (max-width: 480px)": {
    maxWidth: "300px",
  },
});

const Proyectos = () => {
  return (
    <Seccion maxWidth="xl" sx={{ margin: "1rem 0" }}>
      <Typography
        variant="h2"
        fontSize={{ xs: "2em", sm: "2em", md: "4em" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        LAST <Raya>PROJECTS</Raya>
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "2rem 0",
        }}
      >
        <Img src={encriptador} />
        <Box
          sx={{
            margin: "0 1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            fontSize={{ xs: "2em", sm: "2em", md: "3em" }}
            textAlign="start"
            margin=".7rem 0"
          >
            ENCRIPTADOR
          </Typography>
          <Typography
            variant="h3"
            fontSize={{ xs: "1em", sm: "1em", md: "2em" }}
            textAlign="start"
          >
            App para encripta y desencripta texto
          </Typography>
          <Stack spacing={2} direction="row" margin="2rem 0">
            <Button
              variant="contained"
              href="https://encriptador-three.vercel.app/"
              target="_blank"
            >
              Demo
            </Button>
            <Button
              variant="outlined"
              href="https://github.com/azaellara/Encriptador"
              target="_black"
              startIcon={<GitHubIcon />}
            >
              Code
            </Button>
          </Stack>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "2rem 0",
        }}
      >
        <Box
          sx={{
            margin: "0 1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            fontSize={{ xs: "2rem", sm: "2rem", md: "3rem" }}
            textAlign="start"
            margin=".7rem 0"
          >
            MI ORG
          </Typography>
          <Typography
            variant="h3"
            fontSize={{ xs: "1rem", sm: "1rem", md: "2rem" }}
          >
            App para crear y organizar equipos
          </Typography>
          <Stack spacing={2} direction="row" margin="2rem 0">
            <Button
              variant="contained"
              href="https://org-dun.vercel.app/"
              target="_blank"
            >
              Demo
            </Button>
            <Button
              variant="outlined"
              href="https://github.com/azaellara/org"
              target="_black"
              startIcon={<GitHubIcon />}
            >
              Code
            </Button>
          </Stack>
        </Box>
        <Img src={miorg} />
      </Box>
    </Seccion>
  );
};

export default Proyectos;
