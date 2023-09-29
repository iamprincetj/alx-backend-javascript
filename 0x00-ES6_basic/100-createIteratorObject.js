export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]() {
      const myList = Object.values(report.allEmployees);
      const allMylist = myList[0].concat(myList[1]);
      const listLen = allMylist.length;
      let counter = 0;
      return {
        next() {
          if (counter < listLen) {
            const result = { value: allMylist[counter], done: false };
            // eslint-disable-next-line no-plusplus
            counter++;
            return result;
          }
          return { done: true };
        },
      };
    },
  };
}
