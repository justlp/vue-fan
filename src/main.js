/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'


new Vue({
    el: '#app',
    components: {
        'comment': {
            data: function () { return {
                hasWhitespaceInsideMarkers: true
            } },
            template: '<span class="comment">' +
            '<span class="comment__open-marker">/*</span>' +
            '<mark v-if="hasWhitespaceInsideMarkers">&nbsp;</mark>' +
            '<span class="comment__content">comment</span>' +
            '<mark v-if="hasWhitespaceInsideMarkers">&nbsp;</mark>' +
            '<span class="comment__close-marker">*/</span>' +
            '</span>'
        },
        'selector': {
            data: function () {
                return {
                    name: '.foo'
                }
            },
            template: '<span class="selector">{{ name }}</span>'
        },
        'property': {
            data: function () {
                return {
                    name: 'color', // or put another component
                    value: '#fff', // or put another component
                    isSemicolon: true,
                    isImportant: true,
                    hasSpaceBeforeColon: true,
                    hasSpaceAfterColon: true
                }
            },
            template: '<span class="property">' +
            '<span class="property__name">{{ name }}</span>' +
            '<mark class="mark" v-if="hasSpaceBeforeColon">&nbsp;</mark>' +
            '<span class="property__colon">:</span>' +
            '<mark class="mark" v-if="hasSpaceAfterColon">&nbsp;</mark>' +
            '<span class="property__value">{{ value }}</span>' +
            '<span class="property__important" v-if="isImportant">!important</span>' +
            '<span class="property__semicolon" v-if="isSemicolon">;</span>' +
            '</span>'
        }
    }
});
