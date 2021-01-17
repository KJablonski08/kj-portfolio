function myFunction() {
	document.getElementById('myDropdown').classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName('dropdown-content');
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
};

const cards = [
	{
		title: 'Building Futures Blog',
		frontImg: './images/bf.jpg',
		stack: [
			'devicon-django-line-wordmark devicon',
			'devicon-python-plain-wordmark devicon',
			'devicon-postgresql-plain-wordmark devicon',
			'devicon-react-original-wordmark devicon',
			'devicon-html5-plain-wordmark devicon',
			'devicon-css3-plain-wordmark devicon',
			'devicon-bootstrap-plain-wordmark devicon',
			'devicon-javascript-plain devicon',
		],
		summary:
			'A blogging application that was created for Building Futures Inc., an IRS authorized 501(c)3. The building futures blog is a place for supporters to get up to date information on the latest projects and updates from directors through blog posts. Directors are able to log in and create new posts',
		demoLink: 'https://buildingfuturesinc.herokuapp.com/',
		frontendLink: 'https://github.com/KJablonski08/building_futures_react',
		backendLink: 'https://github.com/KJablonski08/building_futures_django',
		flipped: false,
	},
	{
		title: "Loo Loo's Events Portfolio",
		frontImg:
			'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/131156526_4082111061803248_7383127815439649041_o.jpg?_nc_cat=103&ccb=2&_nc_sid=0debeb&_nc_ohc=Pjui1ErDUlgAX9YoITL&_nc_ht=scontent-iad3-1.xx&oh=ac0d59eef6ef766758081f23e5c0c0f8&oe=601DB550',
		stack: [
			'devicon-react-original-wordmark devicon',
			'devicon-css3-plain-wordmark devicon',
			'devicon-html5-plain-wordmark devicon',
			'devicon-javascript-plain devicon',
			'devicon-bootstrap-plain-wordmark devicon',
		],
		summary:
			"Loo Loo's Events is a wedding and event planner in Rochester, NY. Planning a wedding can be stressful, but it should be fun. The Loo Loo's Events app is a portfolio page for potential customers to gather information on photos, referrals, and package offerings",
		demoLink: 'https://looloosevents.netlify.app/',
		frontendLink: 'https://github.com/KJablonski08/loo-loos-planning-events',
		backendLink: false,
		flipped: false,
	},
	{
		title: 'Gitwrap',
		frontImg:
			'http://git-wrap.herokuapp.com/static/media/gitwrapLogo.50e6de45.png',
		stack: [
			'devicon-mongodb-plain-wordmark devicon',
			'devicon-express-original-wordmark devicon',
			'devicon-react-original-wordmark devicon',
			'devicon-nodejs-plain-wordmark devicon',
			'devicon-css3-plain-wordmark devicon',
			'devicon-html5-plain-wordmark devicon',
			'devicon-bootstrap-plain-wordmark devicon',
			'devicon-javascript-plain devicon',
			'devicon-postgresql-plain-wordmark devicon',
		],
		summary:
			'A gift guide application. The app begins with categories (such as "tech", "music", "movies", etc...) and price range options to browse. Choose a gift from the list to read more details and find a purchase link. You can add your gift to a personal favorites list. This will allow you to save your gift ideas for another time',
		demoLink: 'http://git-wrap.herokuapp.com/',
		frontendLink: 'https://github.com/anonymous-animals/gitwrap-frontend',
		backendLink: 'https://github.com/anonymous-animals/gitwrap-backend',
		flipped: false,
	},
	{
		title: 'Comic Book Room',
		frontImg: './images/background.jpg',
		stack: [
			'devicon-ruby-plain-wordmark devicon',
			'devicon-rails-plain-wordmark devicon',
			'devicon-postgresql-plain-wordmark devicon',
			'devicon-html5-plain-wordmark devicon',
			'devicon-facebook-plain devicon',
			'devicon-css3-plain-wordmark devicon',
		],
		summary:
			'A collectors app. Users are able to log in, using their email or Facebook, and keep track of their collections. A user has the option to keep their collection anonymous or to post publicly. Each public comic book entry has a comments section for users to comment on each others collections and communicate about the story lines',
		demoLink: 'https://comic-book-room.herokuapp.com/',
		frontendLink: 'https://github.com/KJablonski08/comic_book_room',
		backendLink: false,
		flipped: false,
	},
	{
		title: 'Book Browser',
		frontImg: './images/books.jpg',
		stack: [
			'devicon-react-original devicon',
			'devicon-html5-plain-wordmark devicon',
			'devicon-css3-plain-wordmark devicon',
		],
		summary:
			'A search app for choosing your next great read. The app shows the current New York Times best seller lists (fiction and nonfiction). Use the search bar to find a specific book (utilizing the Google Books API). Choose a book from the list to read details and find links to a preview of the chosen book or purchase the e-book',
		demoLink: 'https://kj-book-browser.herokuapp.com/',
		frontendLink: 'https://github.com/KJablonski08/book-browser',
		backendLink: false,
		flipped: false,
	},
	{
		title: 'Simon',
		frontImg: 'https://github.com/KJablonski08/simon/raw/main/simonGiphy.gif',
		stack: [
			'devicon-javascript-plain devicon',
			'devicon-html5-plain-wordmark devicon',
			'devicon-css3-plain-wordmark devicon',
		],
		summary:
			'A new version of the classic Simon game from Hasbro Gaming, written in vanilla JavaScript Players must repeat random sequences of colors(simulating lights) by pressing the colored boxes in the correct order. As the player selects the correct color, the pattern gets longer by adding one additional color to the sequence each round. Created with accessibility in mind - the game can be played entirely using your keyboard - "Enter" to begin. Arrow keys to navigate the game board: red: ⬆️, yellow: ➡️, blue: ⬇️, green: ⬅️',
		demoLink: 'kjablonski08.github.io/simon/',
		frontendLink: 'https://github.com/KJablonski08/simon',
		backendLink: false,
		flipped: false,
	},
];

new Vue({
	el: '#flashcard-app',
	data: {
		cards: cards,
	},
	methods: {
		toggleCard: function (card) {
			card.flipped = !card.flipped;
		},
	},
});
