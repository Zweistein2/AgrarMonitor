import axios from "axios";
import { XMLParser } from "fast-xml-parser";

class DataService {
  getServerData() {
    return axios
      .get(
        "https://proxy.potionlabs.de/http://23.109.254.60:8390/feed/dedicated-server-stats.xml?code=7kMAyZkz"
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
  getEconomyData() {
    return axios
      .get(
        "https://proxy.potionlabs.de/http://23.109.254.60:8390/feed/dedicated-server-savegame.html?code=7kMAyZkz&file=economy"
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
  getMetaData() {
    return axios
      .get(
        "https://proxy.potionlabs.de/http://23.109.254.60:8390/feed/dedicated-server-savegame.html?code=7kMAyZkz&file=careerSavegame"
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
