// template: [filename, [type, brand, category, name]]
const vehicleMap = new Map<string, [string, string, string, string]>([
  [
    "data/vehicles/abi/waterTrailer1600/waterTrailer1600.xml",
    ["waterTrailer", "ABI", "animals", "1600"],
  ],
  [
    "data/vehicles/abi/waterTrailer550/waterTrailer550.xml",
    ["waterTrailer", "ABI", "animals", "550"],
  ],
  [
    "data/vehicles/aebi/cc66/cc66.xml",
    ["handToolMower", "AEBI", "mowerVehicles", "CC 66"],
  ],
  [
    "data/vehicles/agco/weight1100/weight1100.xml",
    ["implement", "AGCO", "weights", "1100"],
  ],
  [
    "data/vehicles/agco/weight1500/weight1500.xml",
    ["implement", "AGCO", "weights", "1500"],
  ],
  [
    "data/vehicles/agco/weight2300/weight2300.xml",
    ["implement", "AGCO", "weights", "2300"],
  ],
  [
    "data/vehicles/agco/weight650/weight650.xml",
    ["implement", "AGCO", "weights", "650"],
  ],
  [
    "data/vehicles/agrisem/combiplow3M/combiplow3M.xml",
    ["cultivator", "AGRISEM", "subsoilers", "Combiplow Gold 3M"],
  ],
  [
    "data/vehicles/agrisem/combiplow4M/combiplow4M.xml",
    ["cultivator", "AGRISEM", "subsoilers", "Combiplow Gold 4M"],
  ],
  [
    "data/vehicles/agrisem/cultiplowPlatinum8m/cultiplowPlatinum8m.xml",
    ["cultivator", "AGRISEM", "subsoilers", "Cultiplow Platinum 8m"],
  ],
  [
    "data/vehicles/agrisem/discOVigne/discOVigne.xml",
    ["cultivator", "AGRISEM", "subsoilers", "Disc-O-Vigne V"],
  ],
  [
    "data/vehicles/agromasz/btc50h/btc50h.xml",
    ["cultivator", "AGROMASZ", "discHarrows", "BTC 50H"],
  ],
  [
    "data/vehicles/agromasz/falcon/falcon.xml",
    ["fertilizingSowingMachine", "AGROMASZ", "planters", "FALCON3"],
  ],
  [
    "data/vehicles/agromasz/pov5xl/pov5xl.xml",
    ["plowPacker", "AGROMASZ", "plows", "POV 5 XL"],
  ],
  [
    "data/vehicles/albutt/frontloaderBaleKing/frontloaderBaleKing.xml",
    [
      "implementDynamicMountAttacher",
      "ALBUTT",
      "frontLoaderTools",
      "Bale King",
    ],
  ],
  [
    "data/vehicles/albutt/frontloaderBaleSpike/frontloaderBaleSpike.xml",
    [
      "implementDynamicMountAttacher",
      "ALBUTT",
      "frontLoaderTools",
      "$l10n_shopItem_frontloaderBaleFork",
    ],
  ],
  [
    "data/vehicles/albutt/frontloaderLogFork/frontloaderLogFork.xml",
    [
      "logGrab",
      "ALBUTT",
      "frontLoaderTools",
      "$l10n_shopItem_frontloaderLogFork",
    ],
  ],
  [
    "data/vehicles/albutt/frontloaderManureFork/frontloaderManureFork.xml",
    [
      "dynamicMountAttacherShovel",
      "ALBUTT",
      "frontLoaderTools",
      "$l10n_shopItem_frontloaderManureFork",
    ],
  ],
  [
    "data/vehicles/albutt/frontloaderManureGrab/frontloaderManureGrab.xml",
    [
      "dynamicMountAttacherShovel",
      "ALBUTT",
      "frontLoaderTools",
      "$l10n_shopItem_frontloaderManureGrabFork",
    ],
  ],
  [
    "data/vehicles/albutt/frontloaderPalletFork/frontloaderPalletFork.xml",
    [
      "implementDynamicMountAttacher",
      "ALBUTT",
      "frontLoaderTools",
      "$l10n_shopItem_frontloaderPalletFork",
    ],
  ],
  [
    "data/vehicles/albutt/frontloaderRoundBaleFork/frontloaderRoundBaleFork.xml",
    [
      "dynamicMountAttacherShovel",
      "ALBUTT",
      "frontLoaderTools",
      "$l10n_shopItem_frontloaderRoundBaleFork",
    ],
  ],
  [
    "data/vehicles/albutt/frontloaderShovel/frontloaderShovel.xml",
    [
      "shovelLeveler",
      "ALBUTT",
      "frontLoaderTools",
      "$l10n_shopItem_frontloaderShovel",
    ],
  ],
  [
    "data/vehicles/albutt/frontloaderSilageCutter/frontloaderSilageCutter.xml",
    [
      "dynamicMountAttacherShovel",
      "ALBUTT",
      "frontLoaderTools",
      "$l10n_shopItem_frontloaderSilageCutter",
    ],
  ],
  [
    "data/vehicles/albutt/frontloaderSquareBaleGrab/frontloaderSquareBaleGrab.xml",
    [
      "baleGrab",
      "ALBUTT",
      "frontLoaderTools",
      "$l10n_shopItem_frontloaderBaleGrab",
    ],
  ],
  [
    "data/vehicles/albutt/wheelLoaderLogFork/wheelLoaderLogFork.xml",
    [
      "logGrab",
      "ALBUTT",
      "wheelLoaderTools",
      "$l10n_shopItem_telehandlerLogFork",
    ],
  ],
  [
    "data/vehicles/albutt/wheelLoaderSilageFork/wheelLoaderSilageFork.xml",
    [
      "dynamicMountAttacherShovelLeveler",
      "ALBUTT",
      "wheelLoaderTools",
      "$l10n_shopItem_wheelLoaderSilageFork",
    ],
  ],
  [
    "data/vehicles/alpego/maratonaMG300/maratonaMG300.xml",
    ["cultivator", "ALPEGO", "discHarrows", "Maratona MG-300"],
  ],
  [
    "data/vehicles/alpego/rmax300/rmax300.xml",
    ["turnOnCultivator", "ALPEGO", "powerHarrows", "Rotodent RmaX-300"],
  ],
  [
    "data/vehicles/amazone/cenio4000/cenio4000.xml",
    ["cultivator", "AMAZONE", "cultivators", "Cenio 4000 Super"],
  ],
  [
    "data/vehicles/amazone/centaya3000Super/centaya3000Super.xml",
    ["sowingMachine", "AMAZONE", "seeders", "Centaya 3000Super"],
  ],
  [
    "data/vehicles/amazone/centaya3000Super/centaya3000SuperBundle.xml",
    ["sowingMachine", "AMAZONE", "seeders", "KG 3001 + Centaya 3000"],
  ],
  [
    "data/vehicles/amazone/citan15001C/citan15001C.xml",
    ["fertilizingSowingMachine", "AMAZONE", "seeders", "Citan 15001-C"],
  ],
  [
    "data/vehicles/amazone/kg3001Super/kg3001Super.xml",
    ["turnOnCultivator", "AMAZONE", "powerHarrows", "KG 3001 Super"],
  ],
  [
    "data/vehicles/amazone/precea4500/precea4500.xml",
    ["fertilizingSowingMachine", "AMAZONE", "planters", "Precea 4500-2C Super"],
  ],
  [
    "data/vehicles/amazone/tPackU/tPackU.xml",
    ["implement", "AMAZONE", "misc", "T-Pack U"],
  ],
  [
    "data/vehicles/amazone/zats3200/zats3200.xml",
    ["spreader", "AMAZONE", "fertilizerSpreaders", "ZA-TS 3200"],
  ],
  [
    "data/vehicles/amazone/zgts10001/zgts10001.xml",
    ["spreader", "AMAZONE", "fertilizerSpreaders", "ZG-TS 10001"],
  ],
  [
    "data/vehicles/amityTech/beetCart/beetCart.xml",
    ["augerWagon", "AMITYTECH", "augerWagons", "Beet Cart"],
  ],
  [
    "data/vehicles/andersonGroup/bioBalerWB55/bioBalerFrontTool.xml",
    ["implement", "ANDERSONGROUP", "balers", "Bumper"],
  ],
  [
    "data/vehicles/andersonGroup/bioBalerWB55/bioBalerWB55.xml",
    ["cuttingBaler", "ANDERSONGROUP", "balers", "BioBaler WB-55"],
  ],
  [
    "data/vehicles/andersonGroup/hybridX/hybridX.xml",
    ["inlineWrapper", "ANDERSONGROUP", "baleWrappers", "HYBRID X XTRACTOR"],
  ],
  [
    "data/vehicles/andersonGroup/ifx720/ifx720.xml",
    ["inlineWrapper", "ANDERSONGROUP", "baleWrappers", "IFX720 XTRACTOR"],
  ],
  [
    "data/vehicles/andersonGroup/m160/m160.xml",
    ["forwarderTrailer", "ANDERSONGROUP", "woodHarvesting", "M160"],
  ],
  [
    "data/vehicles/andersonGroup/proChop150/proChop150.xml",
    ["strawBlower", "ANDERSONGROUP", "animals", "PRO-CHOP 150"],
  ],
  [
    "data/vehicles/andersonGroup/rbm2000/rbm2000.xml",
    ["baleLoader", "ANDERSONGROUP", "baleLoaders", "RBM2000"],
  ],
  [
    "data/vehicles/annaburger/fieldLinerHTS31/fieldLinerHTS31.xml",
    ["trailer", "ANNABURGER", "trailers", "FieldLiner HTS 31.06"],
  ],
  [
    "data/vehicles/apv/gk300m/gk300m.xml",
    ["seedingRoller", "APV", "grasslandCare", "GK 300 M1 Full Edition"],
  ],
  [
    "data/vehicles/arcusin/forstack12/forstack12.xml",
    ["baleLoader", "ARCUSIN", "baleLoaders", "ForStack 8.12"],
  ],
  [
    "data/vehicles/arcusin/fsx6372/fsx6372.xml",
    ["baleLoader", "ARCUSIN", "baleLoaders", "FSX 63.72"],
  ],
  [
    "data/vehicles/arcusin/multipackD14/multipackD14.xml",
    ["baleLoader", "ARCUSIN", "baleLoaders", "Multipack D14"],
  ],
  [
    "data/vehicles/bednar/terraland/terraland.xml",
    [
      "fertilizingCultivatorRoller",
      "BEDNAR",
      "subsoilers",
      "FB3000-TO6000-PT6000",
    ],
  ],
  [
    "data/vehicles/bergmann/gtw330/gtw330.xml",
    ["augerWagon", "BERGMANN", "augerWagons", "GTW 330"],
  ],
  [
    "data/vehicles/bergmann/htw65/htw65.xml",
    ["trailer", "BERGMANN", "trailers", "HTW 65"],
  ],
  [
    "data/vehicles/bergmann/rrw500/rrw500.xml",
    ["augerWagon", "BERGMANN", "augerWagons", "RRW 500"],
  ],
  [
    "data/vehicles/bergmann/shuttle490S/shuttle490S.xml",
    ["forageWagon", "BERGMANN", "loaderWagons", "SHUTTLE 490 S"],
  ],
  [
    "data/vehicles/bergmann/tsw6240w/tsw6240w.xml",
    ["manureSpreader", "BERGMANN", "manureSpreaders", "TSW 6240 W"],
  ],
  [
    "data/vehicles/berthoud/bruin4200/bruin4200.xml",
    ["selfPropelledSprayer", "BERTHOUD", "sprayerVehicles", "Bruin 4200"],
  ],
  [
    "data/vehicles/berthoud/vantage4300/vantage4300.xml",
    ["sprayer", "BERTHOUD", "sprayers", "Vantage 4300"],
  ],
  [
    "data/vehicles/boeckmann/bigMasterWesternWCF/bigMasterWesternWCF.xml",
    [
      "livestockTrailer",
      "BOECKMANN",
      "animalTransport",
      "Big Master Western WCF",
    ],
  ],
  [
    "data/vehicles/boeckmann/kk301827H/kk301827H.xml",
    ["dynamicMountAttacherTrailer", "BOECKMANN", "misc", "KK 3018/27 H"],
  ],
  [
    "data/vehicles/boeckmann/mhal4320/mhal4320.xml",
    ["dynamicMountAttacherTrailer", "BOECKMANN", "misc", "MH-AL 4320/35"],
  ],
  [
    "data/vehicles/bomech/multi4XL/multi4XL.xml",
    ["sprayer", "BOMECH", "slurryTanks", "Multi 4XL"],
  ],
  [
    "data/vehicles/bomech/multiProfi/multiProfi.xml",
    ["sprayer", "BOMECH", "slurryTanks", "Multi Profi 21/15"],
  ],
  [
    "data/vehicles/bomech/tracPack/tracPack.xml",
    ["sprayer", "BOMECH", "slurryTanks", "Trac-Pack"],
  ],
  [
    "data/vehicles/brantner/dd24073/dd24073.xml",
    ["trailer", "BRANTNER", "trailers", "DD 24073/2 XXL"],
  ],
  [
    "data/vehicles/brantner/ta12050/ta12050.xml",
    [
      "manureSpreader",
      "BRANTNER",
      "manureSpreaders",
      "TA 12050 Power Spread +",
    ],
  ],
  [
    "data/vehicles/brantner/ta23065/ta23065.xml",
    ["trailer", "BRANTNER", "trailers", "TA 23065/2 Power Tube +"],
  ],
  [
    "data/vehicles/brantner/ta23071/ta23071.xml",
    ["trailer", "BRANTNER", "trailers", "TA 23071 Power Push +"],
  ],
  [
    "data/vehicles/brantner/z18051/z18051.xml",
    ["trailer", "BRANTNER", "trailers", "Z 18051/2 XXL Power Flex"],
  ],
  [
    "data/vehicles/bredal/k105/k105.xml",
    ["spreader", "BREDAL", "fertilizerSpreaders", "K105"],
  ],
  [
    "data/vehicles/bredal/k165/k165.xml",
    ["spreader", "BREDAL", "fertilizerSpreaders", "K165"],
  ],
  [
    "data/vehicles/bredal/sg/sg.xml",
    ["saltSpreader", "BREDAL", "winterEquipment", "SG2000"],
  ],
  [
    "data/vehicles/bremerMaschinenbau/transportwagen/transportwagen.xml",
    [
      "dynamicMountAttacherTrailer",
      "BREMER",
      "lowloaders",
      "Transportwagen TP 500 S",
    ],
  ],
  [
    "data/vehicles/briri/fieldMaster20/fieldMaster20.xml",
    ["manureBarrel", "BRIRI", "slurryTanks", "Field Master 20"],
  ],
  [
    "data/vehicles/briri/manureDirector14/manureDirector14.xml",
    ["manureSpreader", "BRIRI", "manureSpreaders", "Manure Director 14"],
  ],
  [
    "data/vehicles/buehrer/series6105/series6105.xml",
    ["tractor", "BUEHRER", "tractorsS", "6105"],
  ],
  [
    "data/vehicles/capello/diamant12/diamant12.xml",
    ["cutter", "CAPELLO", "cornHeaders", "Diamant 12"],
  ],
  [
    "data/vehicles/capello/diamant8/diamant8.xml",
    ["cutter", "CAPELLO", "cornHeaders", "Diamant 8"],
  ],
  [
    "data/vehicles/capello/helianthus12000/helianthus12000.xml",
    ["cutter", "CAPELLO", "cutters", "Helianthus 12000"],
  ],
  [
    "data/vehicles/capello/helianthus5700/helianthus5700.xml",
    ["cutter", "CAPELLO", "cutters", "Helianthus 5700"],
  ],
  [
    "data/vehicles/capello/spartan610/spartan610.xml",
    ["cutter", "CAPELLO", "forageHarvesterCutters", "Spartan 610"],
  ],
  [
    "data/vehicles/caseIH/a8800MR/a8800MR.xml",
    [
      "combineCutterFruitPreparer",
      "CASEIH",
      "sugarcaneVehicles",
      "Austoft 8800 Multi-Row",
    ],
  ],
  [
    "data/vehicles/caseIH/axialFlow150/axialFlow150.xml",
    ["combineDrivable", "CASEIH", "harvesters", "Axial-Flow 7150"],
  ],
  [
    "data/vehicles/caseIH/axialFlow250/axialFlow250.xml",
    ["combineDrivable", "CASEIH", "harvesters", "Axial-Flow 9250"],
  ],
  [
    "data/vehicles/caseIH/draper3162/draper3162.xml",
    ["cutter", "CASEIH", "cutters", "3162 TerraFlex Draper 45FT"],
  ],
  [
    "data/vehicles/caseIH/header4408/header4408.xml",
    ["cutter", "CASEIH", "cornHeaders", "4408"],
  ],
  [
    "data/vehicles/caseIH/header4418N/header4418N.xml",
    ["cutter", "CASEIH", "cornHeaders", "4418 N"],
  ],
  [
    "data/vehicles/caseIH/lb436HD/lb436HD.xml",
    ["baler", "CASEIH", "balers", "LB 436HD"],
  ],
  [
    "data/vehicles/caseIH/magnumT4B/magnumT4B.xml",
    ["tractor", "CASEIH", "tractorsL", "Magnum AFS Connect Series"],
  ],
  [
    "data/vehicles/caseIH/maxxum145CVX/maxxum145CVX.xml",
    ["tractor", "CASEIH", "tractorsS", "Maxxum Series"],
  ],
  [
    "data/vehicles/caseIH/moduleExpress635/moduleExpress635.xml",
    ["cottonHarvester", "CASEIH", "cottonVehicles", "Module Express 635"],
  ],
  [
    "data/vehicles/caseIH/speedtiller465/speedtiller465.xml",
    ["cultivator", "CASEIH", "discHarrows", "Speed-Tiller 465"],
  ],
  [
    "data/vehicles/caseIH/speedtiller475/speedtiller475.xml",
    ["cultivator", "CASEIH", "discHarrows", "Speed-Tiller 475"],
  ],
  [
    "data/vehicles/caseIH/steiger4WD/steiger4WD.xml",
    ["tractor", "CASEIH", "tractorsL", "Steiger AFS Connect Series"],
  ],
  [
    "data/vehicles/caseIH/steigerQuadtrac/steigerQuadtrac.xml",
    ["tractor", "CASEIH", "tractorsL", "Quadtrac AFS Connect Series"],
  ],
  [
    "data/vehicles/caseIH/steigerRowtrac/steigerRowtrac.xml",
    ["tractor", "CASEIH", "tractorsL", "Rowtrac AFS Connect Series"],
  ],
  [
    "data/vehicles/caseIH/terraFlex3020/terraFlex3020.xml",
    ["cutter", "CASEIH", "cutters", "3020 TerraFlex 25FT"],
  ],
  [
    "data/vehicles/caseIH/terraFlex3050_28/terraFlex3050_28.xml",
    ["cutter", "CASEIH", "cutters", "3050 TerraFlex 28FT"],
  ],
  [
    "data/vehicles/caseIH/terraFlex3050_41/terraFlex3050_41.xml",
    ["cutter", "CASEIH", "cutters", "3050 TerraFlex 41FT"],
  ],
  [
    "data/vehicles/challenger/mt700/mt700.xml",
    ["tractor", "CHALLENGER", "tractorsL", "MT700 Series"],
  ],
  [
    "data/vehicles/claas/arion600/arion600.xml",
    ["tractor", "CLAAS", "tractorsS", "ARION 660-610"],
  ],
  [
    "data/vehicles/claas/axion800/axion800.xml",
    ["tractor", "CLAAS", "tractorsM", "AXION 870-800"],
  ],
  [
    "data/vehicles/claas/axion900/axion900.xml",
    ["tractor", "CLAAS", "tractorsL", "AXION 960-920"],
  ],
  [
    "data/vehicles/claas/axion960TT/axion960TT.xml",
    ["tractor", "CLAAS", "tractorsL", "AXION 960-930 TERRA TRAC"],
  ],
  [
    "data/vehicles/claas/carat/carat.xml",
    ["trailer", "CLAAS", "trailers", "CARAT 140 TD"],
  ],
  [
    "data/vehicles/claas/cargos9500/cargos9500.xml",
    ["forageWagon", "CLAAS", "loaderWagons", "CARGOS 9500"],
  ],
  [
    "data/vehicles/claas/convioFlex1080/convioFlex1080.xml",
    ["cutter", "CLAAS", "cutters", "CONVIO FLEX 1080"],
  ],
  [
    "data/vehicles/claas/convioFlex1380/convioFlex1380.xml",
    ["cutter", "CLAAS", "cutters", "CONVIO FLEX 1380"],
  ],
  [
    "data/vehicles/claas/corio1275C/corio1275C.xml",
    ["cutter", "CLAAS", "cornHeaders", "CORIO 1275 C"],
  ],
  [
    "data/vehicles/claas/corio1275CTrailer/corio1275CTrailer.xml",
    [
      "dynamicMountAttacherTrailer",
      "CLAAS",
      "cutterTrailers",
      "CORIO 1275 C %s",
    ],
  ],
  [
    "data/vehicles/claas/corio875FC/corio875FC.xml",
    ["cutter", "CLAAS", "cornHeaders", "CORIO 875 FC"],
  ],
  [
    "data/vehicles/claas/directDisc500/directDisc500.xml",
    ["cutter", "CLAAS", "forageHarvesterCutters", "DIRECT DISC 500"],
  ],
  [
    "data/vehicles/claas/directDisc500Trailer/directDisc500Trailer.xml",
    [
      "dynamicMountAttacherTrailer",
      "CLAAS",
      "cutterTrailers",
      "DIRECT DISC 500 %s",
    ],
  ],
  [
    "data/vehicles/claas/frontLoader140/frontLoader140.xml",
    ["attachableFrontloader", "CLAAS", "frontLoaders", "FL 140"],
  ],
  [
    "data/vehicles/claas/jaguar960TT/jaguar960TT.xml",
    ["combineDrivable", "CLAAS", "forageHarvesters", "JAGUAR 960 TERRA TRAC"],
  ],
  [
    "data/vehicles/claas/lexion8000/lexion8000.xml",
    ["combineDrivable", "CLAAS", "harvesters", "LEXION 8900"],
  ],
  [
    "data/vehicles/claas/orbis750/orbis750.xml",
    ["cutter", "CLAAS", "forageHarvesterCutters", "ORBIS 750"],
  ],
  [
    "data/vehicles/claas/orbis900/orbis900.xml",
    ["cutter", "CLAAS", "forageHarvesterCutters", "ORBIS 900"],
  ],
  [
    "data/vehicles/claas/pickUp300/pickUp300.xml",
    ["cutter", "CLAAS", "forageHarvesterCutters", "PICK UP 300"],
  ],
  [
    "data/vehicles/claas/quadrant5300/quadrant5300.xml",
    ["baler", "CLAAS", "balers", "QUADRANT 5300 FC"],
  ],
  [
    "data/vehicles/claas/rollant455Uniwrap/rollant455Uniwrap.xml",
    ["balerWrapper", "CLAAS", "balers", "ROLLANT 455 RC UNIWRAP"],
  ],
  [
    "data/vehicles/claas/scorpion1033/scorpion1033.xml",
    ["teleHandler", "CLAAS", "teleLoaderVehicles", "SCORPION 1033"],
  ],
  [
    "data/vehicles/claas/torion1511/torion1511.xml",
    ["tractor", "CLAAS", "wheelLoaderVehicles", "TORION 1511"],
  ],
  [
    "data/vehicles/claas/torion1914/torion1914.xml",
    ["tractor", "CLAAS", "wheelLoaderVehicles", "TORION 1914"],
  ],
  [
    "data/vehicles/claas/torion639/torion639.xml",
    ["tractor", "CLAAS", "frontLoaderVehicles", "TORION 639"],
  ],
  [
    "data/vehicles/claas/torion956Sinus/torion956Sinus.xml",
    ["tractor", "CLAAS", "wheelLoaderVehicles", "TORION 956 SINUS"],
  ],
  [
    "data/vehicles/claas/trion750/trion750.xml",
    ["combineDrivable", "CLAAS", "harvesters", "TRION 750-720"],
  ],
  [
    "data/vehicles/claas/w1800/w1800.xml",
    ["implement", "CLAAS", "weights", "W 1800"],
  ],
  [
    "data/vehicles/claas/w600/w600.xml",
    ["implement", "CLAAS", "weights", "W 600"],
  ],
  [
    "data/vehicles/claas/w900/w900.xml",
    ["implement", "CLAAS", "weights", "W 900"],
  ],
  [
    "data/vehicles/dalbo/maxicut600/maxicut600.xml",
    ["mulcherRoll", "DALBO", "mulchers", "MaxiCut 600"],
  ],
  [
    "data/vehicles/dalbo/maxiroll630Greenline/maxiroll630Greenline.xml",
    ["roller", "DALBO", "grasslandCare", "MaxiRoll 630 Greenline"],
  ],
  [
    "data/vehicles/dalbo/megaRoll2430/megaRoll2430.xml",
    ["roller", "DALBO", "rollers", "Mega Roll 2430"],
  ],
  [
    "data/vehicles/dalbo/powerRoll1230/powerRoll1230.xml",
    ["roller", "DALBO", "rollers", "PowerRoll 1230 HD"],
  ],
  [
    "data/vehicles/damcon/pl75/pl75.xml",
    ["treePlanter", "DAMCON", "woodHarvesting", "PL-75"],
  ],
  [
    "data/vehicles/degelman/rockKing/rockKing.xml",
    ["stonePicker", "DEGELMAN", "stonePickers", "Rock King 9600"],
  ],
  [
    "data/vehicles/degelman/rockPicker/rockPicker.xml",
    ["stonePicker", "DEGELMAN", "stonePickers", "Signature 7200"],
  ],
  [
    "data/vehicles/demco/series2200/series2200.xml",
    ["augerWagon", "DEMCO", "augerWagons", "2200 Dual Auger Grain Cart"],
  ],
  [
    "data/vehicles/demco/sideDump/sideDump.xml",
    ["trailer", "DEMCO", "trailers", "Side Dump"],
  ],
  [
    "data/vehicles/demco/steelDropDeck/steelDropDeck.xml",
    ["trailer", "DEMCO", "lowloaders", "Steel Drop Deck"],
  ],
  [
    "data/vehicles/deutzFahr/header4090/header4090.xml",
    ["cutter", "DEUTZFAHR", "cutters", "Topliner 4090 %s"],
  ],
  [
    "data/vehicles/deutzFahr/header4090Trailer/header4090Trailer.xml",
    [
      "dynamicMountAttacherTrailer",
      "DEUTZFAHR",
      "cutterTrailers",
      "Topliner 4090 %s",
    ],
  ],
  [
    "data/vehicles/deutzFahr/series7/series7.xml",
    ["tractor", "DEUTZFAHR", "tractorsM", "Series 7 TTV HD"],
  ],
  [
    "data/vehicles/deutzFahr/series8/series8.xml",
    ["tractor", "DEUTZFAHR", "tractorsM", "Series 8 TTV"],
  ],
  [
    "data/vehicles/deutzFahr/topLiner4090/topLiner4090.xml",
    ["combineDrivable", "DEUTZFAHR", "harvesters", "Topliner 4090 HTS"],
  ],
  [
    "data/vehicles/duevelsdorf/meadowRollerVario/meadowRollerVario.xml",
    ["roller", "DUEVELSDORF", "grasslandCare", "Meadow Roller Vario"],
  ],
  [
    "data/vehicles/duevelsdorf/mss3000/mss3000.xml",
    ["leveler", "DUEVELSDORF", "leveler", "MSS 3000"],
  ],
  [
    "data/vehicles/duevelsdorf/mss3700/mss3700.xml",
    ["leveler", "DUEVELSDORF", "leveler", "MSS 3700"],
  ],
  [
    "data/vehicles/duevelsdorf/silagewalze2600/silagewalze2600.xml",
    ["silageRoller", "DUEVELSDORF", "silocompaction", "2600"],
  ],
  [
    "data/vehicles/duevelsdorf/silagewalze3000/silagewalze3000.xml",
    ["silageRoller", "DUEVELSDORF", "silocompaction", "3000"],
  ],
  [
    "data/vehicles/einboeck/chopstar590RowGuard/chopstar590RowGuard.xml",
    ["weeder", "EINBOECK", "weeders", "CHOPSTAR 5-90 + ROW-GUARD"],
  ],
  [
    "data/vehicles/einboeck/exact600/exact600.xml",
    ["weeder", "EINBOECK", "weeders", "AEROSTAR-EXACT 600"],
  ],
  [
    "data/vehicles/einboeck/pneumaticstar900/pneumaticstar900.xml",
    ["weederSowingmachine", "EINBOECK", "weeders", "PNEUMATICSTAR 900"],
  ],
  [
    "data/vehicles/einboeck/pneumaticstarPro1200/pneumaticstarPro1200.xml",
    ["weederSowingmachine", "EINBOECK", "weeders", "PNEUMATICSTAR-PRO 1200"],
  ],
  [
    "data/vehicles/elho/duett7300/duett7300.xml",
    ["mower", "ELHO", "mowers", "Duett 7300"],
  ],
  [
    "data/vehicles/elho/scorpio550/scorpio550.xml",
    ["stonePicker", "ELHO", "stonePickers", "Scorpio 550"],
  ],
  [
    "data/vehicles/elmersMfg/haulMaster/haulMaster.xml",
    ["augerWagon", "ELMERSMFG", "augerWagons", "HaulMaster"],
  ],
  [
    "data/vehicles/faresin/pf224/pf224.xml",
    ["mixerWagon", "FARESIN", "animals", "PF 2.24 Plus"],
  ],
  [
    "data/vehicles/faresin/pf226/pf226.xml",
    [
      "drivableMixerWagon",
      "FARESIN",
      "animalsVehicles",
      "Leader PF 2.26 Plus Ecomode",
    ],
  ],
  [
    "data/vehicles/faresin/telehandler626/telehandler626.xml",
    ["teleHandler", "FARESIN", "teleLoaderVehicles", "6.26 Classic 52"],
  ],
  [
    "data/vehicles/faresin/telehandler626/telehandler626Electric.xml",
    ["teleHandler", "FARESIN", "teleLoaderVehicles", "6.26 FULL ELECTRIC"],
  ],
  [
    "data/vehicles/farmax/drp300Perfect/drp300Perfect.xml",
    ["turnOnCultivator", "FARMAX", "spaders", "DRP 300 Perfect"],
  ],
  [
    "data/vehicles/farmax/krg/krg.xml",
    ["turnOnCultivator", "FARMAX", "spaders", "KRG 250"],
  ],
  [
    "data/vehicles/farmax/rapidTrailed/rapidTrailed.xml",
    ["turnOnCultivator", "FARMAX", "spaders", "Rapide 450 Trailed"],
  ],
  [
    "data/vehicles/farmet/kompaktomat1570Max/kompaktomat1570Max.xml",
    ["cultivator", "FARMET", "cultivators", "Kompaktomat 1570 Max"],
  ],
  [
    "data/vehicles/farmtech/dpw1800/dpw1800.xml",
    ["dynamicMountAttacherTrailer", "FARMTECH", "baleLoaders", "DPW 1800"],
  ],
  [
    "data/vehicles/farmtech/fortis3000/fortis3000.xml",
    ["trailer", "FARMTECH", "trailers", "Fortis 3000"],
  ],
  [
    "data/vehicles/farmtech/polycis1550/polycis1550.xml",
    ["manureBarrel", "FARMTECH", "slurryTanks", "Polycis 1550"],
  ],
  [
    "data/vehicles/farmtech/supercis800/supercis800.xml",
    ["manureBarrel", "FARMTECH", "slurryTanks", "Supercis 800"],
  ],
  [
    "data/vehicles/farmtech/variofex750/variofex750.xml",
    ["manureSpreader", "FARMTECH", "manureSpreaders", "Variofex 750"],
  ],
  [
    "data/vehicles/fendt/dynaFlex9255/dynaFlex9255.xml",
    ["cutter", "FENDT", "cutters", "DynaFlex 9255"],
  ],
  [
    "data/vehicles/fendt/favorit500/favorit500.xml",
    ["tractor", "FENDT", "tractorsS", "500 Favorit"],
  ],
  [
    "data/vehicles/fendt/ideal/ideal.xml",
    ["combineDrivable", "FENDT", "harvesters", "IDEAL"],
  ],
  [
    "data/vehicles/fendt/katana650/katana650.xml",
    ["combineDrivable", "FENDT", "forageHarvesters", "Katana 650"],
  ],
  [
    "data/vehicles/fendt/mt1100/mt1100.xml",
    ["tractor", "FENDT", "tractorsL", "1100 Vario MT"],
  ],
  [
    "data/vehicles/fendt/mt900/mt900.xml",
    ["tractor", "FENDT", "tractorsL", "900 Vario MT"],
  ],
  [
    "data/vehicles/fendt/powerFlow/powerFlow.xml",
    ["cutter", "FENDT", "cutters", "PowerFlow"],
  ],
  [
    "data/vehicles/fendt/vario1000/vario1000.xml",
    ["tractor", "FENDT", "tractorsL", "1000 Vario"],
  ],
  [
    "data/vehicles/fendt/vario200/vario200.xml",
    ["tractor", "FENDT", "tractorsS", "200 V Vario"],
  ],
  [
    "data/vehicles/fendt/vario300/vario300.xml",
    ["tractor", "FENDT", "tractorsS", "300 Vario"],
  ],
  [
    "data/vehicles/fendt/vario700/vario700.xml",
    ["tractor", "FENDT", "tractorsM", "700 Vario"],
  ],
  [
    "data/vehicles/fendt/vario900/vario900.xml",
    ["tractorReverseDriving", "FENDT", "tractorsL", "900 Vario"],
  ],
  [
    "data/vehicles/fendt/vario900/vario900_blackBeauty.xml",
    ["tractorReverseDriving", "FENDT", "tractorsL", "900 Vario Black Beauty"],
  ],
  [
    "data/vehicles/fendt/weight3300/weight3300.xml",
    ["implement", "FENDT", "weights", "3300"],
  ],
  [
    "data/vehicles/fliegl/asw271/asw271.xml",
    ["trailer", "FLIEGL", "trailers", "ASW 271"],
  ],
  [
    "data/vehicles/fliegl/butterfly/butterfly.xml",
    ["dynamicMountAttacherFork", "FLIEGL", "baleLoaders", "Schmetterling"],
  ],
  [
    "data/vehicles/fliegl/dts59/dts59.xml",
    ["trailer", "FLIEGL", "lowloaders", "DTS 5.9"],
  ],
  [
    "data/vehicles/fliegl/noahTTW140/noahTTW140.xml",
    ["livestockTrailer", "FLIEGL", "animalTransport", "Noah TTW 140"],
  ],
  [
    "data/vehicles/fliegl/pfw18000MaxxLinePlus/pfw18000MaxxLinePlus.xml",
    ["manureBarrel", "FLIEGL", "slurryTanks", "PFW 18000 MaxxLine Plus"],
  ],
  [
    "data/vehicles/fliegl/ruby/ruby.xml",
    ["turnOnShovel", "FLIEGL", "frontLoaderTools", "Ruby 2000"],
  ],
  [
    "data/vehicles/fliegl/silowalze/silowalze.xml",
    ["silageRoller", "FLIEGL", "silocompaction", "$l10n_shopItem_silageRoller"],
  ],
  [
    "data/vehicles/fliegl/timberRunner/timberRunner.xml",
    ["transportTrailer", "FLIEGL", "woodHarvesting", "Timber Runner"],
  ],
  [
    "data/vehicles/fliegl/tmk273/tmk273.xml",
    ["trailer", "FLIEGL", "trailers", "TMK 273"],
  ],
  [
    "data/vehicles/fuhrmann/trailer12000L/trailer12000L.xml",
    ["trailer", "FUHRMANN", "grapeTools", "LWS 12000"],
  ],
  [
    "data/vehicles/fuhrmann/trailer14500L/trailer14500L.xml",
    ["trailer", "FUHRMANN", "grapeTools", "MRWK 14500"],
  ],
  [
    "data/vehicles/fuhrmann/trailer6000L/trailer6000L.xml",
    ["trailer", "FUHRMANN", "grapeTools", "MRWK 6000"],
  ],
  [
    "data/vehicles/gessner/singleRow/singleRow.xml",
    [
      "fertilizingSowingMachine",
      "GESSNER",
      "sugarCaneHarvesting",
      "Single Row Billet Planter",
    ],
  ],
  [
    "data/vehicles/gessner/twoRow/twoRow.xml",
    [
      "fertilizingSowingMachine",
      "GESSNER",
      "sugarCaneHarvesting",
      "Two Row Billet Planter",
    ],
  ],
  [
    "data/vehicles/grimme/evo290/evo290.xml",
    ["attachableCombine", "GRIMME", "potatoHarvesting", "Evo 290"],
  ],
  [
    "data/vehicles/grimme/ft300/ft300.xml",
    ["fruitPreparer", "GRIMME", "beetHarvesting", "FT 300"],
  ],
  [
    "data/vehicles/grimme/gl420/gl420.xml",
    ["sowingMachine", "GRIMME", "potatoHarvesting", "GL 420"],
  ],
  [
    "data/vehicles/grimme/gl860/gl860.xml",
    ["sowingMachine", "GRIMME", "potatoHarvesting", "GL 860 Compacta"],
  ],
  [
    "data/vehicles/grimme/ks754/ks754.xml",
    ["fruitPreparer", "GRIMME", "potatoHarvesting", "KS 75-4"],
  ],
  [
    "data/vehicles/grimme/rexor6300/rexor6300.xml",
    [
      "combineCutterFruitPreparer",
      "GRIMME",
      "beetVehicles",
      "Rexor 6300 Platinum",
    ],
  ],
  [
    "data/vehicles/grimme/rh2460/rh2460.xml",
    ["receivingHopper", "GRIMME", "belts", "RH 24-60"],
  ],
  [
    "data/vehicles/grimme/rootster604/rootster604.xml",
    ["attachableCombine", "GRIMME", "beetHarvesting", "ROOTSTER 604"],
  ],
  [
    "data/vehicles/grimme/sl8022/sl8022.xml",
    ["conveyorBelt", "GRIMME", "belts", "SL 80-22 Quantum"],
  ],
  [
    "data/vehicles/grimme/tc816/tc816.xml",
    ["conveyorBelt", "GRIMME", "belts", "TC 816"],
  ],
  [
    "data/vehicles/grimme/ventor4150/ventor4150.xml",
    ["combineCutterFruitPreparer", "GRIMME", "potatoVehicles", "Ventor 4150"],
  ],
  [
    "data/vehicles/hardi/aeon5200/aeon5200.xml",
    ["sprayer", "HARDI", "sprayers", "AEON 5200 DELTA FORCE"],
  ],
  [
    "data/vehicles/hardi/commander4500DF/commander4500DF.xml",
    ["sprayer", "HARDI", "sprayers", "COMMANDER 4500 DELTA FORCE"],
  ],
  [
    "data/vehicles/hardi/mega1200L/mega1200L.xml",
    ["sprayer", "HARDI", "sprayers", "MEGA 1200L"],
  ],
  [
    "data/vehicles/hardi/mega1200L/mega1200LTank.xml",
    ["fillableImplement", "HARDI", "sprayers", "MEGA 1200L TANK"],
  ],
  [
    "data/vehicles/hardi/mercury4000L/mercury4000L.xml",
    ["sprayer", "HARDI", "grapeTools", "MERCURY 4000L"],
  ],
  [
    "data/vehicles/hardi/rubicon9000/rubicon9000.xml",
    ["selfPropelledSprayer", "HARDI", "sprayerVehicles", "RUBICON 9000"],
  ],
  [
    "data/vehicles/hauer/xb150/xb150.xml",
    ["attachableFrontloader", "HAUER", "frontLoaders", "XB 150"],
  ],
  [
    "data/vehicles/hauer/xb190/xb190.xml",
    ["attachableFrontloader", "HAUER", "frontLoaders", "XB 190"],
  ],
  [
    "data/vehicles/hawe/dst16/dst16.xml",
    ["manureSpreader", "HAWE", "manureSpreaders", "DST 16"],
  ],
  [
    "data/vehicles/hawe/kuw2000/kuw2000.xml",
    ["augerWagon", "HAWE", "augerWagons", "KUW 2000"],
  ],
  [
    "data/vehicles/hawe/suw5000/suw5000.xml",
    ["augerWagon", "HAWE", "augerWagons", "SUW 5000"],
  ],
  [
    "data/vehicles/hawe/ulw4000/ulw4000.xml",
    ["augerWagon", "HAWE", "augerWagons", "ULW 4000"],
  ],
  [
    "data/vehicles/heizomat/hm8400KLC/hm8400KLC.xml",
    ["woodCrusherTrailerStorage", "HEIZOMAT", "woodHarvesting", "HM 8-400 KLC"],
  ],
  [
    "data/vehicles/holaras/hulk300/hulk300.xml",
    [
      "dynamicMountAttacherShovelLeveler",
      "HOLARAS",
      "wheelLoaderTools",
      "HULK 300",
    ],
  ],
  [
    "data/vehicles/holaras/mes400/mes400.xml",
    ["leveler", "HOLARAS", "leveler", "MES 400"],
  ],
  [
    "data/vehicles/holaras/mes500/mes500.xml",
    ["leveler", "HOLARAS", "leveler", "MES 500"],
  ],
  [
    "data/vehicles/holaras/stego485Pro/stego485Pro.xml",
    ["silageCompressor", "HOLARAS", "silocompaction", "Stego 485 Pro"],
  ],
  [
    "data/vehicles/horsch/joker4CT/joker4CT.xml",
    ["cultivator", "HORSCH", "discHarrows", "Joker 4 CT"],
  ],
  [
    "data/vehicles/horsch/terrano3FX/terrano3FX.xml",
    ["cultivator", "HORSCH", "cultivators", "Terrano 3 FX"],
  ],
  [
    "data/vehicles/iseki/tjv/tjv.xml",
    ["tractor", "ISEKI", "tractorsS", "TJV 985"],
  ],
  [
    "data/vehicles/jcb/fastrac4220/fastrac4220.xml",
    ["tractor", "JCB", "tractorsM", "Fastrac 4220"],
  ],
  [
    "data/vehicles/jcb/fastrac8330/fastrac8330.xml",
    ["tractor", "JCB", "tractorsL", "Fastrac 8330"],
  ],
  [
    "data/vehicles/jcb/series547/series547.xml",
    ["teleHandler", "JCB", "teleLoaderVehicles", "541-70 AGRI PRO"],
  ],
  [
    "data/vehicles/jenz/cobraHybrid/cobraHybrid.xml",
    [
      "woodCrusherDrivable",
      "JENZ",
      "woodHarvesting",
      "HEM 922 DQ Cobra hybrid",
    ],
  ],
  [
    "data/vehicles/johnDeere/cp690/cp690.xml",
    ["cottonHarvester", "JOHNDEERE", "cottonVehicles", "CP690"],
  ],
  [
    "data/vehicles/johnDeere/frontloader603R/frontloader603R.xml",
    ["attachableFrontloader", "JOHNDEERE", "frontLoaders", "603R"],
  ],
  [
    "data/vehicles/johnDeere/frontloader643R/frontloader643R.xml",
    ["attachableFrontloader", "JOHNDEERE", "frontLoaders", "643R"],
  ],
  [
    "data/vehicles/johnDeere/frontloader700M/frontloader700M.xml",
    ["attachableFrontloader", "JOHNDEERE", "frontLoaders", "700M"],
  ],
  [
    "data/vehicles/johnDeere/header608C/header608C.xml",
    ["cutter", "JOHNDEERE", "cornHeaders", "608C"],
  ],
  [
    "data/vehicles/johnDeere/header625X/header625X.xml",
    ["cutter", "JOHNDEERE", "cutters", "625X"],
  ],
  [
    "data/vehicles/johnDeere/header639/header639.xml",
    ["cutter", "JOHNDEERE", "forageHarvesterCutters", "639 Premium"],
  ],
  [
    "data/vehicles/johnDeere/headerC16F/headerC16F.xml",
    ["cutter", "JOHNDEERE", "cornHeaders", "C16F"],
  ],
  [
    "data/vehicles/johnDeere/headerHD45X/headerHD45X.xml",
    ["cutter", "JOHNDEERE", "cutters", "HD45X"],
  ],
  [
    "data/vehicles/johnDeere/headerHD50F/headerHD50F.xml",
    ["cutter", "JOHNDEERE", "cutters", "HD50F"],
  ],
  [
    "data/vehicles/johnDeere/laforgeEZ/laforgeEZ.xml",
    ["implement", "JOHNDEERE", "weights", "Laforge EZ 1700"],
  ],
  [
    "data/vehicles/johnDeere/pickUp1150/pickUp1150.xml",
    ["implement", "JOHNDEERE", "weights", "PickUp 1150"],
  ],
  [
    "data/vehicles/johnDeere/pickUp1800/pickUp1800.xml",
    ["implement", "JOHNDEERE", "weights", "PickUp 1800"],
  ],
  [
    "data/vehicles/johnDeere/pickUp900/pickUp900.xml",
    ["implement", "JOHNDEERE", "weights", "PickUp 900"],
  ],
  [
    "data/vehicles/johnDeere/planter1775NT/planter1775NT.xml",
    ["sowingMachine", "JOHNDEERE", "planters", "1775NT"],
  ],
  [
    "data/vehicles/johnDeere/series4755/series4755.xml",
    ["tractor", "JOHNDEERE", "tractorsM", "4755"],
  ],
  [
    "data/vehicles/johnDeere/series6M/series6M.xml",
    ["tractor", "JOHNDEERE", "tractorsS", "6M Series"],
  ],
  [
    "data/vehicles/johnDeere/series6R/series6R.xml",
    ["tractor", "JOHNDEERE", "tractorsM", "6R Series"],
  ],
  [
    "data/vehicles/johnDeere/series7810/series7810.xml",
    ["tractor", "JOHNDEERE", "tractorsM", "7810"],
  ],
  [
    "data/vehicles/johnDeere/series7R/series7R.xml",
    ["tractor", "JOHNDEERE", "tractorsL", "7R Series"],
  ],
  [
    "data/vehicles/johnDeere/series8R/series8R.xml",
    ["tractor", "JOHNDEERE", "tractorsL", "8R Series"],
  ],
  [
    "data/vehicles/johnDeere/series8RT/series8RT.xml",
    ["tractor", "JOHNDEERE", "tractorsL", "8RT Series"],
  ],
  [
    "data/vehicles/johnDeere/series8RX/series8RX.xml",
    ["tractor", "JOHNDEERE", "tractorsL", "8RX Series"],
  ],
  [
    "data/vehicles/johnDeere/series9000/series9000.xml",
    ["combineDrivable", "JOHNDEERE", "forageHarvesters", "9000 Series"],
  ],
  [
    "data/vehicles/johnDeere/series9R/series9R.xml",
    ["tractor", "JOHNDEERE", "tractorsL", "9R Series"],
  ],
  [
    "data/vehicles/johnDeere/series9RT/series9RT.xml",
    ["tractor", "JOHNDEERE", "tractorsL", "9RT Series"],
  ],
  [
    "data/vehicles/johnDeere/series9RX/series9RX.xml",
    ["tractor", "JOHNDEERE", "tractorsL", "9RX Series"],
  ],
  [
    "data/vehicles/johnDeere/t560/t560.xml",
    ["combineDrivable", "JOHNDEERE", "harvesters", "T560"],
  ],
  [
    "data/vehicles/johnDeere/x9_1100/x9_1100.xml",
    ["combineDrivable", "JOHNDEERE", "harvesters", "X9 1100"],
  ],
  [
    "data/vehicles/johnDeere/xuv865M/xuv865M.xml",
    ["carFillable", "JOHNDEERE", "cars", "XUV865M"],
  ],
  [
    "data/vehicles/joskin/aquaTrans7300/aquaTrans7300.xml",
    ["waterTrailer", "JOSKIN", "animals", "AQUATRANS 7300 S"],
  ],
  [
    "data/vehicles/jungheinrich/efgS50S/efgS50S.xml",
    ["teleHandler", "JUNGHEINRICH", "forklifts", "EFG S50"],
  ],
  [
    "data/vehicles/kaweco/radium255/radium255.xml",
    ["trailer", "KAWECO", "trailers", "Radium 255"],
  ],
  [
    "data/vehicles/kemper/comfortSupportWheel/comfortSupportWheel.xml",
    [
      "implement",
      "KEMPER",
      "forageHarvesterCutters",
      "$l10n_shopItem_comfortSupportWheel",
    ],
  ],
  [
    "data/vehicles/kemper/n3003/n3003.xml",
    ["cutter", "KEMPER", "forageHarvesterCutters", "3003"],
  ],
  [
    "data/vehicles/kemper/plus345/plus345.xml",
    ["cutter", "KEMPER", "forageHarvesterCutters", "345 Plus"],
  ],
  [
    "data/vehicles/kemper/plus345/plus345_johnDeere.xml",
    ["cutter", "JOHNDEERE", "forageHarvesterCutters", "345 Plus"],
  ],
  [
    "data/vehicles/kemper/plus345/plus345_newHolland.xml",
    ["cutter", "NEWHOLLAND", "forageHarvesterCutters", "450 SFI"],
  ],
  [
    "data/vehicles/kemper/plus360/plus360.xml",
    ["cutter", "KEMPER", "forageHarvesterCutters", "360 Plus"],
  ],
  [
    "data/vehicles/kemper/plus360/plus360_johnDeere.xml",
    ["cutter", "JOHNDEERE", "forageHarvesterCutters", "360 Plus"],
  ],
  [
    "data/vehicles/kemper/plus360/plus360_newHolland.xml",
    ["cutter", "NEWHOLLAND", "forageHarvesterCutters", "600 SFI"],
  ],
  [
    "data/vehicles/kemper/plus375/plus375.xml",
    ["cutter", "KEMPER", "forageHarvesterCutters", "375 Plus"],
  ],
  [
    "data/vehicles/kemper/plus375/plus375_johnDeere.xml",
    ["cutter", "JOHNDEERE", "forageHarvesterCutters", "375 Plus"],
  ],
  [
    "data/vehicles/kemper/plus375/plus375_newHolland.xml",
    ["cutter", "NEWHOLLAND", "forageHarvesterCutters", "750 SFI"],
  ],
  [
    "data/vehicles/kemper/plus390/plus390.xml",
    ["cutter", "KEMPER", "forageHarvesterCutters", "390 Plus"],
  ],
  [
    "data/vehicles/kemper/plus390/plus390_johnDeere.xml",
    ["cutter", "JOHNDEERE", "forageHarvesterCutters", "390 Plus"],
  ],
  [
    "data/vehicles/kemper/plus390/plus390_newHolland.xml",
    ["cutter", "NEWHOLLAND", "forageHarvesterCutters", "900 SFI"],
  ],
  [
    "data/vehicles/kesla/nd122/nd122.xml",
    ["craneTrailer", "KESLA", "woodTrailer", "144ND"],
  ],
  [
    "data/vehicles/kingstonTrailers/belvedere/belvedere.xml",
    ["livestockTrailer", "KINGSTON", "animalTransport", "Belvedere"],
  ],
  [
    "data/vehicles/kinze/machTill261/machTill261.xml",
    ["cultivator", "KINZE", "discHarrows", "Mach Till 261"],
  ],
  [
    "data/vehicles/kinze/machTill401/machTill401.xml",
    ["cultivator", "KINZE", "discHarrows", "Mach Till 412"],
  ],
  [
    "data/vehicles/kinze/planter3660/planter3660.xml",
    ["sowingMachine", "KINZE", "planters", "3665 Blue Drive"],
  ],
  [
    "data/vehicles/kinze/planter4900/planter4900.xml",
    ["fertilizingSowingMachine", "KINZE", "planters", "4905 Blue Drive"],
  ],
  [
    "data/vehicles/knoche/zunslerschreck/zunslerschreck.xml",
    ["mulcherRoll", "KNOCHE", "mulchers", "SPEEDMAX 560"],
  ],
  [
    "data/vehicles/koeckerling/allrounderFlatline600/allrounderFlatline600.xml",
    ["cultivator", "KOCKERLING", "cultivators", "Allrounder Flatline 600"],
  ],
  [
    "data/vehicles/koeckerling/rebellClassic600T/rebellClassic600T.xml",
    ["cultivator", "KOCKERLING", "discHarrows", "Rebell Classic 600T"],
  ],
  [
    "data/vehicles/koeckerling/vector570/vector570.xml",
    ["cultivator", "KOCKERLING", "cultivators", "Vector 570/800"],
  ],
  [
    "data/vehicles/komatsu/forwarder875/forwarder875.xml",
    ["forwarder", "KOMATSU", "woodHarvesting", "875"],
  ],
  [
    "data/vehicles/komatsu/xc931/xc931.xml",
    ["woodHarvester", "KOMATSU", "woodHarvesting", "931XC"],
  ],
  [
    "data/vehicles/kongskilde/gxf3605p/gxf3605p.xml",
    ["mower", "KONGSKILDE", "mowers", "GXF 3605 P"],
  ],
  [
    "data/vehicles/kongskilde/gxt13005P/gxt13005P.xml",
    ["mower", "KONGSKILDE", "mowers", "GXT 13005 P"],
  ],
  [
    "data/vehicles/kotte/frc55/frc55.xml",
    ["manureTrailer", "KOTTE", "slurryTanks", "FRC 55"],
  ],
  [
    "data/vehicles/kotte/frc65/frc65.xml",
    ["manureTrailer", "KOTTE", "slurryTanks", "FRC 65"],
  ],
  [
    "data/vehicles/kotte/tsa/tsa.xml",
    ["manureTrailer", "KOTTE", "slurryTanks", "TSA 30000"],
  ],
  [
    "data/vehicles/krampe/dolly10L/dolly10L.xml",
    ["dolly", "KRAMPE", "dollys", "Dolly 10 L"],
  ],
  [
    "data/vehicles/krampe/hp20/hp20.xml",
    ["trailer", "KRAMPE", "trailers", "HALFPIPE HP 20"],
  ],
  [
    "data/vehicles/krampe/sks30_150/sks30_150.xml",
    ["trailer", "KRAMPE", "trailers", "SKS 30/1050"],
  ],
  [
    "data/vehicles/kroeger/muk303/muk303.xml",
    ["trailer", "KROEGER", "trailers", "MUK 303"],
  ],
  [
    "data/vehicles/kroeger/pwo24/pwo24.xml",
    ["dynamicMountAttacherTrailer", "KROEGER", "baleLoaders", "PWO 24"],
  ],
  [
    "data/vehicles/krone/bigM450/bigM450.xml",
    ["selfPropelledMower", "KRONE", "mowerVehicles", "BiG M 450"],
  ],
  [
    "data/vehicles/krone/bigPack1290HDPVC/bigPack1290HDPVC.xml",
    ["baler", "KRONE", "balers", "BigPack 1290 HDP VC"],
  ],
  [
    "data/vehicles/krone/bigX1180/bigX1180.xml",
    ["combineDrivable", "KRONE", "forageHarvesters", "BiG X 1180"],
  ],
  [
    "data/vehicles/krone/collect900_3/collect900_3.xml",
    ["cutter", "KRONE", "forageHarvesterCutters", "X-Collect 900-3"],
  ],
  [
    "data/vehicles/krone/easyFlow300S/easyFlow300S.xml",
    ["cutter", "KRONE", "forageHarvesterCutters", "EasyFlow 300 S"],
  ],
  [
    "data/vehicles/krone/gx520/gx520.xml",
    ["trailer", "KRONE", "trailers", "GX 520"],
  ],
  [
    "data/vehicles/krone/profiLiner/profiLiner.xml",
    ["trailer", "KRONETRAILER", "misc", "Profi Liner"],
  ],
  [
    "data/vehicles/krone/swadroTS970/swadroTS970.xml",
    ["windrower", "KRONE", "windrowers", "Swadro TS 970"],
  ],
  [
    "data/vehicles/krone/xDisc620/xDisc620.xml",
    ["cutter", "KRONE", "forageHarvesterCutters", "XDisc 620"],
  ],
  [
    "data/vehicles/krone/xDisc620Trailer/xDisc620Trailer.xml",
    ["dynamicMountAttacherTrailer", "KRONE", "cutterTrailers", "XDisc 620 %s"],
  ],
  [
    "data/vehicles/kuhn/btfr6030/btfr6030.xml",
    ["sowingMachine", "KUHN", "seeders", "HR 6040 RCS + BTFR 6030"],
  ],
  [
    "data/vehicles/kuhn/dc401/dc401.xml",
    ["cultivator", "KUHN", "subsoilers", "DC 401"],
  ],
  [
    "data/vehicles/kuhn/espro6000RC/espro6000RC.xml",
    ["fertilizingSowingMachine", "KUHN", "seeders", "ESPRO 6000 RC"],
  ],
  [
    "data/vehicles/kuhn/ga15131/ga15131.xml",
    ["windrower", "KUHN", "windrowers", "GA 15131"],
  ],
  [
    "data/vehicles/kuhn/ga4731/ga4731.xml",
    ["windrower", "KUHN", "windrowers", "GA 4731"],
  ],
  [
    "data/vehicles/kuhn/gf8712/gf8712.xml",
    ["tedder", "KUHN", "tedders", "GF 8712"],
  ],
  [
    "data/vehicles/kuhn/gmd3123F/gmd3123F.xml",
    ["mower", "KUHN", "mowers", "GMD 3123 F"],
  ],
  [
    "data/vehicles/kuhn/gmd4411/gmd4411.xml",
    ["mower", "KUHN", "mowers", "GMD 4411"],
  ],
  [
    "data/vehicles/kuhn/gmd8730/gmd8730.xml",
    ["mower", "KUHN", "mowers", "GMD 8730-FF"],
  ],
  [
    "data/vehicles/kuhn/hr4040/hr4040.xml",
    ["turnOnCultivator", "KUHN", "powerHarrows", "HR 4040"],
  ],
  [
    "data/vehicles/kuhn/hr6040RCS/hr6040RCS.xml",
    ["turnOnCultivator", "KUHN", "powerHarrows", "HR 6040 RCS"],
  ],
  [
    "data/vehicles/kuhn/maxima3TIL/maxima3TIL.xml",
    ["fertilizingSowingMachine", "KUHN", "planters", "MAXIMA 3 TIL"],
  ],
  [
    "data/vehicles/kuhn/mergeMaxx950/mergeMaxx950.xml",
    ["windrower", "KUHN", "windrowers", "MERGE MAXX 950"],
  ],
  [
    "data/vehicles/kuhn/primor15070/primor15070.xml",
    ["strawBlower", "KUHN", "animals", "Primor 15070"],
  ],
  [
    "data/vehicles/kuhn/prolander7500/prolander7500.xml",
    ["cultivator", "KUHN", "cultivators", "PROLANDER 7500"],
  ],
  [
    "data/vehicles/kuhn/ra142/ra142.xml",
    ["mixerWagon", "KUHN", "animals", "RA 142"],
  ],
  [
    "data/vehicles/kuhn/sb1290ID/sb1290ID.xml",
    ["baler", "KUHN", "balers", "SB 1290 iD"],
  ],
  [
    "data/vehicles/kuhn/slc141/slc141.xml",
    ["manureSpreader", "KUHN", "manureSpreaders", "SLC 141"],
  ],
  [
    "data/vehicles/kuhn/spwIntense/spwIntense.xml",
    ["drivableMixerWagon", "KUHN", "animalsVehicles", "SPW INTENSE 25.2 CL"],
  ],
  [
    "data/vehicles/kuhn/sw4014/sw4014.xml",
    ["baleWrapper", "KUHN", "baleWrappers", "SW 4014"],
  ],
  [
    "data/vehicles/kuhn/tf1512/tf1512.xml",
    ["fillableImplement", "KUHN", "seeders", "TF 1512"],
  ],
  [
    "data/vehicles/kuhn/vb3190/vb3190.xml",
    ["baler", "KUHN", "balers", "VB 3190"],
  ],
  [
    "data/vehicles/kuhn/venta4030/venta4030.xml",
    ["sowingMachine", "KUHN", "seeders", "Venta 4030"],
  ],
  [
    "data/vehicles/kuhn/venta4030/venta4030Bundle.xml",
    ["sowingMachine", "KUHN", "seeders", "HR 4040 + VENTA 4030"],
  ],
  [
    "data/vehicles/kverneland/dtx300AR/dtx300AR.xml",
    ["cultivator", "KVERNELAND", "subsoilers", "DTX 300 AR"],
  ],
  [
    "data/vehicles/kverneland/ecomat/ecomat.xml",
    ["plowPacker", "KVERNELAND", "plows", "Ecomat"],
  ],
  [
    "data/vehicles/kverneland/mower4140L/mower4140L.xml",
    ["mower", "KVERNELAND", "mowers", "4140 L"],
  ],
  [
    "data/vehicles/kverneland/optimaRS9m/optimaRS9m.xml",
    ["fertilizingSowingMachine", "KVERNELAND", "planters", "Optima RS"],
  ],
  [
    "data/vehicles/kverneland/pw10012/pw10012.xml",
    ["plowPacker", "KVERNELAND", "plows", "PW 100 - 12"],
  ],
  [
    "data/vehicles/kverneland/wrapper7850C/wrapper7850C.xml",
    ["baleWrapper", "KVERNELAND", "baleWrappers", "7850 C"],
  ],
  [
    "data/vehicles/lacotec/lhII/lhII.xml",
    ["attachableCombineExtended", "LACOTEC", "forageHarvesterCutters", "LH II"],
  ],
  [
    "data/vehicles/landini/serie7RoboSix/serie7RoboSix.xml",
    ["tractor", "LANDINI", "tractorsM", "Serie 7 Robo-Six"],
  ],
  [
    "data/vehicles/landini/seriesREX4/seriesREX4.xml",
    ["tractor", "LANDINI", "tractorsS", "REX 4 GT"],
  ],
  [
    "data/vehicles/lemken/azurit9/azurit9.xml",
    ["fertilizingSowingMachine", "LEMKEN", "planters", "Azurit 9"],
  ],
  [
    "data/vehicles/lemken/karat12/karat12.xml",
    ["cultivator", "LEMKEN", "cultivators", "Karat 12/500 KUA"],
  ],
  [
    "data/vehicles/lemken/koralin9840/koralin9840.xml",
    ["cultivator", "LEMKEN", "cultivators", "Koralin 9-840"],
  ],
  [
    "data/vehicles/lemken/smaragd9_500k/smaragd9_500k.xml",
    ["cultivator", "LEMKEN", "cultivators", "Smaragd 9/500K"],
  ],
  [
    "data/vehicles/lemken/solitair12/solitair12.xml",
    ["sowingMachine", "LEMKEN", "seeders", "Solitair 12"],
  ],
  [
    "data/vehicles/lemken/solitair23/solitair23.xml",
    ["fillableImplement", "LEMKEN", "planters", "Solitair 23"],
  ],
  [
    "data/vehicles/lemken/titan18/titan18.xml",
    ["plow", "LEMKEN", "plows", "Titan 18"],
  ],
  [
    "data/vehicles/lindner/lintrac130/lintrac130.xml",
    ["tractor", "LINDNER", "tractorsS", "Lintrac 130"],
  ],
  [
    "data/vehicles/lizard/mks32/mks32.xml",
    ["waterTrailer", "LIZARD", "animals", "MKS 32"],
  ],
  [
    "data/vehicles/lizard/mks8/mks8.xml",
    ["waterTrailer", "LIZARD", "animals", "MKS 8"],
  ],
  [
    "data/vehicles/lizard/module4/module4.xml",
    ["baleLoader", "LIZARD", "cottonHarvesting", "Module 4"],
  ],
  [
    "data/vehicles/lizard/moduleX/moduleX.xml",
    ["baleLoader", "LIZARD", "cottonHarvesting", "Module X Semi"],
  ],
  [
    "data/vehicles/lizard/pickup1986/pickup1986.xml",
    ["car", "LIZARD", "cars", "Pickup 1986"],
  ],
  [
    "data/vehicles/lizard/pickup2017/pickup2017.xml",
    ["car", "LIZARD", "cars", "Pickup 2017"],
  ],
  [
    "data/vehicles/lizard/s710/s710.xml",
    ["pickupConveyorBelt", "LIZARD", "belts", "S-710"],
  ],
  [
    "data/vehicles/lizard/swt7/swt7.xml",
    [
      "attachableCombineCutterFruitPreparer",
      "LIZARD",
      "sugarCaneHarvesting",
      "SWT 7",
    ],
  ],
  [
    "data/vehicles/lodeKing/distinctionSuperB/distinctionSuperB.xml",
    ["trailer", "LODEKING", "trailers", "Distinction Super-B"],
  ],
  [
    "data/vehicles/lodeKing/distinctionSuperB/distinctionSuperB_back.xml",
    ["trailer", "LODEKING", "trailers", "Distinction Super-B Pull trailer"],
  ],
  [
    "data/vehicles/lodeKing/distinctionSuperB/distinctionSuperB_front.xml",
    ["trailer", "LODEKING", "trailers", "Distinction Super-B Lead trailer"],
  ],
  [
    "data/vehicles/lodeKing/distinctionTripleHopper/distinctionTripleHopper.xml",
    ["trailer", "LODEKING", "trailers", "Distinction Triple Hopper"],
  ],
  [
    "data/vehicles/lodeKing/renownTriAxleBeavertailLowDrop/renownTriAxleBeavertailLowDrop.xml",
    ["trailer", "LODEKING", "lowloaders", "Renown Drop Deck"],
  ],
  [
    "data/vehicles/mack/anthem/anthem.xml",
    ["tractor", "MACK", "trucks", "Anthem 6x4"],
  ],
  [
    "data/vehicles/mack/anthem/anthemBlack.xml",
    ["tractor", "MACK", "trucks", "Mack Black Anthem"],
  ],
  [
    "data/vehicles/mack/pinnacle/pinnacle.xml",
    ["tractor", "MACK", "trucks", "Pinnacle 6x4"],
  ],
  [
    "data/vehicles/mack/superliner1979/superliner1979.xml",
    ["tractor", "MACK", "trucks", "Super-Liner 6x4"],
  ],
  [
    "data/vehicles/magsi/telehandlerBaleFork/telehandlerBaleFork.xml",
    [
      "implementDynamicMountAttacher",
      "MAGSI",
      "teleLoaderTools",
      "$l10n_shopItem_telehandlerBaleFork",
    ],
  ],
  [
    "data/vehicles/magsi/telehandlerBaleGrab/telehandlerBaleGrab.xml",
    [
      "baleGrab",
      "MAGSI",
      "teleLoaderTools",
      "$l10n_shopItem_telehandlerBaleGrab",
    ],
  ],
  [
    "data/vehicles/magsi/telehandlerFork/telehandlerFork.xml",
    [
      "implementDynamicMountAttacher",
      "MAGSI",
      "teleLoaderTools",
      "$l10n_shopItem_telehandlerFork",
    ],
  ],
  [
    "data/vehicles/magsi/telehandlerLogFork/telehandlerLogFork.xml",
    [
      "logGrab",
      "MAGSI",
      "teleLoaderTools",
      "$l10n_shopItem_telehandlerLogFork",
    ],
  ],
  [
    "data/vehicles/magsi/telehandlerManureFork/telehandlerManureFork.xml",
    [
      "dynamicMountAttacherShovel",
      "MAGSI",
      "teleLoaderTools",
      "$l10n_shopItem_telehandlerManureFork",
    ],
  ],
  [
    "data/vehicles/magsi/telehandlerShovel/telehandlerShovel.xml",
    [
      "shovelLeveler",
      "MAGSI",
      "teleLoaderTools",
      "$l10n_shopItem_telehandlerShovel",
    ],
  ],
  [
    "data/vehicles/magsi/wheelLoaderFork/wheelLoaderFork.xml",
    [
      "implementDynamicMountAttacher",
      "MAGSI",
      "wheelLoaderTools",
      "$l10n_shopItem_wheelLoaderFork",
    ],
  ],
  [
    "data/vehicles/magsi/wheelLoaderLogFork/wheelLoaderLogFork.xml",
    [
      "logGrab",
      "MAGSI",
      "wheelLoaderTools",
      "$l10n_shopItem_wheelLoaderLogFork",
    ],
  ],
  [
    "data/vehicles/magsi/wheelLoaderShovel/wheelLoaderShovel.xml",
    [
      "shovelLeveler",
      "MAGSI",
      "wheelLoaderTools",
      "$l10n_shopItem_wheelLoaderHighDumpBucket",
    ],
  ],
  [
    "data/vehicles/mahindra/retriever/retriever.xml",
    ["carFillable", "MAHINDRA", "cars", "Retriever 1000"],
  ],
  [
    "data/vehicles/man/tgs18500/tgs18500.xml",
    ["tractor", "MAN", "trucks", "TGS 18.500 4x4"],
  ],
  [
    "data/vehicles/man/tgx26640/tgx26640.xml",
    ["woodTruck", "MAN", "woodHarvesting", "TGX 26.640"],
  ],
  [
    "data/vehicles/manitou/mc18/mc18.xml",
    ["teleHandler", "MANITOU", "forklifts", "MC 18-4"],
  ],
  [
    "data/vehicles/manitou/mlt625/mlt625.xml",
    ["teleHandler", "MANITOU", "teleLoaderVehicles", "MLT 625-75H"],
  ],
  [
    "data/vehicles/manitou/mlt737/mlt737.xml",
    ["teleHandler", "MANITOU", "teleLoaderVehicles", "MLT 737-130 PS+"],
  ],
  [
    "data/vehicles/manitou/mlt840/mlt840.xml",
    ["teleHandler", "MANITOU", "teleLoaderVehicles", "MLT 840-145 PS+"],
  ],
  [
    "data/vehicles/masseyFerguson/baler1840/baler1840.xml",
    ["baler", "MASSEYFERGUSON", "balers", "MF 1840"],
  ],
  [
    "data/vehicles/masseyFerguson/dynaFlex9255/dynaFlex9255.xml",
    ["cutter", "MASSEYFERGUSON", "cutters", "MF DynaFlex 9255"],
  ],
  [
    "data/vehicles/masseyFerguson/ideal/ideal.xml",
    ["combineDrivable", "MASSEYFERGUSON", "harvesters", "MF IDEAL"],
  ],
  [
    "data/vehicles/masseyFerguson/mf3012/mf3012.xml",
    ["shovel", "MASSEYFERGUSON", "sugarCaneHarvesting", "MF 3012"],
  ],
  [
    "data/vehicles/masseyFerguson/powerFlow/powerFlow.xml",
    ["cutter", "MASSEYFERGUSON", "cutters", "MF PowerFlow"],
  ],
  [
    "data/vehicles/masseyFerguson/series3670/series3670.xml",
    ["tractor", "MASSEYFERGUSON", "tractorsM", "MF 3670"],
  ],
  [
    "data/vehicles/masseyFerguson/series3700AL/series3700AL.xml",
    ["tractor", "MASSEYFERGUSON", "tractorsS", "MF 3700 AL"],
  ],
  [
    "data/vehicles/masseyFerguson/series4700M/series4700M.xml",
    ["tractor", "MASSEYFERGUSON", "tractorsS", "MF 4700 M"],
  ],
  [
    "data/vehicles/masseyFerguson/series5S/series5S.xml",
    ["tractor", "MASSEYFERGUSON", "tractorsS", "MF 5S"],
  ],
  [
    "data/vehicles/masseyFerguson/series6700S/series6700S.xml",
    ["tractor", "MASSEYFERGUSON", "tractorsM", "MF 6700 S"],
  ],
  [
    "data/vehicles/masseyFerguson/series7710S/series7710S.xml",
    ["tractor", "MASSEYFERGUSON", "tractorsM", "MF 7710 S"],
  ],
  [
    "data/vehicles/masseyFerguson/series7720S/series7720S.xml",
    ["tractor", "MASSEYFERGUSON", "tractorsM", "MF 7720 S"],
  ],
  [
    "data/vehicles/masseyFerguson/series8S/series8S.xml",
    ["tractor", "MASSEYFERGUSON", "tractorsM", "MF 8S"],
  ],
  [
    "data/vehicles/mcCormack/baleGrab/baleGrab.xml",
    [
      "implementDynamicMountAttacher",
      "MCCORMACK",
      "wheelLoaderTools",
      "$l10n_shopItem_telehandlerBaleFork",
    ],
  ],
  [
    "data/vehicles/mcCormack/cottonTagTrailer/cottonTagTrailer.xml",
    ["baleLoader", "MCCORMACK", "cottonHarvesting", "Cotton Tag Trailer"],
  ],
  [
    "data/vehicles/mcCormack/overtippingBucket/overtippingBucket.xml",
    [
      "shovelLeveler",
      "MCCORMACK",
      "wheelLoaderTools",
      "$l10n_shopItem_wheelLoaderHighDumpBucket",
    ],
  ],
  [
    "data/vehicles/mcCormack/wheelieGrab/wheelieGrab.xml",
    ["baleGrab", "MCCORMACK", "cottonHarvesting", "Cotton Wheelie Grab"],
  ],
  [
    "data/vehicles/mcCormick/x7VTDrive/x7VTDrive.xml",
    ["tractor", "MCCORMICK", "tractorsM", "X7 VT-Drive"],
  ],
  [
    "data/vehicles/mcCormick/x8VTDrive/x8VTDrive.xml",
    ["tractor", "MCCORMICK", "tractorsM", "X8 VT-Drive"],
  ],
  [
    "data/vehicles/meridian/conveyAll1690/conveyAll1690.xml",
    ["conveyorBelt", "CONVEYALL", "belts", "1690"],
  ],
  [
    "data/vehicles/meridian/conveyAllCST1550/conveyAllCST1550.xml",
    ["augerWagon", "CONVEYALL", "augerWagons", "CST 1550"],
  ],
  [
    "data/vehicles/meridian/tl1239/tl1239.xml",
    ["conveyorBelt", "MERIDIAN", "belts", "TL 12-39"],
  ],
  [
    "data/vehicles/nardi/n20T/n20T.xml",
    ["dynamicMountAttacherTrailer", "NARDI", "cutterTrailers", "N20T"],
  ],
  [
    "data/vehicles/nardi/n40b/n40b.xml",
    ["dynamicMountAttacherTrailer", "NARDI", "cutterTrailers", "N40B"],
  ],
  [
    "data/vehicles/nardi/n40bx/n40bx.xml",
    ["dynamicMountAttacherTrailer", "NARDI", "cutterTrailers", "N40BX"],
  ],
  [
    "data/vehicles/nardi/n60_30/n60_30.xml",
    ["dynamicMountAttacherTrailer", "NARDI", "cutterTrailers", "N60-30"],
  ],
  [
    "data/vehicles/nardi/n60_35/n60_35.xml",
    ["dynamicMountAttacherTrailer", "NARDI", "cutterTrailers", "N60-35"],
  ],
  [
    "data/vehicles/nardi/n60_40/n60_40.xml",
    ["dynamicMountAttacherTrailer", "NARDI", "cutterTrailers", "N60-40"],
  ],
  [
    "data/vehicles/nardi/n60_45/n60_45.xml",
    ["dynamicMountAttacherTrailer", "NARDI", "cutterTrailers", "N60-45"],
  ],
  [
    "data/vehicles/nardi/n70_30/n70_30.xml",
    ["dynamicMountAttacherTrailer", "NARDI", "cutterTrailers", "N70-30"],
  ],
  [
    "data/vehicles/nardi/n70_40/n70_40.xml",
    ["dynamicMountAttacherTrailer", "NARDI", "cutterTrailers", "N70-40"],
  ],
  [
    "data/vehicles/newHolland/bigBaler1290HD/bigBaler1290HD.xml",
    ["baler", "NEWHOLLAND", "balers", "BigBaler 1290 High Density"],
  ],
  [
    "data/vehicles/newHolland/braud9070L/braud9070L.xml",
    ["vineHarvester", "NEWHOLLAND", "grapeVehicles", "Braud 9070L"],
  ],
  [
    "data/vehicles/newHolland/braud9090X/braud9090X.xml",
    ["vineHarvester", "NEWHOLLAND", "oliveVehicles", "Braud 9090X Olive"],
  ],
  [
    "data/vehicles/newHolland/c232/c232.xml",
    ["teleHandler", "NEWHOLLAND", "skidSteerVehicles", "C332"],
  ],
  [
    "data/vehicles/newHolland/chSeries/chSeries.xml",
    ["combineDrivable", "NEWHOLLAND", "harvesters", "CH7.70"],
  ],
  [
    "data/vehicles/newHolland/cr980_1830/cr980_1830.xml",
    ["cutter", "NEWHOLLAND", "cornHeaders", "980CR 18-30"],
  ],
  [
    "data/vehicles/newHolland/cr980_830/cr980_830.xml",
    ["cutter", "NEWHOLLAND", "cornHeaders", "980CR 8-30"],
  ],
  [
    "data/vehicles/newHolland/fb130/fb130.xml",
    ["cutter", "NEWHOLLAND", "forageHarvesterCutters", "130FB"],
  ],
  [
    "data/vehicles/newHolland/fr780/fr780.xml",
    ["combineDrivable", "NEWHOLLAND", "forageHarvesters", "FR 780"],
  ],
  [
    "data/vehicles/newHolland/l218/l218.xml",
    ["teleHandler", "NEWHOLLAND", "skidSteerVehicles", "L318"],
  ],
  [
    "data/vehicles/newHolland/superFlex25/superFlex25.xml",
    ["cutter", "NEWHOLLAND", "cutters", "SuperFlex 25FT"],
  ],
  [
    "data/vehicles/newHolland/superflexDraper45ft/superflexDraper45ft.xml",
    ["cutter", "NEWHOLLAND", "cutters", "3162 Superflex Draper 45FT"],
  ],
  [
    "data/vehicles/newHolland/t6/t6.xml",
    ["tractor", "NEWHOLLAND", "tractorsS", "T6 Series"],
  ],
  [
    "data/vehicles/newHolland/t7/t7.xml",
    ["tractor", "NEWHOLLAND", "tractorsM", "T7 HD Series"],
  ],
  [
    "data/vehicles/newHolland/t8/t8.xml",
    ["tractor", "NEWHOLLAND", "tractorsL", "T8 GENESIS Series"],
  ],
  [
    "data/vehicles/newHolland/t9/t9.xml",
    ["tractor", "NEWHOLLAND", "tractorsL", "T9 Series"],
  ],
  [
    "data/vehicles/newHolland/t9Tracks/t9Tracks.xml",
    ["tractor", "NEWHOLLAND", "tractorsL", "T9 Tracks Series"],
  ],
  [
    "data/vehicles/newHolland/th742/th742.xml",
    ["teleHandler", "NEWHOLLAND", "teleLoaderVehicles", "TH7.42 Elite"],
  ],
  [
    "data/vehicles/newHolland/tk4/tk4.xml",
    ["tractor", "NEWHOLLAND", "tractorsS", "TK4.80 Methane Power"],
  ],
  [
    "data/vehicles/newHolland/varifeed28/varifeed28.xml",
    ["cutter", "NEWHOLLAND", "cutters", "Varifeed 28FT"],
  ],
  [
    "data/vehicles/newHolland/varifeed41/varifeed41.xml",
    ["cutter", "NEWHOLLAND", "cutters", "Varifeed 41FT"],
  ],
  [
    "data/vehicles/nordsten/hk25/hk25.xml",
    ["turnOnCultivator", "NORDSTEN", "powerHarrows", "HK 25"],
  ],
  [
    "data/vehicles/nordsten/ns3030/ns3030.xml",
    ["sowingMachine", "NORDSTEN", "seeders", "HK 25 + NS 3030"],
  ],
  [
    "data/vehicles/paladin/baleHugger/baleHugger.xml",
    [
      "baleGrab",
      "PALADIN",
      "skidSteerTools",
      "$l10n_shopItem_telehandlerBaleGrab",
    ],
  ],
  [
    "data/vehicles/paladin/baleSpear/baleSpear.xml",
    [
      "implementDynamicMountAttacher",
      "PALADIN",
      "skidSteerTools",
      "$l10n_shopItem_skidSteerBaleFork",
    ],
  ],
  [
    "data/vehicles/paladin/highDumpBucket/highDumpBucket.xml",
    [
      "shovelLeveler",
      "PALADIN",
      "skidSteerTools",
      "$l10n_shopItem_skidSteerHighDumpBucket",
    ],
  ],
  [
    "data/vehicles/paladin/manureFork/manureFork.xml",
    [
      "dynamicMountAttacherShovel",
      "PALADIN",
      "skidSteerTools",
      "$l10n_shopItem_skidSteerManureFork",
    ],
  ],
  [
    "data/vehicles/paladin/palletFork/palletFork.xml",
    [
      "implementDynamicMountAttacher",
      "PALADIN",
      "skidSteerTools",
      "$l10n_shopItem_frontloaderPalletFork",
    ],
  ],
  [
    "data/vehicles/paladin/stumpGrinder/stumpGrinder.xml",
    [
      "stumpCutter",
      "PALADIN",
      "skidSteerTools",
      "$l10n_shopItem_skidSteerStumpCutter",
    ],
  ],
  [
    "data/vehicles/paladin/utilityGrapple/utilityGrapple.xml",
    ["logGrab", "PALADIN", "skidSteerTools", "$l10n_shopItem_skidSteerLogFork"],
  ],
  [
    "data/vehicles/poettinger/alpinHit44/alpinHit44.xml",
    ["tedder", "POETTINGER", "tedders", "ALPINHIT 4.4 H"],
  ],
  [
    "data/vehicles/poettinger/bossAlpin251/bossAlpin251.xml",
    ["forageWagon", "POETTINGER", "loaderWagons", "BOSS ALPIN 251"],
  ],
  [
    "data/vehicles/poettinger/faro4010D/faro4010D.xml",
    ["forageWagon", "POETTINGER", "loaderWagons", "FARO 4010 D"],
  ],
  [
    "data/vehicles/poettinger/hit1618T/hit1618T.xml",
    ["tedder", "POETTINGER", "tedders", "HIT 16.18 T"],
  ],
  [
    "data/vehicles/poettinger/impress125FPro/impress125FPro.xml",
    ["baler", "POETTINGER", "balers", "IMPRESS 125F PRO"],
  ],
  [
    "data/vehicles/poettinger/impress185VCPro/impress185VCPro.xml",
    ["balerWrapper", "POETTINGER", "balers", "IMPRESS 185VC PRO"],
  ],
  [
    "data/vehicles/poettinger/jumbo10020Tridem/jumbo10020Tridem.xml",
    ["forageWagon", "POETTINGER", "loaderWagons", "JUMBO 10020 D COMBILINE"],
  ],
  [
    "data/vehicles/poettinger/novacat301/novacat301.xml",
    ["mower", "POETTINGER", "mowers", "NOVACAT 301 AM ED Pro"],
  ],
  [
    "data/vehicles/poettinger/novacatA10CrossFlow/novacatA10CrossFlow.xml",
    ["mower", "POETTINGER", "mowers", "NOVACAT A10 Cross Flow"],
  ],
  [
    "data/vehicles/poettinger/servo25/servo25.xml",
    ["plow", "POETTINGER", "plows", "SERVO 25"],
  ],
  [
    "data/vehicles/poettinger/terradisc10001T/terradisc10001T.xml",
    ["cultivator", "POETTINGER", "discHarrows", "Terradisc 10001T"],
  ],
  [
    "data/vehicles/poettinger/terrasemC6F/terrasemC6F.xml",
    ["fertilizingSowingMachine", "POETTINGER", "seeders", "Terrasem C6F"],
  ],
  [
    "data/vehicles/poettinger/top342/top342.xml",
    ["windrower", "POETTINGER", "windrowers", "TOP 342"],
  ],
  [
    "data/vehicles/ponsse/bison/bison.xml",
    ["forwarder", "PONSSE", "woodHarvesting", "Bison Active Frame"],
  ],
  [
    "data/vehicles/ponsse/cobra/cobra.xml",
    ["woodHarvester", "PONSSE", "woodHarvesting", "Cobra"],
  ],
  [
    "data/vehicles/porscheDiesel/junior108/junior108.xml",
    ["tractor", "PORSCHEDIESEL", "tractorsS", "Junior 108"],
  ],
  [
    "data/vehicles/prinoth/leitwolf/leitwolf.xml",
    ["selfPropelledLeveler", "PRINOTH", "miscVehicles", "Leitwolf Agripower"],
  ],
  [
    "data/vehicles/prinoth/m650/m650.xml",
    ["stumpCutterCultivatorPlow", "PRINOTH", "woodHarvesting", "M650"],
  ],
  [
    "data/vehicles/prinoth/raptor300/raptor300.xml",
    ["tractor", "PRINOTH", "woodHarvesting", "RAPTOR 300"],
  ],
  [
    "data/vehicles/prinoth/sf900/sf900.xml",
    ["stumpCutter", "PRINOTH", "woodHarvesting", "SF900"],
  ],
  [
    "data/vehicles/provitis/mp122Ocea/mp122Ocea.xml",
    ["vinePrepruner", "PROVITIS", "grapeTools", "MP 122 OCEA"],
  ],
  [
    "data/vehicles/quicke/bagLifter/bagLifter.xml",
    ["implement", "QUICKE", "frontLoaderTools", "BIG BAG LIFTER - SINGLE"],
  ],
  [
    "data/vehicles/quicke/bagLifterDual/bagLifterDual.xml",
    ["implement", "QUICKE", "frontLoaderTools", "BIG BAG LIFTER - DUAL"],
  ],
  [
    "data/vehicles/quicke/q3M/q3M.xml",
    ["attachableFrontloader", "QUICKE", "frontLoaders", "Q3M"],
  ],
  [
    "data/vehicles/quicke/q4M/q4M.xml",
    ["attachableFrontloader", "QUICKE", "frontLoaders", "Q4M"],
  ],
  [
    "data/vehicles/quicke/q5M/q5M.xml",
    ["attachableFrontloader", "QUICKE", "frontLoaders", "Q5M"],
  ],
  [
    "data/vehicles/quicke/q6M/q6M.xml",
    ["attachableFrontloader", "QUICKE", "frontLoaders", "Q6M"],
  ],
  [
    "data/vehicles/quicke/q7M/q7M.xml",
    ["attachableFrontloader", "QUICKE", "frontLoaders", "Q7M"],
  ],
  [
    "data/vehicles/rabe/eg39/eg39.xml",
    ["cultivator", "RABE", "cultivators", "EG 3/9"],
  ],
  [
    "data/vehicles/rigitrac/ske50/ske50.xml",
    ["tractor", "RIGITRAC", "tractorsS", "SKE 50 ELECTRIC"],
  ],
  [
    "data/vehicles/ropa/keiler2/keiler2.xml",
    [
      "attachableCombineCutterFruitPreparer",
      "ROPA",
      "potatoHarvesting",
      "Keiler 2",
    ],
  ],
  [
    "data/vehicles/ropa/maus5/maus5.xml",
    ["loaderVehicle", "ROPA", "beetVehicles", "Maus 5"],
  ],
  [
    "data/vehicles/ropa/maus5/nawaRoMaus.xml",
    ["loaderVehicle", "ROPA", "miscVehicles", "NawaRo-Maus"],
  ],
  [
    "data/vehicles/ropa/panther2/panther2.xml",
    ["combineDrivable", "ROPA", "beetVehicles", "Panther 2"],
  ],
  [
    "data/vehicles/ropa/rr6x45/rr6x45.xml",
    ["cutterFruitPreparer", "ROPA", "beetHarvesting", "RR 6x45"],
  ],
  [
    "data/vehicles/ropa/rrXL9/rrXL9.xml",
    ["cutterFruitPreparer", "ROPA", "beetHarvesting", "RR-XL 9x45"],
  ],
  [
    "data/vehicles/ropa/rrXLTrailer/rrXLTrailer.xml",
    ["dynamicMountAttacherTrailer", "ROPA", "cutterTrailers", "RR-XL 9x45 %s"],
  ],
  [
    "data/vehicles/ropa/tiger6S/tiger6S.xml",
    ["combineDrivable", "ROPA", "beetVehicles", "Tiger 6S"],
  ],
  [
    "data/vehicles/rostselmash/k12200/k12200.xml",
    ["cultivator", "ROSTSELMASH", "cultivators", "K-12200"],
  ],
  [
    "data/vehicles/rostselmash/nova330/nova330.xml",
    ["combineDrivable", "ROSTSELMASH", "harvesters", "NOVA 330"],
  ],
  [
    "data/vehicles/rostselmash/powerStream500/powerStream500.xml",
    ["cutter", "ROSTSELMASH", "cutters", "Power Stream 500"],
  ],
  [
    "data/vehicles/rostselmash/rsm2375/rsm2375.xml",
    ["tractor", "ROSTSELMASH", "tractorsL", "RSM 2375"],
  ],
  [
    "data/vehicles/rottne/f20D/f20D.xml",
    ["forwarder", "ROTTNE", "woodHarvesting", "F20D"],
  ],
  [
    "data/vehicles/rottne/h21D/h21D.xml",
    ["woodHarvester", "ROTTNE", "woodHarvesting", "H21D"],
  ],
  [
    "data/vehicles/rudolfSchouten/sp6834/sp6834.xml",
    ["sprayer", "SCHOUTEN", "slurryTanks", "Spider SP 6834"],
  ],
  [
    "data/vehicles/rudolfSchouten/vt130/vt130.xml",
    ["manureBarrel", "SCHOUTEN", "slurryTanks", "VT130"],
  ],
  [
    "data/vehicles/rudolphSohn/dk280RL/dk280RL.xml",
    ["trailer", "RUDOLPH", "trailers", "DK 280 RL"],
  ],
  [
    "data/vehicles/rudolphSohn/tdk301RA/tdk301RA.xml",
    ["trailer", "RUDOLPH", "trailers", "TDK 301 RA"],
  ],
  [
    "data/vehicles/rudolphSohn/tdk301RP/tdk301RP.xml",
    ["trailer", "RUDOLPH", "trailers", "TDK 301 RP"],
  ],
  [
    "data/vehicles/samasz/city180/city180.xml",
    ["leveler", "SAMASZ", "winterEquipment", "CITY 180"],
  ],
  [
    "data/vehicles/samasz/jump320/jump320.xml",
    ["leveler", "SAMASZ", "winterEquipment", "JUMP 320"],
  ],
  [
    "data/vehicles/samasz/olimp330/olimp330.xml",
    ["leveler", "SAMASZ", "winterEquipment", "OLIMP 330"],
  ],
  [
    "data/vehicles/samasz/tornado251/tornado251.xml",
    ["turnOnShovel", "SAMASZ", "winterEquipment", "Tornado 252"],
  ],
  [
    "data/vehicles/samasz/z2840/z2840.xml",
    ["windrower", "SAMASZ", "windrowers", "Z2-840 H"],
  ],
  [
    "data/vehicles/samsonAgro/flex2023/flex2023.xml",
    ["manureSpreader", "SAMSONAGRO", "manureSpreaders", "FLEX 23"],
  ],
  [
    "data/vehicles/samsonAgro/pgII35m/pgII35m.xml",
    ["manureBarrel", "SAMSONAGRO", "slurryTanks", "PG II 35"],
  ],
  [
    "data/vehicles/samsonAgro/sbh4_36/sbh4_36.xml",
    ["sprayer", "SAMSONAGRO", "slurryTanks", "SBH4 36"],
  ],
  [
    "data/vehicles/samsonAgro/sd700/sd700.xml",
    ["fertilizingCultivator", "SAMSONAGRO", "slurryTanks", "SD 700"],
  ],
  [
    "data/vehicles/samsonAgro/us235/us235.xml",
    ["manureSpreader", "SAMSONAGRO", "manureSpreaders", "US 235 Dynamic"],
  ],
  [
    "data/vehicles/schaeffer/loader23E/loader23E.xml",
    ["tractor", "SCHAEFFER", "frontLoaderVehicles", "23E"],
  ],
  [
    "data/vehicles/schaeffer/loader2630/loader2630.xml",
    ["tractor", "SCHAEFFER", "frontLoaderVehicles", "2630"],
  ],
  [
    "data/vehicles/schaeffer/loader4670T/loader4670T.xml",
    ["tractor", "SCHAEFFER", "teleLoaderVehicles", "4670 T"],
  ],
  [
    "data/vehicles/schaeffer/loader9660T/loader9660T.xml",
    ["tractor", "SCHAEFFER", "teleLoaderVehicles", "9660 T-2"],
  ],
  [
    "data/vehicles/schuitemaker/rapide580V/rapide580V.xml",
    ["forageWagon", "SCHUITEMAKER", "loaderWagons", "Rapide 580V"],
  ],
  [
    "data/vehicles/seppKnusel/f240/f240.xml",
    ["mower", "SEPPKNUSEL", "mowers", "F 240"],
  ],
  [
    "data/vehicles/siloking/sf4Premium/sf4Premium.xml",
    [
      "drivableMixerWagon",
      "SILOKING",
      "animalsVehicles",
      "SelfLine 4.0 Premium 2215-22",
    ],
  ],
  [
    "data/vehicles/siloking/tl4Premium/tl4Premium.xml",
    ["mixerWagon", "SILOKING", "animals", "TrailedLine 4.0 Premium 2218‑22"],
  ],
  [
    "data/vehicles/sip/air300FAlp/air300FAlp.xml",
    ["windrower", "SIP", "windrowers", "Air 300 F Alp"],
  ],
  [
    "data/vehicles/sip/favorit254/favorit254.xml",
    ["windrower", "SIP", "windrowers", "Favorit 254"],
  ],
  [
    "data/vehicles/steyr/series8150/series8150.xml",
    ["tractor", "STEYR", "tractorsS", "8150"],
  ],
  [
    "data/vehicles/strautmann/aperion3401/aperion3401.xml",
    ["trailer", "STRAUTMANN", "trailers", "Aperion 3401"],
  ],
  [
    "data/vehicles/strautmann/magnon530/magnon530.xml",
    ["forageWagon", "STRAUTMANN", "loaderWagons", "Magnon CFS 530 DO"],
  ],
  [
    "data/vehicles/strautmann/ps3401/ps3401.xml",
    ["manureSpreader", "STRAUTMANN", "manureSpreaders", "PS 3401"],
  ],
  [
    "data/vehicles/strautmann/vertiMix1702/vertiMix1702.xml",
    [
      "drivableMixerWagon",
      "STRAUTMANN",
      "animalsVehicles",
      "VM 1702 Double SF",
    ],
  ],
  [
    "data/vehicles/strautmann/zelonCFS2501DO/zelonCFS2501DO.xml",
    ["forageWagon", "STRAUTMANN", "loaderWagons", "ZELON CFS 2501 DO"],
  ],
  [
    "data/vehicles/tenwinkel/weight1000/weight1000.xml",
    ["implement", "TENWINKEL", "weights", "PAC-1000"],
  ],
  [
    "data/vehicles/tenwinkel/weight1500/weight1500.xml",
    ["implement", "TENWINKEL", "weights", "PAC-1500"],
  ],
  [
    "data/vehicles/tenwinkel/weight2500/weight2500.xml",
    ["implement", "TENWINKEL", "weights", "B2500"],
  ],
  [
    "data/vehicles/tenwinkel/weight600/weight600.xml",
    ["implement", "TENWINKEL", "weights", "FGB 600"],
  ],
  [
    "data/vehicles/tenwinkel/weight750/weight750.xml",
    ["implement", "TENWINKEL", "weights", "PAC-750"],
  ],
  [
    "data/vehicles/thunderCreek/fst990/fst990.xml",
    ["fuelTrailer", "THUNDERCREEK", "misc", "FST 990"],
  ],
  [
    "data/vehicles/tmcCancela/tde220/tde220.xml",
    ["mulcher", "TMCCANCELA", "mulchers", "TDE-220"],
  ],
  [
    "data/vehicles/tmcCancela/tfk200/tfk200.xml",
    ["stumpCutterCultivatorPlow", "TMCCANCELA", "woodHarvesting", "TFK 200"],
  ],
  [
    "data/vehicles/tmcCancela/tjp610/tjp610.xml",
    ["mulcher", "TMCCANCELA", "mulchers", "TJP 610"],
  ],
  [
    "data/vehicles/tmcCancela/tms2_300d/tms2_300d.xml",
    ["mulcher", "TMCCANCELA", "mulchers", "TMS2-300D"],
  ],
  [
    "data/vehicles/tmcCancela/tpn140/tpn140.xml",
    ["mulcher", "TMCCANCELA", "mulchers", "TPN 140"],
  ],
  [
    "data/vehicles/train/locomotive01/locomotive01.xml",
    ["locomotive", "LIZARD", "tractorsS", "E - Locomotive"],
  ],
  [
    "data/vehicles/train/locomotive04/locomotive04.xml",
    ["locomotive", "LIZARD", "tractorsS", "Diesel Locomotive"],
  ],
  [
    "data/vehicles/train/wagonGrain/wagonGrain.xml",
    ["trainTrailer", "LIZARD", "trailers", "Grain Wagon"],
  ],
  [
    "data/vehicles/train/wagonSugarbeets/wagonSugarbeets.xml",
    ["trainTrailer", "LIZARD", "trailers", "Sugarbeet Wagon"],
  ],
  [
    "data/vehicles/train/wagonTimber/wagonTimber.xml",
    ["trainTimberTrailer", "LIZARD", "trailers", "Sugarbeet Wagon"],
  ],
  [
    "data/vehicles/train/wagonVehicles/wagonVehicles.xml",
    ["trainTimberTrailer", "LIZARD", "trailers", "Vehicle Wagon"],
  ],
  [
    "data/vehicles/train/wagonWoodChips/wagonWoodChips.xml",
    ["trainTrailer", "LIZARD", "trailers", "Sugarbeet Wagon"],
  ],
  [
    "data/vehicles/treffler/ts1520/ts1520.xml",
    ["weeder", "TREFFLER", "weeders", "TS 1520/M3"],
  ],
  [
    "data/vehicles/tt/colossus10000/colossus10000.xml",
    ["tippingAugerWagon", "TT", "sugarCaneHarvesting", "Colossus 10.000"],
  ],
  [
    "data/vehicles/vaderstad/nzExtreme1425/nzExtreme1425.xml",
    ["cultivator", "VAEDERSTAD", "cultivators", "NZ Extreme 1425"],
  ],
  [
    "data/vehicles/vaderstad/rapidA800S/rapidA800S.xml",
    ["sowingMachine", "VAEDERSTAD", "seeders", "Rapid A 800S"],
  ],
  [
    "data/vehicles/vaderstad/tempoL16/tempoL16.xml",
    ["fertilizingSowingMachine", "VAEDERSTAD", "planters", "Tempo L 16"],
  ],
  [
    "data/vehicles/valtra/gSeries/gSeries.xml",
    ["tractor", "VALTRA", "tractorsS", "G Series"],
  ],
  [
    "data/vehicles/valtra/series8750/series8750.xml",
    ["tractorReverseDriving", "VALTRA", "tractorsM", "Valmet 8750"],
  ],
  [
    "data/vehicles/veenhuis/premiumIntegral20000/premiumIntegral20000.xml",
    ["manureBarrel", "VEENHUIS", "slurryTanks", "Premium Integral 20000"],
  ],
  [
    "data/vehicles/veenhuis/premiumIntegral30000/premiumIntegral30000.xml",
    ["manureBarrel", "VEENHUIS", "slurryTanks", "Premium Integral 30000"],
  ],
  [
    "data/vehicles/versatile/wd4/wd4.xml",
    ["tractor", "VERSATILE", "tractorsL", "4WD"],
  ],
  [
    "data/vehicles/vervaet/hydroTrikeXL/hydroTrikeXL.xml",
    ["selfPropelledManureBarrel", "VERVAET", "miscVehicles", "Hydro Trike 5x5"],
  ],
  [
    "data/vehicles/vicon/fanex904/fanex904.xml",
    ["tedder", "VICON", "tedders", "Fanex 904"],
  ],
  [
    "data/vehicles/walkabout/motherBin4000/motherBin4000.xml",
    ["augerWagon", "WALKABOUT", "augerWagons", "WMB 4000"],
  ],
  [
    "data/vehicles/walkabout/motherBin6000/motherBin6000.xml",
    ["augerWagon", "WALKABOUT", "augerWagons", "WMB 6000"],
  ],
  [
    "data/vehicles/weberMT/dsc180/dsc180.xml",
    ["silageCompressor", "WEBERMT", "silocompaction", "DSC 180"],
  ],
  [
    "data/vehicles/welger/dk115/dk115.xml",
    ["trailer", "WELGER", "trailers", "DK 115"],
  ],
  [
    "data/vehicles/wilsonTrailer/pacesetter/pacesetter.xml",
    ["trailer", "WILSON", "trailers", "Pacesetter"],
  ],
  [
    "data/vehicles/wilsonTrailer/silverstar/silverstar.xml",
    ["livestockTrailer", "WILSON", "animalTransport", "Silverstar"],
  ],
  [
    "data/vehicles/zetor/crystal/crystal.xml",
    ["tractor", "ZETOR", "tractorsM", "CRYSTAL HD"],
  ],
  [
    "data/vehicles/zetor/forterraHSX140/forterraHSX140.xml",
    ["tractor", "ZETOR", "tractorsS", "FORTERRA HSX"],
  ],
  [
    "data/vehicles/zetor/majorCL80/majorCL80.xml",
    ["tractor", "ZETOR", "tractorsS", "MAJOR CL"],
  ],
  [
    "data/vehicles/zetor/proximaHS120/proximaHS120.xml",
    ["tractor", "ZETOR", "tractorsS", "PROXIMA HS"],
  ],
  [
    "data/vehicles/zetor/z25k/z25k.xml",
    ["tractor", "ZETOR", "tractorsS", "Z-25K"],
  ],
  [
    "data/vehicles/ziegler/cornChampion5R/cornChampion5R.xml",
    ["cutter", "ZIEGLER", "cornHeaders", "Corn Champion 5R"],
  ],
  [
    "data/vehicles/zunhammer/ult18/ult18.xml",
    ["manureTrailer", "ZUNHAMMER", "slurryTanks", "ULT 18"],
  ],
  [
    "data/vehicles/zunhammer/ult24/ult24.xml",
    ["manureTrailer", "ZUNHAMMER", "slurryTanks", "ULT 24"],
  ],
  [
    "data/vehicles/zunhammer/vibro/vibro.xml",
    ["fertilizingCultivator", "ZUNHAMMER", "slurryTanks", "Vibro"],
  ],
  // Pallets, BigBags and other Objects
  ["data/objects/bigBag/bigBag.xml", ["bigBag", "", "bigbags", "BigBag"]],
  [
    "data/objects/bigBag/chickenFood/bigBag_chickenFood.xml",
    ["bigBag", "", "bigbags", "$l10n_shopItem_bigBagChickenFood"],
  ],
  [
    "data/objects/bigBag/fertilizer/bigBag_fertilizer.xml",
    ["bigBag", "", "bigbags", "$l10n_shopItem_bigBagFertilizer"],
  ],
  [
    "data/objects/bigBag/horseFood/bigBag_horseFood.xml",
    ["bigBag", "", "bigbags", "$l10n_shopItem_bigBagHorseFood"],
  ],
  [
    "data/objects/bigBag/lime/bigBag_lime.xml",
    ["bigBag", "", "bigbags", "$l10n_shopItem_bigBagLime"],
  ],
  [
    "data/objects/bigBag/pigFood/bigBag_pigFood.xml",
    ["bigBag", "", "bigbags", "$l10n_shopItem_bigBagPigFood"],
  ],
  [
    "data/objects/bigBag/roadSalt/bigBag_roadSalt.xml",
    ["bigBag", "", "bigbags", "$l10n_shopItem_bigBagRoadSalt"],
  ],
  [
    "data/objects/bigBag/seeds/bigBag_seeds.xml",
    ["bigBag", "", "bigbags", "$l10n_shopItem_bigBagSeeds"],
  ],
  [
    "data/objects/bigBagPallet/bigBagPallet.xml",
    ["pallet", "", "bigbagPallets", "$l10n_shopItem_bigBag"],
  ],
  [
    "data/objects/bigBagPallet/chickenFood/bigBagPallet_chickenFood.xml",
    ["pallet", "", "bigbagPallets", "$l10n_shopItem_bigBagChickenFood"],
  ],
  [
    "data/objects/bigBagPallet/fertilizer/bigBagPallet_fertilizer.xml",
    ["pallet", "", "bigbagPallets", "$l10n_shopItem_bigBagFertilizer"],
  ],
  [
    "data/objects/bigBagPallet/horseFood/bigBagPallet_horseFood.xml",
    ["pallet", "", "bigbagPallets", "$l10n_shopItem_bigBagHorseFood"],
  ],
  [
    "data/objects/bigBagPallet/lime/bigBagPallet_lime.xml",
    ["pallet", "", "bigbagPallets", "$l10n_shopItem_bigBagLime"],
  ],
  [
    "data/objects/bigBagPallet/pigFood/bigBagPallet_pigFood.xml",
    ["pallet", "", "bigbagPallets", "$l10n_shopItem_bigBagPigFood"],
  ],
  [
    "data/objects/bigBagPallet/roadSalt/bigBagPallet_roadSalt.xml",
    ["pallet", "", "bigbagPallets", "$l10n_shopItem_bigBagRoadSalt"],
  ],
  [
    "data/objects/bigBagPallet/seeds/bigBagPallet_seeds.xml",
    ["pallet", "", "bigbagPallets", "$l10n_shopItem_bigBagSeeds"],
  ],
  [
    "data/objects/buyableBales/buyableBales_dryGrass.xml",
    ["multipleItemPurchase", "", "bales", "$l10n_storeItem_squareBaleDryGrass"],
  ],
  [
    "data/objects/buyableBales/buyableBales_dryGrassRound.xml",
    ["multipleItemPurchase", "", "bales", "$l10n_storeItem_roundBaleDryGrass"],
  ],
  [
    "data/objects/buyableBales/buyableBales_silage.xml",
    ["multipleItemPurchase", "", "bales", "$l10n_storeItem_squareBaleSilage"],
  ],
  [
    "data/objects/buyableBales/buyableBales_silageRound.xml",
    ["multipleItemPurchase", "", "bales", "$l10n_storeItem_roundBaleSilage"],
  ],
  [
    "data/objects/buyableBales/buyableBales_straw.xml",
    ["multipleItemPurchase", "", "bales", "$l10n_storeItem_squareBaleWheat"],
  ],
  [
    "data/objects/buyableBales/buyableBales_strawRound.xml",
    ["multipleItemPurchase", "", "bales", "$l10n_storeItem_roundBaleWheat"],
  ],
  [
    "data/objects/ksAG/epsoTop/epsoTop.xml",
    ["pallet", "", "pallets", "$l10n_storeItem_epsoTop"],
  ],
  [
    "data/objects/ksAG/patentkali/patentkali.xml",
    ["pallet", "", "pallets", "$l10n_storeItem_patentKali"],
  ],
  [
    "data/objects/pallets/bakeryBoxPallet/bakeryBoxPallet.xml",
    ["pallet", "", "pallets", "$l10n_storeItem_bakeryBoxPallet"],
  ],
  [
    "data/objects/pallets/boardsStackPallet/boardsStackPallet.xml",
    ["pallet", "", "pallets", "$l10n_storeItem_boardsStackPallet"],
  ],
  [
    "data/objects/pallets/bonsilage/bonsilagePallet.xml",
    ["pallet", "", "pallets", "$l10n_storeItem_bonsilage"],
  ],
  [
    "data/objects/pallets/butterBoxPallet/butterBoxPallet.xml",
    ["pallet", "", "pallets", "$l10n_storeItem_butterBoxPallet"],
  ],
  [
    "data/objects/pallets/cakePallet/cakePallet.xml",
    ["pallet", "", "pallets", "$l10n_storeItem_cakePallet"],
  ],
  [
    "data/objects/pallets/canolaOilPallet/canolaOilPallet.xml",
    ["pallet", "", "pallets", "$l10n_storeItem_canolaOilPallet"],
  ],
  [
    "data/objects/pallets/cerealsPallet/cerealsPallet.xml",
    ["pallet", "", "pallets", "$l10n_storeItem_cerealsPallet"],
  ],
  [
    "data/objects/pallets/cheesePallet/cheesePallet.xml",
    ["pallet", "", "pallets", "$l10n_storeItem_cheesePallet"],
  ],
  [
    "data/objects/pallets/chocolateBoxPallet/chocolateBoxPallet.xml",
    ["pallet", "", "pallets", "$l10n_storeItem_chocolateBoxPallet"],
  ],
  [
    "data/objects/pallets/clothesBoxPallet/clothesBoxPallet.xml",
    ["pallet", "", "pallets", "$l10n_storeItem_clothesBoxPallet"],
  ],
  [
    "data/objects/pallets/eggBoxPallet/eggBoxPallet.xml",
    ["pallet", "", "pallets", "$l10n_fillType_egg"],
  ],
  [
    "data/objects/pallets/euroPallet/euroPallet.xml",
    ["pallet", "", "pallets", "Euro Pallet"],
  ],
  [
    "data/objects/pallets/fabricsPallet/fabricsPallet.xml",
    ["pallet", "", "pallets", "$l10n_storeItem_fabricsPallet"],
  ],
  [
    "data/objects/pallets/fillablePallet/fillablePallet.xml",
    ["pallet", "", "pallets", "$l10n_storeItem_fillablePallet"],
  ],
  [
    "data/objects/pallets/flourPallet/flourBoxPallet.xml",
    ["pallet", "", "pallets", "$l10n_storeItem_flourBoxPallet"],
  ],
  [
    "data/objects/pallets/furnitureStackPallet/furnitureStackPallet.xml",
    ["pallet", "", "pallets", "$l10n_storeItem_furnitureStackPallet"],
  ],
  [
    "data/objects/pallets/grapeJuicePallet/grapeJuicePallet.xml",
    ["pallet", "", "pallets", "$l10n_storeItem_grapeJuicePallet"],
  ],
  [
    "data/objects/pallets/grapePallet/grapePallet.xml",
    ["pallet", "", "pallets", "$l10n_storeItem_grapePallet"],
  ],
  [
    "data/objects/pallets/honeyBoxPallet/honeyBoxPallet.xml",
    ["pallet", "", "pallets", "$l10n_storeItem_honeyBoxPallet"],
  ],
  [
    "data/objects/pallets/lettuceBoxPallet/lettuceBoxPallet.xml",
    ["pallet", "", "pallets", "$l10n_storeItem_lettuceBoxPallet"],
  ],
  [
    "data/objects/pallets/liquidTank/fertilizerTank.xml",
    ["pallet", "", "pallets", "$l10n_fillType_liquidFertilizer"],
  ],
  [
    "data/objects/pallets/liquidTank/herbicideTank.xml",
    ["pallet", "", "pallets", "$l10n_fillType_herbicide"],
  ],
  [
    "data/objects/pallets/oliveOilPallet/oliveOilPallet.xml",
    ["pallet", "", "pallets", "$l10n_storeItem_oliveOilPallet"],
  ],
  [
    "data/objects/pallets/palletPoplar/palletPoplar.xml",
    ["pallet", "", "pallets", "$l10n_fillType_poplar"],
  ],
  [
    "data/objects/pallets/palletSugarCane/palletSugarCane.xml",
    ["pallet", "", "pallets", "$l10n_fillType_sugarCane"],
  ],
  [
    "data/objects/pallets/pioneer/pioneerPallet.xml",
    ["pallet", "", "pallets", "$l10n_fillType_seeds"],
  ],
  [
    "data/objects/pallets/raisinBoxPallet/raisinBoxPallet.xml",
    ["pallet", "", "pallets", "$l10n_storeItem_raisinBoxPallet"],
  ],
  [
    "data/objects/pallets/schaumann/schaumannPallet.xml",
    ["pallet", "", "pallets", "$l10n_fillType_mineralFeed"],
  ],
  [
    "data/objects/pallets/strawberriesBoxPallet/strawberriesBoxPallet.xml",
    ["pallet", "", "pallets", "$l10n_storeItem_strawberriesBoxPallet"],
  ],
  [
    "data/objects/pallets/sugarPallet/sugarBoxPallet.xml",
    ["pallet", "", "pallets", "$l10n_storeItem_sugarBoxPallet"],
  ],
  [
    "data/objects/pallets/sunflowerOilPallet/sunflowerOilPallet.xml",
    ["pallet", "", "pallets", "$l10n_storeItem_sunflowerOilPallet"],
  ],
  [
    "data/objects/pallets/tomatoesBoxPallet/tomatoesBoxPallet.xml",
    ["pallet", "", "pallets", "$l10n_storeItem_tomatoesBoxPallet"],
  ],
  [
    "data/objects/pallets/treeSaplingPallet/treeSaplingPallet.xml",
    ["treeSaplingPallet", "", "pallets", "$l10n_fillType_treeSaplings"],
  ],
  [
    "data/objects/pallets/woolPallet/woolPallet.xml",
    ["pallet", "", "pallets", "$l10n_fillType_wool"],
  ],
]);

export default vehicleMap;