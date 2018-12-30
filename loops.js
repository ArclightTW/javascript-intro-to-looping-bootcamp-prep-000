function forLoop(array) {
  for (var i = 1; i < 25; i++) {
    array.push("I am ${i} strange loop${i === 0 ? '' : 's'}.")
    console.log("Hello World the " + i + " time");
  }
}