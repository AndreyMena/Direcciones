const Adress = require('../models').Adresses;

class AdressesController {
    async index(req, res, next) {
        const adresses = await Adress.findAll();
        if (req.session.flashMessage) {
            res.render('adresses/index', { title: 'Direcciones', adresses: adresses, flashMessage: req.session.flashMessage });
        }
        else {
            res.render('adresses/index', { title: 'Direcciones', adresses: adresses});
        }
    }

    async create(req, res, next) {
        if (req.method === 'POST') {
            await Adress.create({
                Nombre: req.body.Nombre, 
                Apellidos: req.body.Apellidos, 
                TelCasa: req.body.TelCasa, 
                DireccionCasa: req.body.DireccionCasa, 
                TelTrabajo: req.body.TelTrabajo, 
                DireccionTrabajo: req.body.DireccionTrabajo, 
                Correo: req.body.Correo 
            });
            res.redirect('/adresses');
        }
        else {
            res.render('adresses/create', { title: 'Direcciones, crear'});
        }
    }

    async update(req, res, next) {
        if (req.method === 'POST') {
            await Adress.update(
            {
                Nombre: req.body.Nombre, 
                Apellidos: req.body.Apellidos, 
                TelCasa: req.body.TelCasa, 
                DireccionCasa: req.body.DireccionCasa, 
                TelTrabajo: req.body.TelTrabajo, 
                DireccionTrabajo: req.body.DireccionTrabajo, 
                Correo: req.body.Correo 
            },
            {
                where: {
                    id: req.params.id
                }
            });
            res.redirect('/adresses');
        }
        else {
            const adress = await Adress.findOne({
                where: {
                    id: req.params.id
                }
            });
            res.render('adresses/update', { title: 'Direcciones, editar', adress: adress});
        }
    }

    async delete(req, res, next) {
        await Adress.destroy({
            where: {
                id: req.params.id
            }
        });
        req.session.flashMessage = 'Se eliminó la publicación';
        res.redirect('/adresses');
    }

}

module.exports = AdressesController;