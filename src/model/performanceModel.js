const LABELS = {
  fr: {
    cardio: "Cardio",
    energy: "Énergie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité",
  },
};
export default class PerformanceModel {
  constructor(item, kind) {
    this.subject = LABELS.fr[kind[item.kind]];
    this.value = item.value;
  }
}
