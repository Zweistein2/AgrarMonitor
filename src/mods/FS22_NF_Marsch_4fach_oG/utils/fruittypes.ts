/* eslint-disable */
// template: [name, [mass/l, price/l, id, [priceFaktor per month (starting in march ... ending in february)]]]
const nfFruittypesMap = new Map<string, [number, number, number, [number, number, number, number, number, number, number, number, number, number, number, number]]>([
    ["TRITICALE", [0.78, 0.337, 114, [1.00, 1.07, 0.99, 0.94, 0.85, 0.81, 0.86, 0.99, 1.08, 1.13, 1.21, 1.08]]],
    ["SPELT", [0.78, 0.337, 113, [1.00, 1.07, 0.99, 0.94, 0.85, 0.81, 0.86, 0.99, 1.08, 1.13, 1.21, 1.08]]],
    ["RYE", [0.78, 0.337, 112, [1.00, 1.07, 0.99, 0.94, 0.85, 0.81, 0.86, 0.99, 1.08, 1.13, 1.21, 1.08]]],
    ["MILLET", [0.85, 0.43, 115, [1.12, 1.04, 0.93, 0.85, 0.79, 0.79, 0.86, 0.96, 1.08, 1.16, 1.22, 1.21]]],
    ["ALFALFA", [0.3, 0.045, 116, [1.05, 1.02, 0.96, 0.93, 0.9, 0.9, 0.93, 0.99, 1.05, 1.08, 1.11, 1.11]]],
    ["CARROT", [0.75, 0.11, 120, [1.12, 1.04, 0.93, 0.85, 0.79, 0.79, 0.86, 0.96, 1.08, 1.16, 1.22, 1.21]]],
    ["ONION", [0.75, 0.11, 121, [1.12, 1.04, 0.93, 0.85, 0.79, 0.79, 0.86, 0.96, 1.08, 1.16, 1.22, 1.21]]],
    ["HOPS", [0.85, 0.4, 122, [1.12, 1.04, 0.93, 0.85, 0.79, 0.79, 0.86, 0.96, 1.08, 1.16, 1.22, 1.21]]],
    ["LAVENDER", [0.23, 0.75, 123, [1.11, 1.03, 1.02, 1.02, 0.92, 0.9, 0.87, 1.02, 1.02, 1.04, 0.98, 1.07]]],
    ["CABBAGE", [0.75, 0.11, 124, [1.12, 1.04, 0.93, 0.85, 0.79, 0.79, 0.86, 0.96, 1.08, 1.16, 1.22, 1.21]]],
    ["DIRT", [0.8, 0.12, 109, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
    ["GRAVEL", [0.8, 0.25, 110, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
    ["SAND", [0.8, 0.12, 111, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
    ["EMPTYPALLET", [0.8, 0.12, 111111111, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
    ["OSBPALLET", [0.8, 0.12, 111111111, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
    ["SPANPALLET", [0.8, 0.12, 111111111, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
    ["CARDBOARD", [0.8, 0.12, 111111111, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
    ["PAPER", [0.8, 0.12, 111111111, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
    ["KLOPAPIER", [0.8, 0.12, 111111111, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
    ["MOLASSES", [0.8, 0.12, 111111111, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
    ["WEIZENMALZ", [0.8, 0.12, 111111111, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
    ["GERSTENMALZ", [0.8, 0.12, 111111111, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
    ["HEFE", [0.8, 0.12, 111111111, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
    ["GERSTENFASSBIER", [0.8, 0.12, 111111111, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
    ["WEIZENFASSBIER", [0.8, 0.12, 111111111, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]],
]);

export default nfFruittypesMap;