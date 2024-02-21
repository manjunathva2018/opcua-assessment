const base=require("number-convert");
const processTheValueVVB001=(value)=>{
    const data={value:value,fatigue:'',impact:'',friction:'',temperature:'',crest:'',status:'',out1:'',out2:''};
   const hex=base.hexToBin(value).padStart(160, '0');

   // fatigue
   const word0=Number(base.binToDec(hex.slice(0,16)));
if(word0>=0 && word0<=495){
data.fatigue=(word0*0.0001).toFixed(4)+' '+'m/s';
}else if(word0==32760){
    data.fatigue="OL"
}else if(word0==32764){
    data.fatigue="NoData"
}else{
    data.fatigue="Value didn't match the process input data!";
}

// impact
const word4=Number(base.binToDec(hex.slice(33,48)));
if(word4>=0 && word4<=4903){
data.impact=(word4*0.1).toFixed(1)+' '+'m/s^2';
}else if(word4==32760){
    data.impact="OL"
}else if(word4==32764){
    data.impact="NoData"
}else{
    data.impact="Value didn't match the process input data!";
}

// friction
const word8=Number(base.binToDec(hex.slice(65,80)));
if(word8>=0 && word8<=4903){
data.friction=(word8*0.1).toFixed(1)+' '+'m/s^2';
}else if(word8==32760){
    data.friction="OL"
}else if(word8==32764){
    data.friction="NoData"
}else{
    data.friction="Value didn't match the process input data!";
}

// temperature
const word12=Number(base.binToDec(hex.slice(97,112)));
if(word12>=-300 && word12<=800){
data.temperature=(word12*0.1).toFixed(1)+' '+'°C';
}
else if(word12==-32760){
    data.temperature="UL";
}else if(word12==32760){
    data.temperature="OL";
}
else if(word12==-32762){
    data.temperature="cr.UL";
}
else if(word12==32762){
    data.temperature="cr.OL";
}
else if(word12==32764){
    data.temperature="NoData";
}else{
    data.temperature="Value didn't match the process input data!";
}

// crest: 
const word16=Number(base.binToDec(hex.slice(129,144)));
if(word16>=10 && word16<=500){
data.crest=(word16*0.1).toFixed(1);
}
else if(word16==32760){
    data.crest="OL";
}
else if(word16==32764){
    data.crest="NoData";
}else{
    data.crest="Value didn't match the process input data!";
}

// status
const word18=Number(base.binToDec(hex.slice(153,156)));
if(word18==0){
data.status="Device is OK";
}
else if(word18==1){
    data.status="Maintenance required";
}
else if(word18==2){
    data.status="Out of specification";
}
else if(word18==3){
    data.status="Functional check";
}
else if(word18==4){
    data.status="Failure";
}
else{
    data.status="Value didn't match the process input data!";
}

// out1
const word18Out1=Number(base.binToDec(hex.slice(-1)));
if(word18Out1==0){
data.out1="Off";
}
else if(word18Out1==1){
    data.out1="On";
}
else{
    data.out1="Value didn't match the process input data!";
}

// out2
const word18Out2=Number(base.binToDec(hex.slice(-2, -1)));
if(word18Out2==0){
data.out2="Off";
}
else if(word18Out2==1){
    data.out2="On";
}
else{
    data.out2="Value didn't match the process input data!";
}
return data;
}

module.exports=processTheValueVVB001;