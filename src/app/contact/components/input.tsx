import { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { FaRegCircleXmark } from "react-icons/fa6";

const inputVariants = tv({
  base: "peer h-[52px] w-full rounded-lg bg-blue-50 text-blue-950 transition-all outline-none placeholder-transparent placeholder-shown:pt-0 focus:border-1 focus:border-blue-900",
  variants: {
    size: {
      md: "px-3 pt-4",
    },
    disabled: {
      true: "pointer-events-none opacity-60",
    },
  },
  defaultVariants: {
    size: "md",
    disabled: false,
  },
});

const inputLabelVariants = tv({
  base: "pointer-events-none absolute top-2 left-[13px] text-xs text-blue-950 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base",
});

interface InputProps
  extends VariantProps<typeof inputVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { id, name, placeholder, size, disabled, className, error, ...props },
    ref
  ) => {
    const inputId = id ?? name;

    return (
      <div className="relative rounded-lg shadow-lg">
        <input
          {...props}
          ref={ref}
          id={inputId}
          name={name}
          placeholder={placeholder}
          className={inputVariants({ size, disabled, className })}
          disabled={disabled}
        />

        <label htmlFor={inputId} className={inputLabelVariants()}>
          {placeholder}
        </label>

        {error && (
          <span className="absolute flex gap-2 items-center -bottom-7 left-2 text-sm text-red-600">
            <FaRegCircleXmark className="w-4 h-4" />
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
