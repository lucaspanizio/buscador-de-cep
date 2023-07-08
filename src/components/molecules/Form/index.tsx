import { useApp } from "@/data/hook/useApp";
import { Alert } from "@/components/atoms/Alert";
import { FiSearch } from "react-icons/fi";
import { formatZipCode } from "@/utils/formatZipCode";
import api from "@/services/api";
import {
  Container,
  Title,
  ContainerSearch,
  InputSearch,
  ButtonSearch,
} from "./styles";

export const Form: React.FC = () => {
  const { input, setInput, setCep, resetCep } = useApp();

  async function handleSearch() {
    if (input === "") {
      Alert({ type: "error", text: "Preencha um cep válido!" });
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      if (response.data.erro) {
        Alert({
          type: "error",
          text: "Cep inválido!",
        });
      }
      setCep?.(response.data);
    } catch {
      Alert({
        type: "error",
        text: "Ops, ocorreu algum erro ao buscar este cep!",
      });
      resetCep?.();
    } finally {
      setInput?.("");
    }
  }

  function handleKeyPress(event) {
    resetCep?.();
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    } else {
      setInput?.(formatZipCode(event.target.value));
    }
  }

  return (
    <Container>
      <Title>Buscador de CEP</Title>
      <ContainerSearch>
        <InputSearch
          type="text"
          placeholder="Digite um cep ..."
          value={input}
          maxLength={9}
          onChange={(e) => setInput?.(e.target.value)}
          onKeyUp={(e) => handleKeyPress(e)}
        />
        <ButtonSearch onClick={handleSearch}>
          <FiSearch size={25} color={"#FFF"} />
        </ButtonSearch>
      </ContainerSearch>
    </Container>
  );
};
