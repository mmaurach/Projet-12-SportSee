export default class ActivityModel {
  constructor(apiData) {
    this.sessions = apiData.sessions.map((session, index) => ({
      day: index + 1,
      kilogram: session.kilogram,
      calories: session.calories,
    }));
  }
}
