import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = ({target:{name, value}}) => {
        setForm({ ...form, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send('service_pwd8qkr',
                'template_j63ualg',
                {from_name:form.name,
                    to_name: 'Peace',
                    from_email: form.email,
                    to_email: 'peacekimathi104@gmail.com',
                    message: form.message
                },
                '9uelDcGzoMdDWTnF0'
                );

            setLoading(false);
            alert('Your message has been sent!');
            setForm({ name: "", email: "", message: "" });

        } catch (error) {
            setLoading(false);

            console.error(error);

            alert('Something went wrong!')

        }
    };

    return (
        <section className="c-space my-20">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                {/*<img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen"/>*/}

                <div className="head-text">
                    <h3 className="head-text">Let's Talk!</h3>
                    <p className="text-lg text-white-600 mt-3">Looking for a Data Scientist? I'm here to offer my services.</p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Joe Doe"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="joeDoe@gmail.com"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Message</span>
                            <textarea
                                name="message"
                                rows={4}
                                value={form.message}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="HI,I wanna give you a job...."
                            />
                        </label>

                        <button type="submit" className="field-btn" disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn-arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
