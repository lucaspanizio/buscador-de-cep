import ICepProps from "@/interfaces/cep";
import { useApp } from "@/data/hook/useApp";
import { Span } from "@/components/atoms/Span";
import { ButtonCopy } from "@/components/molecules/ButtonCopy";
import { Container } from "./styles";

export const ResultCard = (props: ICepProps) => {
  const { input } = useApp();
  const result = [
    {
      description: "CEP",
      value: props.cep,
    },
    {
      description: "Logradouro",
      value: props.logradouro,
    },
    {
      description: "Complemento",
      value: props.complemento,
    },
    {
      description: "Bairro",
      value: props.bairro,
    },
    {
      description: "Localidade",
      value: props.localidade,
    },
    {
      description: "UF",
      value: props.uf,
    },
  ];

  return (
    <>
      {props.cep && input === "" && (
        <Container>
          {result.map((item) => {
            return <Span description={item.description} value={item.value} />;
          })}
          <ButtonCopy data_cep={result} />
        </Container>
      )}
    </>
  );
};
