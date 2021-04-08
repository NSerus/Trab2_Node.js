//Import Person Model
Person = require('./personModel');

//Para index
exports.index = function (req, res) {
    Person.get(function (err, person) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "OK",
            message: "Obtidas Persons com Sucesso",
            data: person 
        });
    });
};

//Criar nova Person
exports.add = function (req, res) {
    var person= new Person();
    person.data = req.body.data? req.body.data: person.data;
    person.casos_novos = req.body.casos_novos;
    person.casos_internados = req.body.casos_internados;

    //Guardar e verificar erros
    person.save(function (err) {
        if (err)
            res.json(err);

        res.json({
            message: "Nova Person Adicionada!",
            data: person
        });
    });
};

// Ver Person
exports.view = function (req, res) {
    Person.findById(req.params.person_id, function (err, person) {
        if (err)
            res.send(err);
        res.json({
            message: 'Detalhes da Person',
            data: person
        });
    });
};

// Atualizar Person
exports.update = function (req, res) {
    Person.findById(req.params.person_id, function (err, person) {
        if (err)
            res.send(err);
            person.nome = req.body.nome ? req.body.nome : person.nome;
            person.email = req.body.email;
            person.telef = req.body.telef;
            person.morada = req.body.morada;

        //Guardar e verificar erros
        person.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Person Updated Successfully",
                data: person
            });
        });
    });
};

// Apagar Person
exports.delete = function (req, res) {
    Person.deleteOne({
        _id: req.params.person_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "OK",
            message: 'Person Eliminada!'
        });
    });
};