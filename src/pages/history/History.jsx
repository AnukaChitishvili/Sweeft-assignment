import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Wrapper,
  ListWrapper,
  Button,
  BackButton,
  TitleContentWrapper,
  Title,
} from "./history.style";
import { FetchContext } from "../../context/FetchContext";
import Modal from "../../components/modal/Modal";

const History = () => {
  const { history, images, inputValue } = useContext(FetchContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const navigateToPrevPage = () => {
    navigate("/");
  };

  return (
    <Container>
      <BackButton onClick={navigateToPrevPage}>Go back</BackButton>
      <Wrapper>
        {inputValue === "" ? (
          <h1>Your data is empty, Click enter before moving</h1>
        ) : (
          <TitleContentWrapper>
            <Title>History List</Title>
            <ListWrapper>
              {history.map((item, index) => {
                return (
                  <Button onClick={toggleModal} key={index}>
                    {item}
                  </Button>
                );
              })}
            </ListWrapper>
          </TitleContentWrapper>
        )}
        {isModalOpen && <Modal images={images} toggleModal={toggleModal} />}
      </Wrapper>
    </Container>
  );
};

export default History;
