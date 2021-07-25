var GuestName = document.getElementById("name1").value;
names_of_people.push(GuestName);

function show_list(){
names_of_people.sort();
console.log(names_of_people_array);
document.getElementById("display_name").innerHTML = names_of_people_array;
}

function Search(){
var s= document.getElementById("s1").value;
var found = 0;
var j;
for(j=0 j<names_of_people.length; j++){
if(s==names_of_people[j]){
found=found+1;
}
}

document.getElementById("p2").innerHTML="name found"+found+"time/s";
console.log("found name"+found+"time/s");

function Submit(){
var name_1= document.getElementById("name_of_people_1").value;
var name_2= document.getElementById("name_of_people_2").value;
var name_3= document.getElementById("name_of_people_3").value;
var name_4= document.getElementById("name_of_people_4").value;
name_of_student_array.push(name_1);
name_of_student_array.push(name_2);
name_of_student_array.push(name_3);
name_of_student_array.push(name_4);
console.log(names_of_people_array);
document.getElementById("display_name").innerHTML= name_of_student_array;
document.getElementById("submit_button").style.display= "none";
document.getElementById("sort_button").style.display= "inline-block";
}