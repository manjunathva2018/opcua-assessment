const base=require("number-convert");
const processTheValueO5D100=(value)=>{
    const data={value:value,distance:'',switchState:''};
   const hex=base.hexToBin(value).padStart(16, '0');
  
   // distance
   const word0Distance=Number(base.binToDec(hex.slice(0,12)));
  if(word0Distance>=5 && word0Distance<=200){
  data.distance=(word0Distance*1)+' '+'cm';
  }else{
    data.distance="Value didn't match the process input data!";
  }
  
  // out1
  const word0Out1=Number(base.binToDec(hex.slice(-1)));
  if(word0Out1==0){
  data.switchState="Inactive";
  }
  else if(word0Out1==1){
    data.switchState="Active";
  }
  else{
    data.switchState="Value didn't match the process input data!";
  }
  
  return data;
  }

  module.exports=processTheValueO5D100;