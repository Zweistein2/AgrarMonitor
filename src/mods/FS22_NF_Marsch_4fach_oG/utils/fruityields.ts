/* eslint-disable */
// template: [name, [beeFruit, producesStraw, yield/m², seeds/m², chaffFactor, growCycles]]
const nfFruityieldsMap = new Map<string, [boolean, boolean, number, number, number, number]>([
  ["TRITICALE", [false, true, 0.7190, 0.0343, 4, 1]],
  ["SPELT", [false, true, 0.7700, 0.0478, 4, 1]],
  ["RYE", [false, true, 0.7371, 0.0326, 4, 1]],
  ["MILLET", [false, false, 0.4365, 0.0110, 4, 1]],
  ["ALFALFA", [false, false, 3.28, 0.03, 0, 3.5]],
  ["CARROT", [false, false, 3.78, 0.04, 0, 1]],
  ["ONION", [false, false, 3.78, 0.04, 0, 1]],
  ["HOPS", [false, false, 0.92, 0.02, 0, 1]],
  ["LAVENDER", [true, false, 0.497, 0.05, 0, 1]],
  ["CABBAGE", [false, false, 3.78, 0.04, 0, 1]],
]);

export default nfFruityieldsMap;
