import { useLoaderData } from "react-router";
import Footer from "~/features/home/components/Footer";
import Header from "~/features/home/components/Header";
import SignupForm from "~/features/register/components/SignupForm";

export function loader() {
  const year = new Date().getFullYear();
  const copyright = `2025${year > 2025 ? "-" + year : ""}`;

  return {
    copyright,
  };
}

export default function Register() {
  const { copyright } = useLoaderData<typeof loader>();

  return (
    <main className="h-screen font-medium w-screen flex flex-col gap-2 justify-center items-center">
      <Header comingSoon={false} />
      <SignupForm />
      <Footer copyright={copyright} />
    </main>
  );
}
