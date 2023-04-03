import React from 'react'


function About_us() {

  
  return (
    <>
  <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
   
  <div class="container mx-auto px-4 py-8">
  {/* <!-- Título y párrafo --> */}
  <div class="mb-8">
  <h1 class="text-3xl font-bold text-white mb-2">Acerca de Nosotros</h1>
  <p class="text-lg text-left text-white">Bienvenidos a nuestra plataforma de 
  fondos de inversión, donde ofrecemos oportunidades en diversos proyectos y 
  activos. Aquí, facilitamos la diversificación y el crecimiento del portafolio 
  de los inversores. Explore nuestro sitio para encontrar fondos que se ajusten a 
  sus objetivos y apetito de riesgo..</p>
</div>



{/* <!-- Sección de contenido --> */}
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* <!-- Lado izquierdo: imagen --> */}
      <div class="w-full">
        <img class="rounded shadow" src="https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Imagen de ejemplo"/>
      </div>
      
      {/* <!-- Lado derecho: texto --> */}
      <div class="w-full">

  <div class="p-4 bg-custom-gray hover:bg-custom-gray rounded-lg cursor-pointer text-white">
  {/* <!-- ícono de HeroCoin --> */}
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
</svg>

    <h3 class="font-bold text-white mt-4">Diversificación</h3>
    <p class="text-white">Reduce el riesgo al invertir en múltiples sectores y activos.</p>
  </div>
  <div class="p-4  cursor-pointer text-white">
   {/* <!-- ícono de HeroCoin --> */}
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
</svg>

    <h3 class="font-bold text-white mt-4">Acceso a oportunidades</h3>
    <p class="text-white">Participación en proyectos difíciles de alcanzar individualmente.</p>
  
  </div>
  <div class="p-4  cursor-pointer text-white">
   {/* <!-- ícono de HeroCoin --> */}
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
</svg>

    <h3 class="font-bold text-white mt-4">Economías de escala</h3>
    <p class="text-white">Menores costos y mayores rendimientos potenciales.</p>
  
  </div>
</div>

    </div>
  </div>
    
    </div>
  </>
  )
}

export default About_us