import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { url } from "inspector";
import Image from "next/image";

const MainSection = () => {
  const title = "Mas ropa modesta\n por menos precio";
  const subtitle =
    "Los mejores articulos de vestimenta a precios pensados para todos";
  const sm = useMediaQuery("min-width(1000px)");

  return (
    <Container
      sx={{
        background: "none",
      }}
    >
      <Box
        display={"grid"}
        gridTemplateColumns={{
          xs: "1fr",
          sm: "1fr 1fr",
        }}
        gridTemplateRows="auto"
        gridTemplateAreas={{
          xs: "'.' '.' 'title' 'price' 'subtitle' 'img' 'btn'",
          sm: "'. img' 'title img' 'subtitle img' 'btn img' '. img'",
        }}
        columnGap={{
          xs: 0,
          sm: 2,
        }}
        height={{
          xs: "100vh",
          md: "92vh",
        }}
      >
        <Box
          gridArea={"title"}
          alignSelf={{
            xs: "end",
            sm: "end",
          }}
          textAlign={{
            xs: "center",
            sm: "left",
          }}
        >
          <Typography variant={sm ? "h2" : "h3"} fontWeight="bold">
            {title}
          </Typography>
        </Box>
        <Box
          textAlign={{
            xs: "center",
            sm: "left",
          }}
          gridArea={"subtitle"}
          alignSelf={{
            xs: "center",
          }}
        >
          <Typography variant="h5">{subtitle}</Typography>
        </Box>
        <Box
          gridArea={"btn"}
          alignSelf={{
            xs: "start",
            sm: "start",
          }}
          display={"flex"}
          justifySelf={{
            xs: "center",
            sm: "left",
          }}
        >
          <Button variant="contained">Articulos principales</Button>
        </Box>

        <Box
          gridArea={"img"}

        >
          <Image
            src={require('../../../public/photos/IMG-20221115-WA0015.jpg')}
            alt="Demo de una web dedicada a la indumentaria"
            height={600}
            width={450}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default MainSection;
