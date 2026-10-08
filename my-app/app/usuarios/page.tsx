import UserList from "./UserList";

type Props = {};

const Usuarios = async (props: Props) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Erro ao buscar usuários");
  }

  const data = await response.json();
  
  return (
    <div>
      <h1>Lista de Usuários</h1>

      <UserList users={data}/>
      
    </div>
  );
};

export default Usuarios;
