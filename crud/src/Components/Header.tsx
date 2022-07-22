import { useState } from "react";

interface HeaderProps {
  takePassword: (password: string) => void;
}

export function Header({ takePassword }: HeaderProps) {
  const [password, setPassword] = useState("");
  return (
    <header>
      <label className="p-4 ">
        Colocar Senha:
        <input
          type="password"
          className="rounded-3xl p-1 px-2 m-8 focus:outline-none"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          onClick={() => {
            takePassword(password);
          }}
          className="rounded-3xl  bg-gray-400 hover:bg-ciane-500 transition duration-500 hover:text-white py-1.5 px-4 text-black  focus:bg-ciane-500 focus:outline-none focus:text-white"
        >
          Ok
        </button>
      </label>
    </header>
  );
}
