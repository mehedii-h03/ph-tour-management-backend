/* eslint-disable no-console */
import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import { envVars } from "./app/config/env";

let server: Server;

const startServer = async () => {
  try {
    await mongoose.connect(envVars.DB_URL);
    console.log("Db connected");
    server = app.listen(envVars.PORT, () => {
      console.log(`server is listening on port ${envVars.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();

// unhandled rejection
process.on("unhandledRejection", (err) => {
  console.log("server is shutting down gracefully due to: ", err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});

// uncaught exception
process.on("uncaughtException", (err) => {
  console.log("server is shutting down gracefully due to: ", err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});

// sigterm signal
process.on("SIGTERM", () => {
  console.log("Sgiterm signal issue server is shutting down gracefully");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});

// sigint signal
process.on("SIGINT", () => {
  console.log("sigint signal issue server is shutting down gracefully");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});

// unhandled rejection error
// Promise.reject(new Error("Didnt used try catch"));

// uncaught exception error
// throw new Error("I didnt handled this error locally");

/*
 unhandled rejection error
 uncaught rejection error


*/
