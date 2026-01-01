import Collapse from "react-bootstrap/Collapse";
import { useContext } from "react";
import { FlashContext } from "../contexts/FlashContext";
import { Alert } from "react-bootstrap";

export default function FlashMessage() {
  const { flashMessage, visible, hideFlash } = useContext(FlashContext);
  console.log("visible", visible);
  return (
    <Collapse in={visible}>
      <div>
        <Alert
          variant={flashMessage.type || "info"}
          dismissible
          onClose={hideFlash}
        >
          {flashMessage.message}
        </Alert>
      </div>
    </Collapse>
  );
}
