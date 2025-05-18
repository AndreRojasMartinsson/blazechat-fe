import ThemeSelector from "~/components/ThemeSelector";
import type { Route } from "./+types/_index";
import { useLoaderData } from "react-router";
import Footer from "~/features/home/components/Footer";
import Header from "~/features/home/components/Header";
import NavBar from "~/features/home/components/NavBar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "BlazeChat - Coming Soon" },
    {
      name: "description",
      content: "BlazeChat coming soon to your retail store",
    },
    { property: "og:title", content: "BlazeChat - Coming Soon" },
    { property: "og:image", content: "https://blazechat.se/thumb.png" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  const year = new Date().getFullYear();
  const copyright = `2025${year > 2025 ? "-" + year : ""}`;

  return {
    copyright,
  };
}

export default function Home() {
  const { copyright } = useLoaderData<typeof loader>();

  return (
    <main className="h-screen font-medium w-screen flex flex-col gap-2 justify-center items-center">
      <Header />
      <NavBar />
      <Footer copyright={copyright} />
    </main>
  );
}
