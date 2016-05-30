# Isobar Front-end Code Standards
https://isobar-idev.github.io/code-standards/
# How to create a website semantic
http://www.bbc.co.uk/guidelines/futuremedia/technical/semantic_markup.shtml
# Mastering Markdown (GitHub Guides)
https://guides.github.com/features/mastering-markdown/
# How to prevent page scrolling when scrolling a DIV element?
```javascript
$( '.scrollable' ).bind( 'mousewheel DOMMouseScroll', function ( e ) {
    var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;

    this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
    e.preventDefault();
});
```
