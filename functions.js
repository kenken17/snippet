function IsValidEmail(email) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return filter.test(email);
}    	

function IsValidPhone(phone) {
    var filter = /^[0-9\s\.\-\(\)]{8,}$/;
    return filter.test(phone);
}

function IsDigit(digit) {
    var filter = /^\s*(\+|-)?\d+\s*$/;
    return filter.test(digit);
}       
