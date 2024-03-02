import { Img } from "./individualImage.style";

const IndividualImage = ({ image }) => {
  return (
    <div>
      <Img src={image.urls.regular} alt={image.alt_description} />
    </div>
  );
};

export default IndividualImage;
