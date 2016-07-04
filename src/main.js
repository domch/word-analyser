import $ from "jquery";

let mapping = {
    "a": '\u{1F4A9}',
    "b": '\u{9905}',
    "c": 3
};


let userInput = "";


$(document.body).on("keypress", (pEvent)=>{
    pEvent.preventDefault();
    let char = event.which || event.keyCode;
    //let charCode = pEvent.charCode;
    //console.log("keycode", mapping[char]);
    if(mapping[String.fromCharCode(char)])
        userInput += mapping[String.fromCharCode(char)];
    $("#container").html(userInput);
});

