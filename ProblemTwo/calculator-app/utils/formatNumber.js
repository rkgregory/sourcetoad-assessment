const formatNumber = (output) => {
  if (output === "0") return output;
  let finalOutput = "";
  let decimal = "";
  let isNeg;

  if (output.includes(".")) {
    finalOutput = output.substring(0, output.indexOf("."));
    decimal = output.substring(output.indexOf("."));
  } else {
    finalOutput = output;
  }
  if (parseFloat(output) < 0) {
    isNeg = true;
    finalOutput = finalOutput.substring(1);
  }

  return isNeg
    ? "-" + parseFloat(finalOutput).toLocaleString() + decimal
    : parseFloat(finalOutput).toLocaleString() + decimal;
};

export default formatNumber;
