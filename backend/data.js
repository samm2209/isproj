import bcrypt from 'bcryptjs';
const data ={
    users: [
        {
            name:'Motaroki',
            email:'peggywatch@hotmail.com',
            password: bcrypt.hashSync('Fuxsoxy59', 8),
            isAdmin: true,
        },
        {
            name:'wellick',
            email:'tyrellw@ecorp.com',
            password: bcrypt.hashSync('l3monp3pp3r', 8),
            isAdmin: false,
        },
        {
            name:'bruce',
            email:'norton@mail.com',
            password: bcrypt.hashSync('surfpack1', 8),
            isAdmin: false,
        },
    ],
    projects: [
        {
            
            name: 'Relief Plates and Drink  |  Spread The Love From Your Table',
            category: 'Donation',
            organiser: 'We Aid Co.',
            image: '/assets/img1.jpg',
            goal: '150k',
            raised: '90,000',
            description:'Put a smile on someones face today. A charitable act of giving the surplus you have to the Hamsi could go a long way.', 
            date: '1 Aug 2021',
            progress: '90',
            contribution: '5,100',
            shares: '500',
            followers: '300',
            
        },
        {
            
            name: 'The Kuku Biz  |  Poultry farming with Technology',
            category: 'Reward',
            organiser: 'Poultry Innovatives',
            image: '/assets/img2.jpg',
            goal: '100k',
            raised: '50,000',
            description:'Re-imagining the chicken farming business. Automated feeding and egg collection guided by data analysis.', 
            date: '22 Aug 2021',
            progress: '50',
            contribution: '1,300',
            shares: '1k',
            followers: '3k',
        },
        {
            
            name: 'Facial recognition Software  |  Security feature for Businesses',
            category: 'Investment',
            organiser: 'Stark Tech',
            image: '/assets/img3.jpg',
            goal: '100,000',
            raised: '35,000',
            description:'A smart way for securing business premises. Modern solutions for the 21st Century. Embedded intruded detection system with AI.', 
            date: '12 Aug 2021',
            progress: '35',
            contribution: '900',
            shares: '3k',
            followers: '2k',
        }
        
    ]    
}

export default data;