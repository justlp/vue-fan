/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Property from './components/Property'
import Comment from './components/Comment'
import Selector from './components/Selector'
// import AttributeSelector from './components/AttributeSelector'
// import PseudoClass from './components/PseudoClass'
// import VendorPrefix from './components/VendorPrefix'



Vue.component(Property.name, Property)
Vue.component(Comment.name, Comment)
Vue.component(Selector.name, Selector)
// Vue.component(AttributeSelector.name, AttributeSelector)
// Vue.component(PseudoClass.name, PseudoClass)
// Vue.component(VendorPrefix.name, VendorPrefix)

new Vue({
  el: '#app'
});
