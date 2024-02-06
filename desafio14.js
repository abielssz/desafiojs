// 14 - Utilize um método para adicionar no meio deste array.

let nomes = ["João",  "Maria",  "Jose",  "Pedro"]

let indice = Math.floor(nomes.length / 2);

nomes.splice(indice,0,"Abiel");

console.log (nomes)