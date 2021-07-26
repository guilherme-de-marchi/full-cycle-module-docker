const { peoples } = require('../models/index');


function get_all() {
    return peoples.findAll()
}

function get_all_where(where) {
    return peoples.findAll({ where: where });
}


function post(name) {
    return peoples.create({
        name: name
    });
}


module.exports.get = (req, res) => {
    if (!req.query.where || !req.query.equals)
        return get_all()
            .then(value => {
                res.json(value);
            })
            .catch(err => {
                res.status(400).json({ error: 'something went wrong' });
                console.log(err);
            })

    return get_all_where({ [req.query.where]: req.query.equals })
        .then(value => {
            res.json(value);
        })
        .catch(err => {
            res.status(400).json({ error: 'something went wrong' });
            console.log(err);
        })
}

module.exports.post = (req, res) => {
    if (!req.body.name)
        return res.status(400).json({ error: 'missing arguments' });

    return post(
        req.body.name
    )
        .then(value => {
            res.json({ ok: true });
        })
        .catch(err => {
            res.status(400).json({ error: 'something went wrong' });
            console.log(err);
        })
}