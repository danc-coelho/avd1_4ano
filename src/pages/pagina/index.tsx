import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { } from "./styles";

interface User {
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
}

const Home: React.FC = () => {
  const dbName = "@GithubExplorer:avd1";

  const [users, setUser] = useState<User[]>(() => {
    const storagedUsers = localStorage.getItem(dbName);
    return storagedUsers ? JSON.parse(storagedUsers) : [];
  });

  useEffect((): void => {
    localStorage.setItem(
      dbName,
      JSON.stringify(users),
    );
  }, [users]);

  function handleAddUser(): void {
    const user: User = {
      nome: ((document.getElementById("nome")) as HTMLInputElement).value,
      email: ((document.getElementById("email")) as HTMLInputElement).value,
      cpf: ((document.getElementById("cpf")) as HTMLInputElement).value,
      telefone: ((document.getElementById("telefone")) as HTMLInputElement).value,
    };

    setUser([...users, user]);
  }

  return (
    <>
      <ul>
        {users.map((user) => (
          <li>
            <a key={user.cpf} href={`/details/${user.cpf}`}>
              {user.nome}
            </a>
          </li>
        ))}
      </ul>
      <input type="text" placeholder="nome" id="nome" />
      <input type="text" placeholder="email" id="email" />
      <input type="text" placeholder="cpf" id="cpf" />
      <input type="text" placeholder="telefone" id="telefone" />
      <button type="button" onClick={handleAddUser}>Adicionar</button>
    </>
  );
};

export default Home;
