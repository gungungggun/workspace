var first = "A", last = "Z";
for(var i = first.charCodeAt(0); i <= last.charCodeAt(0); i++) {
    console.log( eval("String.fromCharCode(" + i + ")") + " " );
}
