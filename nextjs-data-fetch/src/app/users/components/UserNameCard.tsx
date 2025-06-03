import Link from "next/link";
import { User } from "../page";

type Props = {
  user: User;
};

const UserNameCard = ({ user }: Props) => {
  return (
    <div className="p-5 border-amber-500/50 border-1 rounded-lg shadow-md">
      <Link href={`/users/${user.id}`}>{user.firstName}</Link>
    </div>
  );
};

export default UserNameCard;
