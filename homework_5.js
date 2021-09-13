class ElectroDevice {
  constructor(company, power) {
  this.country = "Germany";
  this.consumption = 0;
  this.company = company;
  this.power = power
  }
  onOff (device){
  let onOff = prompt (`Чтобы включить ${device} в сеть введите "on"`)
  if (onOff === "on") {
    this.consumption = this.power
    alert ('Прибор включен в сеть')
  }
  else {this.consumption = 0;
    alert ('Прибор не удалось включить в сеть')
    }
  }
}
class KitchenApp extends ElectroDevice{
  constructor (name, company, power){
  super();
  this.color = "white";
  this.name = name;
  this.company = company;
  this.power = power
  }
}
const tv = new KitchenApp("TV", "LG", 250);
const teepot = new KitchenApp("Teepot", "Bosch", 1500);
const computer = new ElectroDevice("Asus", 700);
tv.onOff("TV");
teepot.onOff("teepot");
computer.onOff("computer");
let sumPower = tv.consumption + teepot.consumption + computer.consumption;
console.log(tv, teepot, computer);
alert(`Суммарная потребляемая мощность включенных приборов равна ${sumPower} Ватт`)