import React, { useState } from "react";
import SearchBar2 from "../../components/SearchBar2.js";
import FilterMenu from "../../components/FilterMenu.js";
import BusinessCard from "../../components/businessCard.js";
import "./MainSearch.css";
// import test from "../../components/ellie.jpg";
import ellie from "../../components/pfps/131976207_207221010952333_4829842969055170037_n.jpg"; //cant change name to ellie it crashes
import maggie from "../../components/pfps/132046231_413388366525674_441709829357414413_n.jpg";
import tracy from "../../components/pfps/132047000_1323501221344855_2645064689400498641_n.jpg";
import melody from "../../components/pfps/132060275_435071847618280_8042142706358797651_n (7).jpg";
import cindy from "../../components/pfps/IMG_4810.jpeg";
import jason from '../../components/pfps/jason.jpg';

const photographers = [
  {
    profilePic: tracy,
    name: "Tracy Zhao",
    location: "Los Angeles, California",
    rate: "$50 / hr",
    phone: "(626) 280-4331",
    email: "tracyzhao10@gmail.com",
    website: "instagram.com/tracyz_",
    description: "Hi! I'm currently a student at UCLA and I love to take pictures of nature. I enjoy going on hikes in my free time and would be most comfortable taking landscape pictures.",
    tags: [
      "sunsets",
      "nature",
      "san francisco",
      "los angeles",
      "puppies",
      "ice cream",
      "wildlife",
      "pacific coast",
      "flowers",
    ],
  },
  {
    profilePic: cindy,
    name: "Cindy Qian",
    location: "Cupertino, California",
    rate: "$1.20 / hr",
    phone: "1 (800) 222-1222",
    email: "cindyqian.yushi@gmail.com",
    website: "cindyqian.com",
    description: "hello i am looking for job opportunities please hire me",
    tags: ["rain", "dogs", "sunsets", "chipotle"],
  },
  {
    profilePic: melody,
    name: "Melody Zhu",
    location: "Seattle, Washington",
    rate: "$1 / hr",
    phone: "(206) 472-3016",
    email: "melodyzh@uw.edu",
    website: "instagram.com/melodyyzhu",
    description: "hello i am looking for job opportunities please hire me",
    tags: ["UW", "computer science", "cookies", "luo si fen"],
  },
  {
    profilePic: maggie,
    name: "Maggie Li",
    location: "Los Angeles, California",
    rate: "$15 / hr",
    phone: "(987) 654-3210",
    email: "mm302li@gmail.com",
    website: "instagram.com/maggieelli",
    description: "hello i am looking for job opportunities please hire me",
    tags: ["UCLA", "los angeles", "graduation pics"],
  },
  {
    profilePic: ellie,
    name: "Ellie Xiong",
    location: "Vancouver, Washington",
    rate: "$77 / hr",
    phone: "(360) 192-1067",
    email: "elizabeth.yue0@gmail.com",
    website: "instagram.com/elliee.beth",
    description: "hello i am looking for job opportunities please hire me",
    tags: ["art", "washington", "mountains", "kitten"],
  },
  {
    profilePic: jason,
    name: "Jason Zhang",
    location: "Sammamish, Washington",
    rate: "$300 / hr",
    phone: "(425) 122-4767",
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
