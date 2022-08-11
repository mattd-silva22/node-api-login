import { Server } from "./server";

const port = 3333 || process.env.PORT
const server = new Server(port)

try {
    server.start()
    console.log(`Server running :): http://localhost:${port}`)
} catch(err) {
    console.log("the house has fallen")
    console.log(err)
}
