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
  Farmlands: FarmlandWrapper;
  Fields: FieldWrapper;
  Mods: ModWrapper;
  Slots: SlotWrapper;
  Vehicles: VehicleWrapper;
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
  history: History;
};

type History = {
  period: Array<Period>;
};

type Period = {
  period: number | undefined;
  text: number | undefined;
};

type MetaData = {
  settings: Settings;
  statistics: Statistics;
};

type Settings = {
  creationDate: string | undefined;
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

type VehicleFillDataWrapper = {
  vehicleFillStates: Map<string, Array<VehicleFillState>>;
};

type VehicleFillState = {
  name: string | undefined;
  fillStates: Map<string, number>;
};
