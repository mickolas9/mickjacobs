$(document).ready(function() {
    function changeState(faceImage, backgroundClass) {
        $('#roboBuddyFace').attr('src', 'images/' + faceImage);
        $('body').removeClass().addClass(backgroundClass);
        triggerConfetti(); // Trigger confetti on state change
    }

    function triggerConfetti() {
        confetti({
            particleCount: 300,
            spread: 100,
            origin: { y: 0.6 },
            zIndex: -1 // Directly setting z-index here
        });
    }

    $('#btnNeutral').click(function() { changeState('Neutral.png', 'neutral-bg'); });
    $('#btnHappy').click(function() { changeState('Happy.png', 'happy-bg'); });
    $('#btnCurious').click(function() { changeState('Surprised.png', 'curious-bg'); });
    $('#btnSurprised').click(function() { changeState('Curious.png', 'surprised-bg'); });
    $('#btnEvil').click(function() { changeState('Evil.png', 'evil-bg'); });
    $('#btnPleading').click(function() { changeState('Pleading.png', 'pleading-bg'); });
});
