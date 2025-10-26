import React from 'react';

function Card({ artikel, btnText = "Read more" }) {
    console.log("Value in console: ", artikel);

    // ye original / default tariqa he props ko access karne ka, props ek object he jisme sare passed values hoti hen
    // function Card(props) {
    // console.log("props: ", props.artikel);
    // console.log(props.artikel);
    
    return (
           <div>
     <article className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
  <img
    alt=""
    src="https://images.pexels.com/photos/923360/pexels-photo-923360.jpeg"
    class="absolute inset-0 h-full w-full object-cover"
  />

  <div class="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
    <div class="p-4 sm:p-6">
      <time datetime="2025-10-15" class="block text-xs text-white/90"> 15th Oct 2025 </time>

      <a href="#">
        <h3 class="mt-0.5 text-lg text-white">{artikel}</h3>
      </a>

      <p class="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
        pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
        quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
        atque dignissimos. Molestias explicabo corporis voluptatem?
      </p>
    </div>
     <div class="p-6 pt-0">
    <button
      class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
        {/* ye {btnText || "Read more"} approach sahi nahi he kuk ziada code men dhondna time consume karta he is liye hum ise uper hi define kardenge artikel = "Read more", readibility ka issue he performance ka nahi ye, agr kisi user ne ise <Card /> k sath value dena bhol gaya he to matlb na artikel he aur na uski koi value kuk kisi ne use kia aur use pata nahi he ya phir wo bhol gaya  */}
      {btnText} 
    </button>
  </div>
  </div>
  
</article>



  {/* <div className="bg-gray-900">
  <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
    <div className="relative isolate overflow-hidden bg-gray-800 px-6 pt-16 after:pointer-events-none after:absolute after:inset-0 after:inset-ring after:inset-ring-white/10 sm:rounded-3xl sm:px-16 after:sm:rounded-3xl md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
      <svg viewBox="0 0 1024 1024" aria-hidden="true" className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0">
        <circle r="512" cx="512" cy="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#7775D6" />
            <stop offset="1" stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
        <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">Boost your productivity. Start using our app today.</h2>
        <p className="mt-6 text-lg/8 text-pretty text-gray-300">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <a href="#" className="rounded-md bg-gray-700 px-3.5 py-2.5 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"> Get started </a>
          <a href="#" className="text-sm/6 font-semibold text-white hover:text-gray-100">
            Learn more
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div className="relative mt-16 h-80 lg:mt-8">
        <img width="1824" height="1080" src="https://images.pexels.com/photos/923360/pexels-photo-923360.jpeg" alt="App screenshot" className="absolute top-0 left-0 w-228 max-w-none rounded-md bg-white/5 ring-1 ring-white/10" />
      </div>
    </div>
  </div>
</div> */}
  </div>
    )
}

export default Card