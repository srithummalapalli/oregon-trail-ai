export function generateEvent() {
  return {
    title: "Broken Wagon Wheel",
    description: "A wagon wheel cracks on rocky ground.",
    choices: [
      {
        text: "Repair it carefully",
        effects: { health: 0, food: -1, morale: 1 }
      },
      {
        text: "Ignore and keep moving",
        effects: { health: -5, morale: -1 }
      }
    ]
  };
}
