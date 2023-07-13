import { useApp } from "@/data/hook/useApp";
import { Form } from "@/components/molecules/Form";
import { ResultCard } from "@/components/molecules/ResultCard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { cep } = useApp();

  return (
    <>
      <ToastContainer />
      <Form />

      {cep.cep !== "" && (
        <ResultCard
          cep={cep.cep}
          logradouro={cep.logradouro}
          complemento={cep.complemento}
          localidade={cep.localidade}
          bairro={cep.bairro}
          uf={cep.uf}
        />
      )}
    </>
  );
}

export default App;
