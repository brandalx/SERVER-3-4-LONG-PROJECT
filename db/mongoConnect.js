const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  mongoose.set("strictQuery", false);
  await mongoose.connect(process.env.LOCALURLDB);
  console.log("mongo connect server local");
}
