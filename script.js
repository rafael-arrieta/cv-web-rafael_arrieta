let curriculum= document.getElementById("curriculum");
let capacitacion= document.getElementById("capacitacion");
let contacto= document.getElementById("contacto");

let modalPrimary= document.getElementById("modalPrimary");
let btnContainer= document.getElementById("btnContainer");
let modalCv= document.getElementById("modalCv");
let modalCap= document.getElementById("modalCap");
let modalContacto= document.getElementById("modalContacto");

let btnVolverCv= document.getElementById('btnVolverCv');
let btnVolverCap= document.getElementById('btnVolverCap');
let btnVolverCon= document.getElementById('btnVolverCon');
let header= document.getElementById("header");

let value = 0

//modal-curriculum
    curriculum.addEventListener('click',()=>{
        if(value==0){
            transicion(modalCv)
            value = 1;
        }
    })

    btnVolverCv.addEventListener('click',()=>{
        if(value==1){transicionReverse(modalCv)}
        value=0
   
    })

    btnVolverCap.addEventListener('click',()=>{
        if(value==2){transicionReverse(modalCap)}
        value=0
    })

//modal-capacitacion
    capacitacion.addEventListener('click',()=>{
        if(value==0){
            transicion(modalCap)
            value=2;
        }
    })

    contacto.addEventListener('click',()=>{
        if(value==0){
            transicionCon(modalContacto)
            value=3;
        }
    })

    btnVolverCon.addEventListener('click',()=>{
        if(value==3){transicionReverseCon(modalContacto)}
        value=0
    })

function transicion(aparece){
    modalPrimary.classList.remove('scaled-remove')
    modalPrimary.classList.add('scaled-modal-1');
    btnContainer.classList.remove('opacidad-hidden');
    btnContainer.classList.add('opacidad-none')
    header.classList.remove('opacidad-hidden');
    header.classList.add('opacidad-none');
    setTimeout(function(){
        btnContainer.classList.add('display-none')
        aparece.classList.remove('display-none')
        header.classList.add('visibiblty-none');
    },500);
    setTimeout(function(){
        aparece.classList.add('opacidad-hidden');
    },750); 
}
function transicionReverse(desaparece){
    btnContainer.classList.add('opacidad-none');
    btnContainer.classList.remove('opacidad-hidden');
    desaparece.classList.remove('opacidad-hidden'); //
    desaparece.classList.add('opacidad-none'); //
    setTimeout(function(){
        desaparece.classList.add('display-none')
        btnContainer.classList.remove('display-none')
        modalPrimary.classList.add('scaled-remove');
        modalPrimary.classList.remove('scaled-modal-1');
    },500);

    setTimeout(function(){
        btnContainer.classList.add('opacidad-hidden');
        btnContainer.classList.remove('opacidad-none');
    },750)

    setTimeout(function(){
        header.classList.remove('opacidad-none');
        header.classList.add('opacidad-hidden');
    },1000);
}

function transicionCon(aparece){
    modalPrimary.classList.remove('scaled-remove')
    modalPrimary.classList.add('scaled-modal-2');
    btnContainer.classList.remove('opacidad-hidden');
    btnContainer.classList.add('opacidad-none')
    header.classList.remove('opacidad-hidden');
    header.classList.add('opacidad-none');
    setTimeout(function(){
        btnContainer.classList.add('display-none')
        aparece.classList.remove('display-none')
        header.classList.add('visibiblty-none');
    },500);
    setTimeout(function(){
        aparece.classList.add('opacidad-hidden');
    },750); 
}
function transicionReverseCon(desaparece){
    btnContainer.classList.add('opacidad-none');
    btnContainer.classList.remove('opacidad-hidden');
    desaparece.classList.remove('opacidad-hidden'); //
    desaparece.classList.add('opacidad-none'); //
    setTimeout(function(){
        desaparece.classList.add('display-none')
        btnContainer.classList.remove('display-none')
        modalPrimary.classList.add('scaled-remove');
        modalPrimary.classList.remove('scaled-modal-2');
    },500);

    setTimeout(function(){
        btnContainer.classList.add('opacidad-hidden');
        btnContainer.classList.remove('opacidad-none');
    },750)

    setTimeout(function(){
        header.classList.remove('opacidad-none');
        header.classList.add('opacidad-hidden');
    },1000);
}


let primaryArray= [1,15,54,35,7,18,22,7]
console.log(primaryArray);
let newArray= burburja(primaryArray)
console.log(newArray);

function burburja (arr){
    let l = arr.length;
    for (let i = 0; i < l; i++ ) {
        for (let j = 0; j < l - 1 - i; j++) {
        if ( arr[ j ] > arr[ j + 1 ] ) {
            [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
        }
        }
    }
    return arr;
}