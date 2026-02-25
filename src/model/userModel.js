export default class UserModel {
  constructor(apiData) {
    this.firstName = apiData.userInfos.firstName;
    this.score = apiData.todayScore ?? apiData.score;
    this.keyData = {
      calorieCount: apiData.keyData.calorieCount.toLocaleString("en-US"),
      proteinCount: apiData.keyData.proteinCount,
      carbohydrateCount: apiData.keyData.carbohydrateCount,
      lipidCount: apiData.keyData.lipidCount,
    };
  }
}
