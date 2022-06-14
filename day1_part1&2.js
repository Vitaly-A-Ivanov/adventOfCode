let puzzleInput = '50811\n' +
    '128897\n' +
    '89996\n' +
    '149611\n' +
    '141114\n' +
    '135923\n' +
    '111930\n' +
    '92803\n' +
    '55111\n' +
    '114261\n' +
    '149401\n' +
    '121105\n' +
    '89980\n' +
    '146337\n' +
    '128900\n' +
    '51762\n' +
    '127032\n' +
    '57866\n' +
    '72814\n' +
    '70392\n' +
    '148287\n' +
    '51967\n' +
    '55537\n' +
    '61690\n' +
    '121273\n' +
    '122763\n' +
    '149371\n' +
    '130761\n' +
    '109332\n' +
    '102438\n' +
    '116529\n' +
    '83874\n' +
    '78013\n' +
    '75757\n' +
    '54385\n' +
    '65358\n' +
    '94688\n' +
    '123967\n' +
    '127817\n' +
    '115897\n' +
    '113593\n' +
    '99937\n' +
    '68431\n' +
    '113574\n' +
    '115052\n' +
    '54020\n' +
    '99599\n' +
    '133442\n' +
    '121435\n' +
    '117860\n' +
    '67436\n' +
    '54157\n' +
    '147123\n' +
    '54878\n' +
    '50710\n' +
    '105304\n' +
    '91777\n' +
    '122063\n' +
    '61713\n' +
    '79487\n' +
    '149776\n' +
    '79763\n' +
    '80542\n' +
    '86260\n' +
    '60863\n' +
    '83083\n' +
    '127211\n' +
    '146648\n' +
    '52711\n' +
    '90278\n' +
    '130288\n' +
    '77677\n' +
    '142894\n' +
    '106849\n' +
    '103233\n' +
    '95229\n' +
    '51169\n' +
    '127162\n' +
    '66614\n' +
    '134157\n' +
    '81357\n' +
    '143084\n' +
    '127415\n' +
    '99257\n' +
    '131490\n' +
    '117657\n' +
    '137687\n' +
    '85974\n' +
    '80270\n' +
    '104257\n' +
    '141006\n' +
    '51197\n' +
    '133995\n' +
    '62314\n' +
    '84078\n' +
    '141718\n' +
    '140422\n' +
    '140680\n' +
    '125301\n' +
    '59677';
puzzleInput = puzzleInput.split('\n').map(number => parseInt(number));

function calculateFuel(mass) {
  return Math.floor(mass / 3) - 2
}

let fuelRequirementsForAll = 0;

for (let i = 0; i < puzzleInput.length; i++) {
  let totalUnitMass = 0;
  let singleUnit = calculateFuel(puzzleInput[i])
  totalUnitMass += singleUnit;

  while (calculateFuel(singleUnit) > 0) {
    singleUnit = calculateFuel(singleUnit);
    totalUnitMass += singleUnit;
  }
  fuelRequirementsForAll += totalUnitMass;
}

console.log(fuelRequirementsForAll);