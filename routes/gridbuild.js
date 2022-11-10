var express = require('express');
var router = express.Router();

/* GET gridbuild page. */
router.get('/', function(req, res, next) {
    let query = req.query
    r = query.rows
    c = query.cols
console.log('r ${query.r}')
console.log('c ${query.c}')
res.render('gridbuild', { title: 'Grid Build', query: query });
});

module.exports = router;
