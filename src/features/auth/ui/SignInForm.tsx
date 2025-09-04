import * as Dialog from "@radix-ui/react-dialog";
import { RxCross2 } from "react-icons/rx";
import { useForm } from "react-hook-form";
import { Button } from "../../../shared";

type SignInFormProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const SignInForm = ({ open, onOpenChange }: SignInFormProps) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log("Signup form data:", data);
  };

  return (
    <>
      <Dialog.Root open={open} onOpenChange={onOpenChange}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
          <Dialog.Content className="fixed top-1/2 left-1/2 w-[23vw] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-lg">
            <div className="m-4 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Sign In</h2>
              <Dialog.Close asChild>
                <button aria-label="Close">
                  <RxCross2 className="h-5 w-5 cursor-pointer" />
                </button>
              </Dialog.Close>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-6 flex flex-col items-center justify-center gap-6"
            >
              <input
                type="email"
                id="userEmail"
                placeholder="Your email"
                {...register("userEmail", {
                  required: "User Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="border-brand-grey focus:border-brand-medium-orange w-[90%] rounded-sm border-2 p-[10px] focus:outline-none"
              />

              <input
                type="password"
                id="userPassword"
                placeholder="Password"
                {...register("userPassword", {
                  required: "Password is required",
                })}
                className="border-brand-grey focus:border-brand-medium-orange w-[90%] rounded-sm border-2 p-[10px] focus:outline-none"
              />
              <Button className="m-1 mb-0 w-[90%] text-white" size="large">
                Login
              </Button>
              <div className="flex w-[90%] items-start">
                <input
                  type="checkbox"
                  id="terms"
                  {...register("terms", {
                    validate: (v) => v === true || "You must accept the terms",
                  })}
                  className="mr-2 h-5 w-5"
                />
                <label
                  htmlFor="terms"
                  className="text-brand-dark-grey text-sm leading-snug"
                >
                  By continuing, I agree to the terms of use & privacy policy.
                </label>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default SignInForm;
