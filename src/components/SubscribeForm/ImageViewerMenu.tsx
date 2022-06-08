import React, { useEffect, useState, useCallback } from "react";
import menuWedding from "./menuWedding.png";

const ImageViewerMenu = () => {
  const [showOverMenu, setShowOverMenu] = useState<boolean>(false);

  const close = useCallback(() => {
    document.body.className = "";
    setShowOverMenu(false);
  }, []);

  const escFunction = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    },
    [close]
  );

  const openPrint = () => {
    window.open(
      "https://firebasestorage.googleapis.com/v0/b/mariage-29eac.appspot.com/o/menuWedding.png?alt=media&token=03aef8ce-fddc-4279-b363-a4278182ff83",
      "_blank"
    );
  };

  useEffect(() => {
    if (showOverMenu) {
      document.body.className = "mariage--no-scroll";
      document.addEventListener("keyup", escFunction);
    } else {
      document.removeEventListener("keyup", escFunction);
    }

    return () => {
      document.removeEventListener("keyup", escFunction);
    };
  }, [showOverMenu, escFunction]);

  return (
    <React.Fragment>
      <div className="mariage--subscribe-form-menu-container">
        <img
          onClick={() => setShowOverMenu(true)}
          src={menuWedding}
          alt="Menu du mariage"
        />
      </div>
      {showOverMenu && (
        <div
          className="mariage--subscribe-form-menu-zoom-container"
          onClick={close}
        >
          <span className="material-icons material-icons-outlined md-48 icon-close">
            close
          </span>
          <div className="mariage--card-wedding-img-container">
            <img
              className="animate__animated animate__zoomIn animate__faster"
              src={menuWedding}
              alt="Menu du mariage"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            />
            <button
              className="mariage--card-wedding-btn-print"
              onClick={openPrint}
            >
              <span className="material-icons">print</span>
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ImageViewerMenu;
