import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import cityHallImg from "./city-hall.png";
import restaurantImg from "./restaurant.jpg";
import homeImg from "./home.jpg";

const styles = {
  primary: {
    contentStyle: {
      background: "transparent",
      color: "#fff",
    },
    contentArrowStyle: { borderRight: "var(--secondary-color)" },
    iconStyle: {
      background: "white",
      color: "#8BA56A",
    },
    img: {
      width: "100%",
      marginTop: "10px",
      borderRadius: "10px",
    },
  },
  secondary: {
    contentStyle: {
      background: "transparent",
      color: "#fff",
    },
    contentArrowStyle: { borderRight: "var(--tertiary-color)" },
    iconStyle: {
      background: "white",
      color: "#8BA56A",
    },
    img: {
      width: "100%",
      marginTop: "10px",
      borderRadius: "10px",
    },
  },
};

const DayProgram = () => {
  return (
    <div className="mariage--day-program">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={styles.primary.contentStyle}
          contentArrowStyle={styles.primary.contentArrowStyle}
          date="10h45"
          iconStyle={styles.primary.iconStyle}
          icon={<span className="material-icons">account_balance</span>}
        >
          <h3 className="vertical-timeline-element-title">
            Rendez-vous à la mairie
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            <a
              href="https://www.google.fr/maps/place/Mairie+de+Six-Fours-les-Plages/@43.0933406,5.8372696,17z/data=!3m1!4b1!4m5!3m4!1s0x12c906aa73d30f4d:0x1c41c5526f50a4e!8m2!3d43.0933406!4d5.8394583"
              target={"_blank"}
              rel="noreferrer"
            >
              Place du 18 Juin 1940, 83140 Six-Fours-les-Plages
            </a>
          </h4>
          <p>Où les voeux seront prononcés</p>
          <img
            style={styles.primary.img}
            src={cityHallImg}
            alt="Mairie Six Four"
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={styles.secondary.contentStyle}
          contentArrowStyle={styles.secondary.contentArrowStyle}
          date="12h30"
          iconStyle={styles.secondary.iconStyle}
          icon={<span className="material-icons">restaurant</span>}
        >
          <h3 className="vertical-timeline-element-title">Repas au M5</h3>
          <h4 className="vertical-timeline-element-subtitle">
            <a
              href="https://www.google.fr/maps/place/le+M5/@43.1076001,5.9474875,17z/data=!3m1!4b1!4m5!3m4!1s0x12c91b9ad275a16b:0xd5ffbe7b9792db9b!8m2!3d43.1076001!4d5.9496762"
              target={"_blank"}
              rel="noreferrer"
            >
              Plage du Mourillon, 83000 Toulon
            </a>
          </h4>
          <p>Pour y déguster un délicieux repas</p>
          <img
            style={styles.secondary.img}
            src={restaurantImg}
            alt="Restaurant M5 Toulon"
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={styles.primary.contentStyle}
          contentArrowStyle={styles.primary.contentArrowStyle}
          date="18h30"
          iconStyle={styles.primary.iconStyle}
          icon={<span className="material-icons">local_bar</span>}
        >
          <h3 className="vertical-timeline-element-title">Home sweet home</h3>
          <h4 className="vertical-timeline-element-subtitle">
            <a
              href="https://www.google.fr/maps/place/Canton+de+Saint-Cyr-sur-Mer/@43.278345,5.6642267,11z/data=!3m1!4b1!4m13!1m7!3m6!1s0x12c9915b629b82f5:0x479cc7c4693b392f!2s38+Lot.+les+Oliviers,+13120+Gardanne!3b1!8m2!3d43.443765!4d5.486559!3m4!1s0x12c90bf2a51e2a0d:0x116f812c5b3c88f8!8m2!3d43.2794962!4d5.7932008"
              target={"_blank"}
              rel="noreferrer"
            >
              Canton de Saint-Cyr-sur-Mer
            </a>
          </h4>
          <p>Concert de Jazz, buffet et bulles au rendez-vous</p>
          <img style={styles.primary.img} src={homeImg} />
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default DayProgram;
