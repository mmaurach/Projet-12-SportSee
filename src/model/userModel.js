export default class UserModel {
  constructor(apiData) {
    this.firstName = apiData.userInfos.firstName;
    this.score = apiData.todayScore ?? apiData.score;
    this.keyData = apiData.keyData;
  }
}
