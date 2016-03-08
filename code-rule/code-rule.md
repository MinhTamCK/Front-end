# Code standards
**All code must meet accepted code standards. As a minimum:**
* HTML must be well formed and valid, XHTML-compliant HTML5:
* all style separate from content
* all element tags in lowercase
* all element tags closed
* all img element must have an alt attribute and it must be filled in
* quotes around attributes; so class=”example” or class='example', not class=example.
* LESS/SASS must be passed by Less Lint,SASS compiler
* JavaScript must be passed by ESHint
* all functionality must be Unit Tested using a suitable unit tester for the framework, such as Karma, Jasmine, QUnit, Protractor, Jest, Hobbes etc.
screenshots must be saved for automated css regression tests eg using PhantomJs, Caspar
* If possible, keep all JavaScript includes at the bottom of the HTML – just before the closing </body> tag.
* avoid using behavioural markup in HTML (JavaScript inlining).
* The link's value should never be empty, while developing add a # if you don't know the path <a href="#"> ...</a> .
no uppercase in files name. Use dash -, not underscore _ as separator
* CSS style name must use a dash, not underscore. Be all lower-case. And be namespace prefixed eg myob-header
* LESS files must contain only classes, no identifiers i.e. no #id.
* LESS variables must be used for all colours and dimensions. No hard-coded constants.

**The site will be:**
* Mobile first
* Responsive
* Accessible (WCAG 2.0 AA-Level)

### Task Runner
* Where necessary, scripts & stylesheets will be prcoessed by Gulp scripts.
* If ES6 is being used for Javascript, then Babel will be the transpiler.
* BrowserSync can be used to automate page reloading while developing.
* As far as possible, code should be modularized and separate components should be kept in separate, small js, Less & test files. Kept together in their own folder and combined with a gulp script.

### Code formatting
#### CSS
* There is a space after the colon.
* Two spaces before each declaration (no tabs).
* Properties are ordered alphabetically.
* Opening bracket on the same line as the rule set.
* Colour declarations use the short form.
Excerpt (except for one line) from: Jonathan Snook “Scalable and Modular Architecture for CSS.” (page 126).
### jQuery
* Use camel case for naming variables.
* If possible use single quotes around attributes. So `$('.my-class')`, not `$(".my-class")`
* All variables that are used to store/cache jQuery objects should have a name prefixed with a. $
* Always cache your jQuery selector returned objects in variables for reuse.
```javascript
    var $myDiv = $('#myDiv');
    $myDiv.on('click', function(){...});
```
