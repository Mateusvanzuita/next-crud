import { useState } from "react";
import Entrada from "./Entrada";
import Client from "../core/Client";
import Botao from "./Botao";

interface FormularioProps {
  clinte: Client;
  cancelado?: () => void
  clienteMudou?: (cliente: Client) => void
}

export default function Formulario(props: FormularioProps) {
  const id = props.clinte?.id;

  const [nome, setNome] = useState(props.clinte?.nome ?? "");
  const [idade, setIdade] = useState(props.clinte?.idade ?? "");
  return (
    <div>
      {id ? <Entrada className="mb-5" text="Código" value={id} somenteLeitura /> : false}

      <Entrada text="Nome" value={nome} type="text" valorMudou={setNome} className="mb-5" />
      <Entrada text="Idade" value={idade} type="number" valorMudou={setIdade} />
      <div className="flex justify-end mt-7">
        <Botao onClick={() => props.clienteMudou?.(new Client(nome, +idade, id))} cor="blue" className="mr-2">
    {id ? 'Alterar' : 'Salvar'}
        </Botao>
        <Botao onClick={props.cancelado} cor="gray">
          Cancelar
          </Botao>
      </div>
    </div>
  );
}
