import * as RadixToast from "@radix-ui/react-toast";
import { useEffect, useState } from "react";
import { useToastStore } from "../../store";

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
        className="animate-slide-in animate-fade-out rounded-md bg-black p-3 text-white shadow-lg"
        duration={3000}
      >
        <RadixToast.Title className="font-bold">{message}</RadixToast.Title>
      </RadixToast.Root>

      <RadixToast.Viewport className="fixed top-24 right-4 z-50 flex flex-col gap-2" />
    </RadixToast.Provider>
  );
};

export default Toast;
