import React, { useEffect, useState } from "react";
import "./AtlasResources.css";
import ResourceImg1 from "../assets/Images/AtlasResource1.png";
import ResourceImg2 from "../assets/Images/AtlasResource2.png";
import ResourceImg3 from "../assets/Images/AtlasResource3.png";
import ResourceImg6 from "../assets/Images/AtlasResource6.png";
import ResourceImg5 from "../assets/Images/AtlasResource5.png";
import ResourceImg4 from "../assets/Images/AtkasResource4.png";
import { useNavigate } from "react-router-dom";

const AtlasResources = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;
  const [showAll, setShowAll] = useState(false);

  const cardData = [
    {
      image: ResourceImg1,
      heading: "EBOOK",
      description:
        "Get sample schedules, checklists, and agendas in this guide",
      link: "Learn more ",
      linkArrow: "➜",
    },
    {
      image: ResourceImg2,
      heading: "WHITEPAPER",
      description: "Learn how OKRs can drive transformation and unlock agility",
      link: "Learn more ",
      linkArrow: "➜",
    },
    {
      image: ResourceImg3,
      heading: "BLOG",
      description: "Lean portfolio management for the agile enterprise",
      link: "Learn more ",
      linkArrow: "➜",
    },
    {
      image: ResourceImg5,
      heading: "EBOOK",
      description:
        "Connect strategy to execution: Strategic themes and OKRs                              ",
      link: "Learn more ",
      linkArrow: "➜",
    },
    {
      image: ResourceImg6,
      heading: "BLOG",
      description:
        "Real-world enterprise agility lessons from Accenture and Atlassian",
      link: "Learn more ",
      linkArrow: "➜",
    },

    {
      image: ResourceImg4,
      heading: "EBOOK",
      description:
        "Escape the “Feature Factory” with objectives and key results",
      link: "Learn more ",
      linkArrow: "➜",
    },
    {
      image: ResourceImg1,
      heading: "WHITEPAPER",
      description:
        "Connect strategy to execution: Strategic themes and OKRs                              ",
      link: "Learn more ",
      linkArrow: "➜",
    },
    {
      image: ResourceImg6,
      heading: "WHITEPAPER",
      description:
        "Executive leadership in a SAFe World                              ",
      link: "Learn more ",
      linkArrow: "➜",
    },
    {
      image: ResourceImg3,
      heading: "WHITEPAPER",
      description:
        "Lutron illuminates the way to intelligent lighting experiences with Jira Align",
      link: "Learn more ",
      linkArrow: "➜",
    },
    {
      image: ResourceImg4,
      heading: "BLOG",
      description:
        "Blueprints: Guides for implementing best of breed agile concepts with Jira Align",
      link: "Learn more ",
      linkArrow: "➜",
    },
    {
      image: ResourceImg1,
      heading: "BLOG",
      description: "Lean portfolio management for the agile enterprise",
      link: "Learn more ",
      linkArrow: "➜",
    },
    {
      image: ResourceImg4,
      heading: "WEBINAR",
      description:
        "How an innovative bank ANZ is changing the way 50,000 employees work and think",
      link: "Learn more ",
      linkArrow: "➜",
    },
    {
      image: ResourceImg1,
      heading: "BLOG",
      description:
        "Leading transformation through uncertainty: An agile leader’s primer",
      link: "Learn more ",
      linkArrow: "➜",
    },
    {
      image: ResourceImg5,
      heading: "WEBINAR",
      description:
        "How an innovative bank ANZ is changing the way 50,000 employees work and think",
      link: "Learn more ",
      linkArrow: "➜",
    },
    {
      image: ResourceImg6,
      heading: "BLOG",
      description: "The Lean answer to portfolio management challenges",
      link: "Learn more ",
      linkArrow: "➜",
    },
    {
      image: ResourceImg1,
      heading: "WEBINAR",
      description:
        "Leading transformation through uncertainty: An agile leader’s primer",
      link: "Learn more ",
      linkArrow: "➜",
    },
    {
      image: ResourceImg3,
      heading: "BLOG",
      description: "The Lean answer to portfolio management challenges",
      link: "Learn more ",
      linkArrow: "➜",
    },
    {
      image: ResourceImg6,
      heading: "BLOG",
      description: "The Lean answer to portfolio management challenges",
      link: "Learn more ",
      linkArrow: "➜",
    },
    {
      image: ResourceImg3,
      heading: "WEBINAR",
      description:
        "How an innovative bank ANZ is changing the way 50,000 employees work and think",
      link: "Learn more ",
      linkArrow: "➜",
    },
  ];

  const totalCards = cardData.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (pageNumber) => {
    console.log("page number ", pageNumber);
    setCurrentPage(pageNumber);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
    setCurrentPage(1);
  };

  const [item, setItem] = useState(cardData);
  const navigate = useNavigate();

  const filterItem = (titleItem) => {
    const updateditem = cardData.filter((curElem) => {
      return curElem.heading === titleItem;
    });
    setItem(updateditem);
    console.log("hello", updateditem);
  };

  useEffect(() => {
    console.log(item);
  }, [item]);

  return (
    <div className="AtlasResources">
      <div className="Resources">
        <div className="left">
          <h3>
            FILTER | <a href="/">RESET</a>
          </h3>
          <h1>Topic</h1>
         
          <ul className=
           {`topics-list ${showAll ? "show-all" : ""}`}
          >
            <li className="all-items">
              <button onClick={toggleShowAll}>All ({totalCards})</button>
            </li>{" "}
            <li>
              <a onClick={() => setItem(cardData)}>
                Analyst report(19)
              </a>
            </li>
            <li>
              <a onClick={() => filterItem("BLOG")}>Enterprise agility(8)</a>
            </li>
            <li>
              <a onClick={() => filterItem("WHITEPAPER")}>Scaled agile(4)</a>
            </li>
            <li>
              <a onClick={() => filterItem("")}>OKRs (0)</a>
            </li>
            <li>
              <a onClick={() => filterItem("EBOOK")}>Jira Align(3)</a>
            </li>
            <li>
              <a >Lean portfolio management (0)</a>
            </li>
            <li>
              <a >Business agility(0)</a>
            </li>
            <li>
              <a >Customer stories(0)</a>
            </li>
            <li>
              <a onClick={() => filterItem("WEBINAR")}>Webinars(4)</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <div className="Rall">
            <h1>Resources / Jira Align</h1>
            <p>{totalCards} RESULTS</p>
            <div className="form">
              <i class="ri-search-line"></i>
              <input type="text" placeholder="Search" />
              <div className="cross">
                <i class="ri-close-line"></i>
              </div>
            </div>
            <div className="Rcards">
              {item.map((card, index) => {
                const newIndex = index + cardsPerPage*(currentPage-1);
                if(item.length<=newIndex){
                  return (
                    <div key={index}>
                      
                    </div>
                  )
                }
                const newCard = item[newIndex];
                console.log("new card" ,newCard);
                if (index < cardsPerPage) {
                  return (
                    <div key={index} className="card">
                      <img src={newCard.image} alt={newCard.heading} />
                      <h2>{newCard.heading}</h2>
                      <p>{newCard.description}</p>
                      <a href={newCard.link}>
                        Learn More{" "}
                        <span className="arrow">{newCard.linkArrow}</span>
                      </a>
                    </div>
                  );
                }
              })}
            </div>

            {/* ---------------- */}
            <div className="pagination">
              <span
                className="arrow"
                onClick={() => handlePageChange(currentPage - 1)}
                style={{ visibility: currentPage === 1 ? "hidden" : "visible" }}
              >
                <i className="ri-arrow-left-s-line"></i>
              </span>
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={currentPage === index + 1 ? "active" : ""}
                >
                  {index + 1}
                </button>
              ))}
              <span
                className="arrow"
                onClick={() => handlePageChange(currentPage + 1)}
                style={{
                  visibility: currentPage === totalPages ? "hidden" : "visible",
                }}
              >
                <i className="ri-arrow-right-s-line"></i>
              </span>
            </div>
            {/* ------------------ */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtlasResources;
