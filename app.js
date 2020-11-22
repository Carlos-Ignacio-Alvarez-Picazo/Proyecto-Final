document.getElementById("btnSave").addEventListener("click",()=>{
    let=Todos= document.getElementById("txtTodos").value;
    localStorage.setItem("miApp",Todos);
    console.log("guardado " + Todos);
})
document.getElementById("btnRestore").addEventListener("click",()=>{
    let Todos=localStorage.getItem("miApp");
    document.getElementById("txtTodos").value=Todos;
    console.log("leido " + Todos);
})
//Motor recibido

document.getElementById("btnSave").addEventListener("click",()=>{
    let Montorecibido=document.getElementById("txtMontorecibido").value;
    localStorage.setItem("miApp",Montorecibido);
    console.log("guardado " + Montorecibido);
})
document.getElementById("btnRestore").addEventListener("click",()=>{
    let Montorecibido=localStorage.getItem("miApp");
    document.getElementById("txtMontorecibido").value=Montorecibido;
    console.log("leido " + Montorecibido;
})
// Para Monto total
document.getElementById("btnSave").addEventListener("click",()=>{
    let Montototal=document.getElementById("txtMontototal").value;
    localStorage.setItem("miApp",Montototal);
    console.log("guardado " + Montototal);
})
document.getElementById("btnSave").addEventListener("click",()=>{
    let Montototal=localStorage.getItem("miApp");
    document.getElementById("txtMontototal").value=Montototal;
    console.log("leido " + Montototal);
})


