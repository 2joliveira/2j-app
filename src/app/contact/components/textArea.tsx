import { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { FaRegCircleXmark } from "react-icons/fa6";

const textAreaVariants = tv({
  base: "peer h-full max-h-[52px] lg:max-h-[300px] min-h-[52px] p-3 w-full rounded-lg bg-blue-50 text-blue-950 transition-all outline-none placeholder-transparent placeholder-shown:pt-3 focus:border-1 focus:border-blue-900 shadow-lg",
  variants: {
    size: {
      md: "pt-6",
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
  base: "pointer-events-none absolute top-2 left-[13px] text-xs text-blue-950 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base",
});

interface TexteAreaProps
  extends VariantProps<typeof textAreaVariants>,
    Omit<React.ComponentProps<"textarea">, "size" | "disabled"> {
  error?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TexteAreaProps>(
  (
    { id, name, placeholder, size, disabled, className, error, ...props },
    ref
  ) => {
    const textAreaId = id ?? name;

    return (
      <>
        <div className="relative h-16 rounded-lg mb-0">
          <textarea
            {...props}
            ref={ref}
            id={textAreaId}
            name={name}
            placeholder={placeholder}
            className={textAreaVariants({ size, disabled, className })}
            disabled={disabled}
          />

          <label htmlFor={textAreaId} className={labelVariants()}>
            {placeholder}
          </label>
        </div>

        {error && (
          <span className="px-2 flex gap-2 items-center text-sm text-red-600">
            <FaRegCircleXmark className="w-4 h-4" />
            {error}
          </span>
        )}
      </>
    );
  }
);

TextArea.displayName = "TextArea;";
