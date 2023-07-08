import { BiSolidCopyAlt } from "react-icons/bi";
import { Alert } from "@/components/atoms/Alert";
import { Container } from "./styles";

interface IButtonCopyProps {
  data_cep: { description: string; value: string }[];
}

export const ButtonCopy = ({ data_cep }: IButtonCopyProps) => {
  function handleCopy() {
    if (!navigator.clipboard) {
      return;
    }

    const text = data_cep
      .filter((item) => item.value)
      .map((item) => {
        return `${item.description}: ${item.value}`;
      });

    navigator.clipboard
      .writeText(text.join("\n"))
      .then(() => {
        Alert({
          type: "success",
          time: 2000,
          text: "Texto copiado para a área de transferência",
          position: "bottom-center",
          hideProgressBar: true,
        });
      })
      .catch(() => {
        Alert({
          type: "error",
          time: 2000,
          text: "Não foi possível copiar o texto para a área de transferência",
          position: "bottom-center",
          hideProgressBar: true,
        });
      });
  }

  return (
    <Container onClick={handleCopy}>
      <BiSolidCopyAlt />
    </Container>
  );
};
