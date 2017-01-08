var expect = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck);
    } else {
      console.log("Passed: " + assertionToCheck)
    }
  }
};
