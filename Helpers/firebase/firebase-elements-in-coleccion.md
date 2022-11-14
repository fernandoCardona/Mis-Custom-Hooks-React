//1.-Extraer todos los elementos de una coleccion: (habiendo instalado el "npm install firebase")
import firebase from 'firebase';


export const mostrarDocumentos = ( snapshot: firebase.forestore.QuerySnapshot ) => {
    const documentos: any[] = [];
			snapshot.forEach( snapHijo => {
				documentos.push( {
					id: snapHijo.id,
					...snapHijo.data()
				});
            });
    console.log(documentos);
    return documentos;
}

//2.-en el archivo llamamos al helper 
import mostrarDocumentos from '../helper/firebase-elements-in-coleccion'

coleccionRef
    .onsnapshot( snap =>{
        mostrarDocumentos( snap );
    })


    //Version corta :
    //--------------
    //coleccionRef( mostrarDocumentos);



//Sin realTime de los cambios:  
//--------------
//coleccionRef
//    .get().then( snap => mostrarDocumentos( snap ) );