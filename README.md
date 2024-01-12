
# API REST "DateFinder" - Simplificando o Planejamento de Encontros

A API "DateFinder" é uma solução inovadora que visa aprimorar a experiência de planejar encontros românticos para casais. Em um mundo movimentado, onde o tempo muitas vezes é escasso, encontrar inspiração e organizar encontros especiais pode se tornar um desafio.
## Endpoints


#### GET Servidor (localhost:3000/):

Este endpoint pode ser usado para verificar se o servidor está em execução.

#### POST Criando Dates (http://localhost:3000/date): 
Criar uma nova ideia de encontro. Você pode enviar um POST com os detalhes do encontro no corpo da solicitação (por exemplo, título, endereço, custo, etc.).

#### GET Pegando Date por ID (http://localhost:3000/date/2): 
Permite obter os detalhes de uma ideia de encontro específica com base no ID fornecido. Substitua "2" pelo ID real da ideia de encontro que deseja recuperar.

#### PUT Atualizar Date por ID (http://localhost:3000/date/6): 
Use este endpoint para atualizar os detalhes de uma ideia de encontro existente com base no ID fornecido (substitua o 6 pelo id). Você pode enviar um PUT com os novos detalhes no corpo da solicitação (está configurado no controller as atualizações dos campos descrição, encontro duplo e custo).

#### Deletar por ID (http://localhost:3000/date/3): 
Este endpoint permite excluir uma ideia de encontro com base no ID fornecido. Substitua "3" pelo ID real da ideia de encontro que deseja excluir.
