$(document).ready(function(){

    $('#sample_goal').goalProgress({
        goalAmount: 100,
        currentAmount: 20,
        textBefore: 'Lukewarm Girl Summer: ',
        textAfter: '°'
    });
    $(function() {
        $('body').removeClass('fade-out');
    });
});
