*** Curso - Trabalhando com APIs ***

* Por que aprender API? 
- Nos ajudam a trocar informações entre sistemas;
- Não necessáriamente sistemas fechados entre uma mesma empresa;
- É possível acessar sistemas públicos e trabalhar com suas informaçãoes;
- Exemplo: login com o google;
- A sua principal funcionalidade é promover comunicação entre sistemas de forma *PADRONIZADA*.

* O que é API? 
- Serviço de requerimentos que promove a comunicação entre cliente e servidor;
- Responsável pelo fluxo de requisições e respostas de um sistema;
- Exemplo real:
- - *Customer* <= Submit oredr / Response => *Online Store* <= Contact / Response => *Payment Gateway*

* JSON - Conhecendo o format0
- JSON é um formato de arquivo leve feito para troca de dados;
- Fácil para humanos lerem e escreverem e para máquinas extrair dados interessantes pro sistema;
- Pode ser usado por qualquer linguagem;
- Referências: json.org/json-en.html

```json
{
    "nome": "meu nome", // Json é formado por chaves e valores => "chave": "valor"
    "cidade": "minha cidade", // A sintaxe é arbitrária e não registra informações que não sigam
    "telefone": 21999999999, // O Json recebe valores booleanos, Strings, Numbers, Arrays e Objetos
    "livros_favoritos": [
        "LIVRO 1",
        "LIVRO 2",
        "LIVRO 3"
    ],
    "hobbies": {
        "semanal": "hobby semanal",
        "fins_de_semana": {         // Os objetos dentro de um json pôdem conter outros objetos
            "sabado": "hobby de sabado",
            "domingo": "hobby de domingo",
            "outros": [             // E assim sucessivamente, inclusive com outras arrays.
                "caminhada",
                "volei",
                "netflix"
            ]    
        } // os valores das chaves não podem conter espaços
    }
    
}
```
- Dessa forma, criar um arquivo para ser consumido por um API torna-se simples para se escrever e ler, e rápido para uma máquina rastrear as informações.

* Métodos HTTP - Métodos presentes no próprio navegador
- GET: É responsável por realizar um requerimento pelo navegador.
- POST: É usado quando se deseja enviar informações para uma API;
- DELETE: É usado para passar identificadores, para uma API, de um registro que deve ser apagado;
- PUT: É usado para enviar atualizações para um servidor através de uma API;
- PATCH: Também é usado para realiar atualizações via API. A diferença para o PUT é que o PATCH envia apenas atualizações de um único registro enquanto o PUT pode enviar multiplos registros a serem atualizados por vez.

* Insominia
- Programa que será usado durante o curso para realizar as requisições pelo navegador.
- É um site com recursos básicos como criar coleções de requisições
- Por padrão, só é possível realizar o método GET através do navegador. O uso do Insominia permite realizar as demais requisições e métodos HTTP;