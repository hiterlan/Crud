import Axios from "axios";
import { FormEvent, useState } from "react";
import { dateAnalysis } from "../Helpers/DateAnalysis";

export function Registry() {
  const [includeDate, setIncludeDate] = useState(false);
  const [includeUser, setIncludeUser] = useState(false);
  const [includePassword, setIncludePassword] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");

  const submitData = (event: FormEvent) => {
    event.preventDefault();
    const date = new Date();
    const data_time = includeDate ? dateAnalysis(date) : "0000-00-00 00:00:00";
    const data_user = includeUser ? user : "";
    const data_password = includePassword ? password : "";

    Axios.post("http://localhost:3001/api/insert", {
      data_content: data,
      data_time,
      data_user,
      data_password,
    }).then(() => {
      alert("Enviado com Sucesso");
    });
  };
  return (
    <form>
      <div className="w-3/5 h-96 bg-gray-300 mx-auto mt-6 rounded-3xl font-['K2D'] font-bold flex items-start ">
        <div className="flex flex-col w-1/2 m-4 p-4">
          <label>O que deseja registrar?</label>
          <textarea
            onChange={(e) => setData(e.target.value)}
            className="w-4/5 mt-4 py-4 p-2 h-40 rounded-3xl resize-none focus:outline-none overflow-y-hidden"
          />
        </div>
        <div className="flex flex-col w-1/2 m-4 p-4">
          <label>Deseja incluir...</label>
          <label className="py-2 m-2">
            Quando foi salvo?
            <input
              type="checkbox"
              className="bg-transparent appearance-none align-middle m-2 h-4 w-4 border focus:border-blueh-200  focus:outline-none transition duration-200 "
              onChange={(e) => setIncludeDate(!includeDate)}
            />
          </label>
          <label className="py-2 m-2">
            Por quem foi salvo?
            <input
              type="checkbox"
              className="bg-transparent appearance-none align-middle m-2 h-4 w-4 border focus:border-blueh-200  focus:outline-none transition duration-200 "
              onChange={(e) => setIncludeUser(!includeUser)}
            />
            <input
              type="text"
              className="px-1.5 py-1 text-sm focus:outline-none rounded-lg"
              disabled={!includeUser}
              onChange={(e) => setUser(e.target.value)}
            />
          </label>
          <label className="py-2 m-2">
            Senha
            <input
              type="checkbox"
              className="bg-transparent appearance-none align-middle m-2 h-4 w-4 border focus:border-blueh-200  focus:outline-none transition duration-200 "
              onChange={(e) => setIncludePassword(!includePassword)}
            />
            {<br></br>}
            <input
              type="password"
              className="px-1.5 py-1 text-sm focus:outline-none rounded-lg"
              disabled={!includePassword}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            disabled={!data}
            onClick={submitData}
            className="p-2 bg-gray-400 justify-end text-center w-20 content-end rounded-3xl m-4 ml-auto hover:bg-ciane-500 transition duration-500 hover:text-white focus:outline-none focus:bg-ciane-500 focus:text-white disabled:hover:bg-gray-400 disabled:opacity-70 disabled:hover:text-black"
          >
            Salvar
          </button>
        </div>
      </div>
    </form>
  );
}
