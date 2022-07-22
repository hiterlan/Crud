import { Card } from "../Card";
import { Header } from "../Header";
import React from "react";
import AuthContext from "../Providers/Auth";

export function ListSection() {
  const { cardList } = React.useContext(AuthContext);
  const { getPrivateCards } = React.useContext(AuthContext);

  function takePassword(password: string) {
    getPrivateCards(password);
  }

  return (
    <>
      <div className="w-3/5 bg-gray-300 mx-auto mt-6 rounded-3xl font-['K2D'] font-bold items-start">
        <Header takePassword={takePassword} />
        <div className="grid grid-cols-2">
          {cardList.map((card: any) => {
            return (
              <Card
                id={card.data_id}
                user={card.data_user}
                date={card.data_time}
                data={card.data_content}
                password={card.data_password}
                buttonType="list"
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
