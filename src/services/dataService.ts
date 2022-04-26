import axios from "axios";
import { XMLParser } from "fast-xml-parser";

class DataService {
  private websocketConnection: WebSocket | undefined = undefined;
  websocketData: WebsocketData = {} as WebsocketData;

  openWebsocket(url: string) {
    if (
      this.websocketConnection === null ||
      this.websocketConnection === undefined
    ) {
      if (process.env.NODE_ENV === "development") {
        url = "ws://localhost:8100/plumber";
      }

      this.websocketConnection = new WebSocket(url);

      this.websocketConnection.onmessage = function (event) {
        const data = event.data as string;

        if (data.startsWith('{"fields"')) {
          dataService.websocketData.fieldData = JSON.parse(
            data
          ) as WebsocketFieldWrapper;
        } else if (data.startsWith('{"players"')) {
          dataService.websocketData.playerData = JSON.parse(
            data
          ) as WebsocketPlayerWrapper;
        } else if (data.startsWith('{"farms"')) {
          dataService.websocketData.farmData = JSON.parse(
            data
          ) as WebsocketFarmWrapper;
        } else if (data.startsWith('{"metadata"')) {
          dataService.websocketData.metadataData = JSON.parse(
            data
          ) as WebsocketMetadataWrapper;
        } else if (data.startsWith('{"mods"')) {
          dataService.websocketData.modsData = JSON.parse(
            data
          ) as WebsocketModsWrapper;
        } else if (data.startsWith('{"missions"')) {
          dataService.websocketData.missionsData = JSON.parse(
            data
          ) as WebsocketMissionsWrapper;
        } else if (data.startsWith('{"economy"')) {
          dataService.websocketData.economyData = JSON.parse(
            data
          ) as WebsocketEconomyWrapper;
        } else if (data.startsWith('{"vehicleSales"')) {
          dataService.websocketData.vehicleSalesData = JSON.parse(
            data
          ) as WebsocketVehicleSalesWrapper;
        } else if (data.startsWith('{"vehicles"')) {
          dataService.websocketData.vehiclesData = JSON.parse(
            data
          ) as WebsocketVehiclesWrapper;
        } else if (data.startsWith('{"npcs"')) {
          dataService.websocketData.npcsData = JSON.parse(
            data
          ) as WebsocketNPCsWrapper;
        } else if (data.startsWith('{"time"')) {
          dataService.websocketData.timeData = JSON.parse(
            data
          ) as WebsocketTime;
        } else {
          console.warn("Unknown data sent on websocket: ", data);
        }
      };
    }
  }
  getWebsocketData() {
    if (
      this.websocketConnection !== null &&
      this.websocketConnection !== undefined
    ) {
      this.websocketConnection.send("requesting Data");
    }
  }
  getVehicleData(url: string, savegame: string) {
    if (process.env.NODE_ENV === "development") {
      url = "http://localhost:8100";
    }

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
          parseAttributeValue: true,
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
  }
  getEconomyData(url: string, savegame: string) {
    if (process.env.NODE_ENV === "development") {
      url = "http://localhost:8100";
    }

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
          parseAttributeValue: true,
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
  }
  getMetaData(url: string, savegame: string) {
    if (process.env.NODE_ENV === "development") {
      url = "http://localhost:8100";
    }

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
          parseAttributeValue: true,
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
  }
  getEnvironmentData(url: string, savegame: string) {
    if (process.env.NODE_ENV === "development") {
      url = "http://localhost:8100";
    }

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
          parseAttributeValue: true,
          parseTagValue: true,
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
    if (process.env.NODE_ENV === "development") {
      url = "http://localhost:8100";
    }

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
          parseAttributeValue: true,
          parseTagValue: true,
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
    if (process.env.NODE_ENV === "development") {
      url = "http://localhost:8100";
    }

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
          parseAttributeValue: true,
          parseTagValue: true,
          isArray: (name: string, jpath: string): boolean => {
            return (
              [
                "farms.farm",
                "farms.farm.players.player",
                "farms.farm.finances.stats",
                "farms.farm.contracting.farm",
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
    if (process.env.NODE_ENV === "development") {
      url = "http://localhost:8100";
    }

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
          parseAttributeValue: true,
          parseTagValue: true,
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
    if (process.env.NODE_ENV === "development") {
      url = "http://localhost:8100";
    }

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
          parseAttributeValue: true,
          parseTagValue: true,
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
