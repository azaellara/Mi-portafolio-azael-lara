import styled from "@emotion/styled";
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { useFormik } from "formik";
import * as Yup from "yup";

const Seccion = styled("section")({
  padding: "2rem 0",
  boxSizing: "border-box",
  background: "#336b87",
});

const Raya = styled("p")({
  textDecorationLine: "underline",
  marginLeft: "1rem",
  color: "#336b87",
});

const FormContainer = styled("div")({
  marginTop: "1rem",
});

const FormInput = styled("div")({
  width: "100%",
  marginBottom: "2rem",
});

const FormBoton = styled("div")({
  display: "flex",
  justifyContent: "center",
  width: "100%",
});

const CssTextField = styled(TextField)({
  label: {
    color: "white",
  },
  fieldset: {
    borderColor: "rgb(247 242 242 / 75%)",
  },
});

const Formulario = () => {
  const { handleSubmit, handleChange, errors, touched, values } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Debes ingresar un nombre"),
      email: Yup.string()
        .email("Dirección de email no válida, tene que llevar una @")
        .required("Debes ingresar un email"),
      message: Yup.string().required("Debes ingresar un mensaje"),
    }),

    onSubmit: (values, { resetForm }) => {
      resetForm();
      console.log(values);
    },
  });
  return (
    <Seccion id="formulario">
      <Box
        component="form"
        sx={{
          width: { md: "50%", xs: "80%" },
          padding: "1rem",
          border: "2px solid",
          borderColor: "#353535",
          borderRadius: "10px",
          margin: "auto",
          background: "#353535",
        }}
        onSubmit={handleSubmit}
        action="https://formsubmit.co/azaellara89@gmail.com"
        method="POST"
      >
        <Typography
          variant="h2"
          fontSize={{ xs: "1.5rem", sm: "1.5rem", md: "3rem" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          CONTACT <Raya>ME</Raya>
        </Typography>
        <FormContainer>
          <FormInput>
            <CssTextField
              name="name"
              type="text"
              label="Name"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              error={touched.name && errors.name}
              helperText={touched.name && errors.name}
              value={values.name}
            />
          </FormInput>
          <FormInput>
            <CssTextField
              name="email"
              type="text"
              label="Email"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              error={touched.email && errors.email}
              helperText={touched.email && errors.email}
              value={values.email}
            />
          </FormInput>
          <FormInput>
            <CssTextField
              name="message"
              type="text"
              variant="outlined"
              label="Message"
              multiline
              rows={6}
              fullWidth
              onChange={handleChange}
              error={touched.message && errors.message}
              helperText={touched.message && errors.message}
              value={values.message}
            />
          </FormInput>
          <FormBoton>
            <Button
              sx={{ mt: "2rem", padding: "1rem 5rem" }}
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
            >
              SEND
            </Button>
          </FormBoton>
        </FormContainer>
      </Box>
    </Seccion>
  );
};

export default Formulario;
