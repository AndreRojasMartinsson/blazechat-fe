import { useState, type ReactNode } from "react";
import Button from "~/components/Button";
import Select from "~/components/Select";
import ThemeSelector from "~/components/ThemeSelector";

const Card: React.FC<{ children: ReactNode; title: ReactNode }> = ({
  children,
  title,
}) => (
  <div className="border rounded p-5 h-fit w-fit">
    {title}
    <div className="flex flex-col gap-2">{children}</div>
  </div>
);

function ButtonCard() {
  const [variant, setVariant] = useState<string>("primary");
  const [size, setSize] = useState<string>("medium");
  const [loading, setLoading] = useState<string>("false");

  return (
    <Card title={<h3 className="text-3xl mb-3 font-bold w-full">Button</h3>}>
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
  return (
    <div className="p-10 h-screen w-screen flex flex-col">
      <header className="flex w-full justify-between items-center">
        <h1 className="text-6xl font-bold mb-5">BlazeChat</h1>
        <ThemeSelector />
      </header>

      <ButtonCard />
    </div>
  );
}
