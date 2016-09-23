// @flow

const minutes = parseInt(process.argv[2]);
const lowFlowGallonPerMinute = 1.5;
const ouncesPerGallon = 128;
const bottleSizeOunces = 16;

const numberOfBottles = (minutes * lowFlowGallonPerMinute * ouncesPerGallon) / bottleSizeOunces;
console.log('numberOfBottles:', numberOfBottles);
