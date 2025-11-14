

function Interprete({ foto, nombre, children, esNota10 }) {
return (
<article tabIndex={0} aria-label={`Intérprete ${nombre}${esNota10 ? ', destacado' : ''}`} className="bg-white rounded p-3 shadow">
<figure className="aspect-square w-full overflow-hidden rounded">
<img src={foto} alt={`Foto de ${nombre}`} className="w-full h-56 object-cover" loading="lazy" />
</figure>
<h4 className={`mt-2 ${esNota10 ? 'text-red-600' : 'text-gray-900'}`}><strong>{nombre}</strong></h4>
<p className="text-sm text-gray-700">{children}</p>
</article>
);
}


export default Interprete;