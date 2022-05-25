class ModService {
  isNFMarschInstalled(metaData: MetaData): boolean {
    if (metaData !== undefined && metaData.mod !== undefined) {
      return (
        metaData.mod.filter(
          (value) =>
            value.modName === "FS22_NF_Marsch_4fach_oG" ||
            value.modName === "FS22_NF_Marsch_4fach"
        ).length === 1
      );
    } else {
      return false;
    }
  }
  isLKHROInstalled(metaData: MetaData): boolean {
    if (metaData !== undefined && metaData.mod !== undefined) {
      return (
        metaData.mod.filter((value) => value.modName === "FS22_Lk_HRO_4fach")
          .length === 1
      );
    } else {
      return false;
    }
  }
}

const modService = new ModService();

export default modService;
