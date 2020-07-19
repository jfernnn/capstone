const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = function(req, res, next) {
    const fullTokenString = req.get('Authorization') || req.query.token || req.body.token;
    if(fullTokenString) {
        const parsedTokenString = fullTokenString.replace('Bearer ', '');
        jwt.verify(parsedTokenString, SECRET, function(err, decodedToken) {
            //console.log(decodedToken, '--DecodedToken');
            if(err) {
                next(err);
            } else {
                req.user = decodedToken.user;
                next();
            }
        });
    } else {
        next('No Token');
    }
};