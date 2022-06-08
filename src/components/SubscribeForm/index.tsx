import { Select, SelectOption } from "reaselct";

import useSubscribeForm from "./useSubscribeForm";
import fishImage from "./fish.png";
import tunaImage from "./tuna.png";
import meatImage from "./meat.png";
import foieGrasImage from "./foie-gras.png";
import ImageViewerMenu from "./ImageViewerMenu";

const SubscribeForm = () => {
  const {
    guests,
    isModify,
    loading,
    containerRef,
    toogleMeatChoice,
    setGuests,
    handleSubmit,
  } = useSubscribeForm();
  return (
    <div className="mariage--subscribe-form" ref={containerRef}>
      <div className="mariage--subscription-form-title">
        <h2>Nous avons besoin d'en savoir plus</h2>
        {isModify && !loading && (
          <p>
            <span className=" material-icons">done</span>
            Vos informations sont enregistrées dans notre base de données{" "}
          </p>
        )}
      </div>
      <ImageViewerMenu />
      <div className="mariage--subscription-form-form">
        <form onSubmit={handleSubmit}>
          {guests.map((guest) => (
            <fieldset key={guest.id}>
              <span className="mariage--subscription-form-form-field-title">
                <span className=" material-icons">person_outline</span> Invité
                n°
                {guest.id + 1}
              </span>
              {guest.id > 0 && (
                <span
                  className="mariage--subscription-form-form-field-close material-icons"
                  onClick={() => {
                    setGuests((gs) => {
                      return Array.from(gs.filter((g) => g.id !== guest.id));
                    });
                  }}
                >
                  close
                </span>
              )}
              <label className="mariage--subscription-form-form-field-label-first">
                Nom{" "}
                <span className="mariage--subscription-form-form-required">
                  *
                </span>
                <input
                  required
                  value={guest.lastName}
                  onChange={(e) => {
                    setGuests((gs) => {
                      const findGuest = gs.find((g) => g.id === guest.id);
                      if (findGuest) {
                        findGuest.lastName = e.target.value;
                      }
                      return Array.from(gs);
                    });
                  }}
                />
              </label>
              <label>
                Prénom{" "}
                <span className="mariage--subscription-form-form-required">
                  *
                </span>
                <input
                  required
                  value={guest.firstName}
                  onChange={(e) => {
                    setGuests((gs) => {
                      const findGuest = gs.find((g) => g.id === guest.id);
                      if (findGuest) {
                        findGuest.firstName = e.target.value;
                      }
                      return Array.from(gs);
                    });
                  }}
                />
              </label>
              <p>
                <input
                  type="checkbox"
                  id={`presentEnter-${guest.id}`}
                  defaultChecked={true}
                  onChange={(e) => toogleMeatChoice(guest, e.target.checked)}
                />
                <label htmlFor={`presentEnter-${guest.id}`}>
                  {`Invité n°${guest.id + 1} sera présent au repas du midi`}
                </label>
              </p>
              {guest.enterChoice && (
                <label className="mariage--subscription-form-form-choice">
                  Choix de l'entrée
                  <span className="mariage--subscription-form-form-required">
                    *
                  </span>
                  <Select
                    value={guest.enterChoice}
                    onChange={(value) => {
                      setGuests((gs) => {
                        const findGuest = gs.find((g) => g.id === guest.id);
                        if (findGuest) {
                          findGuest.enterChoice = value as "meat" | "fish";
                        }
                        return Array.from(gs);
                      });
                    }}
                    clearable={false}
                  >
                    <SelectOption
                      value="meat"
                      inputLabel={
                        <span>
                          <img src={foieGrasImage} alt="Icon viande" />
                          &nbsp; Foie gras mi-cuit maison
                        </span>
                      }
                      menuLabel={
                        <span>
                          <img src={foieGrasImage} alt="Icon viande" />
                          &nbsp; Foie gras mi-cuit maison
                        </span>
                      }
                    />
                    <SelectOption
                      value="fish"
                      inputLabel={
                        <span>
                          <img src={tunaImage} alt="Icon thon" />
                          &nbsp; Tartare de thon façon thaï
                        </span>
                      }
                      menuLabel={
                        <span>
                          <img src={tunaImage} alt="Icon thon" />
                          &nbsp; Tartare de thon façon thaï
                        </span>
                      }
                    />
                  </Select>
                </label>
              )}

              {guest.choiceMeal && (
                <label className="mariage--subscription-form-form-choice">
                  Choix du plat{" "}
                  <span className="mariage--subscription-form-form-required">
                    *
                  </span>
                  <Select
                    value={guest.choiceMeal}
                    onChange={(value) => {
                      setGuests((gs) => {
                        const findGuest = gs.find((g) => g.id === guest.id);
                        if (findGuest) {
                          findGuest.choiceMeal = value as "meat" | "fish";
                        }
                        return Array.from(gs);
                      });
                    }}
                    clearable={false}
                  >
                    <SelectOption
                      value="meat"
                      inputLabel={
                        <span>
                          <img src={meatImage} alt="Icon viande" />
                          &nbsp; Quasi de veau rôti
                        </span>
                      }
                      menuLabel={
                        <span>
                          <img src={meatImage} alt="Icon viande" />
                          &nbsp; Quasi de veau rôti
                        </span>
                      }
                    />
                    <SelectOption
                      value="fish"
                      inputLabel={
                        <span>
                          <img src={fishImage} alt="Icon poisson" />
                          &nbsp; Filet de bar
                        </span>
                      }
                      menuLabel={
                        <span>
                          <img src={fishImage} alt="Icon poisson" />
                          &nbsp; Filet de bar
                        </span>
                      }
                    />
                  </Select>
                </label>
              )}
            </fieldset>
          ))}

          <button
            type="button"
            className="mariage--subscription-form-form-add-guest"
            onClick={() => {
              setGuests((gs) => {
                return Array.from(
                  gs.concat({
                    id: gs[gs.length - 1].id + 1,
                    firstName: "",
                    lastName: "",
                    enterChoice: "meat",
                    choiceMeal: "meat",
                  })
                );
              });
            }}
          >
            <span className="material-icons material-icons-outlined">
              person_add
            </span>
          </button>

          <button
            type="submit"
            className="mariage--subscription-form-form-submit"
          >
            {isModify && !loading && <span>Modifier</span>}
            {!isModify && !loading && <span>Confirmer</span>}
            <div
              className="loader"
              style={{ display: loading ? "block" : "none" }}
            ></div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeForm;
