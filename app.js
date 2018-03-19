$(document).ready(function() {
    var randomquote;
    var quotes;
    var random;
    function getQuote(){
        var quotes=["I'm so fast that last night I turned off the light switch in my hotel room and was in bed before the room was dark.", "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.", "Float like a butterfly, sting like a bee.", "Don't count the days, make the days count", "It's hard to be humble when you're as great as I am.", "He who is not courageous enough to take risks will accomplish nothing in life.", "If they can make penicillin out of moldy bread, they can sure make something out of you", "I’ve wrestled with alligators. I’ve tussled with a whale. I done handcuffed lightning. And throw thunder in jail"];

        var random= Math.floor((Math.random()*quotes.length));
        var randomquote=quotes[random];

        $(".quote").text(randomquote);

    }

    $("#tweet").on("click",function(){
        window.open("https://twitter.com/intent/tweet?text=" + randomquote);
    });


    $("#newquote").on("click",function(){

        getQuote();
    });

});

