export function createConnection(room,server)
{

    return {
        connect()
        {
            console.log("Connected to " + room + " at " + "this "+ server);
        },
        disconnect()
        {
            console.log("Disconnected from " + room + " at " + "this "+ server);
        }
    }
}

// createConnection("music","xyz")