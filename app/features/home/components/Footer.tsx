import { type ReactNode } from "react";

const Footer: React.FC<Footer.Props> = ({ copyright }) => {
  return (
    <footer className="absolute bottom-0 w-full border-t border-mauve-6 p-4">
      <p className="text-center">&copy; blazechat.se {copyright}</p>
    </footer>
  );
};

export default Footer;

namespace Footer {
  export interface Props {
    copyright: ReactNode;
  }
}
