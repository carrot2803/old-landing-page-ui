import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./FAQ.css";

const FAQ = () => {
	const [accordionItems, setAccordionItems] = useState(faqData);

	const toggleAccordion = (index: number) => {
		const updatedItems = accordionItems.map((item, i) => (i === index ? { ...item, open: !item.open } : item));
		setAccordionItems(updatedItems);
	};

	return (
		<section className="faq section-padding" id="faq">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<div className="section-title">
							<h2>
								frequently <span>asked</span> queries
							</h2>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-10">
						<div id="accordion">
							{accordionItems.map((item, index) => (
								<div key={index} className="accordion-item">
									<div
										className={`accordion-header ${item.open ? "" : "collapsed"}`}
										onClick={() => toggleAccordion(index)}
									>
										<h3>{item.question}</h3>
										<FontAwesomeIcon
											icon={item.open ? faMinus : faPlus}
											className={`accordion-icon ${item.open ? "text-white" : "text-black"}`}
										/>
									</div>
									<div className={`collapse ${item.open ? "show" : ""}`} id={`collapse-${index}`}>
										<div className="accordion-body">
											<p>{item.answer}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const faqData = [
	{
		question: "Is there any way to preview a course?",
		answer: "Yes! For steps on how to preview a course, review key information, and click on the preview button.",
		open: true,
	},
	{
		question: "How do I take a Studucate course?",
		answer: "Studucate courses are entirely on-demand. You can start the course whenever you like, and there are no deadlines. Accessible from various devices and platforms.",
		open: false,
	},
	{
		question: "Do I have to start my Studucate course at a certain time?",
		answer: "No, there are no deadlines to begin or complete the course. You'll retain access as long as your account is in good standing and Studucate has the course license.",
		open: false,
	},
	{
		question: "How can I get my course certificate?",
		answer: "Certificates are issued upon completing the course and associated assignments. Completing assignments helps measure understanding.",
		open: false,
	},
];

export default FAQ;
