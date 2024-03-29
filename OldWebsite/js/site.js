function showSocialButtons() {
    var html =  '<div id="social-buttons" class="fadeable fade">'
                    + '<h3>Spread the word!</h3>'
                    + '<ul>'
                    + '<li class="fb-like" data-href="http://www.chattertots.net" data-layout="box_count" data-width="50" ></li>'
                    + '<li class="g-plusone-frame"><div class="g-plusone" data-size="tall" data-href="http://www.chattertots.net"></div></li>'
                    + '<a href="https://twitter.com/share" class="twitter-share-button" data-url="http://www.chattertots.net" data-text="I recommend Chattertots Speech and language therapy for children based in Godalming, Surrey" data-count="vertical">Tweet</a>'
                    + '<li id="fb-root"></li>'
                    + '</ul>'
                + '</div>';
    document.getElementById( 'viewport' ).insertAdjacentHTML( 'beforeEnd', html );

    var script = document.createElement( 'script' );
    script.async = true;
    script.src = document.location.protocol + '//connect.facebook.net/en_US/all.js#xfbml=1&appId=267603823260704';
    document.getElementById( 'fb-root' ).appendChild( script );

    script = document.createElement( 'script' );
    script.async = true;
    script.src = document.location.protocol + '//platform.twitter.com/widgets.js';
    document.getElementById( 'social-buttons' ).appendChild( script );

    script = document.createElement( 'script' );
    script.async = true;
    script.src = document.location.protocol + '//apis.google.com/js/plusone.js';
    document.getElementById( 'social-buttons' ).appendChild( script );

    window.setTimeout( function () {

        document.getElementById( 'social-buttons' ).removeAttribute( 'class' );

    }, 2000);

}
showSocialButtons();
$(".fit").fitText(1.7);
$(".fitPlus").fitText(1.45);
