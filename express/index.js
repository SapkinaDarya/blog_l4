const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());
const http = require('http');
const server = http.createServer(app);
app.use(express.json());

const firstTypeList = [
	{
		id: 1,
		name: "MO231 - Pomeranian White",
		image: "./PetWebsite/dog1.jpg",
		gender: "Male",
		age: "02 months",
		price: "6.900.000 VND",
	},
	{
		id: 2,
		name: "MO502 - Poodle Tiny Yellow",
		image: "./PetWebsite/dog2.jpg",
		gender: "Female",
		age: "02 months",
		price: "3.900.000 VND",
	},
	{
		id: 3,
		name: "MO102 - Poodle Tiny Sepia",
		image: "./PetWebsite/dog3.jpg",
		gender: "Male",
		age: "02 months",
		price: "4.000.000 VND",
	},
	{
		id: 4,
		name: "MO512 - Alaskan Malamute Grey",
		image: "./PetWebsite/dog4.jpg",
		gender: "Male",
		age: "02 months",
		price: "6.900.000 VND",
	},
	{
		id: 5,
		name: "MO231 - Pembroke Corgi Cream",
		image: "./PetWebsite/dog5.jpg",
		gender: "Male",
		age: "02 months",
		price: "7.900.000 VND",
	},
	{
		id: 6,
		name: "MO502 - Pembroke Corgi Tricolor",
		image: "./PetWebsite/dog6.jpg",
		gender: "Female",
		age: "02 months",
		price: "9.900.000 VND",
	},
	{
		id: 7,
		name: "MO231 - Pomeranian White",
		image: "./PetWebsite/dog7.jpg",
		gender: "male",
		age: "02 months",
		price: "6.500.000 VND",
	},
	{
		id: 8,
		name: "MO512 - Poodle Tiny Dairy Cow",
		image: "./PetWebsite/dog8.jpg",
		gender: "Male",
		age: "02 months",
		price: "5.000.000 VND",
	},
];

const secondTypeList = [
	{
		id: 1,
		name: "What is a Pomeranian? How Identify Pomeranian Dogs?",
		image: "/PetWebsite/news5.jpg",
		text: "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, anthe cutest pets. Not only that, the small, lovely, smart, friendly, anthe cutest pets. Not only that, the small, lovely, smart, friendly, anthe cutest pets. Not only that, the small, lovely, smart, friendly, anthe cutest pets. Not only that, the small, lovely, smart, friendly, anthe cutest pets. Not only that, the small, lovely, smart, friendly, anthe cutest pets. Not only that, the small, lovely, smart, friendly, anthe cutest pets. Not only that, the small, lovely, smart, friendly, anthe cutest pets. Not only that, the small, lovely, smart, friendly, anthe cutest pets. Not only that, the small, lovely, smart, friendly, anthe cutest pets. Not only that, the small, lovely, smart, friendly, anthe cutest pets. Not only that, the small, lovely, smart, friendly, an ",
	},
	{
		id: 2,
		name: "Dog Diet You Need To Know",
		image: "/PetWebsite/news2.jpg",
		text: "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just to raise dogs em simple at first, but there are some rules you should know so em simple at first, but there are some rules you should know so em simple at first, but there are some rules you should know so em simple at first, but there are some rules you should know so em simple at first, but there are some rules you should know so em simple at first, but there are some rules you should know so em simple at first, but there are some rules you should know so em simple at first, but there are some rules you should know so em simple at first, but there are some rules you should know so em simple at first, but there are some rules you should know so em simple at first, but there are some rules you should know so em simple at first, but there are some rules you should know so em simple at first, but there are some rules you should know so ",
	},
	{
		id: 3,
		name: "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
		image: "/PetWebsite/news3.jpg",
		text: "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog However, no one wants to see their furniture or important items being bitten by a dogHowever, no one wants to see their furniture or important items being bitten by a dogHowever, no one wants to see their furniture or important items being bitten by a dogHowever, no one wants to see their furniture or important items being bitten by a dogHowever, no one wants to see their furniture or important items being bitten by a dogHowever, no one wants to see their furniture or important items being bitten by a dogHowever, no one wants to see their furniture or important items being bitten by a dogHowever, no one wants to see their furniture or important items being bitten by a dogHowever, no one wants to see their furniture or important items being bitten by a dogHowever, no one wants to see their furniture or important items being bitten by a dogHowever, no one wants to see their furniture or important items being bitten by a dog",
	},
	{
		id: 4,
		name: "What is a Pomeranian? How Identify Pomeranian Dogs?",
		image: "/PetWebsite/news4.jpg",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
	},
	{
		id: 5,
		name: "What is a Pomeranian? How Identify Pomeranian Dogs?",
		image: "/PetWebsite/news1.jpg",
		text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur oris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariaturoris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariaturoris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
	},
	{
		id: 6,
		name: "What is a Pomeranian? How Identify Pomeranian Dogs?",
		image: "/PetWebsite/news6.jpg",
		text: "Tempus iaculis urna id volutpat lacus laoreet non. Neque vitae tempus quam pellentesque nec nam aliquam. Lacinia at quis risus sed vulputate. Porta non pulvinar neque laoreet. Varius morbi enim nunc faucibus a pellentesque Neque vitae tempus quam pellentesque nec nam aliquam. Lacinia at quis risus sed vulputate. Porta non pulvinar neque laoreet. Varius morbi enim nunc faucibus a pellentesqueNeque vitae tempus quam pellentesque nec nam aliquam. Lacinia at quis risus sed vulputate. Porta non pulvinar neque laoreet. Varius morbi enim nunc faucibus a pellentesqueNeque vitae tempus quam pellentesque nec nam aliquam. Lacinia at quis risus sed vulputate. Porta non pulvinar neque laoreet. Varius morbi enim nunc faucibus a pellentesqueNeque vitae tempus quam pellentesque nec nam aliquam. Lacinia at quis risus sed vulputate. Porta non pulvinar neque laoreet. Varius morbi enim nunc faucibus a pellentesque",
	},
];

app.get('/', (req, res) => {
  res.send('My backend!!!');
});

app.get('/firstType', (req, res) => {
  setTimeout(() => {
    if (req.query && req.query.title) {
      return res.json(firstTypeList.filter(item => item.name.toLowerCase().includes(req.query.title.toLowerCase())))
    }
    res.json(firstTypeList);
  }, 3000)
});

app.get('/secondType', (req, res) => {
  setTimeout(() => {
    res.json(secondTypeList)
  }, 3000)
})

app.get('/secondType/:id', (req, res) => {
  const id = parseInt(req.params.id); 
  const newsItem = secondTypeList.find(item => item.id === id);
  setTimeout(() => {  
    return res.json(newsItem);
  }, 3000)
});

app.post('/firstType', (req, res) => {
  const newCard = req.body;
  newCard.id=firstTypeList.length
  firstTypeList.push(newCard);
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
