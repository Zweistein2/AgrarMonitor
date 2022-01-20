class CalculationService {
  getDifficultyPriceFactor(difficulty: number): number {
    switch (difficulty) {
      case 1:
        return 3.0;
      case 2:
        return 1.8;
      case 3:
        return 1;
      default:
        return 0;
    }
  }
}

const calculationService = new CalculationService();

export default calculationService;
