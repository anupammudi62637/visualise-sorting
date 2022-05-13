import React from 'react'

function Algoinsertion(array) {
    let animations=[];
    let aux=array.slice();
  getinsertionsort(aux,animations);
  array=aux;
  return [animations,array];
}
function getinsertionsort(aux,animations)
{
    let n = aux.length;
    for (let i = 1; i < n; i++) {
        // Choosing the first element in our unsorted subarray
        let current = aux[i];
        // The last element of our sorted subarray
        let j = i-1; 
        while ((j > -1) && (current < aux[j])) {
            animations.push([j+1,j,0]);
            animations.push([j+1,j,0]);
            animations.push([j+1,aux[j],1]);
            animations.push([j,aux[j+1],1]);
            const t=aux[j+1];
            aux[j+1] = aux[j];
            aux[j]=t;

            j--;
        }
        animations.push([j+1,current,1]);
        aux[j+1] = current;
    }
}

export default Algoinsertion