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
		tech: false,
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
		backSummary: '',
		demoLink: '',
		frontendLink: '',
		backendLink: '',
		flipped: false,
	},
	{
		title: "Loo Loo's Events Portfolio",
		frontImg:
			'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/131156526_4082111061803248_7383127815439649041_o.jpg?_nc_cat=103&ccb=2&_nc_sid=0debeb&_nc_ohc=Pjui1ErDUlgAX9YoITL&_nc_ht=scontent-iad3-1.xx&oh=ac0d59eef6ef766758081f23e5c0c0f8&oe=601DB550',
		tech: false,
		stack: [
			'devicon-react-original-wordmark devicon',
			'devicon-css3-plain-wordmark devicon',
			'devicon-html5-plain-wordmark devicon',
			'devicon-javascript-plain devicon',
			'devicon-bootstrap-plain-wordmark devicon',
		],
		backSummary: '',
		demoLink: '',
		frontendLink: '',
		backendLink: '',
		flipped: false,
	},
	{
		title: 'Gitwrap',
		frontImg:
			'http://git-wrap.herokuapp.com/static/media/gitwrapLogo.50e6de45.png',
		tech: false,
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
		backSummary: '',
		demoLink: '',
		frontendLink: '',
		backendLink: '',
		flipped: false,
	},
	{
		title: 'Comic Book Room',
		frontImg: './images/background.jpg',
		tech: false,
		stack: [
			'devicon-ruby-plain-wordmark devicon',
			'devicon-rails-plain-wordmark devicon',
			'devicon-postgresql-plain-wordmark devicon',
			'devicon-html5-plain-wordmark devicon',
			'devicon-facebook-plain devicon',
			'devicon-css3-plain-wordmark devicon',
		],
		backSummary: '',
		demoLink: '',
		frontendLink: '',
		backendLink: '',
		flipped: false,
	},
	{
		title: 'Book Browser',
		frontImg: './images/books.jpg',
		tech: false,
		stack: [
			'devicon-react-original devicon',
			'devicon-html5-plain-wordmark devicon',
			'devicon-css3-plain-wordmark devicon',
		],
		backSummary: '',
		demoLink: '',
		frontendLink: '',
		backendLink: '',
		flipped: false,
	},
	{
		title: 'Simon',
		frontImg: 'https://github.com/KJablonski08/simon/raw/main/simonGiphy.gif',
		tech: false,
		stack: [
			'devicon-html5-plain-wordmark devicon',
			'devicon-css3-plain-wordmark devicon',
			'devicon-javascript-plain devicon',
		],
		backSummary: '',
		demoLink: '',
		frontendLink: '',
		backendLink: '',
		flipped: false,
	},
];

new Vue({
	el: '#flashcard-app',
	data: {
		cards: cards,
		newFront: '',
		newBack: '',
		error: false,
	},
	methods: {
		toggleCard: function (card) {
			card.flipped = !card.flipped;
		},
		addNew: function () {
			if (!this.newFront || !this.newBack) {
				this.error = true;
			} else {
				this.cards.push({
					front: this.newFront,
					back: this.newBack,
					flipped: false,
				});
				this.newFront = '';
				this.newBack = '';
				this.error = false;
			}
		},
	},
});
