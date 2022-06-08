import image1 from "./image-couple-1.jpg";
import image2 from "./image-couple-2.jpg";
import image3 from "./image-couple-3.jpg";

const GalleryImg = () => {
  return (
    <div className="mariage--galery-img">
      <div className="mariage--galery-img-title">
        <h2>En vous remerciant d'avance pour votre présence</h2>
      </div>
      <div className="mariage--galery-img-container">
        <div>
          <img src={image1} alt="Image du couple 1" />
          <img src={image2} alt="Image du couple 2" />
          <img src={image3} alt="Image du couple 3" />
        </div>
      </div>
    </div>
  );
};

export default GalleryImg;
