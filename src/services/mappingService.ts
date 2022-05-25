import nameMappingService from "@/services/nameMappingService";
import VehicleComponent from "@/components/VehicleComponent.vue";

class MappingService {
  mapEnvironmentData(
    websocketEnvironmentData: WebsocketEnvironmentWrapper,
    oldEnvironmentData: EnvironmentData
  ): EnvironmentData {
    let newEnvironmentData = {} as EnvironmentData;
    newEnvironmentData.snow = {} as Snow;
    newEnvironmentData.weather = {} as Weather;
    newEnvironmentData.weather.forecast = {} as Forecast;
    newEnvironmentData.weather.forecast.instance = Array<ForecastInstance>();

    if (
      oldEnvironmentData &&
      oldEnvironmentData.weather &&
      oldEnvironmentData.weather.forecast &&
      oldEnvironmentData.weather.forecast.instance
    ) {
      newEnvironmentData = oldEnvironmentData;
    }

    if (
      newEnvironmentData &&
      newEnvironmentData.weather &&
      newEnvironmentData.weather.forecast &&
      newEnvironmentData.weather.forecast.instance
    ) {
      for (const environment of websocketEnvironmentData.environment) {
        if (environment !== undefined && environment.dayTime !== undefined) {
          const forecast = Array<ForecastInstance>();

          for (const forecastElement of environment.forecast) {
            if (
              forecastElement.duration !== undefined &&
              forecastElement.startDayTime !== undefined
            ) {
              const forecastInstance = {} as ForecastInstance;

              forecastInstance.season = forecastElement.season;
              forecastInstance.duration =
                forecastElement.duration / 60 / 60 / 1000;
              forecastInstance.durationLeft =
                forecastElement.startDayTime / 60 / 60 / 1000 +
                (forecastElement.duration - environment.dayTime) /
                  60 /
                  60 /
                  1000;
              forecastInstance.typeName =
                nameMappingService.mapForecastTypeToTypeName(
                  forecastElement.type
                );
              forecastInstance.variationIndex = forecastElement.variationIndex;

              forecast.push(forecastInstance);
            }
          }

          newEnvironmentData.daysPerPeriod = environment.daysPerPeriod;
          newEnvironmentData.currentDay = environment.currentDay;

          if (environment.currentHour) {
            newEnvironmentData.dayTimeHour = environment.currentHour;
          } else {
            newEnvironmentData.dayTimeHour = ~~(
              environment.dayTime /
              60 /
              60 /
              1000
            );
          }
          if (environment.currentMinute) {
            newEnvironmentData.dayTimeMinutes = environment.currentMinute;
          } else {
            newEnvironmentData.dayTimeMinutes = ~~(
              (((environment.dayTime / 60 / 60 / 1000) %
                newEnvironmentData.dayTimeHour) /
                100) *
              60 *
              100
            );
          }

          newEnvironmentData.weather.forecast.instance = forecast;
        }
      }
    }

    return newEnvironmentData;
  }
  mapMetaData(
    websocketMetaData: WebsocketMetadataWrapper,
    websocketFarmData: WebsocketFarmWrapper,
    oldMetaData: MetaData
  ): MetaData {
    let newMetaData = {} as MetaData;
    newMetaData.settings = {} as Settings;
    newMetaData.statistics = {} as Statistics;
    newMetaData.mod = Array<MetaMod>();

    if (oldMetaData && oldMetaData.settings) {
      newMetaData = oldMetaData;
    }

    if (newMetaData && newMetaData.settings && newMetaData.statistics) {
      newMetaData.settings.automaticMotorStartEnabled =
        websocketMetaData.metadata[0].automaticMotorStartEnabled;
      newMetaData.settings.autoSaveInterval =
        websocketMetaData.metadata[0].autoSaveInterval;
      newMetaData.settings.dirtInterval =
        websocketMetaData.metadata[0].dirtInterval;
      newMetaData.settings.difficulty =
        websocketMetaData.metadata[0].difficulty;
      newMetaData.settings.economicDifficulty =
        websocketMetaData.metadata[0].economicDifficulty;
      //          newMetaData.settings.fixedSeasonalVisuals =
      //              websocketMetaData.metadata[0].fixedSeasonalVisuals;
      newMetaData.settings.fruitDestruction =
        websocketMetaData.metadata[0].fruitDestruction;
      newMetaData.settings.fuelUsage = websocketMetaData.metadata[0].fuelUsage;
      newMetaData.settings.growthMode =
        websocketMetaData.metadata[0].growthMode;
      newMetaData.settings.helperBuyFertilizer =
        websocketMetaData.metadata[0].helperBuyFertilizer;
      newMetaData.settings.helperBuyFuel =
        websocketMetaData.metadata[0].helperBuyFuel;
      newMetaData.settings.helperBuySeeds =
        websocketMetaData.metadata[0].helperBuySeeds;
      newMetaData.settings.helperManureSource =
        websocketMetaData.metadata[0].helperManureSource;
      newMetaData.settings.helperSlurrySource =
        websocketMetaData.metadata[0].helperSlurrySource;
      newMetaData.settings.isSnowEnabled =
        websocketMetaData.metadata[0].isSnowEnabled;
      newMetaData.settings.limeRequired =
        websocketMetaData.metadata[0].limeRequired;
      newMetaData.settings.mapTitle = websocketMetaData.metadata[0].mapTitle;
      newMetaData.settings.mapId = websocketMetaData.metadata[0].mapTitle; // FIXME?
      newMetaData.settings.plannedDaysPerPeriod =
        websocketMetaData.metadata[0].plannedDaysPerPeriod;
      newMetaData.settings.plowingRequiredEnabled =
        websocketMetaData.metadata[0].plowingRequiredEnabled;
      newMetaData.settings.resetVehicles =
        websocketMetaData.metadata[0].resetVehicles;
      newMetaData.settings.savegameName =
        websocketMetaData.metadata[0].savegameName;
      newMetaData.settings.stonesEnabled =
        websocketMetaData.metadata[0].stonesEnabled;
      newMetaData.settings.stopAndGoBraking =
        websocketMetaData.metadata[0].stopAndGoBraking;
      newMetaData.settings.timeScale = websocketMetaData.metadata[0].timeScale;
      newMetaData.settings.trafficEnabled =
        websocketMetaData.metadata[0].trafficEnabled;
      newMetaData.settings.trailerFillLimit =
        websocketMetaData.metadata[0].trailerFillLimit;
      newMetaData.settings.weedsEnabled =
        websocketMetaData.metadata[0].weedsEnabled;
      newMetaData.statistics.money = websocketMetaData.metadata[0].money;
      if (
        !newMetaData.statistics.money &&
        websocketFarmData &&
        websocketFarmData.farms
      ) {
        let money = 0;

        for (const farm of websocketFarmData.farms) {
          if (farm.money) {
            money += farm.money;
          }
        }

        newMetaData.statistics.money = money;
      }
    }

    return newMetaData;
  }
  mapEconomyData(
    websocketEconomyData: WebsocketEconomyWrapper,
    oldEconomyData: EconomyData
  ): EconomyData {
    let newEconomyData = {} as EconomyData;
    newEconomyData.fillTypes = {
      fillType: Array<FillType>(),
    } as FillTypeWrapper;

    if (
      oldEconomyData &&
      oldEconomyData.fillTypes &&
      oldEconomyData.fillTypes.fillType
    ) {
      newEconomyData = oldEconomyData;
    }

    const fillTypes = Array<FillType>();

    for (const economy of websocketEconomyData.economy) {
      if (economy.name) {
        let newFillType;

        if (
          newEconomyData.fillTypes.fillType.find(
            (value) => value.fillType == economy.name
          )
        ) {
          newFillType = newEconomyData.fillTypes.fillType.find(
            (value) => value.fillType == economy.name
          ) as FillType;
        } else {
          newFillType = {} as FillType;
        }

        newFillType.fillType = economy.name;
        newFillType.history = {
          period: Array<Period>(),
        } as PeriodHistory;

        for (const economyHistory of economy.history) {
          const period = {} as Period;

          if (economyHistory["1"]) {
            period.period = 1;
            period.text = economyHistory["1"] * 1000;
          }
          if (economyHistory["2"]) {
            period.period = 2;
            period.text = economyHistory["2"] * 1000;
          }
          if (economyHistory["3"]) {
            period.period = 3;
            period.text = economyHistory["3"] * 1000;
          }
          if (economyHistory["4"]) {
            period.period = 4;
            period.text = economyHistory["4"] * 1000;
          }
          if (economyHistory["5"]) {
            period.period = 5;
            period.text = economyHistory["5"] * 1000;
          }
          if (economyHistory["6"]) {
            period.period = 6;
            period.text = economyHistory["6"] * 1000;
          }
          if (economyHistory["7"]) {
            period.period = 7;
            period.text = economyHistory["7"] * 1000;
          }
          if (economyHistory["8"]) {
            period.period = 8;
            period.text = economyHistory["8"] * 1000;
          }
          if (economyHistory["9"]) {
            period.period = 9;
            period.text = economyHistory["9"] * 1000;
          }
          if (economyHistory["10"]) {
            period.period = 10;
            period.text = economyHistory["10"] * 1000;
          }
          if (economyHistory["11"]) {
            period.period = 11;
            period.text = economyHistory["11"] * 1000;
          }
          if (economyHistory["12"]) {
            period.period = 12;
            period.text = economyHistory["12"] * 1000;
          }

          newFillType.history.period.push(period);
        }

        fillTypes.push(newFillType);
      }
    }

    newEconomyData.fillTypes.fillType = fillTypes;

    return newEconomyData;
  }
  mapPlayerData(websocketPlayerData: WebsocketPlayerWrapper): PlayerData {
    const newPlayers = Array<Player>();

    for (const player of websocketPlayerData.players) {
      const newPlayer = {} as Player;

      newPlayer.x = player.x;
      newPlayer.y = player.y;
      newPlayer.z = player.z;
      newPlayer.farmId = player.farmId;
      newPlayer.name = player.name;

      newPlayers.push(newPlayer);
    }

    return {
      players: newPlayers,
    } as PlayerData;
  }
  mapFarmData(
    websocketFarmData: WebsocketFarmWrapper,
    oldFarmsData: FarmsData
  ): FarmsData {
    let newFarmsData = {} as FarmsData;

    if (oldFarmsData && oldFarmsData.farm) {
      newFarmsData = oldFarmsData;
    }

    newFarmsData.farm = Array<Farm>();

    for (const farm of websocketFarmData.farms) {
      const newFarm = {} as Farm;

      newFarm.farmId = farm.farmID;
      newFarm.name = farm.name;
      newFarm.money = farm.money;
      newFarm.color = farm.farmID;
      newFarm.loan = farm.loan;
      newFarm.players = {
        player: Array<FarmPlayer>(),
      } as FarmPlayerWrapper;

      for (const player of farm.players) {
        const newFarmPlayer = {} as FarmPlayer;

        newFarmPlayer.farmManager = player.isFarmManager;
        newFarmPlayer.lastNickname = player.lastNickname;
        if (player.permissions[0]) {
          newFarmPlayer.buyVehicle = player.permissions[0].buyVehicle;
          newFarmPlayer.buyPlaceable = player.permissions[0].buyPlaceable;
          newFarmPlayer.createFields = player.permissions[0].createFields;
          newFarmPlayer.hireAssistant = player.permissions[0].hireAssistant;
          newFarmPlayer.landscaping = player.permissions[0].landscaping;
          newFarmPlayer.manageContracts = player.permissions[0].manageContracts;
          newFarmPlayer.manageContracting =
            player.permissions[0].manageContracting;
          newFarmPlayer.manageRights = player.permissions[0].manageRights;
          newFarmPlayer.resetVehicle = player.permissions[0].resetVehicle;
          newFarmPlayer.sellVehicle = player.permissions[0].sellVehicle;
          newFarmPlayer.sellPlaceable = player.permissions[0].sellPlaceable;
          newFarmPlayer.transferMoney = player.permissions[0].transferMoney;
          newFarmPlayer.tradeAnimals = player.permissions[0].tradeAnimals;
          newFarmPlayer.updateFarm = player.permissions[0].updateFarm;
        }

        newFarm.players.player.push(newFarmPlayer);
      }

      // TODO: newFarm.contracting

      newFarm.finances = {
        stats: Array<FarmFinanceStat>(),
      } as FarmFinances;

      if (farm.finances[0]) {
        newFarm.finances.stats.push(this.mapFinanceHistory(farm.finances, 0));
      }

      if (farm.financeHistory.length > 0) {
        for (const financeHistory of farm.financeHistory) {
          if (financeHistory["0"]) {
            newFarm.finances.stats.push(
              this.mapFinanceHistory(financeHistory["0"], 0)
            );
          }
          if (financeHistory["1"]) {
            newFarm.finances.stats.push(
              this.mapFinanceHistory(financeHistory["1"], 1)
            );
          }
          if (financeHistory["2"]) {
            newFarm.finances.stats.push(
              this.mapFinanceHistory(financeHistory["2"], 2)
            );
          }
          if (financeHistory["3"]) {
            newFarm.finances.stats.push(
              this.mapFinanceHistory(financeHistory["3"], 3)
            );
          }
          if (financeHistory["4"]) {
            newFarm.finances.stats.push(
              this.mapFinanceHistory(financeHistory["4"], 4)
            );
          }
        }
      }

      newFarm.statistics = {} as FarmStatistics;
      newFarm.statistics.baleCount = 0;
      newFarm.statistics.breedChickenCount = 0;
      newFarm.statistics.breedCowsCount = 0;
      newFarm.statistics.breedHorsesCount = 0;
      newFarm.statistics.breedPigsCount = 0;
      newFarm.statistics.breedSheepCount = 0;
      newFarm.statistics.carDistance = 0;
      newFarm.statistics.cultivatedHectares = 0;
      newFarm.statistics.cultivatedTime = 0;
      newFarm.statistics.cutTreeCount = 0;
      newFarm.statistics.expenses = 0;
      newFarm.statistics.fieldJobMissionByNPC = 0;
      newFarm.statistics.fieldJobMissionCount = 0;
      newFarm.statistics.fuelUsage = 0;
      newFarm.statistics.harvestedGrapes = 0;
      newFarm.statistics.harvestedOlives = 0;
      newFarm.statistics.horseDistance = 0;
      newFarm.statistics.horseJumpCount = 0;
      newFarm.statistics.petDogCount = 0;
      newFarm.statistics.plantedTreeCount = 0;
      newFarm.statistics.playTime = 0;
      newFarm.statistics.plowedHectares = 0;
      newFarm.statistics.plowedTime = 0;
      newFarm.statistics.repaintVehicleCount = 0;
      newFarm.statistics.revenue = 0;
      newFarm.statistics.repairVehicleCount = 0;
      newFarm.statistics.seedUsage = 0;
      newFarm.statistics.soldCottonBales = 0;
      newFarm.statistics.sownHectares = 0;
      newFarm.statistics.sownTime = 0;
      newFarm.statistics.sprayedTime = 0;
      newFarm.statistics.sprayedHectares = 0;
      newFarm.statistics.sprayUsage = 0;
      newFarm.statistics.threshedHectares = 0;
      newFarm.statistics.threshedTime = 0;
      newFarm.statistics.tractorDistance = 0;
      newFarm.statistics.traveledDistance = 0;
      newFarm.statistics.transportMissionCount = 0;
      // newFarm.statistics.treeTypesCut = 0;
      newFarm.statistics.truckDistance = 0;
      newFarm.statistics.woodTonsSold = 0;
      newFarm.statistics.workedHectares = 0;
      newFarm.statistics.workedTime = 0;
      newFarm.statistics.wrappedBales = 0;

      for (const stat of farm.stats) {
        newFarm.statistics.baleCount = stat.baleCount
          ? stat.baleCount[1].total
            ? stat.baleCount[1].total
            : newFarm.statistics.baleCount
          : newFarm.statistics.baleCount;
        newFarm.statistics.breedChickenCount = stat.breedChickenCount
          ? stat.breedChickenCount[1].total
            ? stat.breedChickenCount[1].total
            : newFarm.statistics.breedChickenCount
          : newFarm.statistics.breedChickenCount;
        newFarm.statistics.breedCowsCount = stat.breedCowsCount
          ? stat.breedCowsCount[1].total
            ? stat.breedCowsCount[1].total
            : newFarm.statistics.breedCowsCount
          : newFarm.statistics.breedCowsCount;
        newFarm.statistics.breedHorsesCount = stat.breedHorsesCount
          ? stat.breedHorsesCount[1].total
            ? stat.breedHorsesCount[1].total
            : newFarm.statistics.breedHorsesCount
          : newFarm.statistics.breedHorsesCount;
        newFarm.statistics.breedPigsCount = stat.breedPigsCount
          ? stat.breedPigsCount[1].total
            ? stat.breedPigsCount[1].total
            : newFarm.statistics.breedPigsCount
          : newFarm.statistics.breedPigsCount;
        newFarm.statistics.breedSheepCount = stat.breedSheepCount
          ? stat.breedSheepCount[1].total
            ? stat.breedSheepCount[1].total
            : newFarm.statistics.breedSheepCount
          : newFarm.statistics.breedSheepCount;
        newFarm.statistics.carDistance = stat.carDistance
          ? stat.carDistance[1].total
            ? stat.carDistance[1].total
            : newFarm.statistics.carDistance
          : newFarm.statistics.carDistance;
        newFarm.statistics.cultivatedHectares = stat.cultivatedHectares
          ? stat.cultivatedHectares[1].total
            ? stat.cultivatedHectares[1].total
            : newFarm.statistics.cultivatedHectares
          : newFarm.statistics.cultivatedHectares;
        newFarm.statistics.cultivatedTime = stat.cultivatedTime
          ? stat.cultivatedTime[1].total
            ? stat.cultivatedTime[1].total
            : newFarm.statistics.cultivatedTime
          : newFarm.statistics.cultivatedTime;
        newFarm.statistics.cutTreeCount = stat.cutTreeCount
          ? stat.cutTreeCount[1].total
            ? stat.cutTreeCount[1].total
            : newFarm.statistics.cutTreeCount
          : newFarm.statistics.cutTreeCount;
        newFarm.statistics.expenses = stat.expenses
          ? stat.expenses[1].total
            ? stat.expenses[1].total
            : newFarm.statistics.expenses
          : newFarm.statistics.expenses;
        newFarm.statistics.fieldJobMissionByNPC = stat.fieldJobMissionByNPC
          ? stat.fieldJobMissionByNPC[1].total
            ? stat.fieldJobMissionByNPC[1].total
            : newFarm.statistics.fieldJobMissionByNPC
          : newFarm.statistics.fieldJobMissionByNPC;
        newFarm.statistics.fieldJobMissionCount = stat.fieldJobMissionCount
          ? stat.fieldJobMissionCount[1].total
            ? stat.fieldJobMissionCount[1].total
            : newFarm.statistics.fieldJobMissionCount
          : newFarm.statistics.fieldJobMissionCount;
        newFarm.statistics.fuelUsage = stat.fuelUsage
          ? stat.fuelUsage[1].total
            ? stat.fuelUsage[1].total
            : newFarm.statistics.fuelUsage
          : newFarm.statistics.fuelUsage;
        newFarm.statistics.harvestedGrapes = stat.harvestedGrapes
          ? stat.harvestedGrapes[1].total
            ? stat.harvestedGrapes[1].total
            : newFarm.statistics.harvestedGrapes
          : newFarm.statistics.harvestedGrapes;
        newFarm.statistics.harvestedOlives = stat.harvestedOlives
          ? stat.harvestedOlives[1].total
            ? stat.harvestedOlives[1].total
            : newFarm.statistics.harvestedOlives
          : newFarm.statistics.harvestedOlives;
        newFarm.statistics.horseDistance = stat.horseDistance
          ? stat.horseDistance[1].total
            ? stat.horseDistance[1].total
            : newFarm.statistics.horseDistance
          : newFarm.statistics.horseDistance;
        newFarm.statistics.horseJumpCount = stat.horseJumpCount
          ? stat.horseJumpCount[1].total
            ? stat.horseJumpCount[1].total
            : newFarm.statistics.horseJumpCount
          : newFarm.statistics.horseJumpCount;
        newFarm.statistics.petDogCount = stat.petDogCount
          ? stat.petDogCount[1].total
            ? stat.petDogCount[1].total
            : newFarm.statistics.petDogCount
          : newFarm.statistics.petDogCount;
        newFarm.statistics.plantedTreeCount = stat.plantedTreeCount
          ? stat.plantedTreeCount[1].total
            ? stat.plantedTreeCount[1].total
            : newFarm.statistics.plantedTreeCount
          : newFarm.statistics.plantedTreeCount;
        newFarm.statistics.playTime = stat.playTime
          ? stat.playTime[1].total
            ? stat.playTime[1].total
            : newFarm.statistics.playTime
          : newFarm.statistics.playTime;
        newFarm.statistics.plowedHectares = stat.plowedHectares
          ? stat.plowedHectares[1].total
            ? stat.plowedHectares[1].total
            : newFarm.statistics.plowedHectares
          : newFarm.statistics.plowedHectares;
        newFarm.statistics.plowedTime = stat.plowedTime
          ? stat.plowedTime[1].total
            ? stat.plowedTime[1].total
            : newFarm.statistics.plowedTime
          : newFarm.statistics.plowedTime;
        newFarm.statistics.repaintVehicleCount = stat.repaintVehicleCount
          ? stat.repaintVehicleCount[1].total
            ? stat.repaintVehicleCount[1].total
            : newFarm.statistics.repaintVehicleCount
          : newFarm.statistics.repaintVehicleCount;
        newFarm.statistics.revenue = stat.revenue
          ? stat.revenue[1].total
            ? stat.revenue[1].total
            : newFarm.statistics.revenue
          : newFarm.statistics.revenue;
        newFarm.statistics.repairVehicleCount = stat.repairVehicleCount
          ? stat.repairVehicleCount[1].total
            ? stat.repairVehicleCount[1].total
            : newFarm.statistics.repairVehicleCount
          : newFarm.statistics.repairVehicleCount;
        newFarm.statistics.seedUsage = stat.seedUsage
          ? stat.seedUsage[1].total
            ? stat.seedUsage[1].total
            : newFarm.statistics.seedUsage
          : newFarm.statistics.seedUsage;
        newFarm.statistics.soldCottonBales = stat.soldCottonBales
          ? stat.soldCottonBales[1].total
            ? stat.soldCottonBales[1].total
            : newFarm.statistics.soldCottonBales
          : newFarm.statistics.soldCottonBales;
        newFarm.statistics.sownHectares = stat.sownHectares
          ? stat.sownHectares[1].total
            ? stat.sownHectares[1].total
            : newFarm.statistics.sownHectares
          : newFarm.statistics.sownHectares;
        newFarm.statistics.sownTime = stat.sownTime
          ? stat.sownTime[1].total
            ? stat.sownTime[1].total
            : newFarm.statistics.sownTime
          : newFarm.statistics.sownTime;
        newFarm.statistics.sprayedTime = stat.sprayedTime
          ? stat.sprayedTime[1].total
            ? stat.sprayedTime[1].total
            : newFarm.statistics.sprayedTime
          : newFarm.statistics.sprayedTime;
        newFarm.statistics.sprayedHectares = stat.sprayedHectares
          ? stat.sprayedHectares[1].total
            ? stat.sprayedHectares[1].total
            : newFarm.statistics.sprayedHectares
          : newFarm.statistics.sprayedHectares;
        newFarm.statistics.sprayUsage = stat.sprayUsage
          ? stat.sprayUsage[1].total
            ? stat.sprayUsage[1].total
            : newFarm.statistics.sprayUsage
          : newFarm.statistics.sprayUsage;
        newFarm.statistics.threshedHectares = stat.threshedHectares
          ? stat.threshedHectares[1].total
            ? stat.threshedHectares[1].total
            : newFarm.statistics.threshedHectares
          : newFarm.statistics.threshedHectares;
        newFarm.statistics.threshedTime = stat.threshedTime
          ? stat.threshedTime[1].total
            ? stat.threshedTime[1].total
            : newFarm.statistics.threshedTime
          : newFarm.statistics.threshedTime;
        newFarm.statistics.tractorDistance = stat.tractorDistance
          ? stat.tractorDistance[1].total
            ? stat.tractorDistance[1].total
            : newFarm.statistics.tractorDistance
          : newFarm.statistics.tractorDistance;
        newFarm.statistics.traveledDistance = stat.traveledDistance
          ? stat.traveledDistance[1].total
            ? stat.traveledDistance[1].total
            : newFarm.statistics.traveledDistance
          : newFarm.statistics.traveledDistance;
        newFarm.statistics.transportMissionCount = stat.transportMissionCount
          ? stat.transportMissionCount[1].total
            ? stat.transportMissionCount[1].total
            : newFarm.statistics.transportMissionCount
          : newFarm.statistics.transportMissionCount;
        // newFarm.statistics.treeTypesCut = stat.treeTypesCut ? stat.treeTypesCut[1].total ? stat.treeTypesCut[1].total : newFarm.statistics.treeTypesCut : newFarm.statistics.treeTypesCut;
        newFarm.statistics.truckDistance = stat.truckDistance
          ? stat.truckDistance[1].total
            ? stat.truckDistance[1].total
            : newFarm.statistics.truckDistance
          : newFarm.statistics.truckDistance;
        newFarm.statistics.woodTonsSold = stat.woodTonsSold
          ? stat.woodTonsSold[1].total
            ? stat.woodTonsSold[1].total
            : newFarm.statistics.woodTonsSold
          : newFarm.statistics.woodTonsSold;
        newFarm.statistics.workedHectares = stat.workedHectares
          ? stat.workedHectares[1].total
            ? stat.workedHectares[1].total
            : newFarm.statistics.workedHectares
          : newFarm.statistics.workedHectares;
        newFarm.statistics.workedTime = stat.workedTime
          ? stat.workedTime[1].total
            ? stat.workedTime[1].total
            : newFarm.statistics.workedTime
          : newFarm.statistics.workedTime;
        newFarm.statistics.wrappedBales = stat.wrappedBales
          ? stat.wrappedBales[1].total
            ? stat.wrappedBales[1].total
            : newFarm.statistics.wrappedBales
          : newFarm.statistics.wrappedBales;
      }

      newFarmsData.farm.push(newFarm);
    }

    return newFarmsData;
  }
  mapFinanceHistory(
    farmFinance: Array<WebsocketFarmFinance>,
    day: number
  ): FarmFinanceStat {
    const newFarmFinanceStat = {} as FarmFinanceStat;

    newFarmFinanceStat.day = day;
    newFarmFinanceStat.constructionCost = 0;
    newFarmFinanceStat.fieldPurchase = 0;
    newFarmFinanceStat.fieldSelling = 0;
    newFarmFinanceStat.harvestIncome = 0;
    newFarmFinanceStat.incomeBga = 0;
    newFarmFinanceStat.loanInterest = 0;
    newFarmFinanceStat.missionIncome = 0;
    newFarmFinanceStat.newAnimalsCost = 0;
    newFarmFinanceStat.newVehiclesCost = 0;
    newFarmFinanceStat.other = 0;
    newFarmFinanceStat.productionCosts = 0;
    newFarmFinanceStat.propertyIncome = 0;
    newFarmFinanceStat.propertyMaintenance = 0;
    newFarmFinanceStat.purchaseFertilizer = 0;
    newFarmFinanceStat.purchaseSaplings = 0;
    newFarmFinanceStat.purchaseFuel = 0;
    newFarmFinanceStat.purchaseSeeds = 0;
    newFarmFinanceStat.purchaseWater = 0;
    newFarmFinanceStat.soldAnimals = 0;
    newFarmFinanceStat.soldBales = 0;
    newFarmFinanceStat.soldBuildings = 0;
    newFarmFinanceStat.soldMilk = 0;
    newFarmFinanceStat.soldProducts = 0;
    newFarmFinanceStat.soldVehicles = 0;
    newFarmFinanceStat.soldWood = 0;
    newFarmFinanceStat.soldWool = 0;
    newFarmFinanceStat.vehicleLeasingCost = 0;
    newFarmFinanceStat.vehicleRunningCost = 0;
    newFarmFinanceStat.wagePayment = 0;

    for (const stat of farmFinance) {
      newFarmFinanceStat.constructionCost = stat.constructionCost
        ? stat.constructionCost
        : newFarmFinanceStat.constructionCost;
      newFarmFinanceStat.fieldPurchase = stat.fieldPurchase
        ? stat.fieldPurchase
        : newFarmFinanceStat.fieldPurchase;
      newFarmFinanceStat.fieldSelling = stat.fieldSelling
        ? stat.fieldSelling
        : newFarmFinanceStat.fieldSelling;
      newFarmFinanceStat.harvestIncome = stat.harvestIncome
        ? stat.harvestIncome
        : newFarmFinanceStat.harvestIncome;
      newFarmFinanceStat.incomeBga = stat.incomeBga
        ? stat.incomeBga
        : newFarmFinanceStat.incomeBga;
      newFarmFinanceStat.loanInterest = stat.loanInterest
        ? stat.loanInterest
        : newFarmFinanceStat.loanInterest;
      newFarmFinanceStat.missionIncome = stat.missionIncome
        ? stat.missionIncome
        : newFarmFinanceStat.missionIncome;
      newFarmFinanceStat.newAnimalsCost = stat.newAnimalsCost
        ? stat.newAnimalsCost
        : newFarmFinanceStat.newAnimalsCost;
      newFarmFinanceStat.newVehiclesCost = stat.newVehiclesCost
        ? stat.newVehiclesCost
        : newFarmFinanceStat.newVehiclesCost;
      newFarmFinanceStat.other = stat.other
        ? stat.other
        : newFarmFinanceStat.other;
      newFarmFinanceStat.productionCosts = stat.productionCosts
        ? stat.productionCosts
        : newFarmFinanceStat.productionCosts;
      newFarmFinanceStat.propertyIncome = stat.propertyIncome
        ? stat.propertyIncome
        : newFarmFinanceStat.propertyIncome;
      newFarmFinanceStat.propertyMaintenance = stat.propertyMaintenance
        ? stat.propertyMaintenance
        : newFarmFinanceStat.propertyMaintenance;
      newFarmFinanceStat.purchaseFertilizer = stat.purchaseFertilizer
        ? stat.purchaseFertilizer
        : newFarmFinanceStat.purchaseFertilizer;
      newFarmFinanceStat.purchaseSaplings = stat.purchaseSaplings
        ? stat.purchaseSaplings
        : newFarmFinanceStat.purchaseSaplings;
      newFarmFinanceStat.purchaseFuel = stat.purchaseFuel
        ? stat.purchaseFuel
        : newFarmFinanceStat.purchaseFuel;
      newFarmFinanceStat.purchaseSeeds = stat.purchaseSeeds
        ? stat.purchaseSeeds
        : newFarmFinanceStat.purchaseSeeds;
      newFarmFinanceStat.purchaseWater = stat.purchaseWater
        ? stat.purchaseWater
        : newFarmFinanceStat.purchaseWater;
      newFarmFinanceStat.soldAnimals = stat.soldAnimals
        ? stat.soldAnimals
        : newFarmFinanceStat.soldAnimals;
      newFarmFinanceStat.soldBales = stat.soldBales
        ? stat.soldBales
        : newFarmFinanceStat.soldBales;
      newFarmFinanceStat.soldBuildings = stat.soldBuildings
        ? stat.soldBuildings
        : newFarmFinanceStat.soldBuildings;
      newFarmFinanceStat.soldMilk = stat.soldMilk
        ? stat.soldMilk
        : newFarmFinanceStat.soldMilk;
      newFarmFinanceStat.soldProducts = stat.soldProducts
        ? stat.soldProducts
        : newFarmFinanceStat.soldProducts;
      newFarmFinanceStat.soldVehicles = stat.soldVehicles
        ? stat.soldVehicles
        : newFarmFinanceStat.soldVehicles;
      newFarmFinanceStat.soldWood = stat.soldWood
        ? stat.soldWood
        : newFarmFinanceStat.soldWood;
      newFarmFinanceStat.soldWool = stat.soldWool
        ? stat.soldWool
        : newFarmFinanceStat.soldWool;
      newFarmFinanceStat.vehicleLeasingCost = stat.vehicleLeasingCost
        ? stat.vehicleLeasingCost
        : newFarmFinanceStat.vehicleLeasingCost;
      newFarmFinanceStat.vehicleRunningCost = stat.vehicleRunningCost
        ? stat.vehicleRunningCost
        : newFarmFinanceStat.vehicleRunningCost;
      newFarmFinanceStat.wagePayment = stat.wagePayment
        ? stat.wagePayment
        : newFarmFinanceStat.wagePayment;
    }

    return newFarmFinanceStat;
  }
  mapModData(
    websocketModData: WebsocketModsWrapper,
    oldMetaData: MetaData
  ): MetaData {
    let newMetaData = {} as MetaData;
    newMetaData.settings = {} as Settings;
    newMetaData.statistics = {} as Statistics;

    if (oldMetaData && oldMetaData.settings) {
      newMetaData = oldMetaData;
    }

    newMetaData.mod = Array<MetaMod>();

    if (newMetaData && newMetaData.mod) {
      for (const mod of websocketModData.mods) {
        const newMod = {} as MetaMod;

        newMod.modName = mod.modName;
        newMod.title = mod.title;
        newMod.version = mod.version;

        newMetaData.mod.push(newMod);
      }
    }

    return newMetaData;
  }
  mapVehicleData(
    websocketVehicleData: WebsocketVehiclesWrapper,
    oldVehicleData: VehicleData
  ): VehicleData {
    const newVehicleData = {} as VehicleData;
    newVehicleData.vehicle = Array<VehicleDetails>();
    newVehicleData.attachments = Array<AttachmentWrapper>();

    for (const vehicle of websocketVehicleData.vehicles) {
      let found = false;
      let idCounter = 0;

      if (oldVehicleData && oldVehicleData.vehicle) {
        for (const oldVehicle of oldVehicleData.vehicle) {
          if (oldVehicle.id && idCounter <= oldVehicle.id) {
            idCounter = oldVehicle.id + 1;
          }
        }

        for (const oldVehicle of oldVehicleData.vehicle) {
          let id;

          if (vehicle.id) {
            id = vehicle.id;
            if (idCounter <= vehicle.id) {
              idCounter = vehicle.id + 1;
            }
          } else {
            id = idCounter;
            idCounter++;
          }

          if (vehicle.id === oldVehicle.id) {
            const newVehicle = oldVehicle;

            newVehicle.age = vehicle.age;
            newVehicle.farmId = vehicle.ownerFarmId;
            newVehicle.id = id;
            newVehicle.filename = vehicle.name;
            newVehicle.price = vehicle.price;
            newVehicle.operatingTime = vehicle.operatingTime;

            if (newVehicle.component && newVehicle.component.length > 0) {
              for (const vehicleComponent of newVehicle.component) {
                if (vehicleComponent.index === 1) {
                  vehicleComponent.position = `${vehicle.x} ${vehicle.y} ${vehicle.z}`;
                }
              }
            } else {
              newVehicle.component = Array<VehicleComponent>();
              const vehicleComponent = {} as VehicleComponent;

              vehicleComponent.index = 1;
              vehicleComponent.position = `${vehicle.x} ${vehicle.y} ${vehicle.z}`;

              newVehicle.component.push(vehicleComponent);
            }

            if (vehicle.fillUnits && vehicle.fillUnits.length > 0) {
              newVehicle.fillUnit = {} as VehicleFillUnitWrapper;
              newVehicle.fillUnit.unit = Array<VehicleFillUnit>();

              let fillUnitIndex = 1;
              for (const fillUnit of vehicle.fillUnits) {
                const vehicleFillUnit = {} as VehicleFillUnit;

                vehicleFillUnit.fillType =
                  nameMappingService.getFillUnitNameByMap(
                    fillUnit.fillType,
                    "UNKNOWN"
                  );
                vehicleFillUnit.fillLevel = fillUnit.fillLevel;
                vehicleFillUnit.index = fillUnitIndex;
                newVehicle.fillUnit.unit.push(vehicleFillUnit);

                fillUnitIndex++;
              }
            }

            found = true;
            newVehicleData.vehicle.push(newVehicle);
          }
        }
      }

      if (!found) {
        const newVehicle = {} as VehicleDetails;

        newVehicle.age = vehicle.age;
        newVehicle.farmId = vehicle.ownerFarmId;
        newVehicle.id = idCounter;
        newVehicle.filename = vehicle.name;
        newVehicle.price = vehicle.price;
        newVehicle.operatingTime = vehicle.operatingTime;

        newVehicle.component = Array<VehicleComponent>();
        const vehicleComponent = {} as VehicleComponent;

        vehicleComponent.index = 1;
        vehicleComponent.position = `${vehicle.x} ${vehicle.y} ${vehicle.z}`;

        newVehicle.component.push(vehicleComponent);

        if (vehicle.fillUnits && vehicle.fillUnits.length > 0) {
          newVehicle.fillUnit = {} as VehicleFillUnitWrapper;
          newVehicle.fillUnit.unit = Array<VehicleFillUnit>();

          let fillUnitIndex = 1;
          for (const fillUnit of vehicle.fillUnits) {
            const vehicleFillUnit = {} as VehicleFillUnit;

            vehicleFillUnit.fillType = nameMappingService.getFillUnitNameByMap(
              fillUnit.fillType,
              "UNKNOWN"
            );
            vehicleFillUnit.fillLevel = fillUnit.fillLevel;
            vehicleFillUnit.index = fillUnitIndex;
            newVehicle.fillUnit.unit.push(vehicleFillUnit);

            fillUnitIndex++;
          }
        }

        idCounter++;

        newVehicleData.vehicle.push(newVehicle);
      }
    }

    return newVehicleData;
  }
  mapMissionsData(
    websocketMissionsData: WebsocketMissionsWrapper,
    oldMissionsData: MissionsData
  ): MissionsData {
    let newMissionsData = {} as MissionsData;

    if (oldMissionsData && oldMissionsData.mission) {
      newMissionsData = oldMissionsData;
    }

    newMissionsData.mission = Array<Mission>();

    for (const mission of websocketMissionsData.missions) {
      const newMission = {} as Mission;
      const missionField = {} as MissionField;

      missionField.id = mission.fieldId;
      missionField.vehicleUseCost = mission.vehicleUseCost;
      missionField.spawnedVehicles = mission.spawnedVehicles;
      missionField.fruitTypeName = nameMappingService.getFillUnitNameByMap(
        mission.fruitType,
        "UNKNOWN"
      );

      newMission.reward = mission.reward;
      newMission.success = mission.success;
      newMission.type = mission.type;
      newMission.farmId = mission.farmId;
      newMission.completion =
        (mission.completion !== undefined ? mission.completion : 0) * 100;
      newMission.field = missionField;

      if (mission.type === "mow_bale") {
        const missionBale = {} as MissionBale;

        missionBale.fillTypeName = nameMappingService.getFillUnitNameByMap(
          mission.fillType,
          "UNKNOWN"
        );
        missionField.fruitTypeName = "GRASS";
        missionBale.depositedLiters = mission.depositedLiters;
        missionBale.sellPointPlaceableId = mission.sellPointPlaceableId;

        newMission.bale = missionBale;
      } else if (mission.type === "supplyTransport") {
        const missionDelivery = {} as MissionDelivery;

        missionDelivery.contractDay = mission.contractDay;
        missionDelivery.contractDuration = mission.contractDuration;
        missionDelivery.contractTime = mission.contractTime;
        missionDelivery.expectedLiters = mission.contractLiters;
        missionDelivery.depositedLiters = mission.deliveredLiters;
        missionDelivery.fillType = nameMappingService.getFillUnitNameByMap(
          mission.fillType,
          "UNKNOWN"
        );
        missionDelivery.sellPointPlaceableId = mission.sellPointPlaceableId;

        newMission.delivery = missionDelivery;
      } else if (mission.type === "harvest") {
        const missionHarvest = {} as MissionHarvest;

        missionHarvest.expectedLiters = mission.expectedLiters;
        missionHarvest.depositedLiters = mission.depositedLiters;
        missionHarvest.sellPointPlaceableId = mission.sellPointPlaceableId;

        missionField.fruitTypeName = nameMappingService.getFillUnitNameByMap(
          mission.fillType,
          "UNKNOWN"
        );

        newMission.harvest = missionHarvest;
      }

      newMissionsData.mission.push(newMission);
    }

    return newMissionsData;
  }
  mapPlaceablesData(
    websocketPlaceablesData: WebsocketPlaceableWrapper,
    oldPlaceablesData: PlaceableData
  ): PlaceableData {
    let newPlaceableData = {} as PlaceableData;

    if (oldPlaceablesData && oldPlaceablesData.placeable) {
      newPlaceableData = oldPlaceablesData;
    }

    newPlaceableData.placeable = Array<Placeable>();

    for (const placeable of websocketPlaceablesData.placeables) {
      const newPlaceable = {} as Placeable;

      newPlaceable.id = placeable.id;
      newPlaceable.farmId = placeable.farmId ? placeable.farmId : 0;
      newPlaceable.age = placeable.age;
      newPlaceable.price = placeable.price;
      newPlaceable.position = `${placeable.x} ${placeable.y} ${placeable.z}`;
      newPlaceable.filename = placeable.name;
      if (placeable.storage && placeable.storage.length > 0) {
        newPlaceable.silo = {} as Silo;
        newPlaceable.silo.storage = {} as StorageObject;
        newPlaceable.silo.storage.farmId = placeable.farmId;
        newPlaceable.silo.storage.index = 0;
        newPlaceable.silo.storage.node = Array<StorageNode>();

        for (const websocketStorage of placeable.storage) {
          for (const fillLevel of websocketStorage.fillLevels) {
            const storageNode = {} as StorageNode;

            storageNode.fillType = nameMappingService.getFillUnitNameByMap(
              fillLevel.fillType,
              "UNKNOWN"
            );
            storageNode.fillLevel = fillLevel.fillLevel;

            newPlaceable.silo.storage.node.push(storageNode);
          }
        }
      }

      if (placeable.sellPointId) {
        newPlaceable.id = placeable.sellPointId;
        newPlaceable.sellingStation = {} as SellingStation;
        newPlaceable.sellingStation.stats = Array<SellingStat>();

        if (placeable.totalPaid && placeable.totalReceived) {
          for (const fillTypeAmount of placeable.totalPaid) {
            const sellingStat = {} as SellingStat;
            const totalReceived = placeable.totalReceived.find(
              (value) => value.fillType === fillTypeAmount.fillType
            );

            sellingStat.fillType = nameMappingService.getFillUnitNameByMap(
              fillTypeAmount.fillType,
              "UNKNOWN"
            );
            sellingStat.paid = fillTypeAmount.amount;
            if (totalReceived && totalReceived.amount) {
              sellingStat.received = totalReceived.amount;
            } else {
              sellingStat.received = 0;
            }

            newPlaceable.sellingStation.stats.push(sellingStat);
          }
        }
      }

      newPlaceableData.placeable.push(newPlaceable);
    }

    return newPlaceableData;
  }
}

const mappingService = new MappingService();

export default mappingService;
