The server and client is developed using node version 14.17.3

To install the node_modules, navigate to the server directory and execute "npm install" from the command prompt/terminal, execute the same 
command by navigating to the client directory.

To execute the server navigate to the server directory and execute command "npm start".
The UA OPC server will run at the port 4334.
The endpoint will be "opc.tcp://localhost:4334/Simulation"


To execute the client, navigate to the client directory and execute command "npm start".

The Client will prompt the user to enter the OPC UA server URL endpoint. Enter the server endpoint
as "opc.tcp://localhost:4334/Simulation" and press enter key. The client will display the message as "Connected to OPC UA server" followed with the enpoint
 if successful else it will try to reconnect ,it will throw error if the endpoint is invalid.

After successful connection the client will prompt the user to enter the nodeID.

Available nodeIds are "ns=1;s=O5D100" and "ns=1;s=VVB001". Enter any one of them and press enter key.

It will monitor the value changes and display it into the console.

The UI server will startup and will be listening to port 3000, Open the browser and type http://localhost:3000 to view the data from UI.
The web page will display the values of the connected node through the client web sockets and will clear the data every 5 seconds.



