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

function getMonth(digit) {
    var month = new Array();
        month[0] = "Jan";
        month[1] = "Feb";
        month[2] = "Mar";
        month[3] = "Apr";
        month[4] = "May";
        month[5] = "Jun";
        month[6] = "Jul";
        month[7] = "Aug";
        month[8] = "Sep";
        month[9] = "Oct";
        month[10] = "Nov";
        month[11] = "Dec";            
        
    return month[digit];
}

/* Usage: decodeEntities($('<span></span>').html($('id').text())) */
function decodeEntities(input) {
    var y = document.createElement('textarea');
    y.innerHTML = input;
    
    return y.value;
}

// Get query param
function getParameterByName(name) { 
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.search);
    
    if(results == null)
        return "";
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "));
};
