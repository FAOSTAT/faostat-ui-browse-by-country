/* global define*/
define(function() {

    'use strict';

    var config = {
        paths: {
            FAOSTAT_UI_BROWSE_BY_COUNTRY: 'faostat-ui-browse-by-country',
            faostat_ui_browse_by_country: '../'
        },
        shim: {
            bootstrap: {
                deps: ['jquery']
            }
        }
    };

    return config;

});