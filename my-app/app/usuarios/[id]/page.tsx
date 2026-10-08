import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const Usuario = async ({ params }: Props) => {
  const { id } = await params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );

  if (!response.ok) {
    notFound();
  }

  const data = await response.json();

  return (
    <div>
      <h1>Usuário {id}</h1>

      <ul>
        <li>Name: {data.name}</li>
        <li>Email: {data.email}</li>
        <li>Phone: {data.phone}</li>
      </ul>
    </div>
  );
};

export default Usuario;
