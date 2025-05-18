import { useState, type ReactNode } from "react";
import { useLoaderData } from "react-router";
import Button from "~/components/Button";
import { type ButtonVariants } from "~/components/Button/variants";
import Select from "~/components/Select";

const Card: React.FC<{ children: ReactNode; title: ReactNode }> = ({
  children,
  title,
}) => (
  <div className="border rounded p-5 h-fit w-fit">
    {title}
    <div className="flex flex-col gap-2">{children}</div>
  </div>
);

const BUTTONS = [
  "primary",
  "secondary",
  "border",
  "ghost",
  "destructive",
  "hazard",
  "success",
  "disabled",
  // "icon",
] as const;

function fixCapitalization(name: string | null | undefined): string {
  if (!name) return name!;

  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
}

function mapped(
  variants: ButtonVariants["variant"][]
): { label: string; variant: ButtonVariants["variant"] }[] {
  return variants.map((variant) => ({
    label: fixCapitalization(variant),
    variant,
  }));
}

export function loader() {
  const buttons = mapped(BUTTONS as any);

  return { buttons };
}

function CardTitle() {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-3xl mb-3 font-bold text-left w-full">Buttons</h3>
      <div className="flex flex-row items-center justify-start mb-2">
        <p className="ml-[15px]">Small</p>
        <p className="ml-[65px]">Medium</p>
        <p className="ml-[80px]">Large</p>
        <p className="ml-[110px]">Loading</p>
      </div>
    </div>
  );
}

function CardTitle2() {
  return <h3 className="text-3xl mb-3 font-bold text-left w-full">Button</h3>;
}

function ButtonCard() {
  const [variant, setVariant] = useState<string>("primary");
  const [size, setSize] = useState<string>("medium");
  const [loading, setLoading] = useState<string>("false");

  return (
    <Card title={<CardTitle2 />}>
      <div className="flex flex-row gap-2">
        <div className="flex flex-col gap-2">
          <Select value={variant} onChange={(newValue) => setVariant(newValue)}>
            <Select.Option value="primary">Primary</Select.Option>
            <Select.Option value="secondary">Secondary</Select.Option>
            <Select.Option value="border">Border</Select.Option>
            <Select.Option value="ghost">Ghost</Select.Option>
            <Select.Option value="destructive">Destructive</Select.Option>
            <Select.Option value="hazard">Hazard</Select.Option>
            <Select.Option value="success">Success</Select.Option>
            <Select.Option value="disabled">Disabled</Select.Option>
          </Select>
          <Select value={size} onChange={(newValue) => setSize(newValue)}>
            <Select.Option value="small">Small</Select.Option>
            <Select.Option value="medium">Medium</Select.Option>
            <Select.Option value="large">Large</Select.Option>
          </Select>
          <Select value={loading} onChange={(newValue) => setLoading(newValue)}>
            <Select.Option value="true">Yes</Select.Option>
            <Select.Option value="false">No</Select.Option>
          </Select>
        </div>
        <Button
          variant={variant as any}
          className="w-max h-max"
          loading={loading === "true" ? true : false}
          size={size as any}
        >
          Hello, world!
        </Button>
      </div>
    </Card>
  );
}

export default function Components() {
  const { buttons } = useLoaderData<typeof loader>();

  return (
    <div className="p-10 h-screen w-screen flex flex-col">
      <h1 className="text-6xl font-bold mb-5">BlazeChat</h1>
      {/* <div className="w-full flex-auto grid grid-cols-3 grid-rows-2 gap-4"> */}
      <div className="w-full flex-auto flex flex-row flex-wrap gap-4">
        <Card title={<CardTitle />}>
          {buttons.map((button) => (
            <div className="flex flex-row items-start gap-2">
              <p className="text-mauve-11 font-medium w-[95px] text-left">
                {button.label}
              </p>
              <div className="flex-auto flex items-start gap-2">
                <Button variant={button.variant} size="small">
                  Hello, world!
                </Button>
                <Button variant={button.variant}>Hello, world!</Button>
                <Button variant={button.variant} size="large">
                  Hello, world!
                </Button>
                <Button variant={button.variant} size="large" loading>
                  Hello, world!
                </Button>
              </div>
            </div>
          ))}
        </Card>
        <ButtonCard />
      </div>
    </div>
  );
}
