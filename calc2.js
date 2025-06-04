var display=document.getElementById("display")

function appendTo(input)
{
    console.log('hiiii')
    display.value += input
}

function backspace(input)
{
    display.value = display.value.slice(0,-1)
}

function equals()
{
    var result=eval(display.value)
    display.value=result
}

function allclear(input)
{
    display.value=''
}
