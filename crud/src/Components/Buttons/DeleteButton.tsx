import { Popover } from "@headlessui/react";
import { useState } from "react";
import { DeletingSection } from "../Sections/DeletingSection";

interface DeleteProps {
  id: number;
}

export function DeleteButton(props: DeleteProps) {
  return (
    <Popover className="flex justify-end">
      <Popover.Button className="rounded-3xl w-24 bg-gray-400 hover:bg-rediz-200 hover:text-white transistion duration-500 py-1.5 px-4 text-black m-2 focus:bg-rediz-200 focus:text-white focus:outline-none border-0">
        Apagar
      </Popover.Button>
      <Popover.Panel>
        <DeletingSection id={props.id} />
      </Popover.Panel>
    </Popover>
  );
}
