import IndividualImage from "../individual-image/IndividualImage";
import { Container, Wrapper, Button, Paragraph } from "./modal.style";

const Modal = ({ images, toggleModal }) => {
  return (
    <Container>
      <Button onClick={toggleModal}>Close Modal</Button>
      <Wrapper>
        {images.map((item) => {
          return (
            <div>
              <IndividualImage image={item} key={item.id} />
              <Paragraph>Liked by {item.likes} by user</Paragraph>
            </div>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Modal;
