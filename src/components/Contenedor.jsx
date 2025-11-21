import { Outlet } from "react-router-dom";
import Header from "./Header"; 
import Footer from "./Footer"; 

/**
 * Componente Contenedor (Layout)
 * Define la estructura visual principal de la aplicación.
 * Muestra el Header, el contenido principal (a través de Outlet) y el Footer.
 */
function Contenedor({ titulo }) {
  return (
    // Contenedor principal que usa flex-col para ordenar los elementos verticalmente
    // y min-h-screen para que ocupe al menos toda la altura de la pantalla
    <div className="flex flex-col min-h-screen bg-gray-100">
      
      {/* 3. El Header se muestra siempre arriba */}
      <Header />

      {/* 4. El contenido principal */}
      <main
        id="main-content"
        role="main"
        tabIndex="-1"
        // 'flex-grow' hace que esta sección crezca para ocupar el espacio
        // disponible entre el header y el footer
        className="flex-grow w-full max-w-7xl mx-auto p-4"
      >
        <section
          aria-labelledby="main-section-title"
          className="w-full" // Quitamos el centrado vertical
        >
          {/* El título es opcional y venía de tu código original */}
          {titulo && (
            <h1
              id="main-section-title"
              className="text-3xl font-bold my-4 text-center"
            >
              {titulo}
            </h1>
          )}

          {/* Aquí es donde React Router renderizará la página actual  */}
          <Outlet />
        </section>
      </main>

      {/* 5. El Footer se muestra siempre abajo */}
      <Footer />
    </div>
  );
}

export default Contenedor;