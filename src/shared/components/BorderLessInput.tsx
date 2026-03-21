import { Input } from "@/components/ui/input";
import type { ComponentProps } from "react";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { Textarea } from "@/components/ui/textarea";
import { twMerge } from "tailwind-merge";

type BaseProps = {
  value: string;
  mutation: (key: string, data: string) => void;
  name: string;
  placeholder?: string;
};

type InputModeProps = BaseProps & {
  type?: "Input";
} & Omit<
    ComponentProps<typeof Input>,
    "value" | "onChange" | "placeholder" | "type"
  >;

type TextAreaModeProps = BaseProps & {
  type: "TextArea";
} & Omit<
    ComponentProps<typeof Textarea>,
    "value" | "onChange" | "placeholder" | "type"
  >;

type IProps = InputModeProps | TextAreaModeProps;

export default function BorderLessInput({
  value,
  mutation,
  type = "Input",
  name,
  placeholder = "Untitled",
  className,
  ...restProps
}: IProps) {
  const [draftTitle, setDraftTitle] = useState<string>(value);
  const mutationRef = useRef(mutation);
  const lastSubmittedValueRef = useRef<string | null>(value);
  const widthCh = Math.max((draftTitle || "Untitled").length, 8);
  const debouncedTitle = useDebounce(draftTitle, 1000);

  useEffect(() => {
    mutationRef.current = mutation;
  }, [mutation]);

  useEffect(() => {
    if (lastSubmittedValueRef.current !== debouncedTitle) {
      lastSubmittedValueRef.current = debouncedTitle;
      mutationRef.current(name, debouncedTitle);
    }
  }, [debouncedTitle, value, name]);

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setDraftTitle(e.target.value);
  };

  if (type === "Input")
    return (
      <Input
        value={draftTitle}
        onChange={onChangeHandler}
        placeholder={placeholder}
        // style={{ width: `40ch`, maxWidth: `50ch` }}
        className={twMerge(
          "h-auto border-0 bg-transparent dark:bg-transparent px-0 text-4xl font-semibold tracking-tight shadow-none rounded-none focus-visible:border-transparent focus-visible:ring-0 md:text-5xl py-0 text-start md:w-[55vw] w-[70vw]",
          className,
        )}
        maxLength={80}
        {...(restProps as Omit<
          ComponentProps<typeof Input>,
          "value" | "onChange" | "placeholder" | "type"
        >)}
      />
    );
  if (type === "TextArea")
    return (
      <Textarea
        value={draftTitle}
        onChange={onChangeHandler}
        placeholder={placeholder}
        // placeholder="Untitled"
        // rows={4}
        maxLength={105}
        className={twMerge(
          " border-0 bg-transparent dark:bg-transparent px-0 text-4xl font-semibold tracking-tight shadow-none rounded-none focus-visible:border-transparent focus-visible:ring-0 md:text-5xl py-0 resize-none",
          className,
        )}
        {...(restProps as Omit<
          ComponentProps<typeof Textarea>,
          "value" | "onChange" | "placeholder"
        >)}
      />
    );

  return null;
}
