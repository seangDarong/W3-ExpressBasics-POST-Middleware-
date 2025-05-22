export function logger(req,res,next){
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    console.log("Query Parameter :",{ ...req.query });
    next();
}
