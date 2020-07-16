interface LabelledValue {
  label: string;
}
const printLabel = (labelledObj: LabelledValue) => {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);


interface Alarm {
  alert(value): void;
}

interface LightableAlarm extends Alarm {
  lightOn(): void;
  lightOff(): void;
}

class LightableAlarmClass implements LightableAlarm{
  lightOff(){

  }
  lightOn(){

  }
  alert(value){
    alert(value)
  }
}
new LightableAlarmClass().alert(1)

