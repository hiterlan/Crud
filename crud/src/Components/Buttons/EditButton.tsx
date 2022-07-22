import React, { useState } from "react";
import { EditingSection } from "../Sections/EditingSection";
import { Popover } from "@headlessui/react";

interface EditButtonProps {
  id: number;
  user: string;
  date: Date;
  data: string;
  password: string;
}

export function EditButton(props: EditButtonProps) {
  return (
    <Popover className="flex justify-end">
      <Popover.Button className="rounded-3xl w-24 bg-gray-400 py-1.5 px-4 text-black m-2 self-end hover:bg-ciane-500 transition duration-500 hover:text-white focus:outline-none focus:text-white focus:bg-ciane-500">
        Editar
      </Popover.Button>
      <Popover.Panel>
        <EditingSection
          data={props.data}
          date={props.date}
          user={props.user}
          id={props.id}
          password={props.password}
        />
      </Popover.Panel>
    </Popover>
  );
}
