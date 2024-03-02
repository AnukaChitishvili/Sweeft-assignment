import { useContext } from "react";

import { baseSearchURL } from "../../consants/constants";
import { Container, Wrapper, Input, StyledLink } from "./homepage.style";
import { FetchContext } from "../../context/FetchContext";
import Images from "../../components/images/Images";

const Homepage = () => {
  const {
    images,
    isLoading,
    error,
    setUrl,
    inputValue,
    setInputValue,
    setHistory,
  } = useContext(FetchContext);

  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      const newUrl = baseSearchURL + `&query=${e.target.value}` + "&page=1";
      setUrl(newUrl);
      setHistory((prevState) => [...prevState, e.target.value]);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Input
          type="search"
          placeholder="Search..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleEnterSearch}
        />
        <StyledLink to="/history">History</StyledLink>
      </Wrapper>
      {isLoading && <p>Loading...</p>}
      {images.length > 0 && <Images images={images} />}
      {error && <p>Error</p>}
    </Container>
  );
};

export default Homepage;
