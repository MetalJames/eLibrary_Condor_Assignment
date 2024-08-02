import React from 'react';

const AboutUsPage: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="bg-white p-6 shadow-md rounded">
                <h1 className="text-3xl font-bold mb-4">About Us</h1>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
                    <p className="text-gray-700">
                        Our mission is to provide a seamless and enriching reading experience by offering a wide selection of books for rent. We aim to make literature accessible to everyone and foster a love for reading through convenience and affordability.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
                    <p className="text-gray-700">
                        We are a dedicated team of book enthusiasts who believe in the power of literature. Our team comprises experienced professionals in the fields of publishing, technology, and customer service, all working together to ensure you have the best possible experience.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">Our History</h2>
                    <p className="text-gray-700">
                        Founded in 2024, our company began with a simple goal: to bring the joy of reading to more people. Over the years, we have grown and evolved, expanding our collection and refining our services to meet the needs of our diverse clientele.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default AboutUsPage;
