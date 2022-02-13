type Vehicle = {
  name: string | undefined;
  category: string | undefined;
  type: string | undefined;
  x: number | undefined;
  y: number | undefined;
  z: number | undefined;
  fillTypes: string | undefined;
  fillLevels: string | undefined;
  isAIActive: boolean | undefined;
};

type Player = {
  text: string | undefined;
  isUsed: boolean | undefined;
  isAdmin: boolean | undefined;
  uptime: number | undefined;
  x: number | undefined;
  y: number | undefined;
  z: number | undefined;
};

type Mod = {
  text: string | undefined;
  name: string | undefined;
  author: string | undefined;
  hash: string | undefined;
  version: string | undefined;
};

type Field = {
  id: number | undefined;
  isOwned: boolean | undefined;
  x: number | undefined;
  z: number | undefined;
};

type Farmland = {
  area: number | undefined;
  id: number | undefined;
  name: string | undefined;
  owner: number | undefined;
  x: number | undefined;
  z: number | undefined;
};

type FarmlandWrapper = {
  Farmland: Array<Farmland>;
};

type FieldWrapper = {
  Field: Array<Field>;
};

type ModWrapper = {
  Mod: Array<Mod>;
};

type SlotWrapper = {
  capacity: number | undefined;
  numUsed: number | undefined;
  Player: Array<Player>;
};

type VehicleWrapper = {
  Vehicle: Array<Vehicle>;
};

type ServerData = {
  Farmlands: FarmlandWrapper | undefined;
  Fields: FieldWrapper | undefined;
  Mods: ModWrapper | undefined;
  Slots: SlotWrapper | undefined;
  Vehicles: VehicleWrapper | undefined;
  dayTime: number | undefined;
  game: string | undefined;
  mapName: string | undefined;
  mapOverviewFilename: string | undefined;
  mapSize: number | undefined;
  name: string | undefined;
  version: string | undefined;
};

type EconomyData = {
  fillTypes: FillTypeWrapper;
};

type FillTypeWrapper = {
  fillType: Array<FillType>;
};

type FillType = {
  fillType: string | undefined;
  totalAmount: number | undefined;
  history: History | undefined;
};

type History = {
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
  index: string | undefined;
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
  storage: ProductionStorage | undefined;
};

type Production = {
  id: string | undefined;
  isEnabled: boolean | undefined;
};

type ProductionStorage = {
  farmId: number | undefined;
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
  farmId: number | undefined;
  field: MissionField | undefined;
  bale: MissionBale | undefined;
  harvest: MissionHarvest | undefined;
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
