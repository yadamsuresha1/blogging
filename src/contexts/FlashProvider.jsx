import { useState } from "react";
import { FlashContext } from "./FlashContext";

export default function FlashProvider({ children }) {
  const [flashMessage, setFlashMessage] = useState({});
  const [visible, setVisible] = useState(false);
  //a method that will take care of the flash
  const flash = (message, type, duration = 10) => {
    let flashTimer;
    if (flashTimer) {
      clearTimeout(flashTimer);
      flashTimer = undefined;
    }
    setFlashMessage({ message, type });
    setVisible(true);
    if (duration) {
      flashTimer = setTimeout(hideFlash, duration * 1000);
    }
  };
  const hideFlash = () => {
    setVisible(false);
  };

  return (
    <FlashContext.Provider value={{ flash, hideFlash, flashMessage, visible }}>
      {children}
    </FlashContext.Provider>
  );
}
