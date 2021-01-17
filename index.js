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
		title: 'The "First Computer Programmer"',
		frontImg: 'Ada Lovelace',
		tech: false,
		stack: '',
		backSummary: '',
		demoLink: '',
		frontendLink: '',
		backendLink: '',
		flipped: false,
	},
	{
		title: 'The "First Computer Programmer"',
		frontImg: 'Ada Lovelace',
		tech: false,
		stack: '',
		backSummary: '',
		demoLink: '',
		frontendLink: '',
		backendLink: '',
		flipped: false,
	},
	{
		title: 'The "First Computer Programmer"',
		frontImg: 'Ada Lovelace',
		tech: false,
		stack: '',
		backSummary: '',
		demoLink: '',
		frontendLink: '',
		backendLink: '',
		flipped: false,
	},
	{
		title: 'The "First Computer Programmer"',
		frontImg: 'Ada Lovelace',
		tech: false,
		stack: '',
		backSummary: '',
		demoLink: '',
		frontendLink: '',
		backendLink: '',
		flipped: false,
	},
	{
		title: 'The "First Computer Programmer"',
		frontImg: 'Ada Lovelace',
		tech: false,
		stack: '',
		backSummary: '',
		demoLink: '',
		frontendLink: '',
		backendLink: '',
		flipped: false,
	},
	{
		title: 'The "First Computer Programmer"',
		frontImg: 'Ada Lovelace',
		tech: false,
		stack: '',
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
