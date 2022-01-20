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
        const options = {
          ignoreAttributes: false,
          attributeNamePrefix: "",
          textNodeName: "text",
        };
        const parser = new XMLParser(options);
        return parser.parse(response.data).Server;
      });
  }
  getEconomyData(url: string, serverCode: string) {
    return axios
      .get(
        "https://proxy.potionlabs.de/$url/feed/dedicated-server-savegame.html?code=$serverCode&file=economy"
          .replace("$url", url)
          .replace("$serverCode", serverCode)
      )
      .then((response) => {
        const options = {
          ignoreAttributes: false,
          attributeNamePrefix: "",
          textNodeName: "text",
        };
        const parser = new XMLParser(options);
        return parser.parse(response.data).economy;
      });
  }
  getMetaData(url: string, serverCode: string) {
    return axios
      .get(
        "https://proxy.potionlabs.de/$url/feed/dedicated-server-savegame.html?code=$serverCode&file=careerSavegame"
          .replace("$url", url)
          .replace("$serverCode", serverCode)
      )
      .then((response) => {
        const options = {
          ignoreAttributes: false,
          attributeNamePrefix: "",
          textNodeName: "text",
        };
        const parser = new XMLParser(options);
        return parser.parse(response.data).careerSavegame;
      });
  }
}

const dataService = new DataService();

export default dataService;
