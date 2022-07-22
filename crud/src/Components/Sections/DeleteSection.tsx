import React from "react";
import { Card } from "../Card";
import { Header } from "../Header";
import AuthContext from "../Providers/Auth";

export function DeleteSection() {
  const { getPrivateCards } = React.useContext(AuthContext);
  const { cardList } = React.useContext(AuthContext);

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
                key={card.data_id}
                id={card.data_id}
                user={card.data_user}
                date={card.data_time}
                data={card.data_content}
                password={card.data_password}
                buttonType={"delete"}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
