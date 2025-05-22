export function validateQuery(req,res,next){
    const {minCredits,maxCredits} = req.query;

    if(minCredits && isNaN(parseInt(minCredits))){
        return res.status(400).json({error : 'min credit must be a valid integer'});
    }

    if(maxCredits && isNaN(parseInt(maxCredits))){
        return res.status(400).json({error : 'max credit must be a valid integer'});
    }

    if(minCredits && maxCredits && parseInt(minCredits) > parseInt(maxCredits)){
        return res.status(400).json({error : 'min credit cannot be larger than max credit'});
    }

    next();
}