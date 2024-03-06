const { OPCUAClient,AttributeIds,makeBrowsePath,TimestampsToReturn,ClientMonitoredItem,ClientSubscription } = require("node-opcua");
const readline = require('readline');
const serverUrl = "opc.tcp://localhost:4334"; // Replace with your server URL
const {server,io} =require("./ui-server");
// Function to prompt user for server details
function promptForServerDetails() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve, reject) => {
        rl.question('Enter OPC UA server URL: ', (serverUrl) => {
            rl.close();
            resolve(serverUrl);
        });
    });
}


// Main function
async function main() {
  // Prompt user for OPC UA server URL
  const serverUrl = await promptForServerDetails();
  const client = OPCUAClient.create({ endpointMustExist: false });
  try {
    client.on("backoff", (retry, delay) =>
      console.log(
        "still trying to connect to ",
        serverUrl,
        ": retry =",
        retry,
        "next attempt in ",
        delay / 1000,
        "seconds"
      )
    );
    await client.connect(serverUrl);
    console.log("Connected to OPC UA server:", serverUrl);
  } catch (err) {
    console.error("Failed to connect to OPC UA server:", err.message);
    return null;
  }

  // Prompt user for node ID
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question(
    '\nAvailable nodes IDs are "ns=1;s=O5D100" and "ns=1;s=VVB001". Enter node ID to read data from: ',
    async (nodeId) => {
      rl.close();

      if (nodeId == "ns=1;s=O5D100" || nodeId == "ns=1;s=VVB001") {
        addNodeAndReadData(nodeId, client);
        // addNodeWithMonitor(nodeId,client);
      } else {
        console.log("The entered node ID does not exists!");
      }
    }
  );
}

// Run the main function
main();

async function addNodeAndReadData(nodeId, client) {
  try {
    const session = await client.createSession();

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

    setInterval(async () => {
      try {
        const dataValue = await session.read(nodeToRead);
        console.log("Value:", dataValue.value.value);
        io.emit("values", {
          data: { ...dataValue.value.value, dateTime: new Date().toJSON() },
          nodeId: nodeId,
        });
      } catch (err) {
        console.error("Failed to read data from node:", err.message);
      }
    }, 500);
  } catch (err) {
    console.error("Failed to create session:", err.message);
  }
}

async function addNodeWithMonitor(nodeId,client){
    try{
        const session = await client.createSession();
        const browseResult = await session.browse("RootFolder");

        console.log("references of RootFolder :");
        for (const reference of browseResult.references) {
            console.log("   -> ", reference.browseName.toString());
        }

        // const subscription = await session.createSubscription2({
        //     publishingEnabled: true,
        //     requestedLifetimeCount: 1000,
        //     requestedPublishingInterval: 100,
        // });
        const subscription = ClientSubscription.create(session, {
            requestedPublishingInterval: 500,
            requestedLifetimeCount: 100,
            maxNotificationsPerPublish: 100,
            publishingEnabled: true,
            priority: 10
        });

        
        subscription.on("started", function () {
            console.log("subscription started for 2 seconds - subscriptionId=", subscription.subscriptionId);
        })
        .on("keepalive", function () {
            console.log("keepalive");
        })
        .on("terminated", function () {
            console.log("terminated");
        });
        
        const monitoredItem = ClientMonitoredItem.create(subscription, {
            nodeId:nodeId,
            attributeId: AttributeIds.Value,
        }, {
            samplingInterval: 500,
            discardOldest: true,
            queueSize: 30
        }, TimestampsToReturn.Both);

        monitoredItem.on("changed", (dataValue) => {
            console.log("\nvalue has changed : ", dataValue.value.toJSON());
            let jsonStr=dataValue.value.toJSON();
            io.emit('values', {data:jsonStr.value,nodeId:nodeId});
        });

    } catch(err){
        console.log(err);
    }
  
}

