import Axios, { AxiosResponse } from "axios";
import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react";

const PageTypes = {
  REGISTER: {
    buttonType: null,
  },
  UPDATE: {
    buttonType: "UPDATE",
  },
  DELETE: {
    buttonType: "DELETE",
  },
  LIST: {
    buttonType: "LIST",
  },
};
type PageType = keyof typeof PageTypes;

interface AuthContextData {
  pageType: PageType | null;
  setPageType: Dispatch<SetStateAction<PageType | null>>;
  cardList: never[];
  setCardList: Dispatch<SetStateAction<never[]>>;
  getCardList: () => Promise<void>;
  getPrivateCards: (password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [pageType, setPageType] = useState<PageType | null>(null);
  const [cardList, setCardList] = useState([]);

  const getCardList = async () => {
    Axios.get("http://localhost:3001/api/list").then((response) => {
      setCardList(response.data);
    });
  };
  useEffect(() => {
    getCardList();
  }, [pageType]);

  const getPrivateCards = async (password: string) => {
    Axios.get(`http://localhost:3001/api/catch/${password}`).then(
      (response) => {
        setCardList(response.data);
      }
    );
  };

  return (
    <AuthContext.Provider
      value={{
        pageType,
        setPageType,
        cardList,
        setCardList,
        getCardList,
        getPrivateCards,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
