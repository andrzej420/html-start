function myDisplayer(some) {
  console.log(some);
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
   console.log(`x = ${x}`)
  // some code (try to change x to 5)
  
    if (x == 0) {
    myResolve("OK")
    } else {
      myReject("Error");
    }
  });  
  console.log("a");
myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
}


//https://dev.to/cammanhhoang/what-is-promise-in-javascript-with-real-world-example-dkb