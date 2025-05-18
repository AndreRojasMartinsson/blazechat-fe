const Logo: React.FC = () => (
  <>
    <p className="bg-clip-text text-transparent font-black z-10 text-8xl bg-gradient-to-b from-brand-9 to-brand-7 ">
      Blaze
    </p>
    <span className="text-foreground text-8xl font-black z-10">Chat</span>
    <span className="bg-clip-text w-full text-transparent bg-gradient-to-b from-brand-9 to-brand-7 text-8xl font-black blur-2xl absolute left-0 right-0 top-0 animate-pulse bottom-0 z-0">
      ChatBlaze
    </span>

    <span className="bg-clip-text w-full text-transparent bg-gradient-to-b from-brand-7 to-brand-9 text-8xl font-black blur-2xl absolute left-0 right-0 top-0 animate-ping bottom-0 z-0">
      ChatBlaze
    </span>
  </>
);

export default Logo;
