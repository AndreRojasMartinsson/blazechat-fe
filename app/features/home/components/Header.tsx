import Badge from "./Badge";
import Logo from "./Logo";

const Header: React.FC<Header.Props> = ({ comingSoon = true }) => (
  <>
    <div className="flex flex-row relative items-center">
      <Logo />
      <Badge className="absolute -right-15 -top-2">Alpha</Badge>
    </div>
    {comingSoon && <p className="text-xl font-bold">Coming soon</p>}
  </>
);

export default Header;

namespace Header {
  export interface Props {
    comingSoon?: boolean;
  }
}
