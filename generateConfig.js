const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

const mode =
  process.env.npm_lifecycle_event === "build:stage" ? "stage" : "production";
dotenv.config({ path: path.resolve(__dirname, `.env.${mode}`) });

const branch = process.env.VUE_APP_CMS_BRANCH || "main";

const templatePath = path.join(__dirname, "public/config.template.yml");
const outputPath = path.join(__dirname, "public/config.yml");

let configContent = fs.readFileSync(templatePath, "utf8");
configContent = configContent.replace("BRANCH_PLACEHOLDER", branch);

fs.writeFileSync(outputPath, configContent, "utf8");

console.log(`Config generated with branch: §{branch}`);
