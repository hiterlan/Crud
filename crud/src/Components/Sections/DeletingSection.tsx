import Axios from "axios";
import React from "react";
import { Popover } from "@headlessui/react";
import AuthContext from "../Providers/Auth";

interface DeletingProps {
  id: number;
}
export function DeletingSection(props: DeletingProps) {
  const { getCardList } = React.useContext(AuthContext);
  const deleteData = async (id: number) => {
    await Axios.delete(`http://localhost:3001/api/delete/${id}`);
    getCardList();
  };

  return (
    <>
      <div className="w-1/3 h-80 flex flex-col  bg-[#EFEFEF] mx-auto rounded-3xl justify-around font-['K2D'] font-bold  absolute top-32 left-0 right-0 items-center">
        <p>Tem certeza que deseja apagar?</p>
        <div className="flex-row justify-around">
          <button
            onClick={() => deleteData(props.id)}
            className="rounded-3xl h-10 w-24 bg-gray-400 hover:text-white transistion duration-500 py-1.5 px-4 text-black mx-8 focus:text-white focus:outline-none "
          >
            Sim
          </button>
          <Popover.Button className="rounded-3xl h-10 w-24  bg-gray-400 hover:text-white transistion duration-500 py-1.5 px-4 text-black mx-8 focus:text-white focus:outline-none">
            Não
          </Popover.Button>
        </div>
      </div>
    </>
  );
}
