var author ="Goverdhan Koyalkar"

var students = [{ name: 'gov', phone: "988776666", address: "goshamahal" },
{ name: 'soni', phone: "988776666", address: "charminar" },
{ name: 'girija', phone: "988776666", address: "attapur" }, 
{ name: 'girija', phone: "988776666", address: "attapur" }];

// alert('hi')

console.log(students);

var title = document.getElementById("title");
title.innerHTML = author;

function render(){
    var tbl = "<tr><th>Name</th><th>Phone</th><th>Address</th></tr>";
    for(var i=0; i<students.length; i++){
        tbl = tbl + "<tr id='row"+ i +"'><td>" + students[i].name + "</td><td>" + students[i].phone + "</td><td>" + students[i].address + "</td><td><button onclick='editStudent("+ i +")'>Edit</button></td><td><button onclick='deleteStudent("+ i +")'>Delete</button></td></tr>"  
    }
    console.log(tbl);
    var grid = document.getElementById("grid");
    grid.innerHTML = tbl;

}

render();


function editStudent(index){
    alert(index);
}

function deleteStudent(index){
 //   alert(index);
    var row = document.getElementById("row" + index);
    row.style.display = "none";

}

function addStudent(){
    var name = prompt("Enter Name:");
    var phone = prompt("Enter Phone:");
    var address = prompt("Enter Address:");


    this.students.push({name:name, phone:phone, address:address});
    console.log(this.students);
    render();


}

