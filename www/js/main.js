
/**
 * Set button action to trigger vTiwari like & dislike.
 */
$('.actions .like, .actions .dislike').click(function(e){
	e.preventDefault();
	$("#sliderContainer").vTiwari($(this).attr('class'));
});


(function(){
	$("#map-canvas").hide();
	$("#likesPage").hide();
	//loadInitialImages();
})();

$("#sliderContainer").vTiwari({
	// dislike callback
    onDislike: function (item) {
	    // Perform some logic
	   if(item.hasClass("lastItem")){
			pageNavigation();
	   }
    },
	// like callback
    onLike: function (item) {
	    // Perform some logic
        likedIds.push(item.attr("id"));
		if(item.hasClass("lastItem")){
			pageNavigation();
		}
    },
	animationRevertSpeed: 200,
	animationSpeed: 400,
	threshold: 1,
	likeSelector: '.like',
	dislikeSelector: '.dislike'
});

function pageNavigation(){
	$(".wrap").hide();
	$(".actions").hide();
	//onSuccess(); //loads the map
	//$("#map-canvas").show();
	updateLikedItems();
	$("#likesPage").show();
}

function loadInitialImages()
{
	var imagesArr = [{"id":"adventure0","category":"adventure","event":"","like":"0"}, 
		{"id":"food0","category":"food","event":"","like":"0"},
		{"id":"religion0","category":"religion","event":"","like":"0"},
		{"id":"music0","category":"music","event":"","like":"0"},
		{"id":"sports0","category":"sports","event":"","like":"0"},
		{"id":"adventure1","category":"adventure","event":"","like":"0"}, 
		{"id":"food1","category":"food","event":"","like":"0"},
		{"id":"religion1","category":"religion","event":"","like":"0"},
		{"id":"music1","category":"music","event":"","like":"0"},
		{"id":"sports1","category":"sports","event":"","like":"0"},
		{"id":"adventure2","category":"adventure","event":"","like":"0"}, 
		{"id":"food2","category":"food","event":"","like":"0"},
		{"id":"religion2","category":"religion","event":"","like":"0"},
		{"id":"music2","category":"music","event":"","like":"0"},
		{"id":"sports2","category":"sports","event":"","like":"0"},
		{"id":"adventure3","category":"adventure","event":"","like":"0"}, 
		{"id":"food3","category":"food","event":"","like":"0"},
		{"id":"religion3","category":"religion","event":"","like":"0"},
		{"id":"music3","category":"music","event":"","like":"0"},
		{"id":"sports3","category":"sports","event":"","like":"0"},
		{"id":"adventure4","category":"adventure","event":"","like":"0"}, 
		{"id":"food4","category":"food","event":"","like":"0"},
		{"id":"religion4","category":"religion","event":"","like":"0"},
		{"id":"music4","category":"music","event":"","like":"0"},
		{"id":"sports4","category":"sports","event":"","like":"0"},
		{"id":"adventure5","category":"adventure","event":"","like":"0"}, 
		{"id":"food5","category":"food","event":"","like":"0"},
		{"id":"religion5","category":"religion","event":"","like":"0"},
		{"id":"music5","category":"music","event":"","like":"0"},
		{"id":"sports5","category":"sports","event":"","like":"0"},
		];
	
	var imagePath = "../images/main";
	
	for(var i=0;i<imagesArr.length;i++)
	{
		var image = imagesArr[i]; 
		var imageId =  image.id.replace ( /[^\d]/g, '' );
		var img = parseInt(imageId);
		var imageSrc = imagePath+"/"+image.category+"/"+img+".jpg";
		$('#sliderContainer ul').append("<li><div style='background: url('"+imageSrc+"')' id='"+image.id+"'/><div class ='like'></div><div class='dislike'></div></li>");
	}	
	
}


function updateLikedItems(){
	var music=0,history=0,adventure=0,sports=0,food=0,religion=0;
	for(var i=0;i<likedIds.length;i++){
		var category=likedIds[i].substring(0, likedIds[i].length-1);
		switch(category){
			case "music": music++; break;
			case "history": history++; break;
			case "adventure": adventure++; break;
			case "sports": sports++; break;
			case "food": food++; break;
			case "religion": religion++; break;
		}
	}
	
	$("li[data-item='music'] .numLikes").html(music);
		$("li[data-item='history'] .numLikes").html(history);
			$("li[data-item='adventure'] .numLikes").html(adventure);
				$("li[data-item='sports'] .numLikes").html(sports);
					$("li[data-item='food'] .numLikes").html(food);
						$("li[data-item='religion'] .numLikes").html(religion);
}

function openMap(category){
	
	for(var i=0;i<likedIds.length;i++){
		if(likedIds[i].substring(0, likedIds[i].length-1) === category){
			categoryIds.push(likedIds[i]);
			onSuccess(); //loads the map
			$("#map-canvas").show();
			$("#likesPage").show();
		}
	}
}