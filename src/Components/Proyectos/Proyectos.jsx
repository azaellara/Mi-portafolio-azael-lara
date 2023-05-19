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
  width: "60%",
  margin: "0 1rem",
});

const Proyectos = () => {
  return (
    <Seccion maxWidth="xl" sx={{ margin: "1rem 0" }}>
      <Typography
        variant="h2"
        fontSize={{ xs: "2rem", sm: "2rem", md: "4rem" }}
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
          }}
        >
          <Typography
            variant="h3"
            fontSize={{ xs: "2rem", sm: "2rem", md: "3rem" }}
            textAlign="start"
            margin=".7rem 0"
          >
            Encriptador
          </Typography>
          <Typography
            variant="h3"
            fontSize={{ xs: "1rem", sm: "1rem", md: "2rem" }}
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
              code
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
          }}
        >
          <Typography
            variant="h3"
            fontSize={{ xs: "2rem", sm: "2rem", md: "3rem" }}
            textAlign="start"
            margin=".7rem 0"
          >
            Mi Org
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
