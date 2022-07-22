import { Popover } from "@headlessui/react";

interface ListingSectionProps {
  user: string;
  date: Date;
  data: string;
}

export function ListingSection(props: ListingSectionProps) {
  const date = new Date(props.date);
  const dateToRender = date.toLocaleString();

  return (
    <div className="w-2/4 h-96 flex flex-col bg-[#EFEFEF] mx-auto rounded-3xl font-['K2D'] font-bold  absolute top-32 left-0 right-0 p-4 pt-0 ">
      <header className="flex justify-end">
        <Popover.Button className="close mr-2 focus:outline-none focus:text-blueh-200">
          +
        </Popover.Button>
      </header>
      <div>
        <div className="flex justify-between py-4 ">
          <p>{props.user} </p>
          {dateToRender != "Invalid Date" ? (
            <p className="text-xs ">
              Dia {dateToRender.substring(0, 10)}
              <br />
              Ás {dateToRender.substring(10, 16)}
            </p>
          ) : (
            <p className="text-xs">
              {""}
              <br />
              {""}
            </p>
          )}
        </div>

        <p className="break-words p-4">{props.data}</p>
      </div>
    </div>
  );
}
