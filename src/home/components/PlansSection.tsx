import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const PlansSection = () => {
  const plans: {
    title: string;
    description: string;
    price: number;
    hrefViewMore: string;
    hrefSelectPlan: string;
  }[] = [
    {
      title: "Remera playera",
      description: "El verano aprieta, pero una buena remera playera no ahorca",
      price: 149,
      hrefViewMore: "#",
      hrefSelectPlan: "#",
    },
    {
      title: "Gabardina",
      description:
        "Ya sea para el frio, o para filmar una pelicula Noir, de cuero del mejor",
      price: 249,
      hrefViewMore: "#",
      hrefSelectPlan: "#",
    },
    {
      title: "Jeans clasicos",
      description:
        "Clasico, simple y efectivo, la opcion facil para cualquier evento",
      price: 199,
      hrefViewMore: "#",
      hrefSelectPlan: "#",
    },
  ];

  return (
    <Stack spacing={2}>
      <Typography textAlign={"center"} variant="h4" className="title">
        Una pequeña muestra de nuestro catalogo
      </Typography>
      <Box>
        <Grid container spacing={4}>
          {plans.map((item, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Card
                sx={{
                  minHeight: "345px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: 2,
                }}
                elevation={4}
              >
                <CardHeader title={item.title} subheader={item.description} />
                <Box>
                  <CardContent>
                    <Typography variant="caption">Siempre disponible a</Typography>
                    <Typography variant="h4" className="title">
                      {`AR$ ${item.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")},00`}
                    </Typography>
                    <Typography variant="caption"></Typography>
                  </CardContent>
                  <CardActions></CardActions>
                  <Stack direction={"row"} spacing={2}>
                    <Button
                      variant="contained"
                      className="button contained"
                      href={item.hrefSelectPlan}
                    >
                      AÑADIR AL CARRITO
                    </Button>
                  </Stack>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};

export default PlansSection;
