import { Popover } from "@headlessui/react";
import { ListingSection } from "../Sections/ListingSection";

interface ListButtonProps {
  user: string;
  date: Date;
  data: string;
}

export function ListButton(props: ListButtonProps) {
  return (
    <Popover className="flex justify-end">
      <Popover.Button className="rounded-3xl w-24 bg-gray-400 py-1.5 px-4 text-black m-2 hover:bg-ciane-500 transition duration-500 hover:text-white focus:outline-none focus:text-white focus:bg-ciane-500">
        Listar
      </Popover.Button>
      <Popover.Panel>
        <ListingSection data={props.data} date={props.date} user={props.user} />
      </Popover.Panel>
    </Popover>
  );
}
