import { FaRegCircleXmark } from "react-icons/fa6";

interface InputErrorMessageProps {
  error?: string;
}

export function InputErrorMessage({ error }: InputErrorMessageProps) {
  return (
    <span className="absolute flex gap-1 items-center justify-center -bottom-4 left-2 text-[10px] text-red-600">
      <FaRegCircleXmark className="w-2 h-2" />
      {error}
    </span>
  )
}