import axios from "axios";
import { XMLParser } from "fast-xml-parser";

class DataService {
  getServerData(url: string, serverCode: string) {
    return axios
      .get(
        "https://proxy.potionlabs.de/$url/feed/dedicated-server-stats.xml?code=$serverCode"
          .replace("$url", url)
          .replace("$serverCode", serverCode)
      )
      .then((response) => {
        console.warn(response.status);

        const options = {
          ignoreAttributes: false,
          attributeNamePrefix: "",
          textNodeName: "text",
        };
        const parser = new XMLParser(options);
        return parser.parse(response.data).Server;
      })
      .catch(() => {
        return undefined;
      });
  }
  getVehicleData(url: string, serverCode: string, savegame: string) {
    return axios
      .get(
        "$url/feed/dedicated-server-savegame.html?code=$serverCode&file=vehicles"
          .replace("$url", url)
          .replace("$serverCode", serverCode)
      )
      .then((response) => {
        // noinspection JSUnusedGlobalSymbols
        const options = {
          ignoreAttributes: false,
          attributeNamePrefix: "",
          textNodeName: "text",
          isArray: (name: string, jpath: string): boolean => {
            return (
              [
                "vehicles.vehicle",
                "vehicles.vehicle.component",
                "vehicles.vehicle.configuration",
                "vehicles.vehicle.boughtConfiguration",
                "vehicles.vehicle.cylindered.movingTool",
                "vehicles.vehicle.actionController.action",
                "vehicles.vehicle.aiJobVehicle.lastJob.parameter",
                "vehicles.vehicle.wearable.wearNode",
                "vehicles.vehicle.washable.dirtNode",
                "vehicles.vehicle.tensionBelts.belt",
                "vehicles.vehicle.fillUnit.unit",
                "vehicles.vehicle.enterable.camera",
                "vehicles.attachments",
              ].indexOf(jpath) !== -1
            );
          },
        };
        const parser = new XMLParser(options);
        return parser.parse(response.data).vehicles;
      })
      .catch(() => {
        return axios
          .get(
            "$url/feed/$savegame/vehicles"
              .replace("$url", url)
              .replace("$savegame", savegame)
          )
          .then((response) => {
            // noinspection JSUnusedGlobalSymbols
            const options = {
              ignoreAttributes: false,
              attributeNamePrefix: "",
              textNodeName: "text",
              isArray: (name: string, jpath: string): boolean => {
                return (
                  [
                    "vehicles.vehicle",
                    "vehicles.vehicle.component",
                    "vehicles.vehicle.configuration",
                    "vehicles.vehicle.boughtConfiguration",
                    "vehicles.vehicle.cylindered.movingTool",
                    "vehicles.vehicle.actionController.action",
                    "vehicles.vehicle.aiJobVehicle.lastJob.parameter",
                    "vehicles.vehicle.wearable.wearNode",
                    "vehicles.vehicle.washable.dirtNode",
                    "vehicles.vehicle.tensionBelts.belt",
                    "vehicles.vehicle.fillUnit.unit",
                    "vehicles.vehicle.enterable.camera",
                    "vehicles.attachments",
                  ].indexOf(jpath) !== -1
                );
              },
            };
            const parser = new XMLParser(options);
            return parser.parse(response.data).vehicles;
          })
          .catch(() => {
            return undefined;
          });
      });
  }
  getEconomyData(url: string, serverCode: string, savegame: string) {
    return axios
      .get(
        "$url/feed/dedicated-server-savegame.html?code=$serverCode&file=economy"
          .replace("$url", url)
          .replace("$serverCode", serverCode)
      )
      .then((response) => {
        // noinspection JSUnusedGlobalSymbols
        const options = {
          ignoreAttributes: false,
          attributeNamePrefix: "",
          textNodeName: "text",
          isArray: (name: string, jpath: string): boolean => {
            return (
              [
                "economy.fillTypes.fillType",
                "economy.fillTypes.fillType.history.period",
              ].indexOf(jpath) !== -1
            );
          },
        };
        const parser = new XMLParser(options);
        return parser.parse(response.data).economy;
      })
      .catch(() => {
        return axios
          .get(
            "$url/feed/$savegame/economy"
              .replace("$url", url)
              .replace("$savegame", savegame)
          )
          .then((response) => {
            // noinspection JSUnusedGlobalSymbols
            const options = {
              ignoreAttributes: false,
              attributeNamePrefix: "",
              textNodeName: "text",
              isArray: (name: string, jpath: string): boolean => {
                return (
                  [
                    "economy.fillTypes.fillType",
                    "economy.fillTypes.fillType.history.period",
                  ].indexOf(jpath) !== -1
                );
              },
            };
            const parser = new XMLParser(options);
            return parser.parse(response.data).economy;
          })
          .catch(() => {
            return undefined;
          });
      });
  }
  getMetaData(url: string, serverCode: string, savegame: string) {
    return axios
      .get(
        "$url/feed/dedicated-server-savegame.html?code=$serverCode&file=careerSavegame"
          .replace("$url", url)
          .replace("$serverCode", serverCode)
      )
      .then((response) => {
        // noinspection JSUnusedGlobalSymbols
        const options = {
          ignoreAttributes: false,
          attributeNamePrefix: "",
          textNodeName: "text",
          isArray: (name: string, jpath: string): boolean => {
            return ["careerSavegame.mod"].indexOf(jpath) !== -1;
          },
        };
        const parser = new XMLParser(options);
        return parser.parse(response.data).careerSavegame;
      })
      .catch(() => {
        return axios
          .get(
            "$url/feed/$savegame/careerSavegame"
              .replace("$url", url)
              .replace("$savegame", savegame)
          )
          .then((response) => {
            // noinspection JSUnusedGlobalSymbols
            const options = {
              ignoreAttributes: false,
              attributeNamePrefix: "",
              textNodeName: "text",
              isArray: (name: string, jpath: string): boolean => {
                return ["careerSavegame.mod"].indexOf(jpath) !== -1;
              },
            };
            const parser = new XMLParser(options);
            return parser.parse(response.data).careerSavegame;
          })
          .catch(() => {
            return undefined;
          });
      });
  }
  getEnvironmentData(url: string, savegame: string) {
    return axios
      .get(
        "$url/feed/$savegame/environment"
          .replace("$url", url)
          .replace("$savegame", savegame)
      )
      .then((response) => {
        // noinspection JSUnusedGlobalSymbols
        const options = {
          ignoreAttributes: false,
          attributeNamePrefix: "",
          textNodeName: "text",
          isArray: (name: string, jpath: string): boolean => {
            return (
              ["environment.weather.forecast.instance"].indexOf(jpath) !== -1
            );
          },
        };
        const parser = new XMLParser(options);
        return parser.parse(response.data).environment;
      })
      .catch(() => {
        return undefined;
      });
  }
  getPlaceablesData(url: string, savegame: string) {
    return axios
      .get(
        "$url/feed/$savegame/placeables"
          .replace("$url", url)
          .replace("$savegame", savegame)
      )
      .then((response) => {
        // noinspection JSUnusedGlobalSymbols
        const options = {
          ignoreAttributes: false,
          attributeNamePrefix: "",
          textNodeName: "text",
          isArray: (name: string, jpath: string): boolean => {
            return (
              [
                "placeables.placeable.silo.storage.node",
                "placeables.placeable.trainSystem.railroadVehicle",
                "placeables.placeable.productionPoint.production",
                "placeables.placeable.sellingStation.stats",
                "placeables.placeable.animatedObjects.animatedObject",
              ].indexOf(jpath) !== -1
            );
          },
        };
        const parser = new XMLParser(options);
        return parser.parse(response.data).placeables;
      })
      .catch(() => {
        return undefined;
      });
  }
  getFarmsData(url: string, savegame: string) {
    return axios
      .get(
        "$url/feed/$savegame/farms"
          .replace("$url", url)
          .replace("$savegame", savegame)
      )
      .then((response) => {
        // noinspection JSUnusedGlobalSymbols
        const options = {
          ignoreAttributes: false,
          attributeNamePrefix: "",
          textNodeName: "text",
          isArray: (name: string, jpath: string): boolean => {
            return (
              [
                "farms.farm",
                "farms.farm.players.player",
                "farms.farm.finances.stats",
              ].indexOf(jpath) !== -1
            );
          },
        };
        const parser = new XMLParser(options);
        return parser.parse(response.data).farms;
      })
      .catch(() => {
        return undefined;
      });
  }
  getSalesData(url: string, savegame: string) {
    return axios
      .get(
        "$url/feed/$savegame/sales"
          .replace("$url", url)
          .replace("$savegame", savegame)
      )
      .then((response) => {
        // noinspection JSUnusedGlobalSymbols
        const options = {
          ignoreAttributes: false,
          attributeNamePrefix: "",
          textNodeName: "text",
          isArray: (name: string, jpath: string): boolean => {
            return ["sales.item"].indexOf(jpath) !== -1;
          },
        };
        const parser = new XMLParser(options);
        return parser.parse(response.data).sales;
      })
      .catch(() => {
        return undefined;
      });
  }
  getMissionsData(url: string, savegame: string) {
    return axios
      .get(
        "$url/feed/$savegame/missions"
          .replace("$url", url)
          .replace("$savegame", savegame)
      )
      .then((response) => {
        // noinspection JSUnusedGlobalSymbols
        const options = {
          ignoreAttributes: false,
          attributeNamePrefix: "",
          textNodeName: "text",
          isArray: (name: string, jpath: string): boolean => {
            return ["missions.mission"].indexOf(jpath) !== -1;
          },
        };
        const parser = new XMLParser(options);
        return parser.parse(response.data).missions;
      })
      .catch(() => {
        return undefined;
      });
  }
}

const dataService = new DataService();

export default dataService;
