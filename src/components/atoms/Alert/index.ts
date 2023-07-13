import { TypeOptions, ToastPosition, toast } from "react-toastify";

type TAlertProps = {
  text: string;
  time?: number;
  type?: TypeOptions;
  position?: ToastPosition;
  hideProgressBar?: boolean;
};

export function Alert({
  text,
  time = 3000,
  type = "default",
  position = "top-right",
  hideProgressBar = false,
}: TAlertProps) {
  return toast(text, {
    type,
    position,
    hideProgressBar,
    autoClose: time,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}
