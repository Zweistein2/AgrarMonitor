import placeableMap from "@/utils/placeables";
import vehicleMap from "@/utils/vehicles";
import i18n from "../i18n";
import fruittypesMap from "@/utils/fruittypes";
import nfFruittypesMap from "@/mods/FS22_NF_Marsch_4fach_oG/utils/fruittypes";

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

  getFillUnitNameByMap(
    fillUnitId: number | undefined,
    defaultValue: string
  ): string {
    if (fillUnitId !== undefined) {
      for (const fruittype of fruittypesMap) {
        if (fruittype[1][2] === fillUnitId) {
          return fruittype[0];
        }
      }
      for (const fruittype of nfFruittypesMap) {
        if (fruittype[1][2] === fillUnitId) {
          return fruittype[0];
        }
      }
    }

    return defaultValue;
  }

  mapForecastTypeToTypeName(type: number | undefined): string {
    switch (type) {
      case 1:
        return "SUN";
      case 2:
        return "CLOUDY";
      case 3:
        return "RAIN";
      case 4:
        return "SNOW";
      default:
        return "UNKNOWN";
    }
  }
}

const nameMappingService = new NameMappingService();

export default nameMappingService;
