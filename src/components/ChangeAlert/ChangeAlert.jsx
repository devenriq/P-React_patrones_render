import { withStorageListener } from "./withStorageListener";

export const ChangeAlert = ({ show, toggleShow }) => {
  if (show) {
    return <div>Hubo cambios</div>;
  }
};

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);
