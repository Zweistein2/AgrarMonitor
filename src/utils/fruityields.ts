/* eslint-disable */
// template: [name, [beeFruit, producesStraw, yield/m², seeds/m², chaffFactor, growCycles]]
const fruityieldsMap = new Map<string, [boolean, boolean, number, number, number, number]>([
  ["WHEAT", [false, true, 0.89, 0.05, 4, 1]],
  ["BARLEY", [false, true, 0.96, 0.05, 4, 1]],
  ["OAT", [false, true, 0.57, 0.05, 4, 1]],
  ["CANOLA", [true, false, 0.58, 0.02, 4, 1]],
  ["SORGHUM", [false, false, 0.82, 0.02, 4, 1]],
  ["GRAPE", [false, false, 0.92, 0, 0, 1]],
  ["OLIVE", [false, false, 0.92, 0, 0, 1]],
  ["SUNFLOWER", [true, false, 0.52, 0.03, 6, 1]],
  ["SOYBEAN", [false, false, 0.45, 0.03, 4, 1]],
  ["MAIZE", [false, false, 0.92, 0.04, 7.8, 1]],
  ["POTATO", [true, false, 4.13, 0.38, 0, 1]],
  ["SUGARBEET", [false, false, 5.78, 0.04, 0, 1]],
  ["COTTON", [false, false, 0.497, 0.05, 0, 1]],
  ["SUGARCANE", [false, false, 11.34, 1.2, 0, 1]],
  ["GRASS", [false, false, 3.28, 0.03, 0, 3.5]],
  ["DRYGRASS", [false, false, 3.28, 0.03, 0, 3.5]],
  ["SILAGE", [false, false, 3.28, 0.03, 0, 3.5]],
  ["POPLAR", [false, false, 2.82, 0.15, 3, 0.5]],
  ["STRAW", [false, false, 3.68, 0, 0, -1]],
]);

export default fruityieldsMap;
