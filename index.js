function myArray() {
    Object.defineProperty(this, "length", {
        value: 0,
        writable: true,
        enumerable: false, //dont count this property
    });

    this.length = arguments.length;

    for (let i = 0; i < this.length; i++) {
        this[i] = arguments[i];
    }
}

let a2 = new myArray("x", "y", "z");
 

myArray.prototype.डालो_भाई = function (value) {
    let index = this.length;
    this[index] = value;
    this.length++;
};

myArray.prototype.हटाओ_भाई = function () {
    let index = this.length - 1;
    delete this[index];
    this.length--;
};

myArray.prototype.अंतिम_वाला_दिखाओ = function() {
    let index = this.length-1;

    return this[index];
}

myArray.prototype.एक_लाइन_में_दिखाओ = function() {
    let arr = [];
    for(let i=0 ; i<this.length ; i++) {
        arr[i] = this[i];
    }
    return arr;
}

myArray.prototype.उल्टा = function() {
    let arr = new myArray();
    for(let i=this.length-1 ; i>=0 ; i--) {
        arr.डालो_भाई(this[i]);
      //here u can use hindi function because it is a prototype of myarr otherwise u have to use push.
    }

    let res = [];
    for(let i=0 ; i<arr.length ; i++) {
        res[i] = arr[i];
    }
    return res;
}

myArray.prototype.लम्बाइया = function() {
    return this.length;
}

console.log(a2)
a2.डालो_भाई("a"); // array.push() method
a2.डालो_भाई("b");
a2.हटाओ_भाई(); // array.pop() method
console.log("a2:", Object.values(a2));
console.log(a2.अंतिम_वाला_दिखाओ());
console.log(a2.एक_लाइन_में_दिखाओ());
console.log(a2.उल्टा());
console.log("लम्बाई", a2.लम्बाइया());

