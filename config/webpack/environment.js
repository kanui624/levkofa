const { environment } = require("@rails/webpacker");

const fileLoader = environment.loaders.get("file");
fileLoader.test = /\.(jpg|jpeg|png|gif|tiff|ico|svg|eot|otf|ttf|woff|woff2|webm|mp4)$/i;

module.exports = environment;
