import { createContext, useState } from "react";
import { CreateAccount } from "./sections/CreateAccount/CreateAccount";
import { CreateAccountInfo } from "./sections/CreateAccountInfo/CreateAccountInfo";
import cls from "./LogIn.module.scss"

export enum createAccVariationsTypes {
  CREATE_ACC = "create_acc",
  CREATE_SET_INFO = "set_info",
}

interface CreateAccContextTypes {
  createAccVariation?: createAccVariationsTypes;
  setCreateAccVariation?: (prev: createAccVariationsTypes) => void;
}

export const CreateAccContext = createContext<CreateAccContextTypes>({});

export const LogIn = () => {
  const [createAccVariation, setCreateAccVariation] =
    useState<createAccVariationsTypes>(createAccVariationsTypes.CREATE_ACC);

  const setPageContent = () => {
    switch (createAccVariation) {
      case createAccVariationsTypes.CREATE_ACC:
        return <CreateAccount />;
      case createAccVariationsTypes.CREATE_SET_INFO:
        return <CreateAccountInfo />;
      default:
        return null;
    }
  };

  return (
    <div className={cls.logIn}>
      <CreateAccContext.Provider
        value={{ createAccVariation, setCreateAccVariation }}
      >
        {setPageContent()}
      </CreateAccContext.Provider>
    </div>
  );
};
