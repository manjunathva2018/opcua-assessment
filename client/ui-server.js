
// To display data for the browser UI 
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const cors=require("cors");
const { OPCUAClient } = require("node-opcua");

app.use(express.static("./front-end/dist"));
app.use(cors());

const client = OPCUAClient.create({ endpointMustExist: false });
let session = null;
let interv = null;

// Socket.IO connection handling
io.on("connection", (socket) => {
  console.log("A client connected");

  socket.on("connect-to-opcua", async (serverUrl) => {
    console.log("serverUrl: " + serverUrl);

    try {
      client.on("backoff", (retry, delay) => {
        console.log(
          "still trying to connect to ",
          serverUrl,
          ": retry =",
          retry,
          "next attempt in ",
          delay / 1000,
          "seconds"
        );
        io.emit("connection-retry", serverUrl);
      });
      await client.connect(serverUrl);
      console.log("Connected to OPC UA server:", serverUrl);
      io.emit("connection-success", serverUrl);
    } catch (err) {
      console.error("Failed to connect to OPC UA server:", err.message);
      io.emit("connection-failed", err.message);
    }
  });

  socket.on("create-session-read-data", async (nodeId) => {
    console.log("message: " + nodeId);
    try {
      session = await client.createSession();
      const browseResult = await session.browse("RootFolder");

      console.log("references of RootFolder :");
      for (const reference of browseResult.references) {
        console.log("   -> ", reference.browseName.toString());
      }

      // Add the node you want to read data from
      // const nodeId = "ns=1;s=O5D100"; // Adjust this to match the address of your sensor
      const nodeToRead = {
        nodeId: nodeId,
        attributeId: 13, // Value attribute
      };
      io.emit("session-created", nodeId);
      interv = setInterval(async () => {
        try {
          const dataValue = await session.read(nodeToRead);
          // console.log("Value:", dataValue.value.value);
          io.emit("values", {
            decodedData: Object.assign({}, JSON.parse(dataValue.value.value), {
              dateTime: new Date().toJSON(),
            }),
            nodeId: nodeId,
          });
        } catch (err) {
          console.error("Failed to read data from node:", err.message);
          io.emit("session-read-error", err.message);
        }
      }, 500);
    } catch (err) {
      console.error("Failed to create session:", err.message);
      io.emit("session-create-error", err.message);
    }
  });

  socket.on("disconnect-from-session", () => {
    if (interv != null) {
      clearInterval(interv);
    }
    if (session != null) {
      session.close((err) => {
        if (err) {
          console.error("Error closing OPC UA session:", err);
          io.emit("session-disconnect-error", err);
        } else {
          console.log("Disconnected from OPC UA session");
          io.emit("session-disconnect", "Disconnected");
        }
      });
    }
  });

  socket.on("disconnect-from-opcua", () => {
    if (interv != null) {
      clearInterval(interv);
    }
    client.disconnect((err) => {
      if (err) {
        console.error("Error disconnecting from OPC UA server:", err);
        io.emit("disconnect-error", err);
      } else {
        console.log("Disconnected from OPC UA server");
        io.emit("disconnected");
      }
    });
  });

  // Handle client disconnection
  socket.on("disconnect", () => {
    if (interv != null) {
      clearInterval(interv);
    }
    console.log("UI Client disconnected");
    session = null;
    client.disconnect((err) => {
      if (err) {
        console.error("Error disconnecting from OPC UA server:", err);
      } else {
        console.log("Disconnected from OPC UA server");
      }
    });
  });
});

// UI server for the browser.
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`\nUI Server listening on port ${PORT}`);
});

module.exports = { server, io };




