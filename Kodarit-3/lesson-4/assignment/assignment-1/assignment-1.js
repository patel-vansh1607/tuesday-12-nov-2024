//calculating highest grade

let grades = [88, 92, 75, 100, 95, 89];

let highgrade = grades[0];

for ( let i = 1; i < grades.length; i++){
    if (grades[i] > highgrade){
        highgrade=grades[i];
    }
    
}

console.log("The highest grade is", highgrade)



