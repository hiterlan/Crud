export function PageType() {
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
}
