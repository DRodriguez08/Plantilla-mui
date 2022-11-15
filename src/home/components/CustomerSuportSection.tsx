import CardSection from "./CardSection";
import Image from "next/image";

const CustomerSuportSection = () => {
  return (
    <CardSection
      title="Kit de invierno"
      subtitle={`Pensado para nuestros amigos del norte, abrigos, sombreros, bufandas y mas para al menos tres personas para
      no tener que pensar en cosas como el resfriado, disponible en negro, marron, violeta y terracota.`}
      price="AR$ 1,499"
      withButtonCreate
      reverseContent
    >
      <Image
        src={require('../../../public/photos/IMG-20221115-WA0015.jpg')}
        alt="Demo de una web dedicada a la indumentaria"
      />
    </CardSection>
  );
};

export default CustomerSuportSection;
