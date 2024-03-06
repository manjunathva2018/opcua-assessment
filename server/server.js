const opcua = require("node-opcua");
const readO5D100=require("./process-data/readO5D100");
const readVVB001=require("./process-data/readVVB001");

const server = new opcua.OPCUAServer({
  port: 4334, // You can choose any available port
  resourcePath: "/Simulation",
});

async function updateValues(namespace) {
    let O5D100_value = null;
    let VVB001_value=null;

   const O5D100_Arr =await readO5D100();
   const VVB001_Arr=await readVVB001();

    // Define a variable to keep track of the current index
let device1currentIndex = 0;
let device2CurrentIndex=0;

// Set up an interval to iterate over the array values every 500ms
setInterval(() => {
    // Output the value at the current index
    O5D100_value= O5D100_Arr[device1currentIndex]
    // console.log(someting);
    
    // Move to the next index (and wrap around to the beginning if needed)
    device1currentIndex = (device1currentIndex + 1) % O5D100_Arr.length;


    // device two
    // Output the value at the current index
    VVB001_value= VVB001_Arr[device2CurrentIndex]
    // console.log(deviceTwo);
    
    // Move to the next index (and wrap around to the beginning if needed)
    device2CurrentIndex = (device2CurrentIndex + 1) % VVB001_Arr.length;

}, 500);


    const variable1 = namespace.addVariable({
      nodeId: "ns=1;s=O5D100",
      browseName: "O5D100",
      dataType: "String",
      minimumSamplingInterval: 500,
      value: {
        get: function () {
          return new opcua.Variant({
            dataType: opcua.DataType.String,
            value: O5D100_value,
          });
        },
      },
    });

    const variable2 = namespace.addVariable({
      nodeId: "ns=1;s=VVB001",
      browseName: "VVB001",
      dataType: "String",
      minimumSamplingInterval: 500,
      value: {
        get: function () {
          return new opcua.Variant({
            dataType: opcua.DataType.String,
            value: VVB001_value,
          });
        },
      },
    });
}

server.initialize(
  () => {
    server.start(() => {
      console.log("Server is now listening...");
      const endpointUrl = server.endpoints[0].endpointDescriptions()[0].endpointUrl;
      console.log(" the primary server endpoint url is ", endpointUrl);
      const addressSpace = server.engine.addressSpace;
      const namespace = addressSpace.getOwnNamespace();
      updateValues(namespace);
    });
  },
  (err) => {
    console.error("Error initializing server:", err);
  }
);
