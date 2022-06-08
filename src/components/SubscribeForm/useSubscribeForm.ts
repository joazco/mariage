import { FormEvent, useEffect, useRef, useState } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";

type Guest = {
  id: number;
  firstName: string;
  lastName: string;
  enterChoice: "meat" | "fish" | null;
  choiceMeal: "meat" | "fish" | null;
};
const useSubscribeForm = () => {
  const [guests, setGuests] = useState<Guest[]>([
    {
      id: 0,
      firstName: "",
      lastName: "",
      enterChoice: "meat",
      choiceMeal: "fish",
    },
    {
      id: 1,
      firstName: "",
      lastName: "",
      enterChoice: "meat",
      choiceMeal: "fish",
    },
  ]);
  const [isModify, setIsModify] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [showSelectMeat, setShowSelectMeat] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      const db = getFirestore();
      setDoc(doc(db, "guests", user.uid), { guests }).finally(() => {
        setIsModify(true);
        setTimeout(() => {
          setLoading(false);
          if (containerRef.current) {
            window.scroll({
              top: containerRef.current.offsetTop,
              left: 0,
              behavior: "smooth",
            });
          }
        }, 1500);
      });
    }
    return false;
  };

  const toogleMeatChoice = (ge: Guest, present: boolean) => {
    setGuests((g) => {
      const newGuests: Guest[] = [];
      g.forEach((guest) => {
        if (guest.id === ge.id) {
          if (!present) {
            guest.enterChoice = null;
            guest.choiceMeal = null;
          } else {
            guest.enterChoice = "fish";
            guest.choiceMeal = "meat";
          }
        }
        newGuests.push(guest);
      });
      return Array.from(newGuests);
    });
  };

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      const db = getFirestore();
      getDoc(doc(db, "guests", user.uid)).then((onfulfilled) => {
        const data = onfulfilled.data();
        if (data) {
          setIsModify(true);
          setGuests(data.guests);
        }
      });
    }
  }, []);

  return {
    guests,
    isModify,
    loading,
    showSelectMeat,
    containerRef,
    toogleMeatChoice,
    setGuests,
    handleSubmit,
    setShowSelectMeat,
  };
};

export default useSubscribeForm;
