import React from 'react'

function Algoselection(array) {
    let animations=[];
    let aux=array.slice();
  getselectionsort(aux,animations);
  array=aux;
  return [animations,array];
}

function getselectionsort(aux,animations)
{
  var i, j, min_idx;
 const n=aux.length;
  // One by one move boundary of unsorted subarray
  for ( i = 0; i < n-1; i++)
  {
      // Find the minimum element in unsorted array
      min_idx = i;
      for (j = i + 1; j < n; j++){
      animations.push([min_idx,j,0]);
      animations.push([min_idx,j,0]);
      if (aux[j] < aux[min_idx])
          min_idx = j;
      }
      animations.push([min_idx,aux[i],1]);
      animations.push([i,aux[min_idx],1]);
      // Swap the found minimum element with the first element
      swap(aux,min_idx, i);
  }
    
}
function swap(aux,first,second)
{
  let val=aux[first];
  aux[first]=aux[second];
  aux[second]=val;
}
export default Algoselection;