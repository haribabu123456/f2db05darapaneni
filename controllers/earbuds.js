var earbuds = require('../models/earbuds'); 
 

exports.earbuds_list = async function(req, res) { 
    try{ 
        theearbuds = await earbuds.find(); 
        res.send(theearbuds); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 

exports.earbuds_view_all_Page = async function(req, res) { 
    try{ 
        theearbuds = await earbuds.find(); 
        res.render('earbuds', { title: 'earbuds Search Results', results: theearbuds }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 


exports.earbuds_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new earbuds(); 
   // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"earbudsBrand":"jbl", "earbudsColor":"green", "earbudsCost":"1000"}
    document.earbudsBrand = req.body.earbudsBrand;    
    document.earbudsColor = req.body.earbudsColor;
    document.earbudsCost = req.body.earbudsCost;  
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 


exports.earbuds_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: earbuds detail: ' + req.params.id); 
}; 
 


exports.earbuds_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: earbuds delete DELETE ' + req.params.id); 
}; 
 

exports.earbuds_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: earbuds update PUT' + req.params.id); 
}; 