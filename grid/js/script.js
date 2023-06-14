var author ="Goverdhan Koyalkar"

var students = [{ name: 'gov', phone: "988776666", address: "goshamahal" },
{ name: 'soni', phone: "988776666", address: "charminar" },
{ name: 'girija', phone: "988776666", address: "attapur" }, 
{ name: 'girija', phone: "988776666", address: "attapur" }];

// alert('hi')

var selectedStudentIndex;

console.log(students);

var title = document.getElementById("title");
title.innerHTML = author;

function render(){
    var tbl = "<tr><th>Name</th><th>Phone</th><th>Address</th></tr>";
    for(var i=0; i<students.length; i++){
        tbl = tbl + "<tr id='row"+ i +"'><td>" + students[i].name + "</td><td>" + students[i].phone + "</td><td>" + students[i].address + "</td><td><button onclick='editStudent("+ i +")'>Edit</button></td><td><button onclick='deleteStudent("+ i +")'>Delete</button></td></tr>"  
    }
    var grid = document.getElementById("grid");
    grid.innerHTML = tbl;

}

render();


function editStudent(index){
    // alert(index);
    var overlay = document.getElementById("overlay");
    var modal = document.getElementById("modal");
    overlay.style.display = "block";
    modal.style.display = "block";
    
    this.selectedStudentIndex = index;
    // overlay.style.visibility = "visible";
    // modal.style.visibility = "visible";

    var name = document.getElementById("editName");
    var phone = document.getElementById("editPhone");
    var address = document.getElementById("editAddress");

    name.value = this.students[index].name;
    phone.value = this.students[index].phone;
    address.value = this.students[index].address;

}

function closeModalPopup(){
    // alert('hi')
    var overlay = document.getElementById("overlay");
    var modal = document.getElementById("modal");
    overlay.style.display = "none";
    modal.style.display = "none";
    //  overlay.style.visibility = "hidden";
    //  modal.style.visibility = "hidden";
}


function deleteStudent(index){
 //   alert(index);
//  evt.stopPropogation();
    var row = document.getElementById("row" + index);
    row.style.display = "none";

}

function addStudent(){
    // var name = prompt("Enter Name:");
    // var phone = prompt("Enter Phone:");
    // var address = prompt("Enter Address:");


    var overlay = document.getElementById("overlay");
    var modal = document.getElementById("addModal");
    overlay.style.display = "block";
    modal.style.display = "block";
    
    // overlay.style.visibility = "visible";
    // modal.style.visibility = "visible";


}

function addStudentDetails(){
    var name = document.getElementById("addName").value;
    var phone = document.getElementById("addPhone").value;
    var address = document.getElementById("addAddress").value;
    var err = document.getElementsByClassName('error');

    if(name !== "" && phone !== "" && address !== ""){
        this.students.push({name:name, phone:phone, address:address});
        console.log(this.students);
    
        var overlay = document.getElementById("overlay");
        var modal = document.getElementById("addModal");
        overlay.style.display = "none";
        modal.style.display = "none";
        err.style.display= "none";
        render();
    } else {

        err[0].style.display= "block";
        err[1].style.display= "block";
        err[2].style.display= "block";
    }

}

function editStudentDetails(index){
    var name = document.getElementById("editName");
    var phone = document.getElementById("editPhone");
    var address = document.getElementById("editAddress");
    this.students[this.selectedStudentIndex].name = name.value;
    this.students[this.selectedStudentIndex].phone =phone.value;
    this.students[this.selectedStudentIndex].address = address.value;
    render();
    closeModalPopup();
}


