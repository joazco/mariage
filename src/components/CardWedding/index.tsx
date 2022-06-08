import { useEffect, useRef, useState } from "react";
import cardWeddingImage from "./cardWedding.png";

const CardWedding = () => {
  const [showArrow, setShowArrow] = useState<boolean>(false);
  const cardWeddingContainer = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (cardWeddingContainer.current) {
      window.scroll({
        top: cardWeddingContainer.current.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    }
    document.body.className = "";
  };

  const openPrint = () => {
    window.open(
      "https://firebasestorage.googleapis.com/v0/b/mariage-29eac.appspot.com/o/cardWedding.png?alt=media&token=8d3d2d55-14ca-4dd6-87b0-f444babeb32a",
      "_blank"
    );
  };

  useEffect(() => {
    setTimeout(() => setShowArrow(true), 3 * 1000 + 500);
  }, []);

  return (
    <div className="mariage--card-wedding" ref={cardWeddingContainer}>
      <div className="mariage--card-wedding-img-container">
        <img
          className="animate__animated animate__slower animate__fadeIn"
          src={cardWeddingImage}
          alt="Fair part mariage"
        />
        <button className="mariage--card-wedding-btn-print" onClick={openPrint}>
          <span className="material-icons">print</span>
        </button>
      </div>
      {showArrow && (
        <div
          className="mariage--card--wedding-arrow animate__animated animate__bounce 
      "
          onClick={scrollToBottom}
        >
          <span>
            Programme de
            <br /> la journée
          </span>
          <span className="material-icons md-48">arrow_downward</span>
        </div>
      )}
    </div>
  );
};

export default CardWedding;
