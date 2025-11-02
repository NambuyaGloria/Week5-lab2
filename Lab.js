// Lab.js
console.log("Week 5 Lab is running n");
// Creating an Array
const fruits = ["mango", "banana", "Watermelon", "orange", "guava"];
console.log(fruits[0]);              // first
console.log(fruits[fruits.length-1]); // lastn
// Modifying Elements
fruits[1] = "kiwi";
console.log("after modification:", fruits);
// Adding and Removing Elements
fruits.push("apple");
console.log("after push:", fruits);
fruits.pop();
console.log("after pop:", fruits);
fruits.unshift("lemon");
console.log("after unshift:", fruits);
fruits.shift();
console.log("after shift:", fruits);
// Slicing and Splicing
const top3 = fruits.slice(0, 3);
console.log("top3 (slice):", top3, "original:", fruits);
const removed = fruits.splice(2, 1);
console.log("removed (splice):", removed, "now:", fruits);

//challenge
const messy = [" Tea ", "COFFEE", "Milo ", "Juice "];
const clean = messy.map(drink => drink.trim().toLowerCase());
console.log(clean); 

//B1. Classic for
for (let i = 0; i < fruits.length; i++) {
  console.log(`#${i+1} ${fruits[i]}`);
}
//B2. for...of
for (const f of fruits) {
  console.log("fruit:", f);
}
//B3. while
let n = 10;
while (n > 0) { console.log(n); n--; }
console.log("Lift off!");
//B4. Sum with a Loop
const nums = [2, 7, 3, 9, 4];
let total = 0;
for (const x of nums) total += x;
console.log("total =", total);
//B5. Challenge: Count Evens
function countEvens(arr) {
  return arr.filter(num => num % 2 === 0).length;
}
console.log(countEvens([1, 2, 3, 4, 6])); 

// HighernOrder Array Methods
//C1. map (Transform)
const scores = [50, 70, 90];
const perc = scores.map(s => `${s}%`);
console.log(perc);
//C2. filter (Select)
const passedScores = scores.filter(s => s >= 60);
console.log(passedScores);
//C3. reduce (Accumulate)
const sum = scores.reduce((acc, s) => acc + s, 0);
const avg = sum / scores.length;
console.log("avg =", avg);
//C4. Challenge: Pipeline
const temps = ["30", " 27 ", "31c", "29 "];
const result = temps
  .map(t => parseInt(t))        
  .filter(n => n >= 29)          
  .map(n => `${n}°C`);           
console.log(result);

//D. Objects
//D1. Create & Access
const student = {
  id: "stu-1001",
  name: "Asha",
  program: "DIT",
  year: 2,
  contact: { email: "asha@example.com", phone: "+256700000" },
  courses: ["WMD101", "DBS102", "PROG201"],
  gpa: 3.48
};
console.log(student.name);
console.log(student.contact.email);
console.log(student.courses[1]);
//D2. Mutate
student.year = 3;                     
student.active = true;                
student.courses.push("NET202");       
console.log(student);
//D3. Loop Through Properties
for (const key in student) {
  if (Object.hasOwn(student, key)) {
    console.log(key, ":", student[key]);
  }
}
//Or via Object.keys:
Object.keys(student).forEach(k => console.log(k, student[k]));
//D4. Array of Objects
const inventory = [
  { sku: "A1", name: "USB Cable", price: 7000, qty: 12 },
  { sku: "B2", name: "HDMI Cable", price: 18000, qty: 6 },
  { sku: "C3", name: "Flash Disk", price: 35000, qty: 20 }
];
const totalValue = inventory
  .map(item => item.price * item.qty)
  .reduce((sum, val) => sum + val, 0);
console.log("Total Stock Value:", totalValue);
const upperNames = inventory.map(item => ({
  ...item,
  name: item.name.toUpperCase()
}));
console.log("Uppercased Names:", upperNames);
const lowStock = inventory.filter(item => item.qty < 10);
console.log("Low Stock Items:", lowStock);
//D5. Challenge: Find by SKU
const inventoryBySKU = [
  { sku: "A1", name: "USB Cable", price: 7000, qty: 12 },
  { sku: "B2", name: "HDMI Cable", price: 18000, qty: 6 },
  { sku: "C3", name: "Flash Disk", price: 35000, qty: 20 }
];
const indexed = inventoryBySKU.reduce((acc, item) => {
  acc[item.sku] = {
    name: item.name,
    price: item.price,
    qty: item.qty
  };
  return acc;
}, {});
console.log(indexed);


//MininProject — Student Grades Report
const students = [
  { id: 1, name: "Asha", scores: { web: 78, db: 66, prog: 82 } },
  { id: 2, name: "Brian", scores: { web: 55, db: 49, prog: 61 } },
  { id: 3, name: "Cathy", scores: { web: 92, db: 88, prog: 95 } },
  { id: 4, name: "Derrick", scores: { web: 40, db: 51, prog: 47 } }
];
students.forEach(stu => {
  const values = Object.values(stu.scores);
  const avg = values.reduce((a, b) => a + b, 0) / values.length;
  stu.avg = +avg.toFixed(1);
  
  if (stu.avg >= 80) stu.grade = "A";
  else if (stu.avg >= 70) stu.grade = "B";
  else if (stu.avg >= 60) stu.grade = "C";
  else if (stu.avg >= 50) stu.grade = "D";
  else stu.grade = "F";
});
const passedStudents = students.filter(stu => stu.avg >= 60);
const classAvg = (
  students.reduce((sum, stu) => sum + stu.avg, 0) / students.length
).toFixed(1);
students.forEach(stu => {
  console.log(`${stu.name} — avg: ${stu.avg} (${stu.grade})`);
});
console.log(`Class Avg: ${classAvg}`);
console.log(`Passed: ${passedStudents.length}/${students.length}`);

// helper: group array items by a given property
function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    const k = item[key];
    if (!acc[k]) acc[k] = [];
    acc[k].push(item);
    return acc;
  }, {});
}

// Stretch Goals
const byGrade = groupBy(students, "grade");
console.log("Grouped by Grade:", byGrade);
const cloned = JSON.parse(JSON.stringify(students));
cloned[0].name = "Not Asha";
console.log("Original still:", students[0].name);
const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
console.log("Numbers:", numbers);

