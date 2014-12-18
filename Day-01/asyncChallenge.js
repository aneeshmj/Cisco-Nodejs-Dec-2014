function f1(next){
   console.log("beginning f1");
   setTimeout(function(){
      console.log("f1 is done")
      if (typeof next=== "function") next();
   },3000);
}

function f2(next){
   console.log("beginning f2");
   setTimeout(function(){
      console.log("f2 is done")
      if (typeof next=== "function") next();
   },3000);
}

function f3(next){
   console.log("beginning f3");
   setTimeout(function(){
      console.log("f3 is done")
      if (typeof next=== "function") next();
   },3000);
}


function inSequence(arr) {
    var icr = 0;
    var callBack = function() {
        icr++;
        if (typeof arr[icr] === "function") {
            arr[icr](callBack);
        }
    }
    arr[0](callBack);
}

inSequence([f1, f2, f3]);
