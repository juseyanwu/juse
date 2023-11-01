function bar(){
    console.log(myName);
}

function foo(){
    var myName = 'blue'
    bar()
}

var myName = 'red'
foo()