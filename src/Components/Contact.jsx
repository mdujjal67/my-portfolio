import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
    const form = useRef();

    const handleContactedUser = (event) => {
        event.preventDefault();

        // 1. Show a "Loading" alert
        Swal.fire({
            title: 'Sending...',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        // 2. Send via EmailJS
        // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY' with your actual IDs
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                // 3. Success Alert
                Swal.fire({
                    title: 'Success!',
                    text: 'Your message has been sent successfully!',
                    icon: 'success',
                    confirmButtonColor: '#00a1ea',
                    confirmButtonText: 'Great!'
                });
                event.target.reset(); // Clear the form
            }, (error) => {
                // 4. Error Alert
                console.error(error.text);
                Swal.fire({
                    title: 'Error!',
                    text: 'Something went wrong. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            });
    };

    return (
        <div className="pt-[100px] container mx-auto" id="contact">
            {/* Section Header */}
            <div className="text-center mb-16 lg:mb-24">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
                    Get <span className="border-b-4 border-[#00a1ea] pb-2 text-[#00a1ea]">In Touch</span> 
                </h1>
            </div>

            <div className='mx-6'>
                <div className="mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-12">

                    {/* Left Side: Contact Info (Dark Theme) */}
                    <div className="md:col-span-5 bg-slate-900 p-10 text-white flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                            <p className="text-gray-400 mb-10">
                                I am open to new opportunities and collaborations. Feel free to reach out!
                            </p>

                            {/* Left side part */}
                            <div className="space-y-8">
                                {/* Location - Links to Google Maps */}
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Dhaka,Bangladesh"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-start gap-5 group cursor-pointer"
                                >
                                    <div className="bg-[#00a1ea]/20 p-4 rounded-xl group-hover:bg-[#00a1ea] transition-all duration-300">
                                        <FaMapMarkerAlt className="text-[#00a1ea] group-hover:text-white text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">Location</h4>
                                        <p className="text-gray-400 group-hover:text-[#00a1ea] transition-colors">Dhaka, Bangladesh</p>
                                    </div>
                                </a>

                                {/* Phone - Prompts a call */}
                                <a
                                    href="tel:+8801679439353"
                                    className="flex items-start gap-5 group cursor-pointer"
                                >
                                    <div className="bg-[#00a1ea]/20 p-4 rounded-xl group-hover:bg-[#00a1ea] transition-all duration-300">
                                        <FaPhoneAlt className="text-[#00a1ea] group-hover:text-white text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">Phone</h4>
                                        <p className="text-gray-400 group-hover:text-[#00a1ea] transition-colors">+88 01679-439353</p>
                                    </div>
                                </a>

                                {/* Email - Opens default mail client */}
                                <a
                                    href="mailto:mdujjal.mm67@gmail.com"
                                    className="flex items-start gap-5 group cursor-pointer"
                                >
                                    <div className="bg-[#00a1ea]/20 p-4 rounded-xl group-hover:bg-[#00a1ea] transition-all duration-300">
                                        <FaEnvelope className="text-[#00a1ea] group-hover:text-white text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg">Email</h4>
                                        <p className="text-gray-400 group-hover:text-[#00a1ea] transition-colors">mdujjal.mm67@gmail.com</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="hidden md:block w-24 h-24 bg-[#00a1ea] rounded-full -mb-20 -ml-20 opacity-20"></div>
                    </div>

                    {/* Right Side: Form (Light Theme) */}
                    <form ref={form} onSubmit={handleContactedUser} className="md:col-span-7 p-10 bg-white">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    name="name" // Ensure this matches {{from_name}} in EmailJS template
                                    placeholder="Enter your name"
                                    className="border-b-2 border-gray-200 focus:border-[#00a1ea] outline-none py-2 transition-all"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    name="email" // Ensure this matches {{from_email}} in EmailJS template
                                    placeholder="example@email.com"
                                    className="border-b-2 border-gray-200 focus:border-[#00a1ea] outline-none py-2 transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 mb-8">
                            <label className="text-sm font-bold text-gray-700">Your Message</label>
                            <textarea
                                rows="5"
                                name="message" // Ensure this matches {{message}} in EmailJS template
                                placeholder="Write your message here..."
                                className="border-b-2 border-gray-200 focus:border-[#00a1ea] outline-none py-2 transition-all resize-none"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="flex items-center justify-center gap-2 w-full sm:w-max bg-[#00a1ea] text-white font-bold px-10 py-4 rounded-xl hover:bg-slate-900 transition-all duration-300 shadow-lg hover:shadow-[#00a1ea]/30"
                        >
                            Send Message <FaPaperPlane />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;