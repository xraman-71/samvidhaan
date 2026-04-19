const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "node_modules");

if (fs.existsSync(dir)) {
  fs.rmSync(dir, { recursive: true, force: true });
  console.log("node_modules removed");
}
