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

let card = document.querySelector('.card');
let front = document.querySelector('.front');
let back = document.querySelector('.back');
card.addEventListener('click', function () {
	if ((front.style.opacity = '0')) {
		back.style.opacity = '1';
		front.style.opacity = '0';
		back.style.backfaceVisibility = 'visible';
	} else if ((front.style.opacity = '')) {
		back.style.opacity = '0';
		front.style.opacity = '1';
		back.style.backfaceVisibility = 'hidden';
	}
});
