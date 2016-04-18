#JAVASCRIPT CODE SNIPPETS FOR WEB PROJECTS

##DETECTING THE OPERATING SYSTEM
```javascript
//Determine Operating System
system=navigator.appVersion;
IF (navigator.appVersion.indexOf("Mac") != -1 ) OS = "Mac";
ELSE IF (navigator.appVersion.indexOf("PowerPC") != -1 ) OS = "Mac";
ELSE IF (navigator.appVersion.indexOf("Win") != -1 ) OS = "Win";
ELSE IF (navigator.appVersion.indexOf("SunOS") != -1 ) OS = "Solaris";
ELSE  OS = "Linux";
 
//Determine Browser Version
bName = navigator.appName;
bVer = parseInt(navigator.appVersion);
 
IF (OS == "Mac" && bName=="Netscape"){ 
     // your code here
    }
ELSE IF (OS =="Mac" && bName=="Microsoft Internet Explorer"){ 
     // your code here
    }
ELSE IF (OS =="Win" | OS == "Linux" && bName=="Netscape"){
     // your code here
    }
ELSE IF (OS =="Solaris" && bName=="Netscape"){
     // your code here
    }
ELSE IF (OS =="Win" | OS == "Linux" && bName=="Microsoft Internet Explorer"){
     // your code here
    }
```