import SearchBar2 from "../../components/SearchBar2.js";
import FilterMenu from "../../components/FilterMenu.js";
import BusinessCard from "../../components/businessCard.js";
import "./MainSearch.css";
import test from "./logo.svg";

const photographers = [
  {
    profilePic: test,
    name: "Tracy Zhao",
    location: "CA",
    rate: "$30/hr",
    phone: "(123) 456-7890",
    email: "janedoe@gmail.com",
    website: "https://www.instagram.com/earth/",
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
    name: "Cindy",
    location: "CA",
    rate: "$30/hr",
    phone: "(123) 456-7890",
    email: "janedoe@gmail.com",
    website: "https://www.instagram.com/earth/",
    description: "hello i am looking for job opportunities please hire me",
    tags: ["food", "dogs", "puppies", "sweet greens"],
  },
  {
    profilePic: test,
    name: "Melody",
    location: "CA",
    rate: "$30/hr",
    phone: "(123) 456-7890",
    email: "janedoe@gmail.com",
    website: "https://www.instagram.com/earth/",
    description: "hello i am looking for job opportunities please hire me",
    tags: ["UW", "computer science", "cookies"],
  },
  {
    profilePic: test,
    name: "Maggie",
    location: "CA",
    rate: "$30/hr",
    phone: "(123) 456-7890",
    email: "janedoe@gmail.com",
    website: "https://www.instagram.com/earth/",
    description: "hello i am looking for job opportunities please hire me",
    tags: ["UCLA", "los angeles", "graduation pics"],
  },
  {
    profilePic: test,
    name: "Elizabeth",
    location: "CA",
    rate: "$30/hr",
    phone: "(123) 456-7890",
    email: "janedoe@gmail.com",
    website: "https://www.instagram.com/earth/",
    description: "hello i am looking for job opportunities please hire me",
    tags: ["art", "washington", "mountains"],
  },
];

function MainSearch() {
  document.body.style.backgroundColor = "#FFAF6D";
  return (
    <div className="page">
        <div className="header">
            <div className="first"><SearchBar2/></div>
            <div className="second"><FilterMenu/></div>
        </div>
        <div className="searchResults">
        {
          photographers.map(photographer => {
              return <div className="each"><BusinessCard
                  name={photographer.name}
                  profilePic={photographer.profilePic}
                  location={photographer.location}
                  rate={photographer.rate}
                  phone={photographer.phone}
                  email={photographer.email}
                  website={photographer.website}
                  description={photographer.description}
                  tags={photographer.tags}
              /></div>
          })
        }
        </div>
    </div>
  );
}

export default MainSearch;
