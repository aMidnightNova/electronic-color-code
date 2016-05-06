
var JSFiles = ['data.js','main.js']; // simple way to make sure you have all the projects includes, a list!
var JSFilesDocRoot = 'scripts/'; //the relative path to the JS files.



function addJS() { // inject listed files into the dom.

    var fileCount = JSFiles.length ;
    console.log(fileCount);
    for( var i = 0; i < fileCount; i++ ) {
        var script = document.createElement( 'script' );
        script.type = 'text/javascript';
        script.src = JSFilesDocRoot + JSFiles[i] ;
        document.head.appendChild( script );
    }

} addJS();