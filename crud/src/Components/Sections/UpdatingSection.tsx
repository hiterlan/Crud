import Axios from "axios";
import React from "react";
import { useState } from "react";
import AuthContext from "../Providers/Auth";
import { Popover } from "@headlessui/react";

interface UpdatingSectionProps {
  id: number;
  user: string;
  date: Date;
  password: string;
  data: string;
}

export function UpdatingSection(props: UpdatingSectionProps) {
  // Tornar a UpdatingSection correspondente ao bd
  const dateToCard = new Date(props.date);
  const dateToRender = dateToCard.toLocaleString();
  let dateSaved = false;
  if (dateToRender != "Invalid Date") {
    dateSaved = true;
  }
  const userValue = props.user;
  let userSaved = false;
  if (userValue != null) {
    userSaved = true;
  }
  const passwordInfo = props.password;
  let passwordSaved = false;
  if (passwordInfo != "") passwordSaved = true;

  const [includeDate, setIncludeDate] = useState(dateSaved);
  const [includeUser, setIncludeUser] = useState(userSaved);
  const [includePassword, setIncludePassword] = useState(passwordSaved);

  const [user, setUser] = useState(props.user);
  const [password, setPassword] = useState(props.password);
  const [data, setData] = useState(props.data);

  const updateData = async (id: number) => {
    const date = new Date();
    let dateconverted;
    if (!includeDate) {
      dateconverted = "0000-00-00 00:00:00";
    } else {
      dateconverted =
        date.getFullYear() +
        "-" +
        ("00" + (date.getMonth() + 1)).slice(-2) +
        "-" +
        ("00" + date.getDate()).slice(-2) +
        " " +
        ("00" + date.getHours()).slice(-2) +
        ":" +
        ("00" + date.getMinutes()).slice(-2);
    }

    if (!includeUser) setUser("");

    if (!includePassword) setPassword("");

    await Axios.put(`http://localhost:3001/api/update/${id}`, {
      data_content: data,
      data_time: dateconverted,
      data_user: user,
      data_password: password,
    });
    getCardList();
  };

  const { getCardList } = React.useContext(AuthContext);

  return (
    <div className="w-2/4 h-96 flex flex-col bg-[#EFEFEF] mx-auto rounded-3xl font-['K2D'] font-bold  absolute top-32 left-0 right-0 ">
      <header className="flex justify-end">
        <Popover.Button className="close mr-2 focus:outline-none focus:text-blueh-200">
          +
        </Popover.Button>
      </header>
      <form className="flex items-start">
        <div className="flex flex-col w-1/2 mx-4">
          <label>Edite o Registro </label>
          <textarea
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="w-full mt-4 p-4 h-48 rounded-3xl resize-none focus:outline-none"
          />
        </div>
        <div className="flex flex-col w-1/2 mx-4">
          <label>Começar a incluir ou excluir...</label>
          <label className="py-2 m-2">
            Quando foi salvo?
            <input
              checked={includeDate}
              type="checkbox"
              className="bg-transparent appearance-none align-middle m-2 h-4 w-4 border  focus:border-blueh-200  focus:outline-none transition duration-200 "
              onChange={(e) => setIncludeDate(!includeDate)}
            />
          </label>
          <label className="py-2 m-2">
            Por quem foi salvo?
            <input
              checked={includeUser}
              type="checkbox"
              className="bg-transparent appearance-none align-middle m-2 h-4 w-4 border  focus:border-blueh-200  focus:outline-none transition duration-200 "
              onChange={(e) => setIncludeUser(!includeUser)}
            />
            <input
              type="text"
              className="px-1.5 py-1 text-sm focus:border-blueh-200  focus:outline-none rounded-lg transition duration-400"
              disabled={!includeUser}
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </label>
          <label className="py-2 m-2">
            Senha
            <input
              checked={includePassword}
              type="checkbox"
              className="bg-transparent appearance-none align-middle m-2 h-4 w-4 border   focus:outline-none transition duration-200 "
              onChange={(e) => setIncludePassword(!includePassword)}
            />
            {<br></br>}
            <input
              type="password"
              className="px-1.5 py-1 text-sm focus:outline-none rounded-lg transition duration-400"
              disabled={!includePassword}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
      </form>
      <button
        onClick={() => {
          updateData(props.id);
        }}
        className="p-2 bg-gray-400 text-center w-20 rounded-3xl m-2 ml-auto mr-8 hover:bg-ciane-500 transition duration-500 hover:text-white focus:border-blueh-200  focus:outline-none"
      >
        Salvar
      </button>
    </div>
  );
}
