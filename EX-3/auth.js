export function authToken(req,res,next){
    const token = req.query.token;
    const VALID_TOKEN = 'xyz123';

    if (!token || token !== VALID_TOKEN){
        return res.status(401).json({error : 'Invalid token'});
    }
    next();
}