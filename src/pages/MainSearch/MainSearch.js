import React, { useState } from "react";
import SearchBar2 from "../../components/SearchBar2.js";
import FilterMenu from "../../components/FilterMenu.js";
import BusinessCard from "../../components/businessCard.js";
import "./MainSearch.css";
import test from "./logo.svg";

const photographers = [
  {
    profilePic: "/src/components/pfps/jason.jpg",
    name: "Tracy Zhao",
    location: "Los Angeles, California",
    rate: "$300/hr",
    phone: "(123) 456-7890",
    email: "janedoe@gmail.com",
    website: "instagram.com/earth/",
    description: "hello! i am looking for job opportunities please hire me",
    tags: [
      "sunsets",
      "nature",
      "oceans",
      "watermelon",
      "hi",
      "ice cream",
      "wildlife",
      "sand",
      "flowers",
    ],
  },
  {
    profilePic: test,
    name: "Cindy Qian",
    location: "San Jose, California",
    rate: "$300/hr",
    phone: "(123) 456-7890",
    email: "janedoe@gmail.com",
    website: "instagram.com/earth/",
    description: "hello i am looking for job opportunities please hire me",
    tags: ["food", "dogs", "puppies", "sweet greens"],
  },
  {
    profilePic: test,
    name: "Melody Zhu",
    location: "Seattle, Washington",
    rate: "$300/hr",
    phone: "(123) 456-7890",
    email: "janedoe@gmail.com",
    website: "www.instagram.com/earth/",
    description: "hello i am looking for job opportunities please hire me",
    tags: ["UW", "computer science", "cookies"],
  },
  {
    profilePic: test,
    name: "Maggie Li",
    location: "San Francisco, California",
    rate: "$300/hr",
    phone: "(123) 456-7890",
    email: "janedoe@gmail.com",
    website: "www.instagram.com/earth/",
    description: "hello i am looking for job opportunities please hire me",
    tags: ["UCLA", "los angeles", "graduation pics"],
  },
  {
    profilePic: test,
    name: "Elizabeth Xiong",
    location: "Bellevue, Washington",
    rate: "$300/hr",
    phone: "(123) 456-7890",
    email: "janedoe@gmail.com",
    website: "www.instagram.com/earth/",
    description: "hello i am looking for job opportunities please hire me",
    tags: ["art", "washington", "mountains"],
  },
  {
    profilePic: test,
    name: "Jason Zhang",
    location: "Sammamish, Washington",
    rate: "$300/hr",
    phone: "(425) 123-4567",
    email: "zjjc123@hotmail.com",
    website: "jasonzhang.media",
    description: "Hi! I take pictures!",
    tags: ["film", "portraits"],
  },
];

function MainSearch() {
  document.body.style.backgroundColor = "#FFAF6D";
  const [filtered, setFiltered] = useState(photographers);

  const filterItem = (search) => {
    if (search == null) {
      setFiltered(photographers);
    } else {
      console.log("change txt");
      console.log(search);
      const fil = photographers.filter((p) => {
        let nameLowerCase = p.name.toLowerCase();
        let searchTermLowerCase = search.toString().toLowerCase();

        return nameLowerCase.indexOf(searchTermLowerCase) > -1;
      });
      setFiltered(fil);
    }
  };

  return (
    <div className="page">
      <div className="header">
        <div className="first">
          <SearchBar2 handleFilter={filterItem} />
        </div>
        <div className="second">
          <FilterMenu />
        </div>
      </div>
      <div className="searchResults">
        {filtered.map((photographer) => {
          return (
            <div className="each">
              <BusinessCard
                name={photographer.name}
                profilePic={photographer.profilePic}
                location={photographer.location}
                rate={photographer.rate}
                phone={photographer.phone}
                email={photographer.email}
                website={photographer.website}
                description={photographer.description}
                tags={photographer.tags}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainSearch;
