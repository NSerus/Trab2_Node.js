//Import Person Model
Person = require('./personModel');

//listar novos casos
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
            message: "Obtido os casos novos com sucesso",
            novos_casos: casos
        });
    });
};

exports.inter = function (req, res) {
    var internados = [];
    Person.get(function (err, person) {
        
        if (err)
            res.json({
                status: "error",
                message: err
            });
        for(var i=0;i<person.length;i++){
            internados.push(person[i].casos_internados);
        }
        res.json({
            status: "OK",
            message: "Obtido as pessoas internadas com sucesso",
            internados: internados
        });
    });
};

exports.max = function (req, res) {
    var max=0;
    Person.get(function (err, person) {
        
        if (err)
            res.json({
                status: "error",
                message: err
            });
        for(var i=0;i<person.length;i++){
            if(max<person[i].casos_novos){

            max = person[i].casos_novos;
            }
        }
        res.json({
            status: "OK",
            message: "Obtido as pessoas internadas com sucesso",
            internados: max
        });
    });
};

exports.min = function (req, res) {
    var min=100000;
    Person.get(function (err, person) {
        
        if (err)
            res.json({
                status: "error",
                message: err
            });
        for(var i=0;i<person.length;i++){
            if(min>person[i].casos_novos){

            min = person[i].casos_novos;
            }
        }
        res.json({
            status: "OK",
            message: "Obtido as pessoas internadas com sucesso",
            internados: min
        });
    });
};

exports.med = function (req, res) {
    var med=0;
    Person.get(function (err, person) {
        
        if (err)
            res.json({
                status: "error",
                message: err
            });
        for(var i=0;i<person.length;i++){
            

            med += person[i].casos_novos;
            
        }
        med = med/person.length;
        res.json({
            status: "OK",
            message: "Obtido as pessoas internadas com sucesso",
            internados: Math.round(med)
        });
    });
};

exports.tot = function (req, res) {
    var tot=0;
    Person.get(function (err, person) {
        
        if (err)
            res.json({
                status: "error",
                message: err
            });
        for(var i=0;i<person.length;i++){

            tot += person[i].casos_novos;
            
        }
        res.json({
            status: "OK",
            message: "Obtido as pessoas internadas com sucesso",
            internados: tot
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
