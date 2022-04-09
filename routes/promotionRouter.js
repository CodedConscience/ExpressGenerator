const express = require('express');
const promotionRouter = express.Router();
const Promotion = require('../models/promotion')

promotionRouter.route('/')
.get((req, res, next ) => {
    Promotion.find()
    .then(promotions => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application.json')
        res.json(promotions)
    })
    .catch(err => next(err));
})
.post((req, res, next) => {
    Promotion.create(req.body)
    .then(promotion => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application.json')
        res.json(promotion)
    })
    .catch(err => next(err));
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /campsites`);
})
.delete((req, res, next) => {
    Promotion.deleteMany()
    .then(promotions => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application.json')
        res.json(promotions)
    })
    .catch(err => next(err));
});


promotionRouter.route(':campsiteId')
.get((req, res, next) => {
    Promotion.findById(req.params.promotionId)
    .then(promotion => {
        res.statusCode =200;
        res.setHeader('Content-Type', 'application.json')
        res.json(promotion)
    })
    .catch(err => next(err));
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /campsite${req.params.campsiteId}`);
})
.put((req, res, next) => {
    Promotion.findIdAndUpdate(req.params.promotionId, {
        $set: req.body
    },{new: true})
    .then(promotion => {
        res.statusCode =200;
        res.setHeader('Content-Type', 'application.json')
        res.json(promotion)
    })
    .catch(err => next(err));
})
.delete((req, res, next) => {
    Promotion.findByIdAndDelete(req.params.promotionId)
    .then(promotion => {
        res.statusCode =200;
        res.setHeader('Content-Type', 'application.json')
        res.json(promotion)
    })
    .catch(err => next(err));
});

module.exports = promotionRouter