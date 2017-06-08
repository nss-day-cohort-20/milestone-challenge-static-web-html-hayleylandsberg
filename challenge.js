// console.log("Hello, I work!");

var blog = [
	{
		title: "First Week",
		post: "My first week at NSS was filled with a lot of ups and downs. Monday was the first time I had ever installed anything via the terminal, so it was a bit daunting. On Tuesday, we had a past 'NSSer', Meghan, show us the basics of git / github. I had messed around with github over the past year, but had NO idea how to actually make it work. It is difficult to say the least, but by Friday, I felt like I knew the bare minimum to get things pushed and pulled. On Wednesday, Callan came in to teach us about CSS. She showed us how to use Flexbox, and made it look a lot easier than it actually is! By Thursday morning, I was feeling really confident and could see all the prework had paid off... that was until Steve's JavaScript lesson. I was following the code he was writing and it made sense, but once we were working on our own JS exercises, I realized Treehouse was just a bunch of 'monkey see, monkey do' lessons. Because of this, I was definitely nervous going into Friday. I was releived to find out we were breaking into our first group project, that was more HTML / CSS heavy. Once we broke out into groups, we planned out our project and made our pet fashion product, FURban Outfitters.",
		date: "May 27, 2017"
	},
	{
		title: "Second Week",
		post: "We had Monday off for Memorial Day, so it was a short week. On Tuesday we jumped back into our teams that were formed on Friday. My team was team Beast Mode, and our product with supplements and facewash. We were the smallest team, but we still managed to get by, which we attributed to communicating well. Git seems to be coming more naturally now, but we'll see how long that lasts! We start JavaScript next week...",
		date: "June 2, 2017"
	},
	{
		title: "Third Week",
		post: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		date: "June 9, 2017"
	}

];

//add loop
	var blogElement = document.getElementById("blog");
	console.log(blogElement);

for (var i = 0; i < blog.length; i++) {
	console.log("for loop running");
blogElement.innerHTML += `<section class="blogpost" id="blog${i+1}"> <h2>${blog[i].title}</h2> <div class="blogmargin">${blog[i].post}</div> <footer><date>${blog[i].date}</date></footer></section>`;
};





/////////////
//OTHER WAYS TO RUN CODE
/////////////



//THIRD WAY TO RUN

// var blog1 = document.getElementById("blog1");
// blog1.innerHTML = `${blog[0].title} ${blog[0].post} ${blog[0].date}`;

// var blog1 = document.getElementById("blog2");
// blog1.innerHTML = `${blog[1].title} ${blog[1].post} ${blog[1].date}`;

// var blog1 = document.getElementById("blog3");
// blog1.innerHTML = `${blog[2].title} ${blog[2].post} ${blog[2].date}`;




//FIRST WAY

// var blog = [
// 	`<div class="blogmargin"><h2>First Week</h2>My first week at NSS was filled with a lot of ups and downs. Monday was the first time I had ever installed anything via the terminal, so it was a bit daunting. On Tuesday, we had a past "NSSer", Meghan, show us the basics of git / github. I had messed around with github over the past year, but had NO idea how to actually make it work. It is difficult to say the least, but by Friday, I felt like I knew the bare minimum to get things pushed and pulled. On Wednesday, Callan came in to teach us about CSS. She showed us how to use Flexbox, and made it look a lot easier than it actually is! By Thursday morning, I was feeling really confident and could see all the prework had paid off... that was until Steve's JavaScript lesson. I was following the code he was writing and it made sense, but once we were working on our own JS exercises, I realized Treehouse was just a bunch of "monkey see, monkey do" lessons. Because of this, I was definitely nervous going into Friday. I was releived to find out we were breaking into our first group project, that was more HTML / CSS heavy. Once we broke out into groups, we planned out our project and made our pet fashion product, FURban Outfitters.<footer><date>May 27, 2017</date></footer></div>`,

// 	`<div class="blogmargin"><h2>Second Week</h2>We had Monday off for Memorial Day, so it was a short week. On Tuesday we jumped back into our teams that were formed on Friday. My team was team Beast Mode, and our product with supplements and facewash. We were the smallest team, but we still managed to get by, which we attributed to communicating well. Git seems to be coming more naturally now, but we'll see how long that lasts! We start JavaScript next week...<footer><date>June 2, 2017</date></footer></div>`,

// 	`<div class="blogmargin"><h2>Third Week</h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<footer><date>June 9, 2017</date></footer></div>`

// ];

// //add for loop

// var blog1 = document.getElementById("blog1");
// blog1.innerHTML = blog[0];

// var blog1 = document.getElementById("blog2");
// blog1.innerHTML = blog[1];

// var blog1 = document.getElementById("blog3");
// blog1.innerHTML = blog[2];






//SECOND WAY

// var blog1 = document.getElementById("blog1");
// console.log("blog1", blog1);

// blog1.innerHTML = `<div class="blogmargin"><h2>First Week</h2>My first week at NSS was filled with a lot of ups and downs. Monday was the first time I had ever installed anything via the terminal, so it was a bit daunting. On Tuesday, we had a past "NSSer", Meghan, show us the basics of git / github. I had messed around with github over the past year, but had NO idea how to actually make it work. It is difficult to say the least, but by Friday, I felt like I knew the bare minimum to get things pushed and pulled. On Wednesday, Callan came in to teach us about CSS. She showed us how to use Flexbox, and made it look a lot easier than it actually is! By Thursday morning, I was feeling really confident and could see all the prework had paid off... that was until Steve's JavaScript lesson. I was following the code he was writing and it made sense, but once we were working on our own JS exercises, I realized Treehouse was just a bunch of "monkey see, monkey do" lessons. Because of this, I was definitely nervous going into Friday. I was releived to find out we were breaking into our first group project, that was more HTML / CSS heavy. Once we broke out into groups, we planned out our project and made our pet fashion product, FURban Outfitters.<footer><date>May 27, 2017</date></footer></div>`;


// var blog2 = document.getElementById("blog2");
// console.log("blog2", blog2);

// blog2.innerHTML = `<div class="blogmargin"><h2>Second Week</h2>We had Monday off for Memorial Day, so it was a short week. On Tuesday we jumped back into our teams that were formed on Friday. My team was team Beast Mode, and our product with supplements and facewash. We were the smallest team, but we still managed to get by, which we attributed to communicating well. Git seems to be coming more naturally now, but we'll see how long that lasts! We start JavaScript next week...<footer><date>June 2, 2017</date></footer></div>`;

// var blog3 = document.getElementById("blog3");
// console.log("blog3", blog3);

// blog3.innerHTML = `<div class="blogmargin"><h2>Third Week</h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<footer><date>June 9, 2017</date></footer></div>`;