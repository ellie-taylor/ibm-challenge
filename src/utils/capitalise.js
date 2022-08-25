function capitalise(str) {
    const terms = str.split(" ")

    for (var i =0; i < terms.length; i++) {
      terms[i] = terms[i][0].toUpperCase() + terms[i].substring(1);
    }
    const capitalised = terms.join(" ");

    return capitalised;
  }

export default capitalise;