import { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { InputErrorMessage } from "@/components";

const inputTextAreaVariants = tv({
  base: `peer h-[80px] max-h-[80px] min-h-[45px] 2xl:h-[245px] 2xl:max-h-[245px] w-full 
  rounded-lg bg-blue-50 text-blue-950 transition-all outline-none 
  placeholder-transparent placeholder-shown:pt-3 focus:border-1 focus:border-blue-900 shadow-lg`,
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

const labelVariants = tv({
  base: `pointer-events-none absolute top-0.5 left-[13px] text-xs text-blue-950 
  transition-all peer-placeholder-shown:top-[13px] peer-placeholder-shown:text-base`,
});

interface InputTexteAreaProps
  extends VariantProps<typeof inputTextAreaVariants>,
  Omit<React.ComponentProps<"textarea">, "size" | "disabled"> {
  error?: string;
}

export const InputTextArea = forwardRef<HTMLTextAreaElement, InputTexteAreaProps>(
  (
    { id, name, placeholder, size, disabled, className, error, ...props },
    ref
  ) => {
    const textAreaId = id ?? name;

    return (
      <div className="relative h-16 rounded-lg mb-0">
        <textarea
          {...props}
          ref={ref}
          id={textAreaId}
          name={name}
          placeholder={placeholder}
          className={inputTextAreaVariants({ size, disabled, className })}
          disabled={disabled}
        />

        <label htmlFor={textAreaId} className={labelVariants()}>
          {placeholder}
        </label>

        {/*{error && (
          <InputErrorMessage error={error} />
        )}*/}
      </div>
    );
  }
);

InputTextArea.displayName = "TextArea;";
