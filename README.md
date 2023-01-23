# Para fazer funcionar

Apenas de um "npm install" / "yarn" apóes a clonagem do repositório.
Após isso rode o comando "npm run dev"/ "yarn dev" para rodar a aplicação.

# Detalhes do projeto

Alguns SVGs da pasta "/assets" são apenas para itens mocados por exemplo um produto 
que não possui uma imagem

## Componentes

A aplicação possui 7 componentes. Eles estão sendo importados no arquivo "index.ts"
dentro da pasta de "/components". Isso está sendo feito para ser usado uma das facilidades
do webpack de "resolvers alias" onde posso encurtar o caminho de importação dos arquivos 
deixando o código assim mais limpo.

O componente onde está a lista de Todos os produtos é o "AllProducts", lá você encontrará 
a table que possui todos os itens da tabela, seus arquivos de estilização estão na pasta de 
"./styles/components/AllProducts.ts".

Foi ultilizado como maneira de estilização o Stitches.

A lista de Produtos mais vendidos estão dividas em 2 componentes o "BestSellers" onde está o container 
dessa lista e "ProductBestSeller onde estou cuidando especificamente de cada item da interação que acontece
no componente container.

Temos também 2 componente simples de Header e Button.

Os ultimos componentes são o "ProductFinder" onde estão os botões de filtro e o input para
digitar o nome de qualquer produto. E o componente de Modal, onde está o formulário para cadastro de
um novo produto.

# Contextos
Também possuimos um arquivo de context onde estão todas as lógicas cruciais do sistema.

# Hooks
É onde está o hook criado chamado "usePagination" responsável pela paginação tanto da tabela quanto
da lista de mais vendidos.

# Interfaces

É onde estão todas as interfaces e um type do projeto.

# Server
É aqui que está sendo usado o miragejs, admito que foi implementado de forma bem simples com apenas 2 rotas.
