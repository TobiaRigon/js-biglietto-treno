//` chiedi km da percorrere
const distanza = parseInt(prompt("Km da percorrere")) ;


// chiedi età
const eta = parseInt(prompt("età")) ;

// calcola tariffa base
const prezzoKm = 0.21 ;
let tariffaFinale = "";
const tariffaBase = distanza * prezzoKm;

// calcola tariffe scontate
// (prezzoKm per distanza-20%if minorenne)(prezzoKm per distanza-40% else if over65)(prezzoKm per distanza else)
if (eta<18){
    tariffaFinale = (tariffaBase - (((tariffaBase) * 20) / 100 ));

}else if(eta>65){
    tariffaFinale = (tariffaBase - (((tariffaBase) * 40) / 100 ));

}else{
    tariffaFinale= tariffaBase;
}

// arrotonda tariffa finale
tariffaFinale= tariffaFinale.toFixed(2);


// mostra tariffa
document.getElementById('my_id').innerHTML=`Il totale è di: ${tariffaFinale} € `  ;
