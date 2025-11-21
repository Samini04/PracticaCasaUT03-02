
import peliculas from '../data/peliculas';
import List from '../components/List';
import Interprete from '../components/Interprete'; 

const getAllInterpretes = (movies) => {
  //  Uun array vacío donde iremos guardando los actores únicos
  const listaActores = [];

  movies.forEach(pelicula => {
    pelicula.actores.forEach(actor => {
      
      // Antes de guardar, buscamos en nuestra lista si ya existe alguien con ese nombre
      // .find() devuelve el elemento si lo encuentra.
      const yaExiste = listaActores.find(item => item.nombre === actor.nombre);

      //  Si NO existe, lo añadimos al array
      if (!yaExiste) {
        listaActores.push({
          ...actor, //  Esto para copiar todo el objeto actor  
          id: actor.nombre   // añade el nombre como id
        });
      }
    });
  });

  return listaActores;
};


export default function InterpretesPage() {
  //  Obtenemos la lista única de intérpretes
  const interpretes = getAllInterpretes(peliculas);

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-center">Listado de Intérpretes</h2>
      
      {/* Llamo al componente List, le paso la funccion renderItem */}
      <List 
        items={interpretes} 
        renderItem={(interprete) => (
          // Usamos tu componente Interprete para renderizar cada item
          <Interprete
            key={interprete.id}
            nombre={interprete.nombre}
            foto={interprete.imagen} 
          >
            {interprete.biografia}
          </Interprete>
        )}
      />
    </section>
  );
}