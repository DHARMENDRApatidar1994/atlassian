import React, { useState } from 'react'
import "./Frequently.css"
// import { FaAngleDown, FaAngleUp } from 'react-icons/fa';


const sections = [
    { heading: 'Can I upgrade my package level?', content: 'Yes. You can upgrade all of your user licenses to the next package level at any time, and simply pay the pro-rated difference for the remainder of your current term.' },
    { heading: 'Can I mix licenses at different levels?', content: 'We do not support a mix of Standard and Enterprise licenses. All licenses in your organization must be at the same package level.' },
    { heading: 'Do I need to buy onboarding services?', content: 'Yes. Jira Align customers purchase a small set of basic configuration and training services to get started on the right foot. Scaling agile is about much more than just using our software, and our seasoned team of industry veterans will set you up for success quickly and hassle-free.' },
    { heading: 'Do I need to pay for a year up-front?', content: 'All Jira Align contracts are billed annually by default. Scaling Agile and transforming your team is no small feat, and weve learned from our customers that committing to a least a full year of using Jira Align to support your transformation makes teams more successful in the long run.' },
    { heading: 'What is the ratio of Jira Align seats to Jira / Integrated seats?', content: 'For each Jira Align seat, we provide four Jira / Integrated seats free of charge. These users can log in to Jira Align for team-level access.' },
    { heading: 'What about customer support?', content: 'All Jira Align customers have access to one of our dedicated customer support teams. Support includes an online Help Center that delivers an extensive, thorough, and continually updated knowledge base, as well as vibrant community channels that facilitate questions and answers about Jira Align.' },
    { heading: 'Do I need to buy Jira Align for every Jira user in my environment?', content: 'No. You only need Jira Align seats for Jira / integrated seats that are scope for your transformation or scaled agile initiative.' },
];

const Frequently = () => {


    const [activeIndex, setActiveIndex] = useState(null);

    const toggleSection = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div>
            <div className='freqmain'>
                <h3>Frequently asked questions</h3>
                {/* <h5>Have something to know? Check here if you have any questions about us.</h5> */}
            </div>

            <div className="freqcontainer">
                {sections.map((section, index) => (
                    <div key={index} className="section mt-4">
                        <div className="header" onClick={() => toggleSection(index)}>
                            <h5 className="heading">{section.heading}</h5>
                            <div className="icon">
                                {activeIndex === index ? <p className='text-primary'>hide-</p> : <p className='text-primary'>show+</p> }
                            </div>
                        </div>
                        {activeIndex === index && (
                            <div className="content">
                                <p>{section.content}</p>
                            </div>
                        )}
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Frequently