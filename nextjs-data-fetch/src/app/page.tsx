import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10 text-center">
      <Link href={"/users"} className="text-2xl">
        Go to Users &rarr;
      </Link>
    </div>
  );
}
