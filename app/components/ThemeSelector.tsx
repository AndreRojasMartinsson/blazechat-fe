import { useMemo } from "react";
import { Theme, useTheme } from "remix-themes";
import Select from "./Select";
import { MoonStar, Palette, Sun } from "lucide-react";

const ThemeSelector: React.FC = () => {
  const [theme, setTheme] = useTheme();

  const themeValue = useMemo(
    () => (theme === Theme.LIGHT ? "Light" : "Dark"),
    [theme]
  );

  return (
    <Select
      className="w-32"
      value={themeValue}
      icon={<Palette width={18} height={18} />}
      onChange={(newValue) => {
        setTheme(newValue === "Dark" ? Theme.DARK : Theme.LIGHT);
      }}
    >
      <Select.Option value="Light">
        <Sun width={21} height={21} />
        Light
      </Select.Option>
      <Select.Option value="Dark">
        <MoonStar width={21} height={21} />
        Dark
      </Select.Option>
    </Select>
  );
};

export default ThemeSelector;
