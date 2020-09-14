
//lo que hace es eliminar el # de la url cuando se busque por id, lo del slice. El split no me acuerdo
const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';


   

export default getHash;
