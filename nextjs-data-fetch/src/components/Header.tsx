import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between p-3 bg-amber-200">
      <div>
        <Link href="/">Home</Link>
      </div>
      <Link href="/users">Users</Link>
    </header>
  );
};

export default Header;
