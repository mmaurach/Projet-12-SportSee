export default class PerformanceModel {
  constructor(apiData) {
    this.data = apiData.data.map((item) => ({
      subject: apiData.kind[item.kind],
      value: item.value,
    }));
  }
}
