$(document).ready(function(){

    $('#sample_goal').goalProgress({
        goalAmount: 100,
        currentAmount: 25,
        textBefore: 'Balmy Girl Summer: ',
        textAfter: '°'
    });
    $(function() {
        $('body').removeClass('fade-out');
    });
});
