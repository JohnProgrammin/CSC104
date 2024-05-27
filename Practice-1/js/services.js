let c101_credit = prompt("Enter the number of credits in csc101");
let c103_credit = prompt("Enter the number of credits in csc103");
let c107_credit = prompt("Enter the number of credits in csc107");
let m101_credit = prompt("Enter the number of credits in mth101");
let chm101_credit = prompt("Enter the number of credits in chm101");
let p101_credit = prompt("Enter the number of credits in phy101");
let g111_credit = prompt("Enter the number of credits in geo111");
let g113_credit = prompt("Enter the number of credits in geo113");
let g115_credit = prompt("Enter the number of credits in geo115");
let g121_credit = prompt("Enter the number of credits in geo121");

// Calculate the total credits for the first semester
let total_credit_first = c101_credit + c103_credit + c107_credit + m101_credit + chm101_credit + p101_credit + prompt("Enter the number of credits in phy107") + g111_credit + g113_credit + g115_credit + g121_credit;

let c101_gp = prompt("Enter the number of grade points in csc101");
let c103_gp = prompt("Enter the number of grade points in csc103");
let c107_gp = prompt("Enter the number of grade points in csc107");
let m101_gp = prompt("Enter the number of grade points in mth101");
let chm101_gp = prompt("Enter the number of grade points in chm101");
let p101_gp = prompt("Enter the number of grade points in phy101");
let g111_gp = prompt("Enter the number of grade points in geo111");
let g113_gp = prompt("Enter the number of grade points in geo113");
let g115_gp = prompt("Enter the number of grade points in geo115");
let g121_gp = prompt("Enter the number of grade points in geo121");

// Calculate the total grade points for the first semester
let total_gp_first = c101_gp + c103_gp + c107_gp + m101_gp + chm101_gp + p101_gp + prompt("Enter the number of grade points in phy107") + g111_gp + g113_gp + g115_gp + g121_gp;

// Calculate the GPA for the first semester
let gpa_first = total_gp_first / total_credit_first;

let c102_credit = prompt("Enter the number of credits in csc102");
let c104_credit = prompt("Enter the number of credits in csc104");
let c106_credit = prompt("Enter the number of credits in csc106");
let m102_credit = prompt("Enter the number of credits in mth102");
let chm102_credit = prompt("Enter the number of credits in chm102");
let p102_credit = prompt("Enter the number of credits in phy102");
let p107_credit = prompt("Enter the number of credits in phy107");
let g102_credit = prompt("Enter the number of credits in geo102");
let g103_credit = prompt("Enter the number of credits in geo103");
let g105_credit = prompt("Enter the number of credits in geo105");
let g122_credit = prompt("Enter the number of credits in geo122");

// Calculate the total credits for the second semester
let total_credit_second = c102_credit + c104_credit + c106_credit + m102_credit + chm102_credit + p102_credit + prompt("Enter the number of credits in phy107") + g102_credit + g103_credit + g105_credit + g122_credit;

let c102_gp = prompt("Enter the number of grade points in csc102");
let c104_gp = prompt("Enter the number of grade points in csc104");
let c106_gp = prompt("Enter the number of grade points in csc106");
let m102_gp = prompt("Enter the number of grade points in mth102");
let chm102_gp = prompt("Enter the number of grade points in chm102");
let p102_gp = prompt("Enter the number of grade points in phy102");
let p107_gp = prompt("Enter the number of grade points in phy107");
let g102_gp = prompt("Enter the number of grade points in geo102");
let g103_gp = prompt("Enter the number of grade points in geo103");
let g105_gp = prompt("Enter the number of grade points in geo105");
let g122_gp = prompt("Enter the number of grade points in geo122");

// Calculate the total grade points for the second semester
let total_gp_second = c102_gp + c104_gp + c106_gp + m102_gp + chm102_gp + p102_gp + prompt("Enter the number of grade points in phy107") + g102_gp + g103_gp + g105_gp + g122_gp;
let gpa_second = total_gp_second / total_credit_second;
let pre_cgpa = gpa_first + gpa_second;
let cgpa = pre_cgpa / 2;
console.log(cgpa)

