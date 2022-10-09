// console.log("testing");

const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const logEvent = async (message) => {
  const dateTime = `${format(new Date(), "ddMMyyy\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItem);
  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "logs"));
    }
    //testing

    await fsPromises.appendFile(
      path.join(__dirname, "logs", "eventLogs.txt"),
      logItem
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = logEvent;

// console.log(new Date());
// console.log(format(new Date(), "ddMMyyy\tHH:mm:ss"));
// console.log(uuid());
