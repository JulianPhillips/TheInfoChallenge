// This is the code that creates a page tracker. It works by creating a cookie that saves each time the user goes onto the website.

//This function gets the Cookie by checking the document 
function GetCookie (name) {  

    var arg = name + "=";  

    var alen = arg.length;  

    var clen = document.cookie.length;  

    var i = 0;  

    while (i < clen) {
    var j = i + alen;    
if (document.cookie.substring(i, j) == arg)      
return getCookieVal (j);    
i = document.cookie.indexOf(" ", i) + 1;    
if (i == 0) break;   
}  
return null;
}

// This function sets the Cookie 

function SetCookie (name, value) {  
var argv = SetCookie.arguments;  
var argc = SetCookie.arguments.length;  
var expires = (argc > 2) ? argv[2] : null;  
var path = (argc > 3) ? argv[3] : null;  
var domain = (argc > 4) ? argv[4] : null;  
var secure = (argc > 5) ? argv[5] : false;  

document.cookie = name + "=" + escape (value) + 
((expires == null) ? "" : ("; expires=" + expires.toGMTString())) + 
((path == null) ? "" : ("; path=" + path)) +  
((domain == null) ? "" : ("; domain=" + domain)) +    
((secure == true) ? "; secure" : "");
}

//This function deletes the Cookie and can be implemented through a button 
function DeleteCookie (name) {  
    
var exp = new Date();  
exp.setTime (exp.getTime() - 1);   
var cval = GetCookie (name);  
    
document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
}


var expDays = 30;
var exp = new Date(); 
exp.setTime(exp.getTime() + (expDays*24*60*60*1000));

//This function returns the amount of page views there are
function amt(){
var count = GetCookie('count')
if(count == null) {
SetCookie('count','1')
return 1
}
else {
    
var newcount = parseInt(count) + 1;
    
DeleteCookie('count')

SetCookie('count',newcount,exp)

console.log("New Cookie Logged");

    return count
   }
}

// this code just grabs the cookies current value
function getCookieVal(offset) {
var endstr = document.cookie.indexOf (";", offset);
if (endstr == -1)
endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}


// This is code to parse our data.json File


       
function jsonGrab(index){
        // Connect to the Data.json file
        $.getJSON('data.json',function(data){
        // grab the json object we want given the array index
        var title = data[index].title;
        var content = data[index].full_text;
        
        // set associated array values to HTML objects and hot reset CSS
        $('#title').text(title);
        ($("<div class'post-content'>"+content+"</div>").replaceAll('.post-content')).css({"font-family":"Archivo Narrow",
                                                                                          "word-spacing":"8px",
                                                                                          "font-size":"23px",
                                                                                          "color":"dimgray"});
      
       

        
    });
}
    
    
    

        
        



 
