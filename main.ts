  //. Test for equlity and inqulity with strings

import test from "node:test";

  console.log("Enqulity test :" , ("nadia" as string) === "nadia");

  console.log("inqulity test : ", ("nadia" as string) === "Waseem");

  // Test using the lower case function

  console.log("LawerCase test:", "NADIA".toLowerCase() === "nadia");

  // nummerical test involving equlity and inquility, greator than an lass then, gretor than

  console.log("Equlity test:", 1000 === 1000)  // equlity
  console.log("Inqulitytest",(10 as number) !== 9);  // inqulity
  console.log("greator than test",1000 >100);  // greator than
  console.log("less than test",10<100);  //less than
  console.log("greator than and eqauls to test", 10 >= 10 );
  console.log("greator than an equls to test, 5<=10");
  //test using "and" and "or" operator
  console.log("And operator test", true && true);
  console.log("or operator test", true|| false); 
  // test whether an item is in a array
  const car = [1,2,3];
  console.log("test number",car.includes(1)); 
  //test wether an item is not in a array
  const car1 = [1,2,3];
  console.log("test number", !car.includes(6));


  


