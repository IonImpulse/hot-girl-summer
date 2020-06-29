$(document).ready(function(){

    $('#sample_goal').goalProgress({
        goalAmount: 100,
        currentAmount: 32,
        textBefore: 'Igneous Girl Summer: ',
        textAfter: '°'
    });
    $(function() {
        $('body').removeClass('fade-out');
    });
});
