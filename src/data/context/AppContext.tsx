import { createContext, useState } from "react";
import ICepProps from "../../interfaces/cep";

type TAppContext = {
  input: string;
  cep: ICepProps;
  setInput?: (text: string) => void;
  setCep?: (cep: ICepProps) => void;
  resetCep?: () => void;
};

const defaultCep = {
  cep: "",
  logradouro: "",
  complemento: "",
  localidade: "",
  bairro: "",
  uf: "",
};

const AppContext = createContext<TAppContext>({
  input: "",
  cep: defaultCep,
});

export function AppProvider(props: React.PropsWithChildren) {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState<ICepProps>(defaultCep);

  const resetCep = () => {
    setCep(defaultCep);
  };

  return (
    <AppContext.Provider
      value={{
        input,
        setInput,
        cep,
        setCep,
        resetCep,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext };
