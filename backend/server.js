const app = require("./app");
const PORT = 8000

//Handling uncaught xception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server for handling uncaught exception`);
})

//config
if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path: "backend/config/.env",
    })
}

//create server
const server = app.listen(PORT, () => {
    console.log(
        `Server is running on PORT ${PORT}`
    );
})

//unhandled promise rejection
process.on("unhandledRejection", (err) => {
    console.log(`Shutting down the server for ${err.message}`);
    console.log(`Shutting down the server for unhandle promise rejection`)

    server.close(() => {
        process.exit(1);
    })
})