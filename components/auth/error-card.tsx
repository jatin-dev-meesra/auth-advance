import CardWrapper from "./card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something Went wrong!"
      backButtonHref="/login"
      backButtonLabel="Back to Login"
      showSocial={false}
    >
      <div className="w-full py-2 flex justify-center items-center">
        <ExclamationTriangleIcon className=" text-destructive" />
      </div>
    </CardWrapper>
  );
};
