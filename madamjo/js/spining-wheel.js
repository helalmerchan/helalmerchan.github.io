(() => {
	const $ = document.querySelector.bind(document);

	let timeRotate = 7000; //7 seconds
	let currentRotate = 0;
	let isRotating = false;
	const wheel = $('.wheel');
	const btnWheel = $('.btn--go');
	const showMsg = $('.msg');
	let wheelBorder = $('.whl-border');

	let wonBox = $('.won-box');

	

	//=====< Reward list >=====
	const listGift = [
		{
			text: '2000$ Bonus',
			percent: 10 / 100,
		},
		{
			text: '1000$ Bonus',
			percent: 10 / 100,
		},
		{
			text: '2000$ Bonus',
			percent: 5 / 100,
		},
		{
			text: '1000$ Bonus',
			percent: 5 / 100,
		},
		{
			text: '2000$ Bonus',
			percent: 5 / 100,
		},
		{
			text: '2000$ Bonus',
			percent: 40 / 100,
		}
	];

	//=====< Number of rewards >=====
	const size = listGift.length;

	//=====< The measure of the angle a reward occupies on a circle >=====
	const rotate = 360 / size;

	//=====< Measure of the angle needed to create the tilt, 90 degrees minus the angle of 1 reward >=====
	const skewY = 90 - rotate;


	listGift.map((item, index) => {
		//=====< Create li tag >=====
		const elm = document.createElement('li');

		//=====< Rotate and skew li tags >=====
		elm.style.transform = `rotate(${
			rotate * index
		}deg) skewY(-${skewY}deg)`;
		
		
		//=====< Add staggered and centered background-color to text tags>=====
		if (index % 2 == 0) {
			elm.innerHTML = `<p style="transform: skewY(${skewY}deg) rotate(${
				rotate / 2
			}deg);" class="text text-1">
			<b>${item.text}</b>
			</p>`;
		} else {
			elm.innerHTML = `<p style="transform: skewY(${skewY}deg) rotate(${
				rotate / 2
			}deg);" class="text text-2">
			<b>${item.text}</b>
			</p>`;
		}


		//=====< Add ul tag >=====
		wheel.appendChild(elm);
	});


	/********** Start function **********/
	const start = () => {
		showMsg.innerHTML = '';
		
		isRotating = true;
		//=====< Get a random number 0 -> 1 >=====
		const random = Math.random();

		//=====< Call function to get reward >=====
		const gift = getGift(random);

		//=====< Number of rotations: 360 degrees = 1 revolution (Current rotation angle) >=====
		currentRotate += 360 * 10;

		//=====< Call the rotate function >=====
		rotateWheel(currentRotate, gift.index);

		//=====< Call function to print to screen >=====
		showGift(gift);
	};

	/********** Revolving function **********/
	const rotateWheel = (currentRotate, index) => {
		$('.wheel').style.transform = `rotate(${
		//=====< Current rotation angle minus reward angle>=====
		//=====< Continue subtracting half of the angle of a reward to bring the arrow to the center >=====
			currentRotate - index * rotate - rotate / 2
		}deg)`;
	};

	/********** Reward Function **********/
	const getGift = randomNumber => {
		let currentPercent = 0;
		let list = [];

		listGift.forEach((item, index) => {
		//=====< Add up the winning percentage of the rewards >=====
			currentPercent += item.percent;

		//=====< The random number is less than or equal to the current percentage, then add the reward to the list >======
			if (randomNumber <= currentPercent) {
				list.push({ ...item, index });
			}
		});

		//=====< The first reward in the list is the spin reward>=====
		return list[0];
	};

	/********** Print rewards to the screen **********/
	const showGift = gift => {
		const wonBoxA = new bootstrap.Modal('.modal');
		let timer = setTimeout(() => {
			isRotating = false;

			showMsg.innerHTML = `<small>You just won a</small>  ${gift.text}!`;
		
			wonBox.style = 'display :block';
			
			wonBoxA.show();

			clearTimeout(timer);
			
		}, timeRotate);

		
	};

	/********** Start button click event **********/
	btnWheel.addEventListener('click', () => {
		!isRotating && start();
	});
	
	

	
})();