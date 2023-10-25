(function () {
    const pics = document.getElementsByClassName("pic");
    const numberOfPics = pics.length;
    let animationInProgress;
    let timer;

    var next;
    var current = 0,
        next = 1;

    timer = setTimeout(movePic, 5000);

    function movePic(n) {
        let currentPic = pics[current];
        let nextPic = pics[next];
        currentPic.classList.remove("onscreen");
        currentPic.classList.add("exit-stage-left");
        nextPic.classList.add("onscreen");

        current = next;
        next = current + 1;
        if (next >= numberOfPics) {
            next = 0;
        }

        animationInProgress = true;
    } //closes movePic

    function transitionEnd(e) {
        if (!e.target.classList.contains("exit-stage-left")) {
            return;
        }
        e.target.classList.remove("exit-stage-left");
        timer = setTimeout(movePic, 5000);
        animationInProgress = false;
    } //closes transitionEnd

    document
        .getElementById("carousel")
        .addEventListener("transitionend", transitionEnd);

})(); //closes function
