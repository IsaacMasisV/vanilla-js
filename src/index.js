// Inserte el código aquí

// Inserte el código aquí

let h = document.getElementById ('h')
let m = document.getElementById('m')
let s = document.getElementById('s')
let ms = document.getElementById('ms')

setInterval(() => {
    function reloj  () {
        let date = new Date ();
         h.innerHTML = date.getHours();
         m.innerHTML = date.getMinutes();
         s.innerHTML = date.getSeconds();
         ms.innerHTML = date.getse();
         
   
    }
    reloj()
    
},  1000);

