import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { ReactChild } from "react";

const CardSection = ({
  children,
  title,
  subtitle,
  price,
  withButtonCreate = false,
  justContent = false,
  reverseContent = false,
}: {
  children: ReactChild;
  title: string;
  subtitle?: string;
  price: string;
  withButtonCreate?: boolean;
  justContent?: boolean;
  reverseContent?: boolean;
}) => {
  const layoutRow = reverseContent
    ? "'children .' 'children title' 'children subtitle' 'children subtitle' 'children price' 'children btn' 'children .'"
    : "'. children' 'title children' 'subtitle children' 'price children' 'btn children' '. children'";

  const layoutColumn = "'title' 'subtitle' 'price' 'children' 'btn' ";
  const layoutColumnX2 =
    "'title title' 'subtitle subtitle' 'price price' 'children  children' 'btn btn'";

  const layout = justContent ? layoutColumnX2 : layoutRow;
  return (
    <Container>
      <Box
        display={"grid"}
        gridTemplateColumns={{
          xs: "1fr",
          md: "1fr 1fr",
        }}
        gridTemplateRows="auto"
        gridTemplateAreas={{
          xs: layoutColumn,
          md: layout,
        }}
        gap={2}
      >
        <Box gridArea={"title"}>
          <Typography variant="h4" className="title" textAlign={"center"}>
            {title}
          </Typography>
        </Box>

        <Box gridArea={"price"}>
          <Typography variant="caption">
            Siempre disponible a
          </Typography>
          <Typography variant="h4" className="price" textAlign={"center"}>
            {price}
          </Typography>
        </Box>
        <Box gridArea={"subtitle"}>
          {subtitle && (
            <Typography
              variant="body1"
              className="subtitle"
              maxWidth="sm"
              textAlign={"center"}
              mx="auto"
            >
              {subtitle}
            </Typography>
          )}
        </Box>

        <Box gridArea={"btn"} display="flex" justifyContent={"center"}>
          {withButtonCreate && (
            <Button variant="contained" className="button contained">
              AÑADIR AL CARRITO 
            </Button>
          )}
        </Box>
        <Box gridArea={"children"} alignSelf="center">
          {children}
        </Box>
      </Box>
    </Container>
  );
};

export default CardSection;
