/*globals window, document, ga*/
import {Meteor} from 'meteor/meteor';
// import {resize, start} from '/imports/ui/canvasAnimation';

Meteor.startup(() => {
  // resize();
  // setTimeout(() => start(), 3e3);
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-2433084-21', 'auto');
ga('send', 'pageview');
