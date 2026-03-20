export const studentErrorHandler = (err, req, res, next) => {
    console.log(err);
    const status = err.statusCode || 500;
    const message = err.statusCode ? err.message : "Internal Server Error";
    res.status(status).json({
        message,
        error: err.name || "Server Error",
    })
}