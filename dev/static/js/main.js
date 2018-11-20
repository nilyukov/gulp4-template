$(document).ready(function () {
    svg4everybody({});
});


function showName(firstName, lastName, ...rest) {
    alert(firstName + ' ' + lastName + ' - ' + rest);
}

// выведет: Юлий Цезарь - Император,Рима
showName("Юлий", "Цезарь", "Император", "Рима");