# 🎉 Amigo Secreto

Bem-vindo ao projeto **Amigo Secreto**! Este projeto foi desenvolvido para facilitar a organização de um sorteio de Amigo Secreto de forma simples e divertida. Aqui, você pode adicionar amigos, sortear as combinações e visualizar os resultados do sorteio.

## 🎨 Tecnologias Utilizadas

- **HTML**: Estrutura da página.
- **CSS**: Estilização e layout da interface.
- **JavaScript**: Lógica de funcionamento para adicionar amigos, realizar o sorteio e reiniciar a lista.

## 🛠️ Funcionalidades

- **Adicionar Amigos**: Insira o nome de um amigo e clique em "Adicionar" para incluí-lo na lista.
- **Sorteio**: Após adicionar pelo menos 4 amigos, clique em "Sortear" para gerar as combinações do Amigo Secreto.
- **Reiniciar**: Limpa a lista de amigos e o resultado do sorteio para que você possa começar novamente.

## 💻 Como Funciona

1. **Adição de Amigos**: Os nomes dos amigos são recuperados através do input e armazenados em um array. A função valida se o campo está vazio ou se o nome já foi adicionado antes de incluir o nome na lista.
2. **Sorteio**: A função de sorteio embaralha os nomes utilizando um algoritmo de Fisher-Yates e gera as combinações, garantindo que cada amigo seja sorteado para outro.
3. **Função Reiniciar**: Reseta a lista de amigos e o resultado do sorteio, permitindo um novo sorteio desde o início.

## 📸 Screenshot

![Amigo Secreto](https://github.com/user-attachments/assets/88d581b4-c83b-42a6-b2bb-8e420cbf4d3e)


## 📝 Observações

- **Embaralhamento**: A função `embaralha()` usa o algoritmo Fisher-Yates para garantir que a ordem dos amigos seja aleatória antes do sorteio.
- **Manipulação de DOM**: Utiliza `innerHTML` para atualizar dinamicamente a lista de amigos e os resultados do sorteio.
- **Validação de Input**: O sistema valida entradas vazias e duplicadas para garantir uma experiência de usuário sem erros.

## 🚀 Como Executar

Para visualizar e testar o projeto, basta abrir o arquivo `index.html` no seu navegador.

## 🖼️ Design

O design do projeto é moderno e divertido, com cores vibrantes que trazem a energia do Amigo Secreto para a sua tela.

---

Feito com ❤️ por Natália
