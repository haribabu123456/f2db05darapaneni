var earbuds = require('../models/earbuds');


exports.earbuds_list = async function (req, res) {
    try {
        theearbuds = await earbuds.find();
        res.send(theearbuds);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


exports.earbuds_view_all_Page = async function (req, res) {
    try {
        theearbuds = await earbuds.find();
        res.render('earbuds', { title: 'earbuds Search Results', results: theearbuds });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


exports.earbuds_create_post = async function (req, res) {
    console.log(req.body)
    let document = new earbuds();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"earbudsBrand":"jbl", "earbudsColor":"green", "earbudsCost":"1000"}
    document.earbudsBrand = req.body.earbudsBrand;
    document.earbudsColor = req.body.earbudsColor;
    document.earbudsCost = req.body.earbudsCost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle cereal delete on DELETE.
exports.earbuds_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await earbuds.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }

};

//for a specific earbuds.
exports.earbuds_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await earbuds.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
//Handle earbuds update form on PUT.
exports.earbuds_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await earbuds.findById(req.params.id)
        // Do updates of properties
        if (req.body.earbudsBrand)
            toUpdate.earbudsBrand = req.body.earbudsBrand;
        if (req.body.earbudsColor) toUpdate.earbudsColor = req.body.earbudsColor;
        if (req.body.earbudsCost) toUpdate.earbudsCost = req.body.earbudsCost;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};
// Handle a show one view with id specified by query
exports.earbuds_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await earbuds.findById(req.query.id)
        res.render('earbudsdetail',
            { title: 'earbuds Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a earbuds.
// No body, no in path parameter, no query.
// Does not need to be async
exports.earbuds_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('earbudscreate', { title: 'earbuds Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a earbuds.
// query provides the id
exports.earbuds_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await earbuds.findById(req.query.id)
        res.render('earbudsupdate', { title: 'earbuds Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.earbuds_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await earbuds.findById(req.query.id)
        res.render('earbudsdelete', {
            title: 'earbuds Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

