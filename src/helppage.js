import React, { useState } from 'react';
import './helppage.css';

// Step-by-step instructions
const steps = [
  {
    title: "How to Register",
    description: "Create an account by clicking the sign-up button. Fill in your details including full name, email, and password.",
    image: "https://inbound.hargerhowe.com/hubfs/Registerforsuccess.jpg#keepProtocol", // Use relevant images here
  },
  {
    title: "How to Reserve a Parking Spot",
    description: "Choose your vehicle, select the parking spot, and confirm your reservation with a click.",
    image: "https://www.researchgate.net/profile/Abhirup-Khanna/publication/303842610/figure/fig3/AS:419850414510082@1477111547896/Booking-a-parking-slot-The-above-figure-depicts-the-presence-of-vacant-and-occupied_Q320.jpg",
  },
  {
    title: "How to Make Payments",
    description: "Pay securely using available payment methods after reserving a parking spot.",
    image: "https://img.freepik.com/premium-vector/digital-payment-qr-code-scan-payment_598748-404.jpg",
  },
  {
    title: "How to Provide Feedback",
    description: "Leave feedback after your parking session to help improve the service.",
    image: "https://tse2.mm.bing.net/th?id=OIP.8TgchDMMIB1AUXlhPR7QsAHaFr&pid=Api&P=0&h=180",
  },
  {
    title: "How to Report Issues",
    description: "Report any parking issues directly from the app. The support team will take care of it.",
    image: "https://c8.alamy.com/comp/2J9YMK2/policeman-giving-ticket-to-man-for-parking-violation-3d-isometric-vector-illustration-2J9YMK2.jpg",
  },
];

const faqs = [
  { question: "How do I know if a parking spot is available?", answer: "You can check availability by looking at the green/red indicator or by selecting a spot in the app." },
  { question: "Can I cancel my reservation?", answer: "Yes, you can cancel your reservation directly through the app before your check-in time." },
  { question: "What should I do if the parking spot I reserved is taken?", answer: "If your reserved spot is taken, you can contact support or choose another available spot." },
  { question: "How can I update my profile information?", answer: "Go to your profile page and click on 'Edit' to update your information." },
  { question: "Is there a way to save my favorite parking spots?", answer: "Yes, you can save your favorite parking spots in the 'Favorites' section of the app." },
];

export function HelpPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="help-container">
      <h1 className="help-header">Smart Parking System Help</h1>

      <section className="steps">
        <h2>How to Use the App</h2>
        <div className="steps-list">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <img src={step.image} alt={step.title} className="step-image" />
            </div>
          ))}
        </div>
      </section>

      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className={`faq-arrow ${openFAQ === index ? 'open' : ''}`}>↓</span>
              </div>
              {openFAQ === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </section>

      <section className="contact-support">
        <h2>Contact Support</h2>
        <p>If you have any further questions or need help, please reach out to us:</p>
        <a href="mailto:support@smartparking.com" className="support-email">support@smartparking.com</a>
      </section>
    </div>
  );
}

/* 
 image: "https://inbound.hargerhowe.com/hubfs/Registerforsuccess.jpg#keepProtocol", // Use relevant images here
"https://www.researchgate.net/profile/Abhirup-Khanna/publication/303842610/figure/fig3/AS:419850414510082@1477111547896/Booking-a-parking-slot-The-above-figure-depicts-the-presence-of-vacant-and-occupied_Q320.jpg",
"https://img.freepik.com/premium-vector/digital-payment-qr-code-scan-payment_598748-404.jpg",
"https://tse2.mm.bing.net/th?id=OIP.8TgchDMMIB1AUXlhPR7QsAHaFr&pid=Api&P=0&h=180",

 */
