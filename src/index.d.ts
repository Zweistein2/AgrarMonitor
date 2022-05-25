type EconomyData = {
  fillTypes: FillTypeWrapper;
};

type FillTypeWrapper = {
  fillType: Array<FillType>;
};

type FillType = {
  fillType: string | undefined;
  totalAmount: number | undefined;
  history: PeriodHistory | undefined;
};

type PeriodHistory = {
  period: Array<Period>;
};

type Period = {
  period: number | undefined;
  text: number | undefined;
};

type MetaData = {
  settings: Settings | undefined;
  statistics: Statistics | undefined;
  mod: Array<MetaMod>;
};

type Settings = {
  savegameName: string | undefined;
  creationDate: string | undefined;
  mapId: string | undefined;
  mapTitle: string | undefined;
  saveDateFormatted: string | undefined;
  saveDate: string | undefined;
  resetVehicles: boolean | undefined;
  trafficEnabled: boolean | undefined;
  stopAndGoBraking: boolean | undefined;
  trailerFillLimit: boolean | undefined;
  automaticMotorStartEnabled: boolean | undefined;
  fruitDestruction: boolean | undefined;
  plowingRequiredEnabled: boolean | undefined;
  stonesEnabled: boolean | undefined;
  weedsEnabled: boolean | undefined;
  limeRequired: boolean | undefined;
  isSnowEnabled: boolean | undefined;
  helperBuyFuel: boolean | undefined;
  helperBuySeeds: boolean | undefined;
  helperBuyFertilizer: boolean | undefined;
  helperSlurrySource: number | undefined;
  helperManureSource: number | undefined;
  fuelUsage: number | undefined;
  difficulty: number | undefined;
  economicDifficulty: number | undefined;
  dirtInterval: number | undefined;
  timeScale: number | undefined;
  autoSaveInterval: number | undefined;
  growthMode: number | undefined;
  plannedDaysPerPeriod: number | undefined;
  fixedSeasonalVisuals: number | undefined;
};

type Statistics = {
  money: number | undefined;
  playTime: number | undefined;
};

type MetaMod = {
  modName: string | undefined;
  title: string | undefined;
  version: string | undefined;
  required: boolean | undefined;
  fileHash: string | undefined;
};

type VehicleFillState = {
  name: string | undefined;
  fillStates: Map<string, number>;
};

type EnvironmentData = {
  dayTime: number | undefined;
  dayTimeHour: number | undefined;
  dayTimeMinutes: number | undefined;
  currentDay: number | undefined;
  currentMonotonicDay: number | undefined;
  realHourTimer: number | undefined;
  daysPerPeriod: number | undefined;
  weather: Weather | undefined;
  snow: Snow | undefined;
};

type Weather = {
  timeSinceLastRain: number | undefined;
  forecast: Forecast | undefined;
  fog: Fog | undefined;
  snow: Snow | undefined;
};

type Forecast = {
  instance: Array<ForecastInstance>;
};

type ForecastInstance = {
  durationLeft: number | undefined;
  typeName: string | undefined;
  variationIndex: number | undefined;
  duration: number | undefined;
  season: number | undefined;
};

type Fog = {
  currentMieScale: number | undefined;
  lastMieScale: number | undefined;
  targetMieScale: number | undefined;
  alpha: number | undefined;
  duration: number | undefined;
  nightFactor: number | undefined;
  dayFactor: number | undefined;
};

type Snow = {
  physicalHeight: number | undefined;
  height: number | undefined;
};

type ForecastData = {
  dayTime: number | undefined;
  currentDay: number | undefined;
  currentMonth: number | undefined;
  forecast: Array<ForecastTimeslot>;
};

type ForecastTimeslot = {
  typeName: string | undefined;
  start: Date | undefined;
  end: Date | undefined;
};

type PlayerData = {
  players: Array<Player>;
};

type Player = {
  name: string | undefined;
  x: number | undefined;
  y: number | undefined;
  z: number | undefined;
  farmId: number | undefined;
};

type VehicleData = {
  vehicle: Array<VehicleDetails>;
  attachments: Array<AttachmentWrapper>;
};

type VehicleDetails = {
  filename: string | undefined;
  id: number | undefined;
  isAbsolute: boolean | undefined;
  age: number | undefined;
  price: number | undefined;
  farmId: number | undefined;
  propertyState: number | undefined;
  operatingTime: number | undefined;
  selectedObjectIndex: number | undefined;
  subSelectedObjectIndex: number | undefined;
  component: Array<VehicleComponent>;
  configuration: Array<VehicleConfiguration>;
  boughtConfiguration: Array<VehicleConfiguration>;
  wheels: VehicleWheels | undefined;
  enterable: VehicleEnterableWrapper | undefined;
  drivable: VehicleDrivable | undefined;
  attacherJoints: VehicleAttacherJoints | undefined;
  fillUnit: VehicleFillUnitWrapper | undefined;
  trailer: VehicleTrailer | undefined;
  cover: VehicleCover | undefined;
  tensionBelts: VehicleBeltWrapper | undefined;
  washable: VehicleWashableWrapper | undefined;
  wearable: VehicleWearableWrapper | undefined;
  licensePlates: VehicleLicensePlate | undefined;
  foldable: VehicleFoldable | undefined;
  aiFieldWorker: VehicleAIFieldWorker | undefined;
  aiJobVehicle: VehicleAIJobVehicle | undefined;
  actionController: VehicleActionController | undefined;
  workMode: VehicleWorkMode | undefined;
  baleWrapper: VehicleBaleWrapper | undefined;
  baler: VehicleBaler | undefined;
  cylindered: VehicleMovingToolWrapper | undefined;
  combine: VehicleCombine | undefined;
  pipe: VehiclePipe | undefined;
  ridgeMarker: VehicleRidgeMarker | undefined;
  sowingMachine: VehicleSowingMachine | undefined;
  baleLoader: VehicleBaleLoader | undefined;
  mixerWagon: VehicleMixerWagon | undefined;
};

type VehicleMixerWagon = {
  fillType: Array<VehicleMixerFillType>;
};

type VehicleMixerFillType = {
  fillLevel: string | undefined;
};

type VehicleBaleLoader = {
  isInWorkPosition: boolean | undefined;
  baleTypeIndex: number | undefined;
};

type VehicleSowingMachine = {
  selectedSeedFruitType: string | undefined;
};

type VehicleCombine = {
  isSwathActive: boolean | undefined;
  workedHectars: number | undefined;
  numAttachedCutters: number | undefined;
};

type VehicleRidgeMarker = {
  state: number | undefined;
};

type VehiclePipe = {
  state: number | undefined;
};

type VehicleMovingToolWrapper = {
  movingTool: Array<VehicleMovingTool>;
};

type VehicleMovingTool = {
  translation: number | undefined;
  rotation: number | undefined;
};

type VehicleBaler = {
  numBales: number | undefined;
  baleTypeIndex: number | undefined;
  preSelectedBaleTypeIndex: number | undefined;
  fillUnitCapacity: number | undefined;
};

type VehicleBaleWrapper = {
  wrapperTime: number | undefined;
};

type VehicleWorkMode = {
  state: number | undefined;
};

type VehicleActionController = {
  lastDirection: number | undefined;
  numActions: number | undefined;
  action: Array<VehicleAction>;
};

type VehicleAction = {
  name: string | undefined;
  identifier: string | undefined;
  lastDirection: number | undefined;
};

type VehicleAIJobVehicle = {
  lastJob: VehicleAILastJob | undefined;
};

type VehicleAILastJob = {
  type: string | undefined;
  parameter: Array<VehicleAIJobParameter>;
};

type VehicleAIJobParameter = {
  name: string | undefined;
  x: number | undefined;
  z: number | undefined;
  angle: number | undefined;
};

type VehicleAIFieldWorker = {
  lastTurnDirection: boolean | undefined;
};

type VehicleFoldable = {
  foldAnimTime: number | undefined;
};

type VehicleLicensePlate = {
  variation: number | undefined;
  characters: string | undefined;
  colorIndex: number | undefined;
  placementIndex: number | undefined;
};

type VehicleWearableWrapper = {
  damage: number | undefined;
  wearNode: Array<VehicleWearNode>;
};

type VehicleWearNode = {
  amount: number | undefined;
};

type VehicleWashableWrapper = {
  dirtNode: Array<VehicleDirtNode>;
};

type VehicleDirtNode = {
  amount: number | undefined;
  snowScale: number | undefined;
};

type VehicleBeltWrapper = {
  belt: Array<VehicleBelt>;
};

type VehicleBelt = {
  isActive: boolean | undefined;
};

type VehicleFillUnitWrapper = {
  unit: Array<VehicleFillUnit>;
};

type VehicleFillUnit = {
  index: number | undefined;
  fillType: string | undefined;
  fillLevel: number | undefined;
};

type VehicleTrailer = {
  doorState: boolean | undefined;
  tipAnimationTime: number | undefined;
  tipState: number | undefined;
  tipSideIndex: number | undefined;
};

type VehicleCover = {
  state: number | undefined;
};

type VehicleAttacherJoints = {
  comboDirection: number | undefined;
};

type VehicleDrivable = {
  cruiseControl: number | undefined;
  cruiseControlReverse: number | undefined;
};

type VehicleEnterableWrapper = {
  camera: Array<VehicleCamera>;
};

type VehicleCamera = {
  rotation: number | undefined;
  translation: number | undefined;
  zoom: number | undefined;
  fovY: number | undefined;
};

type VehicleWheels = {
  lastWheelConfiguration: number | undefined;
};

type VehicleComponent = {
  index: number | undefined;
  position: string | undefined;
  rotation: string | undefined;
};

type VehicleConfiguration = {
  name: string | undefined;
  id: string | undefined;
};

type AttachmentWrapper = {
  rootVehicleId: number | undefined;
  attachment: Attachment | undefined;
};

type Attachment = {
  attachmentId: number | undefined;
  inputJointDescIndex: number | undefined;
  jointIndex: number | undefined;
  moveDown: boolean | undefined;
};

type PlaceableData = {
  placeable: Array<Placeable>;
};

type Placeable = {
  filename: string | undefined;
  id: number | undefined;
  position: string | undefined;
  rotation: string | undefined;
  age: number | undefined;
  price: number | undefined;
  farmId: number | undefined;
  mapBoundId: string | undefined;
  trainSystem: TrainSystem | undefined;
  productionPoint: ProductionPoint | undefined;
  bunkerSilo: BunkerSilo | undefined;
  sellingStation: SellingStation | undefined;
  animatedObjects: AnimatedObjectWrapper | undefined;
  silo: Silo | undefined;
};

type TrainSystem = {
  splineTime: number | undefined;
  isRented: boolean | undefined;
  rentFarmId: number | undefined;
  currentPrice: number | undefined;
  railroadVehicle: Array<RailroadVehicle>;
};

type RailroadVehicle = {
  vehicleId: number | undefined;
};

type ProductionPoint = {
  production: Array<Production>;
  storage: StorageObject | undefined;
};

type Production = {
  id: string | undefined;
  isEnabled: boolean | undefined;
};

type BunkerSilo = {
  state: number | undefined;
  fillLevel: number | undefined;
  compactedFillLevel: number | undefined;
  fermentingTime: number | undefined;
  openedAtFront: boolean | undefined;
  openedAtBack: boolean | undefined;
};

type SellingStation = {
  stats: Array<SellingStat>;
};

type SellingStat = {
  fillType: string | undefined;
  received: number | undefined;
  paid: number | undefined;
  priceVersion: number | undefined;
  isInPlateau: boolean | undefined;
  plateauDuration: number | undefined;
  meanValue: number | undefined;
  plateauTime: number | undefined;
  curveBaseCurve: SellingCurve | undefined;
  curve1: SellingCurve | undefined;
};

type SellingCurve = {
  nominalAmplitude: number | undefined;
  nominalAmplitudeVariation: number | undefined;
  amplitudeDistribution: number | undefined;
  nominalPeriod: number | undefined;
  nominalPeriodVariation: number | undefined;
  periodDistribution: number | undefined;
  amplitude: number | undefined;
  period: number | undefined;
  time: number | undefined;
};

type AnimatedObjectWrapper = {
  animatedObject: Array<AnimatedObject>;
};

type AnimatedObject = {
  time: number | undefined;
  direction: number | undefined;
};

type Silo = {
  storage: StorageObject | undefined;
};

type StorageObject = {
  index: number | undefined;
  farmId: number | undefined;
  node: Array<StorageNode>;
};

type StorageNode = {
  fillType: string | undefined;
  fillLevel: number | undefined;
};

type FarmsData = {
  farm: Array<Farm>;
};

type Farm = {
  farmId: number | undefined;
  name: string | undefined;
  color: number | undefined;
  loan: number | undefined;
  money: number | undefined;
  players: FarmPlayerWrapper | undefined;
  statistics: FarmStatistics | undefined;
  finances: FarmFinances | undefined;
  contracting: FarmContracts | undefined;
};

type FarmPlayerWrapper = {
  player: Array<FarmPlayer>;
};

type FarmPlayer = {
  uniqueUserId: string | undefined;
  farmManager: boolean | undefined;
  lastNickname: string | undefined;
  buyVehicle: boolean | undefined;
  sellVehicle: boolean | undefined;
  buyPlaceable: boolean | undefined;
  sellPlaceable: boolean | undefined;
  manageContracts: boolean | undefined;
  tradeAnimals: boolean | undefined;
  createFields: boolean | undefined;
  landscaping: boolean | undefined;
  hireAssistant: boolean | undefined;
  resetVehicle: boolean | undefined;
  manageRights: boolean | undefined;
  transferMoney: boolean | undefined;
  updateFarm: boolean | undefined;
  manageContracting: boolean | undefined;
};

type FarmStatistics = {
  traveledDistance: number | undefined;
  fuelUsage: number | undefined;
  seedUsage: number | undefined;
  sprayUsage: number | undefined;
  workedHectares: number | undefined;
  cultivatedHectares: number | undefined;
  sownHectares: number | undefined;
  sprayedHectares: number | undefined;
  threshedHectares: number | undefined;
  plowedHectares: number | undefined;
  harvestedGrapes: number | undefined;
  harvestedOlives: number | undefined;
  workedTime: number | undefined;
  cultivatedTime: number | undefined;
  sownTime: number | undefined;
  sprayedTime: number | undefined;
  threshedTime: number | undefined;
  plowedTime: number | undefined;
  baleCount: number | undefined;
  breedCowsCount: number | undefined;
  breedSheepCount: number | undefined;
  breedPigsCount: number | undefined;
  breedChickenCount: number | undefined;
  breedHorsesCount: number | undefined;
  fieldJobMissionCount: number | undefined;
  fieldJobMissionByNPC: number | undefined;
  transportMissionCount: number | undefined;
  revenue: number | undefined;
  expenses: number | undefined;
  playTime: number | undefined;
  plantedTreeCount: number | undefined;
  cutTreeCount: number | undefined;
  woodTonsSold: number | undefined;
  treeTypesCut: number | undefined;
  petDogCount: number | undefined;
  repairVehicleCount: number | undefined;
  repaintVehicleCount: number | undefined;
  horseJumpCount: number | undefined;
  soldCottonBales: number | undefined;
  wrappedBales: number | undefined;
  tractorDistance: number | undefined;
  carDistance: number | undefined;
  truckDistance: number | undefined;
  horseDistance: number | undefined;
};

type FarmFinances = {
  stats: Array<FarmFinanceStat>;
};

type FarmContracts = {
  farm: Array<FarmContract>;
};

type FarmContract = {
  farmId: number | undefined;
};

type FarmFinanceStat = {
  day: number | undefined;
  newVehiclesCost: number | undefined;
  soldVehicles: number | undefined;
  newAnimalsCost: number | undefined;
  soldAnimals: number | undefined;
  constructionCost: number | undefined;
  soldBuildings: number | undefined;
  fieldPurchase: number | undefined;
  fieldSelling: number | undefined;
  vehicleRunningCost: number | undefined;
  vehicleLeasingCost: number | undefined;
  propertyMaintenance: number | undefined;
  propertyIncome: number | undefined;
  productionCosts: number | undefined;
  soldWood: number | undefined;
  soldBales: number | undefined;
  soldWool: number | undefined;
  soldMilk: number | undefined;
  soldProducts: number | undefined;
  purchaseFuel: number | undefined;
  purchaseSeeds: number | undefined;
  purchaseFertilizer: number | undefined;
  purchaseSaplings: number | undefined;
  purchaseWater: number | undefined;
  harvestIncome: number | undefined;
  incomeBga: number | undefined;
  missionIncome: number | undefined;
  wagePayment: number | undefined;
  other: number | undefined;
  loanInterest: number | undefined;
};

type SalesData = {
  item: Array<SalesItem>;
};

type SalesItem = {
  timeLeft: number | undefined;
  isGenerated: boolean | undefined;
  xmlFilename: string | undefined;
  age: number | undefined;
  price: number | undefined;
  damage: number | undefined;
  wear: number | undefined;
  operatingTime: number | undefined;
};

type MissionsData = {
  mission: Array<Mission>;
};

type Mission = {
  type: string | undefined;
  activeId: number | undefined;
  reward: number | undefined;
  status: number | undefined;
  success: boolean | undefined;
  completion: number | undefined;
  farmId: number | undefined;
  field: MissionField | undefined;
  bale: MissionBale | undefined;
  harvest: MissionHarvest | undefined;
  delivery: MissionDelivery | undefined;
};

type MissionField = {
  id: number | undefined;
  sprayFactor: number | undefined;
  spraySet: boolean | undefined;
  plowFactor: number | undefined;
  state: number | undefined;
  vehicleGroup: number | undefined;
  vehicleUseCost: number | undefined;
  spawnedVehicles: boolean | undefined;
  growthState: number | undefined;
  limeFactor: number | undefined;
  weedFactor: number | undefined;
  stubbleFactor: number | undefined;
  weedState: number | undefined;
  fruitTypeName: string | undefined;
};

type MissionBale = {
  sellPointPlaceableId: number | undefined;
  unloadingStationIndex: number | undefined;
  fillTypeName: string | undefined;
  depositedLiters: number | undefined;
};

type MissionHarvest = {
  sellPointPlaceableId: number | undefined;
  unloadingStationIndex: number | undefined;
  expectedLiters: number | undefined;
  depositedLiters: number | undefined;
};

type MissionDelivery = {
  sellPointPlaceableId: number | undefined;
  unloadingStationIndex: number | undefined;
  pricePerLitre: number | undefined;
  expectedLiters: number | undefined;
  depositedLiters: number | undefined;
  contractDay: number | undefined;
  contractTime: number | undefined;
  contractDuration: number | undefined;
  npcIndex: number | undefined;
  fillType: string | undefined;
};

type WebsocketFieldWrapper = {
  fields: Array<WebsocketField>;
};

type WebsocketField = {
  fieldID: number | undefined;
  areaInHectar: number | undefined;
  fruitType: number | undefined;
  x: number | undefined;
  z: number | undefined;
};

type WebsocketPlayerWrapper = {
  players: Array<WebsocketPlayer>;
};

type WebsocketPlayer = {
  name: string | undefined;
  x: number | undefined;
  y: number | undefined;
  z: number | undefined;
  farmId: number | undefined;
  id: number | undefined;
};

type WebsocketFarmWrapper = {
  farms: Array<WebsocketFarm>;
};

type WebsocketFarm = {
  farmID: number | undefined;
  loan: number | undefined;
  loanMax: number | undefined;
  money: number | undefined;
  name: string | undefined;
  players: Array<WebsocketFarmPlayer>;
  stats: Array<WebsocketFarmStat>;
  finances: Array<WebsocketFarmFinance>;
  financeHistory: Array<WebsocketFarmFinanceHistory>;
};

type WebsocketFarmPlayer = {
  lastNickname: string | undefined;
  isFarmManager: boolean | undefined;
  permissions: Array<WebsocketFarmPlayerPermission>;
};

type WebsocketFarmPlayerPermission = {
  manageContracting: boolean | undefined;
  manageContracts: boolean | undefined;
  transferMoney: boolean | undefined;
  updateFarm: boolean | undefined;
  manageRights: boolean | undefined;
  sellVehicle: boolean | undefined;
  resetVehicle: boolean | undefined;
  landscaping: boolean | undefined;
  hireAssistant: boolean | undefined;
  sellPlaceable: boolean | undefined;
  createFields: boolean | undefined;
  buyPlaceable: boolean | undefined;
  buyVehicle: boolean | undefined;
  tradeAnimals: boolean | undefined;
};

type WebsocketFarmStat = {
  revenue: Array<WebsocketFarmStatValue> | undefined;
  harvestedOlives: Array<WebsocketFarmStatValue> | undefined;
  harvestedGrapes: Array<WebsocketFarmStatValue> | undefined;
  threshedHectares: Array<WebsocketFarmStatValue> | undefined;
  sprayedHectares: Array<WebsocketFarmStatValue> | undefined;
  sownHectares: Array<WebsocketFarmStatValue> | undefined;
  plowedTime: Array<WebsocketFarmStatValue> | undefined;
  workedHectares: Array<WebsocketFarmStatValue> | undefined;
  traveledDistance: Array<WebsocketFarmStatValue> | undefined;
  sprayUsage: Array<WebsocketFarmStatValue> | undefined;
  seedUsage: Array<WebsocketFarmStatValue> | undefined;
  sownTime: Array<WebsocketFarmStatValue> | undefined;
  cultivatedTime: Array<WebsocketFarmStatValue> | undefined;
  workedTime: Array<WebsocketFarmStatValue> | undefined;
  plowedHectares: Array<WebsocketFarmStatValue> | undefined;
  soldCottonBales: Array<WebsocketFarmStatValue> | undefined;
  wrappedBales: Array<WebsocketFarmStatValue> | undefined;
  storedBales: Array<WebsocketFarmStatValue> | undefined;
  workersHired: Array<WebsocketFarmStatValue> | undefined;
  horseDistance: Array<WebsocketFarmStatValue> | undefined;
  cutTreeCount: Array<WebsocketFarmStatValue> | undefined;
  repairVehicleCount: Array<WebsocketFarmStatValue> | undefined;
  carDistance: Array<WebsocketFarmStatValue> | undefined;
  truckDistance: Array<WebsocketFarmStatValue> | undefined;
  tractorDistance: Array<WebsocketFarmStatValue> | undefined;
  petDogCount: Array<WebsocketFarmStatValue> | undefined;
  breedChickenCount: Array<WebsocketFarmStatValue> | undefined;
  breedPigsCount: Array<WebsocketFarmStatValue> | undefined;
  breedSheepCount: Array<WebsocketFarmStatValue> | undefined;
  breedCowsCount: Array<WebsocketFarmStatValue> | undefined;
  horseJumpCount: Array<WebsocketFarmStatValue> | undefined;
  cultivatedHectares: Array<WebsocketFarmStatValue> | undefined;
  baleCount: Array<WebsocketFarmStatValue> | undefined;
  woodTonsSold: Array<WebsocketFarmStatValue> | undefined;
  repaintVehicleCount: Array<WebsocketFarmStatValue> | undefined;
  fuelUsage: Array<WebsocketFarmStatValue> | undefined;
  fieldJobMissionCount: Array<WebsocketFarmStatValue> | undefined;
  transportMissionCount: Array<WebsocketFarmStatValue> | undefined;
  fieldJobMissionByNPC: Array<WebsocketFarmStatValue> | undefined;
  breedHorsesCount: Array<WebsocketFarmStatValue> | undefined;
  weededHectares: Array<WebsocketFarmStatValue> | undefined;
  sprayedTime: Array<WebsocketFarmStatValue> | undefined;
  windTurbineCount: Array<WebsocketFarmStatValue> | undefined;
  threshedTime: Array<WebsocketFarmStatValue> | undefined;
  weededTime: Array<WebsocketFarmStatValue> | undefined;
  plantedTreeCount: Array<WebsocketFarmStatValue> | undefined;
  playTime: Array<WebsocketFarmStatValue> | undefined;
  expenses: Array<WebsocketFarmStatValue> | undefined;
};

type WebsocketFarmStatValue = {
  session: number | undefined;
  total: number | undefined;
};

type WebsocketFarmFinance = {
  vehicleLeasingCost: number | undefined;
  missionIncome: number | undefined;
  soldBales: number | undefined;
  fieldSelling: number | undefined;
  wagePayment: number | undefined;
  soldWood: number | undefined;
  fieldPurchase: number | undefined;
  harvestIncome: number | undefined;
  incomeBga: number | undefined;
  purchaseWater: number | undefined;
  soldMilk: number | undefined;
  soldProducts: number | undefined;
  purchaseSaplings: number | undefined;
  soldBuildings: number | undefined;
  productionCosts: number | undefined;
  purchaseFuel: number | undefined;
  constructionCost: number | undefined;
  purchaseFertilizer: number | undefined;
  propertyIncome: number | undefined;
  newVehiclesCost: number | undefined;
  propertyMaintenance: number | undefined;
  soldWool: number | undefined;
  other: number | undefined;
  vehicleRunningCost: number | undefined;
  newAnimalsCost: number | undefined;
  purchaseSeeds: number | undefined;
  loanInterest: number | undefined;
  soldAnimals: number | undefined;
  soldVehicles: number | undefined;
};

type WebsocketFarmFinanceHistory = {
  0: Array<WebsocketFarmFinance> | undefined;
  1: Array<WebsocketFarmFinance> | undefined;
  2: Array<WebsocketFarmFinance> | undefined;
  3: Array<WebsocketFarmFinance> | undefined;
  4: Array<WebsocketFarmFinance> | undefined;
};

type WebsocketMetadataWrapper = {
  metadata: Array<WebsocketMetadata>;
};

type WebsocketMetadata = {
  terrainSize: number | undefined;
  time: number | undefined;
  worldOffset: number | undefined;
  worldSize: number | undefined;
  automaticMotorStartEnabled: boolean | undefined;
  autoSaveInterval: number | undefined;
  difficulty: number | undefined;
  dirtInterval: number | undefined;
  economicDifficulty: number | undefined;
  fuelUsage: number | undefined;
  fruitDestruction: boolean | undefined;
  growthMode: number | undefined;
  helperBuyFertilizer: boolean | undefined;
  helperBuyFuel: boolean | undefined;
  helperBuySeeds: boolean | undefined;
  helperManureSource: number | undefined;
  helperSlurrySource: number | undefined;
  isSnowEnabled: boolean | undefined;
  limeRequired: boolean | undefined;
  mapTitle: string | undefined;
  money: number | undefined;
  plannedDaysPerPeriod: number | undefined;
  plowingRequiredEnabled: boolean | undefined;
  resetVehicles: boolean | undefined;
  savegameIndex: number | undefined;
  savegameName: string | undefined;
  stonesEnabled: boolean | undefined;
  stopAndGoBraking: boolean | undefined;
  timeScale: number | undefined;
  trafficEnabled: boolean | undefined;
  trailerFillLimit: boolean | undefined;
  weedsEnabled: boolean | undefined;
};

type WebsocketModsWrapper = {
  mods: Array<WebsocketMod>;
};

type WebsocketMod = {
  modID: number | undefined;
  author: string | undefined;
  modName: string | undefined;
  title: string | undefined;
  isDLC: boolean | undefined;
  isMultiplayerSupported: boolean | undefined;
  version: string | undefined;
};

type WebsocketMissionsWrapper = {
  missions: Array<WebsocketMission>;
};

type WebsocketMission = {
  completion: number | undefined;
  fieldId: number | undefined;
  farmId: number | undefined;
  areaInHectar: number | undefined;
  x: number | undefined;
  z: number | undefined;
  fieldPercentageDone: number | undefined;
  moneyMultiplier: number | undefined;
  reimbursementPerDifficulty: boolean | undefined;
  reimbursementPerHa: number | undefined;
  reward: number | undefined;
  rewardPerHa: number | undefined;
  spawnedVehicles: boolean | undefined;
  success: boolean | undefined;
  vehicleUseCost: number | undefined;
  type: string | undefined;
  expectedLiters: number | undefined;
  depositedLiters: number | undefined;
  fruitType: number | undefined;
  fillType: number | undefined;
  sellPointPlaceableId: number | undefined;
  contractDay: number | undefined;
  contractDuration: number | undefined;
  contractTime: number | undefined;
  contractLiters: number | undefined;
  deliveredLiters: number | undefined;
  leasingVehicles: Array<WebsocketLeasingVehicle>;
};

type WebsocketLeasingVehicle = {
  vehicleNumber: number | undefined;
  fileName: string | undefined;
};

type WebsocketEconomyWrapper = {
  economy: Array<WebsocketEconomy>;
};

type WebsocketEconomy = {
  name: string | undefined;
  history: Array<WebsocketEconomyHistory>;
};

type WebsocketEconomyHistory = {
  1: number | undefined;
  2: number | undefined;
  3: number | undefined;
  4: number | undefined;
  5: number | undefined;
  6: number | undefined;
  7: number | undefined;
  8: number | undefined;
  9: number | undefined;
  10: number | undefined;
  11: number | undefined;
  12: number | undefined;
};

type WebsocketVehicleSalesWrapper = {
  vehicleSales: Array<WebsocketVehicleSale>;
};

type WebsocketVehicleSale = {
  name: string | undefined;
  age: number | undefined;
  damage: number | undefined;
  price: number | undefined;
  timeLeft: number | undefined;
  wear: number | undefined;
  operatingTime: number | undefined;
};

type WebsocketVehiclesWrapper = {
  vehicles: Array<WebsocketVehicle>;
};

type WebsocketVehicle = {
  name: string | undefined;
  brand: string | undefined;
  age: number | undefined;
  price: number | undefined;
  category: string | undefined;
  ownerFarmId: number | undefined;
  operatingTime: number | undefined;
  id: number | undefined;
  x: number | undefined;
  y: number | undefined;
  z: number | undefined;
  fillUnits: Array<WebsocketVehicleFillUnits>;
};

type WebsocketVehicleFillUnits = {
  fillType: number | undefined;
  fillLevel: number | undefined;
  capacity: number | undefined;
  unitText: string | undefined;
};

type WebsocketNPCsWrapper = {
  npcs: Array<WebsocketNPC>;
};

type WebsocketNPC = {
  title: string | undefined;
  finishedMissions: number | undefined;
};

type WebsocketEnvironmentWrapper = {
  environment: Array<WebsocketEnvironment>;
};

type WebsocketEnvironment = {
  currentDay: number | undefined;
  currentDayInPeriod: number | undefined;
  currentDayInSeason: number | undefined;
  currentHour: number | undefined;
  currentMinute: number | undefined;
  currentMonotonicDay: number | undefined;
  currentPeriod: number | undefined;
  currentSeason: number | undefined;
  currentVisualDayInSeason: number | undefined;
  currentVisualPeriod: number | undefined;
  currentVisualSeason: number | undefined;
  currentYear: number | undefined;
  dayTime: number | undefined;
  daysPerPeriod: number | undefined;
  forecast: Array<WebsocketForecast>;
};

type WebsocketForecast = {
  duration: number | undefined;
  season: number | undefined;
  type: number | undefined;
  startDay: number | undefined;
  startDayTime: number | undefined;
  variationIndex: number | undefined;
};

type WebsocketPlaceableWrapper = {
  placeables: Array<WebsocketPlaceable>;
};

type WebsocketPlaceable = {
  name: string | undefined;
  x: number | undefined;
  y: number | undefined;
  z: number | undefined;
  farmId: number | undefined;
  id: number | undefined;
  price: number | undefined;
  age: number | undefined;
  sellPointId: number | undefined;
  totalPaid: Array<WebsocketPlaceableFillTypeAmount> | undefined;
  totalReceived: Array<WebsocketPlaceableFillTypeAmount> | undefined;
  storage: Array<WebsocketPlaceableStorage> | undefined;
};

type WebsocketPlaceableStorage = {
  capacity: number | undefined;
  costsPerFillLevelAndDay: number | undefined;
  fillLevels: Array<WebsocketPlaceableFilllevel>;
};

type WebsocketPlaceableFilllevel = {
  fillType: number | undefined;
  fillLevel: number | undefined;
};

type WebsocketPlaceableFillTypeAmount = {
  fillType: number | undefined;
  amount: number | undefined;
};

type WebsocketData = {
  fieldData: WebsocketFieldWrapper | undefined;
  playerData: WebsocketPlayerWrapper | undefined;
  farmData: WebsocketFarmWrapper | undefined;
  metadataData: WebsocketMetadataWrapper | undefined;
  modsData: WebsocketModsWrapper | undefined;
  missionsData: WebsocketMissionsWrapper | undefined;
  economyData: WebsocketEconomyWrapper | undefined;
  vehicleSalesData: WebsocketVehicleSalesWrapper | undefined;
  vehiclesData: WebsocketVehiclesWrapper | undefined;
  npcsData: WebsocketNPCsWrapper | undefined;
  environmentData: WebsocketEnvironmentWrapper | undefined;
  placeableData: WebsocketPlaceableWrapper | undefined;
};
