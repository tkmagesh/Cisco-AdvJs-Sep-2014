/*
Create a SalaryCalculator "class" that is constructed with basic, hra, da, tax
the resultant object should expose the following attributes
- basic
- hra
- da
- tax

- calculate() returning the actual salary (basic + hra + da - tax(applied));
*/


function SalaryCalculator(basic, hra, da, tax){
    var x = 100;
    this.basic = basic;
    this.hra = hra;
    this.da = da;
    this.tax = tax;
    this.salary = 0;
}
SalaryCalculator.prototype.calculate = function(){
    var gross = this.basic + this.hra + this.da;
    this.salary = gross * ((100-this.tax)/100);
}