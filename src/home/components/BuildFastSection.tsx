import CardSection from "./CardSection";
import Image from "next/image";

const BuildFastSection = () => {
  return (
    <CardSection
      title="Kit de verano"
      subtitle="Con el verano pateando mas fuerte que un caballo enojado, al menos con este equipo de ropa podras sudar con estilo, disponible en rojo y verde."
      price="AR$ 1,299"
      withButtonCreate
      reverseContent
    >
      <Image
        src="https://picsum.photos/1200/800"
        alt="Demo de una web dedicada a la indumentaria"
        height="800px"
        width="1200px"
      />
    </CardSection>
  );
};

export default BuildFastSection;
