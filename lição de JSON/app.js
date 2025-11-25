const express = require('express');
const app = express();
app.use(express.json());

let data = require('./data'); // importa o JSON


// GET - Listar todos

app.get("/Salgados", (req, res) => {
    res.json(data.Salgados);
});



// GET - Buscar por ID

app.get("/Salgados/:ID", (req, res) => {
    const ID = Number(req.params.ID);

    // procura um salgado específico
    const salgado = data.Salgados.find(s => s.ID === ID);

    if (!salgado) {
        return res.status(404).send("Salgado não encontrado!");
    }

    res.json(salgado);
});



// POST - Criar novo

app.post("/Salgados", (req, res) => {
    const novoSalgado = req.body;

    // corrigido: length usado corretamente
    if (data.Salgados.length > 0) {
        novoSalgado.ID = data.Salgados[data.Salgados.length - 1].ID + 1;
    } else {
        novoSalgado.ID = 1;
    }

    data.Salgados.push(novoSalgado);
    res.status(201).json(novoSalgado);
});



// PUT - Editar um

app.put("/Salgados/:ID", (req, res) => {
    const ID = Number(req.params.ID);
    const salgado = data.Salgados.find(s => s.ID === ID);

    if (!salgado) {
        return res.status(404).json({ error: "Salgado não encontrado" });
    }

    // Update dos campos
    salgado.nome = req.body.nome;
    salgado.preco = req.body.preco;
    salgado.disponivel = req.body.disponivel;

    res.json(salgado);
});



// DELETE - Remover um

app.delete("/Salgados/:ID", (req, res) => {
    const ID = Number(req.params.ID);

    const index = data.Salgados.findIndex(s => s.ID === ID);

    if (index === -1) {
        return res.status(404).json({ error: "Salgado não encontrado" });
    }

    const removido = data.Salgados.splice(index, 1);

    res.json({
        message: "Salgado removido com sucesso",
        removido: removido[0]
    });
});



// PORTA DO SERVIDOR

app.listen(6000, () => {
    console.log("Server running on port 6000");
});
