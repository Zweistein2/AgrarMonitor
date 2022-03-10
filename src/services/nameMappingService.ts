import placeableMap from "@/utils/placeables";
import vehicleMap from "@/utils/vehicles";
import i18n from "../i18n";

class NameMappingService {
  getPlaceableNameByMap(
    placeableFilename: string,
    defaultValue: string
  ): string {
    if (placeableMap.has(placeableFilename)) {
      const placeableName = placeableMap.get(placeableFilename);

      if (placeableName) {
        if (placeableName.startsWith("$l10n_")) {
          return i18n.global.t(placeableName);
        } else {
          return placeableName;
        }
      }
    }

    return defaultValue;
  }

  getVehicleNameByMap(vehicleFilename: string, defaultValue: string): string {
    if (vehicleMap.has(vehicleFilename)) {
      const vehicleMapData = vehicleMap.get(vehicleFilename);

      if (vehicleMapData && vehicleMapData[3]) {
        if (vehicleMapData[3].startsWith("$l10n_")) {
          return i18n.global.t(vehicleMapData[3]);
        } else {
          return vehicleMapData[3];
        }
      }
    }

    return defaultValue;
  }

  getVehicleCategoryByMap(
    vehicleFilename: string,
    defaultValue: string
  ): string {
    if (vehicleMap.has(vehicleFilename)) {
      const vehicleMapData = vehicleMap.get(vehicleFilename);

      if (vehicleMapData && vehicleMapData[2]) {
        return vehicleMapData[2].toUpperCase();
      }
    }

    return defaultValue;
  }

  getVehicleBrandByMap(vehicleFilename: string, defaultValue: string): string {
    if (vehicleMap.has(vehicleFilename)) {
      const vehicleMapData = vehicleMap.get(vehicleFilename);

      if (vehicleMapData && vehicleMapData[1]) {
        return vehicleMapData[1];
      }
    }

    return defaultValue;
  }

  getVehicleTypeByMap(vehicleFilename: string, defaultValue: string): string {
    if (vehicleMap.has(vehicleFilename)) {
      const vehicleMapData = vehicleMap.get(vehicleFilename);

      if (vehicleMapData && vehicleMapData[0]) {
        return vehicleMapData[0];
      }
    }

    return defaultValue;
  }
}

const nameMappingService = new NameMappingService();

export default nameMappingService;
