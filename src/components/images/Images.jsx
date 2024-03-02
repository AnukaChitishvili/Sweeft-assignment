import { Container } from "./images.style";
import IndividualImage from "../individual-image/IndividualImage";

const Images = ({ images }) => {
  return (
    <Container>
      {images.map((image) => {
        return <IndividualImage key={image.id} image={image} />;
      })}
    </Container>
  );
};

export default Images;
