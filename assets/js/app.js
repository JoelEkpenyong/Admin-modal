var modal_1 = document.querySelector('.modal1')
var hideModal_1 = document.querySelectorAll('.hide-modal-1')
var viewModal_1 = document.querySelectorAll('.view1')

hideModal_1.forEach(function(ele){
    ele.addEventListener('click', function(){
        modal_1.classList.add('modal-1');
    });
})
viewModal_1.forEach(function(ele){
    ele.addEventListener('click', function(){
        modal_1.classList.remove('modal-1');
    });
})

const nameField = document.getElementById('profileName');
const emailField = document.getElementById('email')
const editName = document.querySelector('.name-edit')
const editEmail = document.querySelector('.email-edit')
const password = document.getElementById('password')
const changePassword = document.getElementById('changePassword')
const resetButton = document.getElementById('resetButton')
var newPassword 

editName.addEventListener('click', editNameField)
editEmail.addEventListener('click', editEmailField)
    
// use the enter key to trigger the function if it contains the class
nameField.addEventListener('keydown', (e) => {
        if (e.keyCode === 13) {
            if (!nameField.classList.contains('edit')) {
                return
            }
            editNameField()
        }
    });
emailField.addEventListener('keydown', (e) => {
        if (e.keyCode === 13) {
            if (!emailField.classList.contains('edit')) {
                return
            }
            editEmailField()
        }
    });

changePassword.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        newPassword = changePassword.value;
        console.log(newPassword)
    }
});

resetButton.addEventListener('click', function(){
    newPassword = changePassword.value;
    password.value = newPassword
    changePassword.value = ''
})
 
    // function that toogles class of edit
function editNameField() {
    nameField.classList.toggle('edit')
}
function editEmailField() {
    emailField.classList.toggle('edit')
}




