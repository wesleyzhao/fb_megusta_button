var oLink = document.createElement('link');
if (isSecure()) oLink.href = 'https://dl.dropbox.com/u/19699329/megusta.css';
else oLink.href = 'http://dl.dropbox.com/u/19699329/megusta.css';
oLink.rel = 'stylesheet';
oLink.type = 'text/css';
document.body.appendChild(oLink);
oLink = null;

var megusta_message = "<img src='http://i.imgur.com/rQSfz.png'> Me gusta";
/*
$("#content").mouseover(function(){
    convertLikes();
});
*/
$("body").mouseover(function(){
    convertLikes();
});
convertLikes();



function convertLikes(){
    var likes = document.getElementsByClassName('default_message');
    var more_likes = document.getElementsByClassName('emuEventfad_fan'); // these are the ads on the right of the main timeline
    //console.log(more_likes);
    
    // likes = likes.concat(more_likes); // should meld the main likes with the ad likes

    //var butt = like_buttons[0];
    convertLikeElements(likes, true);
    convertLikeElements(more_likes, false);
}

function convertLikeElements(likeArray, isInnerHTML){
    //console.log("converting");
    //console.log(likeArray);
    for (var i = 0; i<likeArray.length; i++){
	like = likeArray[i];
	//like_message = like.getElementsByClassName('default_message')[0];
	if (isInnerHTML) like_message = like.innerHTML;
	else like_message = like.text;

	if (like_message == 'Like'){
	    like.innerHTML = megusta_message;
	}
	else if (like_message == 'Unlike'){
	    like.innerHTML = "<img src='http://i.imgur.com/7Q9Q6.png'> Don't want!";
	}
	else if (like_message == 'Like This Page'){
	    like.innerHTML = megusta_message + " this page";
	}
    }    
}

function isSecure(){
    return window.location.protocol == 'https:';
}
