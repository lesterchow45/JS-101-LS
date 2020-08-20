function lightsOn(switches) {

  let switchBank = [];

  //first toggle turns all lights on
  for (let switchCount = 1; switchCount <= switches; switchCount++) {
    switchBank.push([switchCount, 1]);
  }

  //odds means light is on
  //evens means light is off

  for (let toggle = 2; toggle <= switches; toggle++) {
    for (let toggleOther = toggle - 1; toggleOther < switches; toggleOther += toggle) {
      switchBank[toggleOther][1] += 1;
    }
  }

  let swtichOn = [];
  for (let i = 0; i < switchBank.length; i++) {
    if (switchBank[i][1] % 2 !== 0) {
      swtichOn.push(switchBank[i][0]);
    }
  }

  return swtichOn;

}

console.log(lightsOn(100));