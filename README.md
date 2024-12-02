# Sistema de Registro de Usuários e Relatórios com Padrões de Projeto

## Descrição do Projeto

Neste projeto, foram implementados dois padrões de projeto: **Singleton** e **Decorator**.

### Problema abordado:
- **Padrão Singleton**: Criar um sistema de registro de usuários onde garantimos que apenas uma instância da classe de registro seja criada durante toda a execução do sistema. A implementação do Singleton assegura que a lista de usuários seja gerenciada por uma única instância, sem risco de múltiplas instâncias sendo criadas em diferentes momentos da execução.

- **Padrão Decorator**: O sistema de geração de relatórios permite que novos comportamentos (como cabeçalhos, rodapés, bordas e mudanças de cores) sejam adicionados dinamicamente a um relatório sem alterar o código original de geração de relatórios. O padrão Decorator é utilizado para estender a funcionalidade do relatório de forma modular e flexível.

### Como os padrões foram implementados:

1. **Singleton**: Implementamos um gerenciador de usuários (`RegistroDeUsuarios`) que assegura que a classe de registro seja instanciada apenas uma vez. Qualquer tentativa subsequente de criar uma nova instância retorna a instância já criada.

2. **Decorator**: Criamos uma classe `Relatorio` e decoradores como `DecoradorDeCabecalho`, `DecoradorDeRodape`, `DecoradorDeBorda`, e `DecoradorDeCores`. Esses decoradores permitem adicionar diferentes elementos ao relatório de forma modular. O uso de decoradores permite que diferentes combinações de formatação sejam aplicadas ao relatório sem a necessidade de modificar o código principal da classe `Relatorio`.

## Membros do Grupo

- [@RafaelMunarin](https://github.com/RafaelMunarin)
- [@danieljovenir](https://github.com/danieljovenir)

## Linguagem de Programação

O projeto foi desenvolvido em **JavaScript**, pois é uma linguagem amplamente utilizada no desenvolvimento de aplicações web interativas. O uso de JavaScript permite que as funcionalidades de manipulação de DOM, interação com o usuário e manipulação dinâmica de dados sejam feitas de forma eficiente e intuitiva.

## Como Instalar e Executar

1. **Pré-requisitos**: 
   - Certifique-se de ter um navegador moderno instalado (Chrome, Firefox, etc.).
   
2. **Instalação**:
   - Baixe ou clone o repositório:
     ```
     git clone https://github.com/RafaelMunarin/Design-Patterns.git
     ```
   
3. **Configuração**:
   - Não há necessidade de instalação de pacotes adicionais. O código está pronto para ser executado diretamente em um navegador.

4. **Execução**:
   - Abra o arquivo `index.html` em seu navegador.
   - O sistema de registro de usuários e a geração de relatórios estará disponível.

## Como Usar

1. **Registro de Usuários**: 
   - Insira o nome do usuário no campo de texto e clique no botão para adicionar. O nome será exibido em uma lista abaixo.

2. **Geração de Relatórios**:
   - Clique nos botões para gerar relatórios com diferentes funcionalidades decoradas (cabeçalho, rodapé, bordas, cores aleatórias).