/*
    javascript使用protobuf, 安装protobufjs库：npm install protobufjs -g
 */
let protobuf = require('protobufjs')

// Node 环境使用

function main() {
    protobuf.load("person.proto", function (err, root) {
        if (err) {
            throw err;
        }
        // Obtain a message type
        let person = root.lookupType("person.User");
        // Exemplary payload
        let payload = {
            id: 1,
            name: "node"
        };
        // Verify the payload if necessary
        let errMsg = person.verify(payload);
        if (errMsg) {
            throw Error(errMsg);
        }
        // Create a new message
        let message = person.create(payload);
        // Encode a message to an Uint8Array (browser) or Buffer (node)
        let buffer = person.encode(message).finish();

        // Decode an Uint8Array (browser) or Buffer (node) to a message
        let decodeMsg = person.decode(buffer);

        console.log(decodeMsg.toJSON());
    })
}

function useEnum() {
    protobuf.load("person.proto", function (err, root) {
        if (err) {
            throw err;
        }
        const phoneType = root.lookupTypeOrEnum("person.PhoneType");
        console.log(phoneType.valuesById["0"]);
        console.log(phoneType.values["WORK"]);
    });
}

useEnum();
