import React from "react";
import html5 from "../../assets/images/html5.svg";
import css from "../../assets/images/css.svg";
import javascript from "../../assets/images/javascript.svg";
import github from "../../assets/images/github.svg";
import git from "../../assets/images/git.svg";
import react from "../../assets/images/react.svg";
import { Box, Container } from "@mui/material";
import styled from "@emotion/styled";

const Seccion = styled("section")({
  margin: "2rem 0",
});

const Img = styled("img")({
  margin: "0 1rem",
});

const Skills = () => {
  return (
    <Seccion maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          margin: "1rem",
          boxShadow: "5px 5px 5px black, -5px -5px 5px black",
          borderRadius: "10px",
          padding: "2rem 0",
        }}
      >
        <Img src={html5} />
        <Img src={css} />
        <Img src={javascript} />
        <Img src={github} />
        <Img src={git} />
        <Img src={react} />
      </Box>
    </Seccion>
  );
};

export default Skills;
