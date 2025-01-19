import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const FAQ = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const faqs = [
        {
            question: "What's the date and venue of cyberthon?",
            answer: "Cyberthon will be start on 1st February 2025 and end on 2nd February 2025 at YuniQ, Tharamani"
        },
        {
            question: "What's the duration of cyberthon?",
            answer: "24 hours"
        },
        {
            question: "Do I need to have a team to participate in a hackathon?",
            answer: "No, you can participate individually or form a team with other participants at the event."
        },
        {
            question: "What is the size of a team?",
            answer: "A maximum of 4 members can be in a team"
        },
        {
            question: "What are the essentials participants should bring with them?",
            answer: "You should bring your laptop, chargers, and any other development tools you might need."
        },
        {
            question: "Do I get a refund if I can't make it?",
            answer: "No, we do not offer refunds."
        },
    ];

    const toggleQuestion = (index) => {
        setSelectedQuestion(selectedQuestion === index ? null : index);
    };

    return (
        <div className="text-white bg-cover bg-center p-6" style={{ backgroundImage: `url('faq-bg.svg')`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-3/4">
                    <div className="ps-2 sm:ps-16">
                        {faqs.map((faq, index) => (
                            <div key={index} className="mb-4">
                                <h2 className="text-xl font-bold cursor-pointer flex flex-row justify-between" onClick={() => toggleQuestion(index)}>
                                    {faq.question} {selectedQuestion === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </h2>
                                {selectedQuestion === index && <p className='text-lg'>{faq.answer}</p>}
                                <hr style={{ opacity: 0.5 }} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/4">
                    <h2 className="text-9xl font-bold text-center">FAQ</h2>
                </div>
            </div>
        </div>
    );
};

export default FAQ;