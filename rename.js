const { readdirSync, rename } = require("fs");
const { resolve, basename, extname } = require("path");

const assetsDirPath = resolve(__dirname, "renamed_assets");

const files = readdirSync(assetsDirPath);

const generateNewName = (name) => {
  if (name.includes("fi-rr-")) {
    return name.replace("fi-rr-", "");
  }
  if (name.includes("fi-sr-")) {
    return name.replace("fi-sr-", "") + "-solid";
  }
};

files.forEach((file) => {
  let oldName = basename(file, ".svg");
  let newName = generateNewName(oldName);
  if (!newName) return;
  rename(
    assetsDirPath + `/${file}`,
    assetsDirPath + `/${newName}` + ".svg",
    (err) => {
      if (err) console.log(err);
    }
  );
});
