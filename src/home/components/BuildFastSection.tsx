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
        src={require('../../../public/photos/IMG-20221115-WA0002.jpg')}
        alt="Demo de una web dedicada a la indumentaria"
      />
    </CardSection>
  );
};

export default BuildFastSection;
