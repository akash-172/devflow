import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div>
      user button: <UserButton />
      <h1>HOMEPAGE</h1>
    </div>
  );
}
