import { websocketServer } from "../index";

websocketServer.on("connection", (socket) => {

    // Connection Check
    let isActive = true;
    setInterval(() => {
        isActive = false;
        socket.send(10, () => {
            socket.send(200);
            socket.close(1011);
        });

        setTimeout(() => {
            if (!isActive) {
                socket.close(400, "No Response");
            }
        }, 10000);
    }, 60000);

    socket.send("hello");
});