import Client from "../core/Client";
import { IconeEdit, IconeTrash } from "./Icones";

interface TabelaProps {
  clientes: Client[];
  clienteSelecionado?: (cliente: Client) => void;
  clienteExcluido?: (cliente: Client) => void;
}

export default function Tabela(props: TabelaProps) {
  const exibirAcoes = props.clienteExcluido || props.clienteSelecionado;

  function renderizarCabecalho() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {exibirAcoes ? <th className="p-4">Ações</th> : null}
      </tr>
    );
  }

  function renderizarDados() {
    return props.clientes?.map((cliente, i) => {
      return (
        <tr
          key={cliente.id}
          className={`${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}
        >
          <td className="text-left p-4">{cliente.id}</td>
          <td className="text-left p-4">{cliente.nome}</td>
          <td className="text-left p-4">{cliente.idade}</td>
          {exibirAcoes ? renderizaAcoes(cliente) : null}
        </tr>
      );
    });
  }

  function renderizaAcoes(cliente: Client) {
    return (
      <td className="flex justify-center">
        {props.clienteSelecionado ? (
          <button
            onClick={() => props.clienteSelecionado?.(cliente)}
            className="flex justify-center items-center text-green-600 rounded-full hover:bg-purple-50 p-2 m-1"
          >
            {IconeEdit}
          </button>
        ) : null}
        {props.clienteExcluido ? (
          <button
            onClick={() => props.clienteExcluido?.(cliente)}
            className="flex justify-center items-center text-red-500 rounded-full hover:bg-purple-50 p-2 m-1"
          >
            {IconeTrash}
          </button>
        ) : null}
      </td>
    );
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className="bg-gradient-to-r from bg-purple-500 to-purple-800 text-gray-100">
        {renderizarCabecalho()}
      </thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  );
}
