window.onload = function () {
	window.addEventListener('scroll', function (e) {
		if (window.pageYOffset > 100) {
			document.querySelector("header").classList.add('is-scrolling');
		} else {
			document.querySelector("header").classList.remove('is-scrolling');
		}
	});

	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});

	selectAlbum('Apparel');

}
	




	let myPicturesArray = [
	{

		//Apparel
			"album": "Apparel",
			"id": 1,
			"title": "Vinta Bag",
			"url": "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			"thumbnailUrl": "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80"
	},
	{
			"album":"Apparel",
			"id": 2,
			"title": "Air Max",
			"url": "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			"thumbnailUrl": "https://images.unsplash.com/photo-1511556670410-f6989d6b0766?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
	},
	{
			"album": "Apparel",
			"id": 3,
			"title": "Sweatshirt",
			"url": "https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
			"thumbnailUrl": "https://images.unsplash.com/photo-1578681994827-a9776963799c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
	},
	{
			"album": "Apparel",
			"id": 4,
			"title": "Beanie",
			"url": "https://images.unsplash.com/photo-1579533153953-820fbb5b6d41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=708&q=80",
			"thumbnailUrl": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
	},


	//electronics


	{
			"album": "Electronics",
			"id": 5,
			"title": "Apple Watch",
			"url": "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80",
			"thumbnailUrl": "https://images.unsplash.com/photo-1623871300511-e938b37a9c37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
	},
	{
			"album": "Electronics",
			"title": "Airpods",
			"id": 6,
			"url": "https://images.unsplash.com/photo-1592921870583-aeafb0639ffe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
			"thumbnailUrl": "https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
	},
	{
			"album": "Electronics",
			"id": 7,
			"title": "Sony Camera",
			"url": "https://images.unsplash.com/photo-1534864376787-74b2ba2f7991?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
			"thumbnailUrl": "https://images.unsplash.com/photo-1609034227505-5876f6aa4e90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
	},
	{
			"album": "Electronics",
			"id": 8,
			"title": "iPhone 13",
			"url": "https://images.unsplash.com/photo-1634618774956-36f5b1618be7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
			"thumbnailUrl": "https://images.unsplash.com/photo-1639789976408-3fd60d7896f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGlwaG9uZSUyMDEzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
	}
	];

 
	let album = document.querySelector('#album');
	let single = document.querySelector('#single');
	let fullImage = document.querySelector('#single-img');
	let singleImgCaption = document.querySelector('#single-img-caption');
	let albumSelector = document.querySelector("#album-selector"); 

	function selectAlbum(evt){
		let chosenAlbum = evt.value;
		if(chosenAlbum === undefined){
			chosenAlbum = evt;
		}

	let imageArray = [];
	album.textContent = "";
	myPicturesArray.forEach(function(currentImage){
		if ((currentImage.album === chosenAlbum)|| chosenAlbum === "all") { 
			let imageContainer = document.createElement("div");
			imageContainer.classList.add("image-container");
			let deleteButton = document.createElement("div");
			deleteButton.classList.add("delete-button");
			deleteButton.setAttribute("onclick", "deleteImage(this)");
			deleteButton.title = "Delete Image";
			let image = document.createElement('img');
			image.src = currentImage.thumbnailUrl;
			image.alt = currentImage.title;
			image.width = 250;
			image.dataset.pictureId = currentImage.id;
			image.setAttribute("onclick", "showFullImage(this)");
			image.classList.add("thumbnail");
			image.title = "Click to expand the image";

			album.append(imageContainer);
			imageContainer.append(image);
			imageContainer.append(deleteButton);
			deleteButton.append('✖'); 

			imageArray.push(currentImage.id);

		} 
	})
		showFullImage(imageArray.shift());
	}

	function showFullImage(evt){
		let pictureId;
		if (typeof evt === "number"){
			pictureId = evt;
		}
		if (typeof evt === "object") {
			pictureId = evt.dataset.pictureId;
		}
		for (let i=0; i<myPicturesArray.length; i++){
			if(myPicturesArray[i].id == pictureId){
				fullImage.src = myPicturesArray[i].url;
				fullImage.alt = myPicturesArray[i].title;

				singleImgCaption.innerHTML = myPicturesArray[i].title;
				fullImage.dataset.pictureId = myPicturesArray[i].id;
				break; 
			}
		}
	}

	function deleteImage(evt) {
    let pictureId = evt.parentNode.querySelector("img:first-of-type");
    for (let i = 0; i < myPicturesArray.length; i++) {
        if (myPicturesArray[i].id == pictureId.dataset.pictureId) {
            myPicturesArray[i].album; 
            myPicturesArray.splice(i, 1); 
            selectAlbum(albumSelector.value);
            break;
        }
    }
}







