

$("#sliderContainer").vTiwari({
	// dislike callback
    onDislike: function (item) {
	    // Perform some logic
       var i=0;
	   if(item.hasClass("lastItem")){
			pageNavigation();
	   }
    },
	// like callback
    onLike: function (item) {
	    // Perform some logic
        var i=0;
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
	
	
}