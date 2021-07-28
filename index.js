var database = require("./database");

var dados = [{
    nome: "Nome teste",
    preco: 59.99
},
{
    nome: "Nome teste 2",
    preco: 19.99
}

]

async function insert() {
    database.insert(dados).into("games").then(data => {
        database.select().table("games").then(item => {
            console.log(item);
        }).catch(error => {
            console.log(error);
        })

    }).catch(err => {
        console.log(err);

    });
}


async function select() {
    var query = database.select(["id", "preco"])
        // .where({nome: "Nome teste 2"})
        //.orWhere({id: 2})
        .whereRaw("preco > 20")
        .table("games").then(dados => {
            console.log(dados);
        }).catch(error => {
            console.log(error);
        });

}

async function selectRaw() {
    var anotherQuery = database.raw("select * from games").then(dados => {
        console.log(dados);
    }).catch(error => {
        console.log(error);
    });

}

async function update() {
    database.where({ id: 3 }).delete().table("games").then(dados => {
        console.log(dados);
    }).catch(error => {
        console.log(error);
    });
}

async function update() {
    database.where({ id: 5 }).update({ preco: 40 }).table("games").then(dados => {
        console.log(dados);
    }).catch(error => {
        console.log(error);
    });
}

async function selectOrder() {
    var query = database.select()
        .table("games")
        .orderBy("preco", "desc")
        .then(dados => {
            console.log(dados);
        }).catch(error => {
            console.log(error);
        });
}


async function innerJoin() {
    //leftJoin
    //rightJoin
    var query = database.select(["games.*", "estudio.nome as nomeEstudio"])
        .table("games")
        .innerJoin("estudio", "estudio.id", "games.estudio")
        .then(dados => {
            console.log(dados);
        }).catch(error => {
            console.log(error);
        });
}


async function testeTransacional() {
    try {
        await database.transaction(async trans => {
            await database.insert(dados).into("games");
            await database.insert({ nome: "teste" }).table("estudio");

            //Erro proposital
            await database.insert({ nome: "teste" }).table("estudidasdasdo");
        });
    } catch (err) {
        console.log(err);
    }
}

testeTransacional();