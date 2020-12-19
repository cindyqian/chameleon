import BusinessCard from '/Users/markqian/Desktop/hacklympics/src/components/businessCard.js';
import "./MainSearch.css";
import test from './logo.svg';

const photographers = [
    {
        profilePic: test,
        name: 'Tracy Zhao',
        location: 'ca',
        phone: '(123)456-7890',
        email: 'janedoe@gmail.com',
        website: 'https://www.instagram.com/earth/'
    },
    {
        profilePic: test,
        name: 'Cindy',
        location: 'ca',
        phone: '(123)456-7890',
        email: 'janedoe@gmail.com',
        website: 'https://www.instagram.com/earth/'
    },
    {
        profilePic: test,
        name: 'Melody',
        location: 'ca',
        phone: '(123)456-7890',
        email: 'janedoe@gmail.com',
        website: 'https://www.instagram.com/earth/'
    },
    {
        profilePic: test,
        name: 'Maggie',
        location: 'ca',
        phone: '(123)456-7890',
        email: 'janedoe@gmail.com',
        website: 'https://www.instagram.com/earth/'
    },
    {
        profilePic: test,
        name: 'Elizabeth',
        location: 'ca',
        phone: '(123)456-7890',
        email: 'janedoe@gmail.com',
        website: 'https://www.instagram.com/earth/'
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
                        phone={photographers.phone}
                        email={photographers.email}
                        website={photographers.website}
                        key={photographers.phone}
                    />
                })
            }
        </div>
    );
}