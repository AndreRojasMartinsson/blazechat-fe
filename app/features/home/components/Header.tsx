import { memo } from "react";
import Badge from "./Badge";
import Logo from "./Logo";

const Header: React.FC<{}> = () => (
  <>
    <div className="flex flex-row relative items-center">
      <Logo />
      <Badge className="absolute -right-15 -top-2">Alpha</Badge>
    </div>
    <p className="text-xl font-bold">Coming soon</p>
  </>
);

export default memo(Header);
