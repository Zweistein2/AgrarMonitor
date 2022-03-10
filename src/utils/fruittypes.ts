/* eslint-disable */
// template: [name, [mass/l, price/l, [priceFaktor per month (starting in march ... ending in february)]]]
const fruittypesMap = new Map<string, [number, number, [number, number, number, number, number, number, number, number, number, number, number, number]]>([
  ["WHEAT", [0.78, 0.337, [1.00, 1.07, 0.99, 0.94, 0.85, 0.81, 0.86, 0.99, 1.08, 1.13, 1.21, 1.08]]],
  ["BARLEY", [0.68, 0.313, [1.00, 1.07, 0.99, 0.94, 0.85, 0.81, 0.86, 0.99, 1.08, 1.13, 1.21, 1.08]]],
  ["OAT", [0.5, 0.532, [1.00, 1.07, 0.99, 0.94, 0.85, 0.81, 0.86, 0.99, 1.08, 1.13, 1.21, 1.08]]],
  ["CANOLA", [0.6, 0.603, [1.07, 0.99, 0.94, 0.85, 0.81, 0.86, 0.99, 1.08, 1.13, 1.21, 1.08, 1.00]]],
  ["SORGHUM", [0.85, 0.43, [1.12, 1.04, 0.93, 0.85, 0.79, 0.79, 0.86, 0.96, 1.08, 1.16, 1.22, 1.21]]],
  ["GRAPE", [0.6, 0.603, [1.05, 1.08, 1.20, 1.10, 1.03, 0.93, 0.87, 0.75, 0.84, 0.88, 0.95, 0.99]]],
  ["OLIVE", [0.6, 0.603, [0.99, 1.05, 1.08, 1.20, 1.10, 1.03, 0.93, 0.87, 0.75, 0.84, 0.88, 0.95]]],
  ["SUNFLOWER", [0.35, 0.673, [1.20, 1.17, 1.05, 0.87, 0.94, 0.99, 1.10, 1.11, 1.06, 0.65, 0.74, 1.12]]],
  ["SOYBEAN", [0.7, 0.778, [0.99, 1.05, 1.16, 1.42, 1.59, 1.13, 0.87, 0.81, 0.77, 0.87, 0.74, 0.64]]],
  ["MAIZE", [0.8, 0.38, [1.12, 1.08, 1.04, 1.14, 1.31, 0.98, 0.88, 0.71, 0.61, 0.92, 1.33, 0.98]]],
  ["POTATO", [0.75, 0.172, [1.12, 1.04, 0.93, 0.85, 0.79, 0.79, 0.86, 0.96, 1.08, 1.16, 1.22, 1.21]]],
  ["SUGARBEET", [0.7, 0.122, [1.12, 1.04, 0.93, 0.85, 0.79, 0.79, 0.86, 0.96, 1.08, 1.16, 1.22, 1.21]]],
  ["SUGARBEET_CUT", [0.7, 0.172, [1.12, 1.04, 0.93, 0.85, 0.79, 0.79, 0.86, 0.96, 1.08, 1.16, 1.22, 1.21]]],
  ["COTTON", [0.23, 1.252, [1.11, 1.03, 1.02, 1.02, 0.92, 0.90, 0.87, 1.02, 1.02, 1.04, 0.98, 1.07]]],
  ["SUGARCANE", [0.18, 0.119, [0.94, 0.96, 1.01, 1.01, 1.05, 1.04, 1.05, 1.04, 1.02, 1.01, 0.97, 0.94]]],
  ["SUGARCANE_SEEDS", [0.35, 0.19, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
  ["EGG", [0.2, 1.12, [0.79, 0.71, 0.91, 1.10, 1.11, 0.94, 0.94, 1.03, 1.25, 1.21, 1.08, 0.91]]],
  ["WOOL", [0.1, 0.94, [1.13, 1.25, 1.29, 1.19, 0.99, 0.91, 0.81, 0.77, 0.85, 0.95, 0.93, 0.97]]],
  ["MILK", [1.0, 0.7, [1.06, 1.01, 0.96, 0.90, 0.95, 0.95, 1.03, 1.09, 0.98, 0.96, 1.08, 1.07]]],
  ["WATER", [1.0, 0.1, [0.95, 0.97, 1.00, 1.00, 1.05, 1.10, 1.15, 1.10, 1.10, 1.05, 1.00, 0.97]]],
  ["CHAFF", [0.3, 0.042, [1.08, 1.04, 1.00, 0.96, 1.00, 0.95, 0.93, 1.06, 1.08, 1.11, 1.12, 1.13]]],
  ["WOODCHIPS", [0.35, 0.08, [1.24, 0.99, 0.74, 0.61, 0.53, 0.53, 0.62, 0.80, 1.14, 1.43, 1.69, 1.66]]],
  ["SILAGE", [0.45, 0.171, [1.05, 1.02, 0.96, 0.93, 0.90, 0.90, 0.93, 0.99, 1.05, 1.08, 1.11, 1.11]]],
  ["GRASS", [0.3, 0.045, [1.05, 1.02, 0.96, 0.93, 0.90, 0.90, 0.93, 0.99, 1.05, 1.08, 1.11, 1.11]]],
  ["DRYGRASS", [0.07, 0.048, [1.05, 1.02, 0.96, 0.93, 0.90, 0.90, 0.93, 0.99, 1.05, 1.08, 1.11, 1.11]]],
  ["STRAW", [0.06, 0.041, [1.00, 1.07, 0.99, 0.94, 0.85, 0.81, 0.86, 0.99, 1.08, 1.13, 1.21, 1.08]]],
  ["FLOUR", [0.17, 0.57, [1.00, 1.07, 0.99, 0.94, 0.85, 0.81, 0.86, 0.99, 1.08, 1.13, 1.21, 1.08]]],
  ["BREAD", [0.25, 1.52, [1.00, 1.07, 0.99, 0.94, 0.85, 0.81, 0.86, 0.99, 1.08, 1.13, 1.21, 1.08]]],
  ["CAKE", [0.85, 3.3, [1.06, 1.01, 0.96, 0.90, 0.95, 0.95, 1.03, 1.09, 0.98, 0.96, 1.08, 1.07]]],
  ["BUTTER", [0.9, 0.9, [1.06, 1.01, 0.96, 0.90, 0.95, 0.95, 1.03, 1.09, 0.98, 0.96, 1.08, 1.07]]],
  ["CHEESE", [0.5, 1.8, [1.06, 1.01, 0.96, 0.90, 0.95, 0.95, 1.03, 1.09, 0.98, 0.96, 1.08, 1.07]]],
  ["FABRIC", [0.5, 3.0, [1.13, 1.25, 1.29, 1.19, 0.99, 0.91, 0.81, 0.77, 0.85, 0.95, 0.93, 0.97]]],
  ["CLOTHES", [0.3, 8.0, [1.13, 1.25, 1.29, 1.19, 0.99, 0.91, 0.81, 0.77, 0.85, 0.95, 0.93, 0.97]]],
  ["SUGAR", [0.85, 0.5, [0.94, 0.96, 1.01, 1.01, 1.05, 1.04, 1.05, 1.04, 1.02, 1.01, 0.97, 0.94]]],
  ["HONEY", [1.45, 1.0, [1.12, 1.08, 1.01, 1.00, 0.96, 0.93, 0.91, 0.94, 0.97, 1.00, 1.03, 1.07]]],
  ["CEREAL", [0.6, 2.35, [1.12, 1.08, 0.96, 1.00, 0.94, 1.02, 0.91, 1.01, 0.97, 1.00, 1.03, 1.07]]],
  ["SUNFLOWER_OIL", [0.9, 1.78, [1.20, 1.17, 1.05, 0.87, 0.94, 0.99, 1.10, 1.11, 1.06, 0.65, 0.74, 1.12]]],
  ["CANOLA_OIL", [0.9, 1.64, [1.07, 0.99, 0.94, 0.85, 0.81, 0.86, 0.99, 1.08, 1.13, 1.21, 1.08, 1.00]]],
  ["OLIVE_OIL", [0.9, 2.44, [0.99, 1.05, 1.08, 1.20, 1.10, 1.03, 0.93, 0.87, 0.75, 0.84, 0.88, 0.95]]],
  ["RAISINS", [0.64, 1.4, [1.08, 1.07, 1.05, 0.97, 0.94, 0.99, 1.10, 1.11, 1.06, 0.95, 0.91, 0.99]]],
  ["GRAPEJUICE", [1.0, 1.6, [1.02, 1.04, 1.05, 0.99, 0.94, 0.99, 1.02, 1.05, 1.08, 1.01, 0.96, 1.12]]],
  ["LETTUCE", [0.7, 0.99, [1.05, 1.04, 1.00, 0.99, 0.94, 0.99, 0.92, 0.90, 0.98, 1.01, 1.08, 1.13]]],
  ["TOMATO", [0.7, 0.5, [1.05, 1.04, 1.00, 0.99, 0.94, 0.99, 0.92, 0.90, 0.98, 1.01, 1.08, 1.13]]],
  ["STRAWBERRY", [0.7, 0.25, [1.05, 1.04, 1.00, 0.99, 0.94, 0.99, 0.92, 0.90, 0.98, 1.01, 1.08, 1.13]]],
  ["CHOCOLATE", [1.0, 2.0, [0.99, 1.02, 1.04, 1.08, 0.94, 0.92, 0.95, 0.91, 0.96, 1.00, 1.04, 1.08]]],
  ["BOARDS", [1.0, 1.3, [0.88, 0.92, 1.02, 1.04, 1.10, 1.03, 1.01, 0.97, 0.95, 0.93, 0.91, 0.90]]],
  ["FURNITURE", [1.0, 2.0, [0.88, 0.92, 1.02, 1.04, 1.10, 1.03, 1.01, 0.97, 0.95, 0.93, 0.91, 0.90]]],
  ["MANURE", [0.7, 0.033, [1.06, 1.03, 0.97, 0.92, 0.89, 0.89, 0.93, 0.98, 1.05, 1.08, 1.11, 1.11]]],
  ["LIQUIDMANURE", [0.9, 0.033, [1.06, 1.03, 0.97, 0.92, 0.89, 0.89, 0.93, 0.98, 1.05, 1.08, 1.11, 1.11]]],
  ["DIGESTATE", [0.9, 0.033, [1.06, 1.03, 0.97, 0.92, 0.89, 0.89, 0.93, 0.98, 1.05, 1.08, 1.11, 1.11]]],
  ["FERTILIZER", [0.8, 1.6, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
  ["LIQUIDFERTILIZER", [1.0, 1.2, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
  ["SILAGE_ADDITIVE", [1.0, 1.2, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
  ["HERBICIDE", [1.0, 1.2, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
  ["MINERAL_FEED", [1.0, 1.2, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
  ["PIGFOOD", [0.65, 1.399, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
  ["FORAGE", [0.3, 0.041, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
  ["FORAGE_MIXING", [0.3, 0.039, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
  ["SEEDS", [0.35, 0.899, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
  ["TREESAPLINGS", [0.01, 0.1, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
  ["OILSEEDRADISH", [0.41, 0.25, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
  ["POPLAR", [0.4, 0.039, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
  ["POPLAR_SEEDS", [0.35, 0.14, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
  ["WOOD", [0.7, 1.0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
  ["STONE", [1.6, 0.05, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
  ["LIME", [1.2, 0.224, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
  ["DIESEL", [1.0, 1.25, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
  ["DEF", [1.0, 1.25, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
  ["ELECTRICCHARGE", [0.0, 0.349, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
  ["METHANE", [0.0, 0.449, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
  ["SNOW", [0.3, 0.0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
  ["ROADSALT", [1.2, 0.0, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
]);

export default fruittypesMap;
