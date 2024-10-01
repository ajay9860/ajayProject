const sortArrayObject = (arrayObjectData, keyField) => {
  const compare = (firstObjectData, secondObjectData) => {
    if (firstObjectData[keyField] > secondObjectData[keyField]) {
      return 1;
    } else if (firstObjectData[keyField] < secondObjectData[keyField]) {
      return -1;
    }
    return 0;
  };
  return arrayObjectData.sort(compare);
};

export default {
  sortArrayObject
};
