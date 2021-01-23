var valor = [124, 48, 268, 180, 42];
var x;
var val;
var tipValue;
var valorArray = 0;
var valorArrayX = 0;
var valorArrayM = 0;
var valorArrayXM = 0;
var valorAvgM;
var valor1 = [77, 375, 110, 45];

var tips = {
  tip: [],
  tipPlus: [],
  valorMethod: function valor(val){
    if (val < 50 ) {
      tipValue = val * 0.2;
      this.tip.push(tipValue)
      this.tipPlus.push(val + tipValue );
    }
    else if (val > 50 && val < 200 ) {
      tipValue = val * 0.15;
      this.tip.push(tipValue);
      this.tipPlus.push(val + tipValue );
    }

    else  {
      val = val * 0.10;
      this.tip.push(tipValue);
      this.tipPlus.push(val + tipValue );
    }}
};


for(var x = 0; x < valor.length ; x++){
  tips.valorMethod(valor[x]);
}

console.log(tips.tip);
console.log(tips.tipPlus);


var tipsM = {
  tip: [],
  tipPlus: [],
  valorMethod: function valor(val){
    if (val < 100 ) {
      tipValue = val * 0.2;
      this.tip.push(tipValue)
      this.tipPlus.push(val + tipValue );

    }
    else if (val > 100 && val < 300 ) {
      tipValue = val * 0.1;
      this.tip.push(tipValue);
      this.tipPlus.push(val + tipValue );
    }

    else  {
      val = val * 0.3;
      this.tip.push(tipValue);
      this.tipPlus.push(val + tipValue );
    }}
};


for(var x = 0; x < valor1.length ; x++){
  tipsM.valorMethod(valor1[x]);
}


console.log(tipsM.tip);
console.log(tipsM.tipPlus);

//Default
  for(var x = 0; x < tips.tip.length ; x++){
    var valorArray = tips.tip[x] + valorArray;
    var valorArrayX = 1 + valorArrayX;
}
    var valorAvg = valorArray/valorArrayX;


//Mark

for(var x = 0; x < tipsM.tip.length ; x++){
  var valorArrayM = tipsM.tip[x] + valorArrayM;
  var valorArrayXM = 1 + valorArrayXM;
}
  var valorAvgM = valorArrayM/valorArrayXM;

//Comparation

valorAvg > valorAvgM? console.log('Default has more ' + valorAvg):console.log('Mark has more ' + valorAvgM);
