const args = process.argv

let timerAmounts = process.argv.slice(2);

for (let value of timerAmounts) {
  if (timerAmounts.length < 1) {
    break;
  }
  let convertedValue = Number(value);
  if (convertedValue > 0 && typeof convertedValue === "number") {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, value);
  }
};

// for (const value of numbers) {
//   setTimeout(() => {
//     process.stdout.write('ALARM BEEP');
//   }, value);
//   console.log(value);
// }