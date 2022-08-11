import { Server } from "./src/server";

const port = 3333
const server = new Server(port)

try {
    server.start()
} catch {
    console.log("the house has fallen...")
}