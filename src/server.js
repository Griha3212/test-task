/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import http from "http";
import chalk from "chalk";

import { app } from "./app.js";

/* eslint-disable no-console */

// Get port from environment and store in Express.
const port = parseInt(process.env.PORT, 10) || 3005;
console.log(chalk.yellow("process.env.PORT", process.env.PORT));
app.set("port", port);

// Create HTTP server.
const server = http.createServer(app);

server.listen(port, () => {
  console.log(chalk.yellow(`Server app listening on port ${port}!`));
});
