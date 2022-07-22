import { DeleteButton } from "./Buttons/DeleteButton";
import { EditButton } from "./Buttons/EditButton";
import { ListButton } from "./Buttons/ListButton";

interface CardProps {
  id: number;
  buttonType: "edit" | "delete" | "list";
  user: string;
  date: Date;
  data: string;
  password: string;
}

export function Card(props: CardProps) {
  const dateToCard = new Date(props.date);
  const dateToRender = dateToCard.toLocaleString();

  return (
    <div className="bg-white w-11/12 h-56 rounded-3xl m-4 inline-block">
      <header className="flex justify-between p-3 pb-2 pt-4">
        <p>{props.user}</p>
        {dateToRender != "Invalid Date" ? (
          <p className="text-xs">
            Dia {dateToRender.substring(0, 10)}
            <br />
            Ás {dateToRender.substring(11, 16)}
          </p>
        ) : (
          <p className="text-xs">
            {"-"}
            <br />
            {"-"}
          </p>
        )}
      </header>
      <div className="flex flex-col justify-between h-40">
        <p className="text-sm p-4 break-words">
          {props.data.length < 100
            ? props.data
            : props.data.substring(0, 100) + "[...]"}
        </p>
        {props.buttonType === "delete" && <DeleteButton id={props.id} />}
        {props.buttonType === "edit" && (
          <EditButton
            data={props.data}
            date={props.date}
            user={props.user}
            id={props.id}
            password={props.password}
          />
        )}
        {props.buttonType === "list" && (
          <ListButton data={props.data} user={props.user} date={props.date} />
        )}
      </div>
    </div>
  );
}
