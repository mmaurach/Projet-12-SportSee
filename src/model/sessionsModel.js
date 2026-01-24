const DAYS = ["L", "M", "M", "J", "V", "S", "D"];

export default class AverageSessionsModel {
  constructor(apiData) {
    this.sessions = apiData.sessions.map((session, index) => ({
      day: DAYS[index],
      sessionLength: session.sessionLength,
    }));
  }
}
