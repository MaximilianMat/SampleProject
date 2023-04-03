export function makeRequestB(){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200){
            alert('Data: ' + this.responseText + '\nStatus: ' + this.status);
        }
    };
    xhr.open('GET', "/b");
    xhr.send();
}