'use strict';
import Mad from './mad.model';
import Web from './web.model';
import c4e from './c4e.model';

export function getAllMad(req, res) {
    Mad.find(function (err, data) {
        if(err){
          res.send(404);
        }else{
          res.json({data});
        }
    });
}

export function getMadById(req, res){
    Mad.findById(req.params.id, function(err, data){
        if(err){
            res.send(404);
        }else{
            res.json({data});
        }
    });
}

export function getAllWeb(req, res) {
    Web.find(function (err, data) {
        if(err){
            res.send(404);
        }else{
            res.json({data});
        }
    });
}

export function getWebById(req, res){
    Web.findById(req.params.id, function(err, data){
        if(err){
            res.send(404);
        }else{
            res.json({data});
        }
    });
}

export function getAllc4e(req, res) {
    c4e.find(function (err, data) {
        if(err){
            res.send(404);
        }else{
            res.json({data});
        }
    });
}

export function getc4eById(req, res){
    c4e.findById(req.params.id, function(err, data){
        if(err){
            res.send(404);
        }else{
            res.json({data});
        }
    });
}
