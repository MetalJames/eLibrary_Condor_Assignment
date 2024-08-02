import React from 'react';

const ContactUsPage: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="bg-white p-6 shadow-md rounded">
                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
                    <p className="text-gray-700">
                        If you have any questions or need assistance, feel free to reach out to us. We are here to help you with any inquiries or issues you may have.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700">
                        <li>Email: support@ourbookstore.com</li>
                        <li>Phone: +1 (555) 123-4567</li>
                        <li>Address: 123 Book Street, Bibliopolis, BC, 12345</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Business Hours</h2>
                    <p className="text-gray-700">
                        Our team is available during the following hours to assist you:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700">
                        <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
                        <li>Saturday: 10:00 AM - 3:00 PM</li>
                        <li>Sunday: Closed</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">Feedback and Suggestions</h2>
                    <p className="text-gray-700">
                        We value your feedback and suggestions. If you have any comments about our service or ideas for improvement, please let us know. Your input helps us enhance our offerings and serve you better.
                    </p>
                    <p className="text-gray-700">
                        You can provide feedback through our <a href="/feedback" className="text-blue-500 underline">feedback form</a>.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default ContactUsPage;
