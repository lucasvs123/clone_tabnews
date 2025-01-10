function somar(nmr1, nmr2) {
  if (typeof nmr1 !== "number") {
    return "error";
  }
  if (typeof nmr2 !== "number") {
    return "error";
  }
  return nmr1 + nmr2;
}

exports.somar = somar;
