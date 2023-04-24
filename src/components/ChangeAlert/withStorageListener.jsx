import { useState } from "react";

function withStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);

    window.addEventListener("storage", (change) => {
      if (change.key === "TODOS_V1") {
        console.log("Hubo cambios en TODOS_V1");
        setStorageChange(true);
      }
    });

    return (
      <WrappedComponent show={storageChange} toggleShow={setStorageChange} />
    );
  };
}

export { withStorageListener };
