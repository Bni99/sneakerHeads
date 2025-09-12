import * as RadixToast from "@radix-ui/react-toast";
import { useEffect, useState } from "react";
import { useToastStore } from "../../store";
import "../../../index.css";

const Toast = () => {
  const { message, setMessage } = useToastStore();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (message) setOpen(true);
  }, [message]);

  return (
    <RadixToast.Provider swipeDirection="right">
      <RadixToast.Root
        open={open}
        onOpenChange={(isOpen) => {
          setOpen(isOpen);
          if (!isOpen) setMessage(null);
        }}
        duration={3000}
        className="ToastRoot"
      >
        <RadixToast.Title className="ToastTitle">{message}</RadixToast.Title>
      </RadixToast.Root>

      <RadixToast.Viewport className="ToastViewport" />
    </RadixToast.Provider>
  );
};

export default Toast;
