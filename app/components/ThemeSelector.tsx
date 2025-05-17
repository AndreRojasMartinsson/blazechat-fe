import { memo } from "react";
import { Theme, useTheme } from "remix-themes";

const ThemeSelector: React.FC = () => {
  const [, setTheme] = useTheme();

  return (
    <select
      className="z-20"
      onChange={(e) => {
        const value = e.target.value as "light" | "dark" | "system";
        setTheme(value === "dark" ? Theme.DARK : Theme.LIGHT);
      }}
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
};

export default memo(ThemeSelector);
