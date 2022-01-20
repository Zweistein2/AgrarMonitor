type Vehicle = {
  name: string;
  category: string;
  type: string;
  x: number;
  y: number;
  z: number;
  fillTypes: string;
  fillLevels: string;
  isAIActive: boolean;
};

type Player = {
  text: string;
  isUsed: boolean;
  isAdmin: boolean;
  uptime: number;
};

type Mod = {
  text: string;
  name: string;
  author: string;
  hash: string;
  version: string;
};

type Field = {
  id: number;
  isOwned: boolean;
  x: number;
  z: number;
};

type Farmland = {
  area: number;
  id: number;
  name: string;
  owner: number;
  x: number;
  z: number;
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
  capacity: number;
  numUsed: number;
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
  dayTime: number;
  game: string;
  mapName: string;
  mapOverviewFilename: string;
  mapSize: number;
  name: string;
  version: string;
};

type EconomyData = {
  fillTypes: FillTypeWrapper;
};

type FillTypeWrapper = {
  fillType: Array<FillType>;
};

type FillType = {
  fillType: string;
  totalAmount: number;
  history: History;
};

type History = {
  period: Array<Period>;
};

type Period = {
  period: number;
  text: number;
};

type MetaData = {
  settings: Settings;
  statistics: Statistics;
};

type Settings = {
  creationDate: string;
  resetVehicles: boolean;
  trafficEnabled: boolean;
  stopAndGoBraking: boolean;
  trailerFillLimit: boolean;
  automaticMotorStartEnabled: boolean;
  fruitDestruction: boolean;
  plowingRequiredEnabled: boolean;
  stonesEnabled: boolean;
  weedsEnabled: boolean;
  limeRequired: boolean;
  isSnowEnabled: boolean;
  helperBuyFuel: boolean;
  helperBuySeeds: boolean;
  helperBuyFertilizer: boolean;
  helperSlurrySource: number;
  helperManureSource: number;
  fuelUsage: number;
  difficulty: number;
  economicDifficulty: number;
  dirtInterval: number;
  timeScale: number;
  autoSaveInterval: number;
  growthMode: number;
  plannedDaysPerPeriod: number;
  fixedSeasonalVisuals: number;
};

type Statistics = {
  money: number;
  playTime: number;
};
