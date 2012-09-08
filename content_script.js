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
    var likes = document.getElementsByClassName('UFILikeLink');
    var rec_likes = document.getElementsByClassName('sp_e6rp9t');
    var page_likes = document.getElementsByClassName('uiLinkLightBlue');
    var more_likes = document.getElementsByClassName('emuEventfad_fan'); // these are the ads on the right of the main timeline
    var more_unlikes = document.getElementsByClassName('emuEventfad_unfan'); // same as above but for unlikes
    //console.log(more_likes);
    convertNewLikeElements('like_link');
    convertNewLikeElements('cmnt_like_link');
    // likes = likes.concat(more_likes); // should meld the main likes with the ad likes

    //var butt = like_buttons[0];
    convertLikeElements(likes, false);
    convertLikeElements(rec_likes, false);
    convertLikeElements(more_likes, false);
    convertLikeElements(more_unlikes, false);
    convertCommentElements(document.getElementsByClassName('comment_link'), false)
    convertLikeElements(page_likes, false);
    //convertLikeElements(document.getElementsByClassName('like_link'),false)

    var like_comment_stuff = document.getElementsByClassName('UFICommentActions');
    var comment_likes = [];
    for (var i=0; i<like_comment_stuff.length; i++){
	var el = like_comment_stuff[i]
	comment_likes.push(el.getElementsByTagName('a')[1]);
    }
    convertLikeElements(comment_likes, false);
}

function convertNewLikeElements(parentClassName){
    var new_likes = document.getElementsByClassName(parentClassName)
    var new_like_els = []
    for (var i=0; i<new_likes.length;i++){
	var el = new_likes[i];
	new_like_els.push(el.getElementsByClassName('default_message')[0]);
    }
    convertLikeElements(new_like_els, true);
    return true
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
	else if (like_message == 'Like Page'){
	    like.innerHTML = megusta_message + " page";
	}
    }    
}


function convertCommentElements(likeArray, isInnerHTML){
    //console.log("converting");
    //console.log(likeArray);
    for (var i = 0; i<likeArray.length; i++){
	like = likeArray[i];
	like = like.getElementsByTagName('input')[0];
	//like_message = like.getElementsByClassName('default_message')[0];
	if (like.value == "Comment"){
	    like.value = "Herp derp";
	}
	/*
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
	*/
    }    
}

function isSecure(){
    return window.location.protocol == 'https:';
}
