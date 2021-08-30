const fs = require("fs");
const width = 1200;
const height = 1200;
const dir = __dirname;
const description = "";
const baseImageUri = "";
const startEditionFrom = 1;
const endEditionAt = 1000
const editionSize = 1000;
const rarityWeights = [
  {
    value: "super_rare",
    from: 1,
    to: 100,
  },
  {
    value: "rare",
    from: 101,
    to: 400,
  },
  {
    value: "common",
    from: 401,
    to: editionSize,
  },
];

const cleanName = (_str) => {
  let name = _str.slice(0, -4);
  return name;
};

const getElements = (path) => {
  return fs
    .readdirSync(path)
    .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
    .map((i) => {
      return {
        name: cleanName(i),
        path: `${path}/${i}`,
      };
    });
};

const layers = [
  {
    elements: {
      common: getElements(`${dir}/bg/common`),
      rare: getElements(`${dir}/bg/rare`),
      super_rare: getElements(`${dir}/bg/super_rare`),
    },
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    elements: {
      common: getElements(`${dir}/skins/common`),
      rare: getElements(`${dir}/skins/rare`),
      super_rare: getElements(`${dir}/skins/super_rare`),
    },
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    elements: {
      common: getElements(`${dir}/eye_shape/common`),
      rare: getElements(`${dir}/eye_shape/rare`),
      super_rare: getElements(`${dir}/eye_shape/super_rare`),
    },
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    elements: {
      common: getElements(`${dir}/neck/common`),
      rare: getElements(`${dir}/neck/rare`),
      super_rare: getElements(`${dir}/neck/super_rare`),
    },
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    elements: {
      common: getElements(`${dir}/eye/common`),
      rare: getElements(`${dir}/eye/rare`),
      super_rare: getElements(`${dir}/eye/super_rare`),
    },
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    elements: {
      common: getElements(`${dir}/head/common`),
      rare: getElements(`${dir}/head/rare`),
      super_rare: getElements(`${dir}/head/super_rare`),
    },
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    elements: {
      common: getElements(`${dir}/mouth/common`),
      rare: getElements(`${dir}/mouth/rare`),
      super_rare: getElements(`${dir}/mouth/super_rare`),
    },
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
];

module.exports = {
  layers,
  width,
  height,
  description,
  baseImageUri,
  editionSize,
  startEditionFrom,
  endEditionAt,
  rarityWeights,
};
