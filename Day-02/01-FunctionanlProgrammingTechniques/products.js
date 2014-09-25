var products = [
    {id : 8, name : "Pen", cost : 60, units : 10, category : 2},
    {id : 4, name : "Hen", cost : 40, units : 70, category : 1},
    {id : 7, name : "Ten", cost : 90, units : 40, category : 2},
    {id : 2, name : "Den", cost : 30, units : 80, category : 1},
    {id : 3, name : "Len", cost : 50, units : 30, category : 2},
    {id : 6, name : "Zen", cost : 70, units : 20, category : 1}
]

var sort = function(list){
    for(var i=0;i<list.length-1;i++)
        for(var j=i+1;j<list.length;j++)
            if (list[i].id > list[j].id){
                var temp = list[i];
                list[i]= list[j];
                list[j] = temp;
            }
}

console.log("Default list");
console.table(products);

console.log("After sorting [default - by id]");
sort(products)
console.table(products);

var sort = function(list, attrName){
    for(var i=0;i<list.length-1;i++)
        for(var j=i+1;j<list.length;j++)
            if (list[i][attrName] > list[j][attrName]){
                var temp = list[i];
                list[i]= list[j];
                list[j] = temp;
            }
}

console.log("After sorting [default - by cost]");
sort(products,"cost")
console.table(products);

var sort = function(list, comparerFn){
    for(var i=0;i<list.length-1;i++)
        for(var j=i+1;j<list.length;j++)
            if (comparerFn(list[i],list[j]) > 0){
                var temp = list[i];
                list[i]= list[j];
                list[j] = temp;
            }
}

var productComparerByValue = function(p1,p2){
    var p1Value = p1.units * p1.cost,
        p2Value = p2.units * p2.cost;
    if (p1Value < p2Value) return -1;
    if (p1Value > p2Value) return 1;
    return 0;
}

console.log("After sorting by product value")
sort(products,productComparerByValue);
console.table(products);

var inverseComparer = function(comparerFn){
    return function(p1,p2){
        return comparerFn(p1,p2) * -1;
    }
}

var inverseProductComparerByValue = inverseComparer(productComparerByValue);
sort(products,inverseProductComparerByValue);
console.log("After sorting by product value - descending");
console.table(products);

var filter = function(list,criteriaFn){
    var result = [];
    for(var i=0;i<list.length;i++)
        if (criteriaFn(list[i]))
            result.push(list[i]);
    return result;
}

var costlyProductCriteria = function(p){
    return p.cost > 50;
}
var costlyProducts = filter(products,costlyProductCriteria);
console.log("Filter - costly products");
console.table(costlyProducts);

/*
min
max
sum
avg
countBy

reduce

any ( do atleast 1 item satisfies the given criteria?)
all ( do all items satisfy the given criteria)

groupBy
*/
