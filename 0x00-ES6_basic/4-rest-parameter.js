export default function returnHowManyArguments() {
  return arguments.length;
}
console.log(returnHowManyArguments('one'));
console.log(returnHowManyArguments('one', 'two', 3, '4th'));
