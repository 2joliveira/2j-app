import { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { InputErrorMessage } from "@/components";

const inputTextVariants = tv({
  base: `peer h-[45px] w-full rounded-lg bg-blue-50 text-blue-950 transition-all
    outline-none placeholder-transparent placeholder-shown:pt-0 focus:border-1 focus:border-blue-900`,
  variants: {
    size: {
      md: "px-3 pt-3",
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

const inputTextLabelVariants = tv({
  base: `pointer-events-none absolute top-0.5 left-[13px] text-xs text-blue-950
  transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base`,
});

interface InputProps
  extends VariantProps<typeof inputTextVariants>,
  Omit<React.ComponentProps<"input">, "size" | "disabled"> {
  error?: string;
}

export const InputText = forwardRef<HTMLInputElement, InputProps>(
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
          className={inputTextVariants({ size, disabled, className })}
          disabled={disabled}
        />

        <label htmlFor={inputId} className={inputTextLabelVariants()}>
          {placeholder}
        </label>

        {error && (
          <InputErrorMessage error={error} />
        )}
      </div>
    );
  }
);

InputText.displayName = "Input";
