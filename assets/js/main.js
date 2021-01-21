//Add and remove, right and left content

document.addEventListener('DOMContentLoaded', function () {
	var elements = document.querySelectorAll(".item_menu");
	for (var i = 0; i < elements.length; i++) {
		elements[i].addEventListener('click', selectMenu(i), false);
	};

	function selectMenu(iterator) {
		return function () {
			var parents = document.querySelectorAll('.item_menu');
			parents.forEach(function (item, iter) {
				item.classList.remove('active');

				if (iterator == iter) {
					item.classList.add('active');
					document.getElementById('right').classList.add('active');
					document.getElementById('left').classList.remove('active');
				}
			});
		}
	}
});

var nut = document.querySelectorAll(".item_menu");


document.getElementById('back').onclick = function () {
	document.getElementById('right').classList.remove('active');
	document.getElementById('left').classList.add('active');

	var nut = document.querySelectorAll(".item_menu");
	for (var i = 0; i < nut.length; i++) {
		nut[i].classList.remove('active');
	};
};

document.getElementById('back880').onclick = function () {
	document.getElementById('right').classList.remove('active');
	document.getElementById('left').classList.add('active');

	var nut = document.querySelectorAll(".item_menu");
	for (var i = 0; i < nut.length; i++) {
		nut[i].classList.remove('active');
	};
};

document.getElementById('btn_close').onclick = function () {
	document.getElementById('right').classList.remove('active');
	document.getElementById('footer').classList.remove('active');
	document.getElementById('left').classList.add('active');
	var nut = document.querySelectorAll(".item_menu");
	for (var i = 0; i < nut.length; i++) {
		nut[i].classList.remove('active');
	};

};



//Add and remove password

document.getElementById('ps_hid').onclick = function () {
	document.getElementById('ps_ac').classList.add('active');
};

var inpt = document.querySelectorAll(".ower");
for (var i = 0; i < inpt.length; i++) {
	inpt[i].onclick = function () {
		document.getElementById('ps_ac').classList.remove('active');
	};
};

//Add close footer

document.getElementById('btn_save').onclick = function () {
	document.getElementById('footer').classList.add('active');
};

document.getElementById('close_footer').onclick = function () {
	document.getElementById('footer').classList.remove('active');
};


//menu 


document.getElementById('profile').onclick = function () {
	document.getElementById('sub_img').classList.toggle('active');
};

//burger
document.getElementById('menuButton').onclick = function () {
	this.classList.toggle('is-active');
	document.getElementById('nav').classList.toggle('active');
};