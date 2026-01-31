export default class PerformanceModel {
  constructor(item, kind) {
    this.subject = kind[item.kind];
    this.value = item.value;
  }
}
