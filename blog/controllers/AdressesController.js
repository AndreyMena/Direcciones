const adress = require('../models').adress;

class AdressesController {
    async index(req, res, next) {
        const adresses = await adress.findAll();
        if (req.session.flashMessage) {
            res.render('adresses/index', { title: 'Weblog', adresses: adresses, flashMessage: req.session.flashMessage });
        }
        else {
            res.render('adresses/index', { title: 'Weblog', adresses: adresses});
        }
    }

    async create(req, res, next) {
        if (req.method === 'POST') {
            await adress.create({ title: req.body.title, body: req.body.body });
            res.redirect('/adresses');
        }
        else {
            res.render('adresses/create', { title: 'Weblog, crear'});
        }
    }

    async update(req, res, next) {
        if (req.method === 'POST') {
            await adress.update(
            {
                title: req.body.title,
                body: req.body.body
            },
            {
                where: {
                    id: req.params.id
                }
            });
            res.redirect('/adresses');
        }
        else {
            const adress = await adress.findOne({
                where: {
                    id: req.params.id
                }
            });
            res.render('adresses/update', { title: 'Weblog, editar', adress: adress});
        }
    }

    async delete(req, res, next) {
        await adress.destroy({
            where: {
                id: req.params.id
            }
        });
        req.session.flashMessage = 'Se eliminó la publicación';
        res.redirect('/adresses');
    }

}

module.exports = AdressesController;