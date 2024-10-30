import React from 'react'

const ContactForm = () => {
    return (
        <div className="max-w-md w-full mx-auto px-10 ml-10">
            <h2 className="text-[30px] text-black-300 font-semibold mb-6">Contac Us</h2>
            <form action="">
                <div className="mb-4">
                    <label className="block text-white text- sm font-semibold mb-2" htmlFor=""></label>
                    <input placeholder="Your Name" className="w-full px-3 py-2 border rounded-lg bg-white-800 focus:outline-none focus:border-blue-500" required type="text" />
                </div>
                <div className="mb-4">
                    <label className="block text-white text- sm font-semibold mb-2" htmlFor=""></label>
                    <input placeholder="Your Email" className="w-full px-3 py-2 border rounded-lg bg-white-800 focus:outline-none focus:border-blue-500" required type="email" />
                </div>
                <div className='mb-4'>
                    <label className="block text-white text-sm font-semibold mb-2" htmlFor=""></label>
                    <textarea rows="4" placeholder="Your Massage" className="w-full px-3 py-2 border rounded-lg bg-white-800 focus:outline-none focus:border-blue-500" required type="text" />
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="bg-black text-white font-semibold py-2 rounded-lg focus:outline-white px-36 hover:bg-slate-500">send</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
