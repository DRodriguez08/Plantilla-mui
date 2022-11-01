import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
  Typography,
} from "@mui/material";
import { Fragment, SyntheticEvent, useState } from "react";
import CardSection from "./CardSection";

const StepsToDeploySection = () => {
  const steps: {
    title: string;
    description: string;
    label: string;
    href: string;
  }[] = [
    {
      title: "Elige una plantilla de la que copiarte",
      description:
        "Elige entre mas de 100 plantillas diseñadas profesionalmente para tu páginas web.",
      label: "Buscar plantillas de las que copiarte",
      href: "#",
    },
    {
      title: "Personalizalas para que no se note que te plageaste",
      description: "Cambiales las fuentes, imágenes, texto y más.",
      label: "Aprende más",
      href: "#",
    },
    {
      title: "Crea el logo generico numero 198675190",
      description: "Plageate de un logotipo profesional.",
      label: "Explora todas las opciones",
      href: "#",
    },
    {
      title: "Elige un dominio (A.K.A. direccion URL)",
      description:
        "Usa o crea una URL para usar de dominio web",
      label: "Aprende más",
      href: "#",
    },
    {
      title: "Públicita tu pagina para que tres familiares tuyos la vean",
      description:
        "Haz crecer tu presencia en vano con herramientas de marketing.",
      label: "",
      href: "#",
    },
  ];

  const [stepExpanded, setStepExpanded] = useState<number>(0);
  const handleChange =
    (step: number) => (_: SyntheticEvent, isExpanded: boolean) => {
      setStepExpanded(isExpanded ? step : 0);
    };
  return (
    <CardSection
      title={`Crea una página web de la que se burlen de ti en ${steps.length} pasos`}
      withButtonCreate
    >
      <Fragment>
        {steps.map((item, index) => (
          <Accordion
            key={index}
            expanded={stepExpanded === index}
            onChange={handleChange(index)}
            variant="outlined"
            sx={{
              border: "none",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id={`${index}`}
            >
              <Typography className="title" variant="body1">{`${index + 1}. ${
                item.title
              }`}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="subtitle" variant="body1">
                {item.description}
              </Typography>
              <Link
                className="link link-variant-primary"
                fontWeight="bold"
                color="inherit"
                href={item.href}
              >
                {item.label}
              </Link>
            </AccordionDetails>
          </Accordion>
        ))}
      </Fragment>
    </CardSection>
  );
};

export default StepsToDeploySection;
