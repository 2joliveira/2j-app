import { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const textAreaVariants = tv({
  base: "peer h-full max-h-[300px] min-h-[52px] p-3 w-full rounded-lg bg-blue-50 text-blue-950 transition-all outline-none placeholder-transparent placeholder-shown:pt-3 focus:border-1 focus:border-blue-900 shadow-lg",
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
      <div className="relative h-30 rounded-lg">
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

        {error && (
          <p className="absolute -bottom-5 left-2 text-sm text-red-600">
            {error}
          </p>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea;";
