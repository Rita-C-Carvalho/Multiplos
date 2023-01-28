

function somar(limite){
    let multiplos = 0;
    
    for (i = 0; i <= limite; i++ ){
        if(i % 3 === 0 || i % 5 === 0){
            multiplos += i;
        }   
    }

    console.log(multiplos);
}

somar(10);