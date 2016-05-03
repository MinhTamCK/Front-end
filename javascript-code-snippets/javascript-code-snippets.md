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

##Access HTML elements
```javascript
//Basic element access
document.getElementById("someID");
document.getElementsByTagName("div");
document.getElementsByName("elements_name");
document.getElementsByClassName("someClass");

//querySelector - Takes a css selector as a parameter and returns the first element that matches

//Search by class
document.querySelector('.someClass');

//Search by tagname
document.querySelector('div');

//Search by id
document.querySelector('#someID');

//Search by tagname and class
document.querySelector('div.someClass'); or document.querySelector('div[class="someClass"]')

//Search for a <span> wrapped in a <div> with the class of 'someClass'
document.querySelector('div.someClass > span');

//Search id by string matching(id='nav-access'). Starts with 'na' and ends with 'ss'
document.querySelector('[id^=na][id$=ss]');

//Search id by string matching(id='nav-access'). Contains 'nav'
document.querySelector('[id*=nav]');

//Getting the selected Checkbox value
document.querySelector('input[name="rate"]:checked').value;


//querySelectorAll - Similar to query selector, but it returns all matches into a list instead of just the first match

document.querySelectorAll('.someClass');

//Search for the default selected option within each <select> menu
document.querySelectorAll('option[selected="selected"]')

//Search for the first cell within each table row of "someTable"
document.querySelectorAll('#someTable tr>td:nth-of-type(1)')



var element = document.getElementById("someID");
//Access an element's parent
element.parentNode

//Access an element's children
element.children

//Access an element's siblings
element.parentNode.children
```

##Getting and Setting attributes of an element
```javascript
element.setAttribute('id', 'searchResults');
element.getAttribute('src');
element.hasAttribute('id');// Return true or false
```

##Adding and Removing classes of an element
```javascript
element.classList.add('someClass');
element.classList.remove('someClass');
```
##Setting an element's text
```javascript
var element = document.createElement('div');
element.innerHTML='New text';
//You can also pass html code instead of just normal text
```

##Access an iFrame inner contents
```javascript
document.getElementsByClassName('frame_class')[0].contentWindow.document
```

###Simulate events in elements
```javascript
document.getElementsByClassName('someClass')[0].click();
document.getElementsByClassName('someClass')[0].focus();    
document.getElementsByClassName('someClass')[0].blur();
```

###Wrapp an new html element around an existing element
```javascript
var el = document.querySelector('[id="someElementID"]');
if(el!==null) {

    //This is only a check to see if your element already exists, in case you ran this before
    if(document.getElementsByClassName('yourNewElementClass')[0]===undefined){

        // create wrapper container
        var wrapper = document.createElement('div');

        //Add a class to your new element
        wrapper.classList.add('yourNewElementClass');

        // insert wrapper before el in the DOM tree
        el.parentNode.insertBefore(wrapper, el);

        // move el into wrapper
        wrapper.appendChild(el);
     }
}
```

##Removing all children from an element
```javascript
var element = document.getElementById("someId");
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
```

##Removing a list of  DOM elements
```javascript
/**
*The main difference between this code and the above is that now we don't have the parent node, 
*so in order to delete the elements we need to find it first
*/
let elementsList = document.getElementsByClassName('someClass');

while(elementsList[0]){
    //You need to use those elements parent node to remove them
    elementsList[0].parentNode.removeChild(elementsList[0]);
}
```
##Iterate element's child nodes
```javascript
Array.prototype.forEach.call(document.getElementById("someId").childNodes, function(item){
    console.log(item);
});
```

##Load CSS file to a HTML document with javascript
```javascript
function loadCSS(url) {
    var head = document.getElementsByTagName('head')[0],
        link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    head.appendChild(link);
    return link;
}
```
##Attaching functions to an instance of an element
```javascript
//Adds the function to HTMLElement prototype(shared space)
HTMLElement.prototype.yourFunction = function() {
    //TODO
}

var element = document.createElement('div');
element.yourFunction();
```

##Screen Width and Height
```javascript
console.log('Window width:'+window.innerWidth);
console.log('Window height:'+window.innerHeight);
```
##Handling an image error on load
```javascript
<img onError="errorImage()" src="image-source" alt=""/>

function errorImage(){
    //TODO
}
```

##Resize image
```javascript
<input  id='file' name="file" type="file" accept=".png, .jpg" onchange="resizeImage()"/>
/*
* This solution was based on:
*  - http://stackoverflow.com/questions/12570834/how-to-preview-image-get-file-size-image-height-and-width-before-upload
*  - https://github.com/nmmf/imageresize/blob/master/plugin.js
*/

function resizeImage(){
    var imgElement = document.createElement('img');

    //https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
    imgElement.setAttribute('src',window.URL.createObjectURL(target.files[0]));

    imgElement.onload = function() {

        var newWidth = 300;
        var newHeight=0;

        console.log('this.width:'+this.width);
        console.log('this.height:'+this.height);

        var imageRatio = this.height/this.width;
        console.log('imageRatio: ' + imageRatio);

        if (Number(this.width) > newWidth) {
            newHeight = Math.round(Number(newWidth) * imageRatio);
        } else {
            return false;
        };

        console.log('w:'+ newWidth+'  h: ' + newHeight);
        var cv = document.createElement("canvas");
        cv.width = newWidth;
        cv.height = newHeight;
        var ct = cv.getContext("2d");
        ct.drawImage(this, 0, 0, newWidth, newHeight);

        //img
        console.log(this);

        //https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL
        if(/^data:image\/jpeg/i.test(this.src) || /\.(jpg|jpeg)$/i.test(this.src)) {
            this.setAttribute("src", cv.toDataURL("image/jpeg", 0.8));
        } else {
            this.setAttribute("src", cv.toDataURL("image/png"));
        }
    };
}
```

##Control upload files by "Number", "Type" and "Size"
```javascript
if(target.files.length==1){
    //20000000 = 20MB
    if(target.files[0].size<=500000){ //===500kbs
        var validExts = new Array(".png", ".jpg",".jpeg");
        var fileExt = target.value;
        fileExt = fileExt.substring(fileExt.lastIndexOf('.'));
        if (validExts.indexOf(fileExt) < 0) {
            alert('Only these file types are accepted:',[validExts.toString()]));
            return false;
        }
        else{
            return true;
        }
    }
    else{
        alert('Max size exceeded');
        return false;
    }
}
else{
    alert('More than one file selected');
    return false;
}
```