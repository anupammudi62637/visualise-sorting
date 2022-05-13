

function SortingAlgobubbles(array) {
  let animations=[];
  let aux=array.slice();
  getbubblesort(aux,animations);
  array=aux;
  return [animations,array];
  
}
function getbubblesort(aux,animations)
{
  for(let i=0;i<aux.length-1;i++)
  {
    for(let j=0;j<aux.length-i-1;j++)
    {
        animations.push([j,j+1,-1]);
        animations.push([j,j+1,-1]);
        if(aux[j]>aux[j+1])
        {
          animations.push([j,j+1,aux[j],aux[j+1]]);
         // animations.push([j+1,j,aux[j],j]);
          swap(aux,j,j+1);
        }
        else{
          animations.push([-1,-1]);
          //animations.push([-1,-1]);
        }
    }
    
  }

}
function swap(aux,first,second)
{
  let val=aux[first];
  aux[first]=aux[second];
  aux[second]=val;
}

export default SortingAlgobubbles;