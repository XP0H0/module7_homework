function Electrodevice (company, power) {
  this.country = "Germany",
  this.consumption,
  this.company = company,
  this.power = power
}
Electrodevice.prototype.onOff = function(device){
  let onOff = prompt (`Чтобы включить ${device} в сеть введите "on"`)
  if (onOff === "on"){
    this.consumption = this.power
    alert ('Прибор включен в сеть')
  }
  else {this.consumption = 0;
    alert ('Прибор не удалось включить в сеть')
  }
}
function KitchenApp (name, company, power){
  this.color = "white",
  this.name = name,
  this.company = company,
  this.power = power
}
KitchenApp.prototype = new Electrodevice();
const tv = new KitchenApp("TV", "LG", 250);
const teepot = new KitchenApp("Teepot", "Bosch", 1500);
const computer = new Electrodevice("Asus", 700);
tv.onOff("TV");
teepot.onOff("teepot");
computer.onOff("computer");
let sumPower = tv.consumption + teepot.consumption + computer.consumption;
// console.log(tv, teepot, computer);
alert(`Суммарная потребляемая мощность включенных приборов равна ${sumPower} Ватт`)