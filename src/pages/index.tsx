import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClient from "../hooks/useClient";

export default function Home() {
  const {
    clientes,
    exibirTabela,
    tableVisivel,
    novoCliente,
    salvarCliente,
    cliente,
    selecionarCliente,
    excluirCliente,
  } = useClient();

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <Layout title="Cadastro Simples">
        {tableVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao onClick={novoCliente} cor="green" className="mb-4">
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario
            cancelado={exibirTabela}
            clienteMudou={salvarCliente}
            clinte={cliente}
          />
        )}
      </Layout>
    </div>
  );
}
