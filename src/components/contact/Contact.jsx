import React from 'react'

const Contact = () => {
  return (
    <>
    <section id="contact" className="bg-white py-16">
     <div className="container">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 px-8" data-aos="fade-up" data-aos-delay="500">
       <div className="space-y-4">
        <h2 className="text-3xl font-serif text-blue-700">Reserve a Table</h2>
        <p className="text-slate-600">Have questions or planning a visit? Send us a note and we’ll get back quickly.</p>
        <ul className="text-slate-700">
         <li><span className="font-semibold">Phone:</span> (555) 012-3456</li>
         <li><span className="font-semibold">Email:</span> hello@fresheats.example</li>
         <li><span className="font-semibold">Hours:</span> Mon–Sat, 11:00–21:00</li>
        </ul>
       </div>
       <form className="bg-blue-50 rounded-lg p-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
         <input className="h-10 px-3 rounded-md" type="text" placeholder="Full name" />
         <input className="h-10 px-3 rounded-md" type="email" placeholder="Email address" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
         <input className="h-10 px-3 rounded-md" type="tel" placeholder="Phone (optional)" />
         <input className="h-10 px-3 rounded-md" type="date" placeholder="Date" />
        </div>
        <textarea className="w-full h-24 px-3 py-2 rounded-md" placeholder="Message or reservation details" />
        <button type="button" className="p-3 bg-gradient-to-r from-amber-500 to-amber-700 text-white w-40 rounded-full">Send message</button>
       </form>
      </div>
     </div>
    </section>
    </>
  )
}

export default Contact


