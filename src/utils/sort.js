const sort = (arr) => {
  const sorted = arr.sort((a, b) => a.name.localeCompare(b.name));
  return sorted;
};

export default sort;


