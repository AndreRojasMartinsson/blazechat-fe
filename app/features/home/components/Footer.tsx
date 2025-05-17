import { memo, type ReactNode } from "react";

const Footer: React.FC<Props> = ({ copyright }) => {
  return (
    <footer className="absolute bottom-0 w-full border-t border-mauve-6 p-4">
      <p className="text-center">&copy; blazechat.se {copyright}</p>
    </footer>
  );
};

export default memo(Footer);

interface Props {
  copyright: ReactNode;
}
