function makeRequestB(){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200){
            alert('Data: ' + this.responseText + '\nStatus: ' + this.status);
        }
    };
    let a = 100;
    while  (a  > 0){
        a-=1;
    }
    xhr.open('GET', "/b");
    xhr.send();
}