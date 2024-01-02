// searchUtils.js
export const filterData = (data, inputValue, key = 'name') => {
  return data.filter((item) =>
    item[key].toLowerCase().includes(inputValue.toLowerCase())
  );
};
