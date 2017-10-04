/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

new Vue({
    el: '#app',
    components: {
        'comment': {
            data: function () {
                return {
                    hasWhitespaceInsideMarkers: true
                }
            },
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
        'attribute-selector': {
            data: function () {
                return {
                    name: 'title'
                }
            },
            template: '<span class="attribute-selector">[{{ name }}]</span>'
        },
        'pseudo-class': {
            data: function () {
                return {
                    name: 'hover'
                }
            },
            template: '<span class="pseudo-class">' +
                '<span class="pseudo-class__single-notation">:</span>' +
                '<span class="pseudo-class__name">{{ name }}</span>' +
            '</span>'
        },
        'pseudo-element': {
            data: function () {

                return {
                    name: 'after',
                    isSingleNotation: true,
                    vendorPrefix: 'hz' // todo: get getBrowserPrefix from vendor-prefix component
                }
            },
            template: '<span class="pseudo-element" >' +
                '<span class="pseudo-element__single-notation" v-if="isSingleNotation">:</span>' +
                '<span class="pseudo-element__single-notation" v-else>::</span>' +
                '<span class="pseudo-element__name">{{ name }}</span>' +
            '</span>'
        },
        'vendor-prefix': {
            data: function () {
                return {
                    browser: 'chrome'
                }
            },
            computed: {
                getBrowserPrefix: function () {
                    var prefixList = {
                        chrome: '-webkit-',
                        firefox: '-moz-',
                        ie: {
                            colon: '::',
                            standard: '-ms-'
                        },
                        opera: '-o-',
                        default: 'def'
                    };
                    if (typeof this.browser !== 'string' && this.browser.name && this.browser.name === 'ie') {
                        if (this.isColon) {
                            return prefixList.ie.colon
                        } else {
                            return prefixList.ie.standard
                        }
                    }
                    return typeof prefixList[this.browser] !== 'undefined' ? prefixList[this.browser] : prefixList.default
                }
            },
            template: '<span class="vendor-prefix">{{ getBrowserPrefix }}</span>'
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
