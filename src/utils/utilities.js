export default {
  sumBy: function (array, iterator) {
    return (array != null && array.length) ? this.baseSum(array, iterator) : 0;
  },
  baseSum: function (array, iterator) {
    let result = 0;
    for (const value of array) {
      const current = value[iterator] || 0;
      if (current !== undefined) {
        result = result === undefined ? Number(current) : (result + Number(current));
      }
    }
    return Number(result).toFixed(2);
  }
};
