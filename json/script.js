 
 //criar array de objetos em js( que sera convertido pra json depois)
 const objs= 
 [{
    "nome":"Matheus",
    "idade":30,
    "esta_trabalhando":true,
    "hobbies": ["nadar","assistir tv","correr","ler"],
    "detalhes_profissao": {
        "profissao": "Programador",
        "empresa":"empresa x"
    }
},


 
    {
        "nome":"Matheus",
        "idade":30,
        "esta_trabalhando":true,
        "hobbies": ["nadar","assistir tv","correr","ler"],
        "detalhes_profissao": {
            "profissao": "Programador",
            "empresa":"empresa x"
        }
    }
]

//Converter esses dados da const objs para JSON:
const jsonData = JSON.stringify(objs);
console.log(jsonData);

//receber dados em JSON e converter em objetos
const objData = JSON.parse(jsonData);
console.log(objData);

 