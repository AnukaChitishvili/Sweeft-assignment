import IndividualImage from "../individual-image/IndividualImage";
import { Container, Wrapper, Button, Paragraph } from "./modal.style";

const Modal = ({ images, toggleModal }) => {
  return (
    <Container>
      <Wrapper>
        {images.map((item) => {
          return (
            <div>
              <IndividualImage image={item} key={item.id} />
              <Paragraph>Liked by {item.likes} by user</Paragraph>
            </div>
          );
        })}
        <Button onClick={toggleModal}>Close Modal</Button>
      </Wrapper>
    </Container>
  );
};

export default Modal;
