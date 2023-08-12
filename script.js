const container = document.querySelector('#container')



for (let i = 1;i <= 6;i++){
   
    const div = document.createElement('div')
    if(i % 2 == 0){
        div.style.cssText = "border:black 1px solid;";
    }else{
        div.style.cssText = "border:red 1px solid";
    }
    container.append(div);
}
