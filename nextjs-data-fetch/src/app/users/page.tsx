import UserNameCard from "./components/UserNameCard";

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
};

const fetchUsers = async () => {
  const res = await fetch(`http://localhost:3000/api/users`);
  const data = await res.json();

  return data.users;
};

const page = async () => {
  const usersList: User[] = await fetchUsers();

  return (
    <div className="flex gap-5 flex-wrap p-3">
      {usersList.map((u) => (
        <UserNameCard key={u.id} user={u} />
      ))}
    </div>
  );
};

export default page;
