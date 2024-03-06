const base=require("number-convert");
const processTheValueVVB001=(value)=>{
    const data = {
      value: value,
      fatigue: { value: 0, unit: "m/s", inRange: false, message: "" },
      impact: { value: 0, unit: "m/s^2", inRange: false, message: "" },
      friction: { value: 0, unit: "m/s^2", inRange: false, message: "" },
      temperature: { value: 0, unit: "°C", inRange: false, message: "" },
      crest: { value: 0, unit: "", inRange: false, message: "" },
      status: { value: "", inRange: false, message: "" },
      out1: { value: "", inRange: false, message: "" },
      out2: { value: "", inRange: false, message: "" },
    };
    const hex = base.hexToBin(value).padStart(160, "0");

    // fatigue
    const word0 = Number(base.binToDec(hex.slice(0, 16)));
    if (word0 >= 0 && word0 <= 495) {
      data.fatigue.value = (word0 * 0.0001).toFixed(4);
      data.fatigue.inRange = true;
    } else if (word0 == 32760) {
      data.fatigue.inRange = false;
      data.fatigue.message = "OL";
    } else if (word0 == 32764) {
      data.fatigue.inRange = false;
      data.fatigue.message = "NoData";
    } else {
      data.fatigue.inRange = false;
      data.fatigue.message = "Value didn't match the process input data!";
    }

    // impact
    const word4 = Number(base.binToDec(hex.slice(33, 48)));
    if (word4 >= 0 && word4 <= 4903) {
      data.impact.value = (word4 * 0.1).toFixed(1);
      data.impact.inRange = true;
    } else if (word4 == 32760) {
      data.impact.inRange = false;
      data.impact.message = "OL";
    } else if (word4 == 32764) {
      data.impact.inRange = false;
      data.impact.message = "NoData";
    } else {
      data.impact.inRange = false;
      data.impact.message = "Value didn't match the process input data!";
    }

    // friction
    const word8 = Number(base.binToDec(hex.slice(65, 80)));
    if (word8 >= 0 && word8 <= 4903) {
      data.friction.value = (word8 * 0.1).toFixed(1);
      data.friction.inRange = true;
    } else if (word8 == 32760) {
      data.friction.inRange = false;
      data.friction.message = "OL";
    } else if (word8 == 32764) {
      data.friction.inRange = false;
      data.friction.message = "NoData";
    } else {
      data.friction.inRange = false;
      data.friction.message = "Value didn't match the process input data!";
    }

    // temperature
    const word12 = Number(base.binToDec(hex.slice(97, 112)));
    if (word12 >= -300 && word12 <= 800) {
      data.temperature.inRange = true;
      data.temperature.value = (word12 * 0.1).toFixed(1);
    } else if (word12 == -32760) {
      data.temperature.inRange = false;
      data.temperature.message = "UL";
    } else if (word12 == 32760) {
      data.temperature.inRange = false;
      data.temperature.message = "OL";
    } else if (word12 == -32762) {
      data.temperature.inRange = false;
      data.temperature.message = "cr.UL";
    } else if (word12 == 32762) {
      data.temperature.inRange = false;
      data.temperature.message = "cr.OL";
    } else if (word12 == 32764) {
      data.temperature.inRange = false;
      data.temperature.message = "NoData";
    } else {
      data.temperature.inRange = false;
      data.temperature.message = "Value didn't match the process input data!";
    }

    // crest:
    const word16 = Number(base.binToDec(hex.slice(129, 144)));
    if (word16 >= 10 && word16 <= 500) {
      data.crest.inRange = true;
      data.crest.value = (word16 * 0.1).toFixed(1);
    } else if (word16 == 32760) {
      data.crest.inRange = false;
      data.crest.message = "OL";
    } else if (word16 == 32764) {
      data.crest.inRange = false;
      data.crest.message = "NoData";
    } else {
      data.crest.inRange = false;
      data.crest.message = "Value didn't match the process input data!";
    }

    // status
    const word18 = Number(base.binToDec(hex.slice(153, 156)));
    if (word18 == 0) {
      data.status.inRange = true;
      data.status.value = "Device is OK";
    } else if (word18 == 1) {
      data.status.inRange = true;
      data.status.value = "Maintenance required";
    } else if (word18 == 2) {
      data.status.inRange = true;
      data.status.value = "Out of specification";
    } else if (word18 == 3) {
      data.status.inRange = true;
      data.status.value = "Functional check";
    } else if (word18 == 4) {
      data.status.inRange = true;
      data.status.value = "Failure";
    } else {
      data.status.inRange = false;
      data.status.message = "Value didn't match the process input data!";
    }

    // out1
    const word18Out1 = Number(base.binToDec(hex.slice(-1)));
    if (word18Out1 == 0) {
      data.out1.inRange = true;
      data.out1.value = "Off";
    } else if (word18Out1 == 1) {
      data.out1.inRange = true;
      data.out1.value = "On";
    } else {
      data.out1.inRange = false;
      data.out1.message = "Value didn't match the process input data!";
    }

    // out2
    const word18Out2 = Number(base.binToDec(hex.slice(-2, -1)));
    if (word18Out2 == 0) {
      data.out2.inRange = true;
      data.out2.value = "Off";
    } else if (word18Out2 == 1) {
      data.out2.inRange = true;
      data.out2.value = "On";
    } else {
      data.out2.inRange = false;
      data.out2.message = "Value didn't match the process input data!";
    }
return data;
}

module.exports=processTheValueVVB001;