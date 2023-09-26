#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import inquirer from "inquirer";
import { exec } from "child_process";

const initApp = async () => {
  const currentDir = new URL(".", import.meta.url).pathname;

  const { projectName } = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "What's your project called?",
      default: "my-express-app",
    },
  ]);

  const { databaseName } = await inquirer.prompt([
    {
      type: "input",
      name: "databaseName",
      message: "Please choose a name for your database?",
      default: "my_db",
    },
  ]);

  const targetDir = path.join(currentDir, projectName);
  const templateDir = path.join(currentDir, "js-express-app");

  await fs.writeFile(
    `${templateDir}/.env.development`,
    `PGDATABASE=${databaseName}`
  );
  await fs.writeFile(
    `${templateDir}/.env.test`,
    `PGDATABASE=${databaseName}_test`
  );

  await fs.writeFile(
    `${templateDir}/package.json`,
    JSON.stringify({
      name: `${projectName}`,
      version: "1.0.0",
      description: "A minimal Express.js application",
      main: "listen.js",
      scripts: {
        test: "jest",
        start: "node app.js",
      },
      dependencies: {
        dotenv: "^16.3.1",
        express: "^4.18.2",
        pg: "^8.11.3",
        supertest: "^6.3.3",
        cors: "^2.8.5",
        jest: "^29.6.4",
        nodemon: "^3.0.1",
      },
      author: "",
      license: "MIT",
    })
  );

  await fs.writeFile(
    `${templateDir}/db/seed.sql`,
    `DROP DATABASE IF EXISTS ${databaseName}_test;
  DROP DATABASE IF EXISTS ${databaseName};
  
  CREATE DATABASE  ${databaseName}_test;
  CREATE DATABASE  ${databaseName};`
  );

  fs.copySync(templateDir, targetDir);

  exec(
    "npm install",
    { cwd: targetDir },
    (installError, installStdout, installStderr) => {
      if (installError) {
        console.error(`Error running npm install: ${installError}`);
        return;
      }
    }
  );
};

initApp();
