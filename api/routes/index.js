const express = require('express');
const db = require('../../db/index');
const router = express.Router();

const photographer_fields = 
    'id, profile_pic, name, location, rate, phone, email, website, description';

router.get('/', async (req, res) => {
    try {
        const query = await db.query(

        );
    }
});

router.put('', async(req, res) => {
    try {
        const query = await db.query(
    
        );
    }
});



// ReactDOM.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>, 
//     document.getElementById('root')
// )