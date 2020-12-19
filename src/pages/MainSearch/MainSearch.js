import SearchBar from '/Users/markqian/Desktop/hacklympics/src/components/SearchBar.js';
import FilterMenu from '/Users/markqian/Desktop/hacklympics/src/components/FilterMenu.js';
import BusinessCard from '/Users/markqian/Desktop/hacklympics/src/components/businessCard.js';
import "./MainSearch.css";
import test from './logo.svg';

const photographers = [
    {
        profilePic: test,
        name: 'Tracy Zhao',
        location: 'CA',
        rate: '$30/hr',
        phone: '(123)456-7890',
        email: 'janedoe@gmail.com',
        website: 'https://www.instagram.com/earth/',
        description: 'hello! i am looking for job opportunities please hire me',
        tags: ['sunsets', 'nature', 'oceans', 'watermelon', 'hi', 'ice cream', 'wildlife', 'sand', 'flowers']
    },
    {
        profilePic: test,
        name: 'Cindy',
        location: 'CA',
        rate: '$30/hr',
        phone: '(123) 456-7890',
        email: 'janedoe@gmail.com',
        website: 'https://www.instagram.com/earth/',
        description: 'hello i am looking for job opportunities please hire me',
        tags: ['food', 'dogs', 'puppies']
    },
    {
        profilePic: test,
        name: 'Melody',
        location: 'CA',
        rate: '$30/hr',
        phone: '(123) 456-7890',
        email: 'janedoe@gmail.com',
        website: 'https://www.instagram.com/earth/',
        description: 'hello i am looking for job opportunities please hire me',
        tags: ['UW', 'computer science', 'cookies']
    },
    {
        profilePic: test,
        name: 'Maggie',
        location: 'CA',
        rate: '$30/hr',
        phone: '(123)456-7890',
        email: 'janedoe@gmail.com',
        website: 'https://www.instagram.com/earth/',
        description: 'hello i am looking for job opportunities please hire me',
        tags: ['UCLA', 'los angeles', 'graduation pics']
    },
    {
        profilePic: test,
        name: 'Elizabeth',
        location: 'CA',
        rate: '$30/hr',
        phone: '(123) 456-7890',
        email: 'janedoe@gmail.com',
        website: 'https://www.instagram.com/earth/',
        description: 'hello i am looking for job opportunities please hire me',
        tags: ['art', 'washington', 'mountains']
    }
]

function MainSearch() {
    return (
        <div className="MainSearch">
            {
                photographers.map(photographers => {
                    return <BusinessCard
                        name={photographers.name}
                        profilePic={photographers.profilePic}
                        location={photographers.location}
                        rate={photographers.rate}
                        phone={photographers.phone}
                        email={photographers.email}
                        website={photographers.website}
                        description={photographers.description}
                        tags={photographers.tags}
                        key={photographers.phone}
                    />
                })
            }
        </div>
    );
}


export default MainSearch;