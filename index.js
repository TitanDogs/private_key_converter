import { base58_to_binary } from "base58-js";
import fs from "fs";

let privateKeyString = process.argv[2];

if (privateKeyString) {
    if (!fs.existsSync("./output")) {
        fs.mkdirSync("./output");
    }
    const binary = base58_to_binary(privateKeyString);
    fs.writeFileSync(`./output/${privateKeyString}.json`, JSON.stringify(Object.values(binary)));
    console.log("A JSON keypair was saved in the output folder.")
} else {
    console.log("Please add your private key as a string parameter.");
}