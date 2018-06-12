define(['jquery', 'core/log'], function($, log) {

    return {
        init: function(buttonid, panelid) {
                $("#" + buttonid).click(function() {
                    $("#" + panelid).slideToggle('slow');
                });
        }
    }
});