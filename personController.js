//Import Person Model
Person = require('./personModel');

//Para index
exports.novos = function (req, res) {
    var casos = [];
    Person.get(function (err, person) {
        
        if (err)
            res.json({
                status: "error",
                message: err
            });
        for(var i=0;i<person.length;i++){
            casos.push(person[i].casos_novos);
        }
        res.json({
            status: "OK",
            message: "Obtidas Persons com Sucesso",
            novos_casos: casos
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
