const base=require("number-convert");
const processTheValueO5D100=(value)=>{
    const data = {
      value: value,
      distance: { value: 0, unit: "cm", inRange: false, message: "" },
      switchState: { value: "", inRange: false, message: "" },
    };
    const hex = base.hexToBin(value).padStart(16, "0");

    // distance
    const word0Distance = Number(base.binToDec(hex.slice(0, 12)));
    if (word0Distance >= 5 && word0Distance <= 200) {
      data.distance.value = word0Distance * 1;
      data.distance.inRange = true;
    } else {
      data.distance.message = "Value didn't match the process input data!";
      data.distance.inRange = false;
    }

    // out1
    const word0Out1 = Number(base.binToDec(hex.slice(-1)));
    if (word0Out1 == 0) {
      data.switchState.value = "Inactive";
      data.switchState.inRange = true;
    } else if (word0Out1 == 1) {
      data.switchState.value = "Active";
      data.switchState.inRange = true;
    } else {
      data.switchState.inRange = false;
      data.switchState.message = "Value didn't match the process input data!";
    }
  
  return data;
  }

  module.exports=processTheValueO5D100;