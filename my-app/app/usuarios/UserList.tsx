"use client";

import { useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

type Props = {
  users: User[];
};

const UserList = (props: Props) => {
  const [search, setSearch] = useState("");

  const filteredUsers = props.users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  console.log(filteredUsers);

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        className="border"
      />

      <div>
        {filteredUsers.map((user) => (
          <ul key={user.id}>
            <li>{user.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default UserList;
