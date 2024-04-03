(function () {
    "use strict";
    const commentTime = 2000;
    const $comment = document.querySelectorAll('.comment-inner');
    let intervalId;
    let currentComment = 1;

    function commentTo(index){
        currentComment = index >= $comment.length-4 || index < 1 ? 0 : index;
        $comment.forEach($elt => $elt.style.transform = `translateX(-${currentComment * 145}%)`);
    }

    function showComment(){
        commentTo(currentComment);
        currentComment++;
    }

    intervalId = setInterval(showComment, commentTime);
    $comment.forEach($elt => $elt.addEventListener('mouseenter', () => clearInterval(intervalId)));
    $comment.forEach($elt => $elt.addEventListener('mouseleave', () => intervalId = setInterval(showComment, commentTime)));
})();
