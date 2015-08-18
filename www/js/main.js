

(function(){
	$("#map-canvas").hide();
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
	onSuccess();
	$("#map-canvas").show();
}