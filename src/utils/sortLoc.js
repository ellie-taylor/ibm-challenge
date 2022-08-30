const sortLoc = (arr) => {
    const sorted = arr.sort((a, b) => a.area.localeCompare(b.area));
    return sorted;
  };
  
  export default sortLoc;