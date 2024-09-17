function append(value){
    document.getElementById('inputValue').value+=value;
}

function deleteLast(){
    const value=document.getElementById('inputValue').value;
    document.getElementById('inputValue').value=value.slice(0,-1)
}

function clearScreen(){
    document.getElementById('inputValue').value=""
}

function calculate(){
    const value=document.getElementById('inputValue').value
try {
    document.getElementById('inputValue').value=eval(value);
} catch (error) {
    document.getElementById('inputValue').value=error;
}
}