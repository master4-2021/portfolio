import { useState } from "react";

type AlertArgs = {
  text: string;
  type?: "danger" | "success";
};

type Alert = {
  show: boolean;
  text: string;
  type: "danger" | "success";
};

const useAlert = () => {
  const [alert, setAlert] = useState<Alert>({
    show: false,
    text: "",
    type: "danger",
  });

  const showAlert = ({ text, type = "danger" }: AlertArgs) =>
    setAlert({ show: true, text, type });
  const hideAlert = () => setAlert({ show: false, text: "", type: "danger" });

  return { alert, showAlert, hideAlert };
};

export default useAlert;
