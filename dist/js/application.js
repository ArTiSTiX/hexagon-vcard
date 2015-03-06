!function(){"use strict";function o(o,i,e){function c(n,i,e,c,r,m,l,g,p){function b(o){return o.radius*Math.sin(x.getAngle(o))+k.width/2-u/2}function h(o){return o.radius*Math.cos(x.getAngle(o))+k.height/2-u/2}function v(o){return o.radius*Math.sin(x.getAngle(o))+k.width/2}function w(o){return o.radius*Math.cos(x.getAngle(o))+k.height/2}function y(o){return(x.pos+o.offset)*(2*Math.PI/d)}function F(o){var n=Math.floor((x.pos+o.offset)%d);return f[n]}function C(o){return"transform: translateX(-128px) translateY(-128px) scale(1) translateX("+x.getCenterX(o)+"px) translateY("+x.getCenterY(o)+"px);"}function B(){"back"!=x.active.screen&&(x.active=!0,x.clickable=!0,x.is_link=!x.shouldDeploy)}function A(n,i){x.is_main?s(x.screen):"back"==x.screen?t():x.is_link?window.open(x.href):a(x.screen,x.getScreenLayout(i),x),o.pick_label.active=""}function D(n,i){for(var e=0;e<i.picks.length;e++)i.picks[e]!=x&&(i.picks[e].faded=!0);x.is_main||(x.getAngle(i)/Math.PI%2>1?(o.pick_label.active="right",o.pick_label.right_value=x.name):(o.pick_label.active="left",o.pick_label.left_value=x.name))}function _(n,i){for(var e=0;e<i.picks.length;e++)i.picks[e].faded=!1;o.pick_label.active=""}var x=this;return this.pos=n,this.name=i,this.href=e,this.icon=c,this.color=r,this.screen=m,this.shouldDeploy=!l,this.is_main=p||!1,this.faded=!1,this.active=g,this.clickable=!0,this.is_link=l,this.getX=b,this.getY=h,this.getCenterX=v,this.getCenterY=w,this.click=A,this.mouseenter=D,this.mouseleave=_,this.getAngle=y,this.getScreenLayout=F,this.getStyle=C,this.reset=B,this}function a(n,i,c){o.layout=i,o.pick_label.active="",m(),o.menu_back_active=!1,c.active=!0,c.is_link=!0,w.active=!0,w.picks[h[i]-1].active=!0,e(function(){o.content_position=v[i]},100)}function t(){o.layout="center";for(var n in o.layers)if(o.layers.hasOwnProperty(n))for(var i=0;i<o.layers[n].picks.length;i++)o.layers[n].picks[i].reset();w.active=!1,o.content_position="",o.menu_back_active=!0}function r(){o.menu_back_active&&A&&A!=y&&(g(A,y),o.menu_back_active=!1)}function s(n){g(y,o.layers[n]),o.menu_back_active=!0}function m(){for(var n in o.layers)if(o.layers.hasOwnProperty(n))for(var i=0;i<o.layers[n].picks.length;i++)o.layers[n].picks[i].active=!1}function l(o){A=o,p(o,!0)}function g(o,n){A="",p(o,!1,function(){l(n)})}function p(o,n,e){function c(){a.radius=l+t*(g-l),a.offset=s+t*(m-s),t>=1&&(a.radius=g,a.offset=m,n||(a.active=!1),i.cancel(r),e&&e()),t+=.3}var a=o,t=0,r=i(c,100);if(n)var s=a.max_offset-b,m=a.max_offset,l=0,g=a.max_radius;else var m=a.max_offset+b,s=a.max_offset,l=a.max_radius,g=0;a.active=!0}var u=256,d=6,b=.5,k={width:1024,height:1024,viewbox:"0 0 1024 1024"},f={0:"left-bottom",1:"up-right",2:"left-top",3:"right-top",4:"up-left",5:"right-bottom"},h={"left-bottom":2,"up-right":4,"left-top":6,"right-top":5,"up-left":1,"right-bottom":3},v={"left-bottom":"right","up-right":"bottom","left-top":"right","right-top":"left","up-left":"bottom","right-bottom":"left"};o.viewport=k,o.pick_label={left_value:"",right_value:"",active:""};var w={active:!1,offset:.5,radius:300,max_radius:300,picks:[new c(1,"Back","","img/icons/back.png","#444444","back",null,!1),new c(2,"Back","","img/icons/back.png","#444444","back",null,!1),new c(3,"Back","","img/icons/back.png","#444444","back",null,!1),new c(4,"Back","","img/icons/back.png","#444444","back",null,!1),new c(5,"Back","","img/icons/back.png","#444444","back",null,!1),new c(6,"Back","","img/icons/back.png","#444444","back",null,!1)]},y={active:!1,offset:.5,max_offset:.5,radius:0,max_radius:300,picks:[new c(5,"Projects","http://twitter.com",null,"#666","projects",null,!0,!0),new c(6,"Contact","http://twitter.com",null,"#666","contact",null,!0,!0)]},F={active:!1,offset:0,max_offset:.5,radius:0,max_radius:300,picks:[new c(1,n.twitter.name,"http://twitter.com",n.twitter.icon,n.twitter.color,"twitter",!1,!0),new c(2,n.deviantart.name,"http://twitter.com",n.deviantart.icon,n.deviantart.color,"deviantart",!0,!0),new c(3,n.facebook.name,"http://twitter.com",n.facebook.icon,n.facebook.color,"facebook",!0,!0),new c(4,n.googleplus.name,"http://twitter.com",n.googleplus.icon,n.googleplus.color,"googleplus",!0,!0),new c(5,n.tumblr.name,"http://twitter.com",n.tumblr.icon,n.tumblr.color,"tumblr",!0,!0),new c(6,n.lastfm.name,"http://twitter.com",n.lastfm.icon,n.lastfm.color,"lastfm",!1,!0)]},C={active:!1,offset:1,max_offset:1.5,radius:0,max_radius:300,picks:[new c(1,n.github.name,"http://twitter.com",n.github.icon,n.github.color,"github",!1,!0),new c(3,n.linkedin.name,"http://twitter.com",n.linkedin.icon,n.linkedin.color,"linkedin",!0,!0),new c(5,n.viadeo.name,"http://twitter.com",n.viadeo.icon,n.viadeo.color,"viadeo",!0,!0)]},B={active:!1,offset:.75,max_offset:1.5,radius:0,max_radius:300,picks:[new c(2,n.gmail.name,"http://twitter.com",n.gmail.icon,n.gmail.color,"gmail",!0,!0),new c(4,n.skype.name,"http://twitter.com",n.skype.icon,n.skype.color,"skype",!0,!0),new c(6,n.steam.name,"http://twitter.com",n.steam.icon,n.steam.color,"steam",!1,!0)]};o.layers={main:y,back:w,social:F,pro:C,contact:B,projects:B},o.layout="center",o.content_position="",o.menu_back_active=!1,o.menu_back=r,o.gotToMenu=s;var A="";e(function(){l(y)},1e3)}var n={fivehundredpixels:{name:"500px",color:"#444444",icon:"img/icons/500px-512.png"},alistapart:{name:"A List Apart",color:"#222222",icon:"img/icons/alistapart-512.png"},aboutme:{name:"About.me",color:"#00405D",icon:"img/icons/aboutme-512.png"},aim:{name:"AIM",color:"#F2D523",icon:"img/icons/aim-512.png"},amazon:{name:"Amazon",color:"#FF9900",icon:"img/icons/amazon-512.png"},amazonwishlist:{name:"Amazon Wishlist",color:"#FF9900",icon:"img/icons/amazonwishlist-512.png"},android:{name:"Android",color:"#A4C639",icon:"img/icons/android-512.png"},angellist:{name:"AngelList",color:"#000000",icon:"img/icons/angellist-512.png"},aol:{name:"Aol",color:"#000000",icon:"img/icons/aol-512.png"},appdotnet:{name:"App Dot Net",color:"#898D90",icon:"img/icons/appdotnet-512.png"},apple:{name:"Apple",color:"#B9BFC1",icon:"img/icons/apple-512.png"},audioboo:{name:"Audioboo",color:"#AE006E",icon:"img/icons/audioboo-512.png"},aws:{name:"AWS",color:"#FF9900",icon:"img/icons/aws-512.png"},basecamp:{name:"Basecamp",color:"#66AD4E",icon:"img/icons/basecamp-512.png"},bebo:{name:"Bebo",color:"#EE1010",icon:"img/icons/bebo-512.png"},behance:{name:"Behance",color:"#1769FF",icon:"img/icons/behance-512.png"},bitbucket:{name:"Bitbucket",color:"#205081",icon:"img/icons/bitbucket-512.png"},bitly:{name:"Bitly",color:"#ED6022",icon:"img/icons/bitly-512.png"},blip:{name:"Blip",color:"#FF1919",icon:"img/icons/blip-512.png"},blogger:{name:"Blogger",color:"#F57D00",icon:"img/icons/blogger-512.png"},bootstrap:{name:"Bootstrap",color:"#0088CC",icon:"img/icons/bootstrap-512.png"},codepen:{name:"Codepen",color:"#231F20",icon:"img/icons/codepen-512.png"},codeschool:{name:"Code School",color:"#C68044",icon:"img/icons/codeschool-512.png"},codecademy:{name:"Codecademy",color:"#0088CC",icon:"img/icons/codecademy-512.png"},coderbits:{name:"coderbits",color:"#F16522",icon:"img/icons/coderbits-512.png"},coderwall:{name:"Coderwall",color:"#3E8DCC",icon:"img/icons/coderwall-512.png"},conservatives:{name:"Conservatives",color:"#0087DC",icon:"img/icons/conservatives-512.png"},coursera:{name:"Coursera",color:"#3A6D8E",icon:"img/icons/coursera-512.png"},css3:{name:"CSS3",color:"#0092BF",icon:"img/icons/css3-512.png"},delicious:{name:"Delicious",color:"#3274D1",icon:"img/icons/delicious-512.png"},designernews:{name:"Designer News",color:"#1C52A2",icon:"img/icons/designernews-512.png"},deviantart:{name:"DeviantART",color:"#4B5D50",icon:"img/icons/deviantart-512.png"},digg:{name:"Digg",color:"#14589E",icon:"img/icons/digg-512.png"},disqus:{name:"Disqus",color:"#2E9FFF",icon:"img/icons/disqus-512.png"},dribbble:{name:"Dribbble",color:"#EA4C89",icon:"img/icons/dribbble-512.png"},dropbox:{name:"Dropbox",color:"#2281CF",icon:"img/icons/dropbox-512.png"},drupal:{name:"Drupal",color:"#0077C0",icon:"img/icons/drupal-512.png"},ebay:{name:"Ebay",color:"#0064D2",icon:"img/icons/ebay-512.png"},envato:{name:"Envato",color:"#528036",icon:"img/icons/envato-512.png"},eventstore:{name:"Event Store",color:"#6BA300",icon:"img/icons/eventstore-512.png"},eventbrite:{name:"Eventbrite",color:"#F3844C",icon:"img/icons/eventbrite-512.png"},evernote:{name:"Evernote",color:"#6BB130",icon:"img/icons/evernote-512.png"},exfm:{name:"exfm",color:"#0097F8",icon:"img/icons/exfm-512.png"},facebook:{name:"Facebook",color:"#3B5998",icon:"img/icons/facebook-512.png"},flattr:{name:"Flattr",color:"#F67C1A",icon:"img/icons/flattr-512.png"},flickr:{name:"Flickr",color:"#0063DB",icon:"img/icons/flickr-512.png"},formspring:{name:"Formspring",color:"#0076C0",icon:"img/icons/formspring-512.png"},forrst:{name:"Forrst",color:"#5B9A68",icon:"img/icons/forrst-512.png"},foursquare:{name:"Foursquare",color:"#2398C9",icon:"img/icons/foursquare-512.png"},geeklist:{name:"Geeklist",color:"#8CC63E",icon:"img/icons/geeklist-512.png"},github:{name:"GitHub",color:"#111111",icon:"img/icons/github-512.png"},gmail:{name:"Gmail",color:"#DD4B39",icon:"img/icons/gmail-512.png"},goodreads:{name:"Goodreads",color:"#5A471B",icon:"img/icons/goodreads-512.png"},google:{name:"Google",color:"#245DC1",icon:"img/icons/google-512.png"},googleplus:{name:"Google Plus",color:"#D14836",icon:"img/icons/googleplus-512.png"},govuk:{name:"GOV.UK",color:"#231F20",icon:"img/icons/govuk-512.png"},gravatar:{name:"Gravatar",color:"#1E8CBE",icon:"img/icons/gravatar-512.png"},grooveshark:{name:"Grooveshark",color:"#000000",icon:"img/icons/grooveshark-512.png"},hackernews:{name:"Hacker News",color:"#FF6600",icon:"img/icons/hackernews-512.png"},heroku:{name:"Heroku",color:"#6762A6",icon:"img/icons/heroku-512.png"},html5:{name:"HTML5",color:"#F06529",icon:"img/icons/html5-512.png"},imdb:{name:"IMDb",color:"#F3CE00",icon:"img/icons/imdb-512.png"},instagram:{name:"Instagram",color:"#3F729B",icon:"img/icons/instagram-512.png"},jquery:{name:"jQuery",color:"#0867AB",icon:"img/icons/jquery-512.png"},jqueryui:{name:"jQuery UI",color:"#FEA620",icon:"img/icons/jqueryui-512.png"},jsdb:{name:"JSDB",color:"#DA320B",icon:"img/icons/jsdb-512.png"},jsfiddle:{name:"jsFiddle",color:"#4679A4",icon:"img/icons/jsfiddle-512.png"},justgiving:{name:"JustGiving",color:"#78256D",icon:"img/icons/justgiving-512.png"},khanacademy:{name:"Khan Academy",color:"#9DB63B",icon:"img/icons/khanacademy-512.png"},kickstarter:{name:"Kickstarter",color:"#87C442",icon:"img/icons/kickstarter-512.png"},kik:{name:"kik",color:"#87C541",icon:"img/icons/kik-512.png"},klout:{name:"Klout",color:"#E24A25",icon:"img/icons/klout-512.png"},labour:{name:"Labour",color:"#C41230",icon:"img/icons/labour-512.png"},laravel:{name:"Laravel",color:"#FB502B",icon:"img/icons/laravel-512.png"},lastfm:{name:"Last.fm",color:"#D51007",icon:"img/icons/lastfm-512.png"},layervault:{name:"Layer Vault",color:"#26AE90",icon:"img/icons/layervault-512.png"},letterboxd:{name:"Letterboxd",color:"#2C3641",icon:"img/icons/letterboxd-512.png"},liberaldemocrats:{name:"Liberal Democrats",color:"#F7B135",icon:"img/icons/liberaldemocrats-512.png"},linkedin:{name:"LinkedIn",color:"#007FB1",icon:"img/icons/linkedin-512.png"},livejournal:{name:"LiveJournal",color:"#195397",icon:"img/icons/livejournal-512.png"},mediatemple:{name:"Media Temple",color:"#000000",icon:"img/icons/mediatemple-512.png"},mendeley:{name:"Mendeley",color:"#B61F2F",icon:"img/icons/mendeley-512.png"},microformats:{name:"Microformats",color:"#8CC319",icon:"img/icons/microformats-512.png"},microsoftaccount:{name:"Microsoft Account",color:"#3E73B4",icon:"img/icons/microsoftaccount-512.png"},modernizr:{name:"Modernizr",color:"#D81A76",icon:"img/icons/modernizr-512.png"},myspace:{name:"MySpace",color:"#008DDE",icon:"img/icons/myspace-512.png"},mysql:{name:"MySQL",color:"#007597",icon:"img/icons/mysql-512.png"},nationalrail:{name:"National Rail",color:"#003366",icon:"img/icons/nationalrail-512.png"},netlog:{name:"Netlog",color:"#000000",icon:"img/icons/netlog-512.png"},newsvine:{name:"Newsvine",color:"#075B2F",icon:"img/icons/newsvine-512.png"},office:{name:"Office",color:"#EB3C00",icon:"img/icons/office-512.png"},orkut:{name:"Orkut",color:"#ED2590",icon:"img/icons/orkut-512.png"},outlook:{name:"Outlook",color:"#0072C6",icon:"img/icons/outlook-512.png"},path:{name:"Path",color:"#E41F11",icon:"img/icons/path-512.png"},paypal:{name:"Paypal",color:"#1F356F",icon:"img/icons/paypal-512.png"},picasa:{name:"Picasa",color:"#4B5D5F",icon:"img/icons/picasa-512.png"},pocket:{name:"Pocket",color:"#EF4056",icon:"img/icons/pocket-512.png"},php:{name:"PHP",color:"#6181B6",icon:"img/icons/php-512.png"},pinboard:{name:"Pinboard",color:"#0000FF",icon:"img/icons/pinboard-512.png"},pingup:{name:"Pingup",color:"#00B1AB",icon:"img/icons/pingup-512.png"},pinterest:{name:"Pinterest",color:"#CB2027",icon:"img/icons/pinterest-512.png"},protoio:{name:"Proto.io",color:"#40C8F4",icon:"img/icons/proto.io-512.png"},quora:{name:"Quora",color:"#A82400",icon:"img/icons/quora-512.png"},rails:{name:"Rails",color:"#A62C39",icon:"img/icons/rails-512.png"},rdio:{name:"Rdio",color:"#006ED2",icon:"img/icons/rdio-512.png"},readability:{name:"Readability",color:"#870000",icon:"img/icons/readability-512.png"},readmill:{name:"Readmill",color:"#052336",icon:"img/icons/readmill-512.png"},reddit:{name:"Reddit",color:"#FF4500",icon:"img/icons/reddit-512.png"},rss:{name:"RSS",color:"#FF8300",icon:"img/icons/rss-512.png"},salesforce:{name:"Salesforce",color:"#333333",icon:"img/icons/salesforce-512.png"},sinaweibo:{name:"Sina Weibo",color:"#E6162D",icon:"img/icons/sinaweibo-512.png"},skydrive:{name:"SkyDrive",color:"#094AB1",icon:"img/icons/skydrive-512.png"},skype:{name:"Skype",color:"#00AFF0",icon:"img/icons/skype-512.png"},slideshare:{name:"SlideShare",color:"#009999",icon:"img/icons/slideshare-512.png"},smashingmagazine:{name:"Smashing Magazine",color:"#E95C33",icon:"img/icons/smashingmagazine-512.png"},soundcloud:{name:"SoundCloud",color:"#FF6600",icon:"img/icons/soundcloud-512.png"},spotify:{name:"Spotify",color:"#80B719",icon:"img/icons/spotify-512.png"},squarespace:{name:"Squarespace",color:"#000000",icon:"img/icons/squarespace-512.png"},stackexchange:{name:"Stack Exchange",color:"#1F5196",icon:"img/icons/stackexchange-512.png"},stackoverflow:{name:"Stack Overflow",color:"#F47920",icon:"img/icons/stackoverflow-512.png"},steam:{name:"Steam",color:"#000000",icon:"img/icons/steam-512.png"},stumbleupon:{name:"StumbleUpon",color:"#EB4924",icon:"img/icons/stumbleupon-512.png"},superuser:{name:"Super User",color:"#2DABE2",icon:"img/icons/superuser-512.png"},ted:{name:"TED",color:"#FF2B06",icon:"img/icons/ted-512.png"},trakt:{name:"Trakt",color:"#222222",icon:"img/icons/trakt-512.png"},treehouse:{name:"Treehouse",color:"#7FA24C",icon:"img/icons/treehouse-512.png"},tripadvisor:{name:"Trip Advisor",color:"#589442",icon:"img/icons/tripadvisor-512.png"},tumblr:{name:"Tumblr",color:"#2C4762",icon:"img/icons/tumblr-512.png"},twitch:{name:"Twitch",color:"#6441A5",icon:"img/icons/twitch-512.png"},twitter:{name:"Twitter",color:"#00ACED",icon:"img/icons/twitter-512.png"},typo3:{name:"TYPO3",color:"#FF8700",icon:"img/icons/typo3-512.png"},verisign:{name:"VeriSign",color:"#FFC10C",icon:"img/icons/verisign-512.png"},viadeo:{name:"Viadeo",color:"#F4982B",icon:"img/icons/viadeo-512.png"},vimeo:{name:"Vimeo",color:"#44BBFF",icon:"img/icons/vimeo-512.png"},vine:{name:"Vine",color:"#00A47A",icon:"img/icons/vine-512.png"},visualstudio:{name:"Visual Studio",color:"#68217A",icon:"img/icons/visualstudio-512.png"},vk:{name:"VK",color:"#45668E",icon:"img/icons/vk-512.png"},vznetzwerke:{name:"VZ Netzwerke",color:"#EE0000",icon:"img/icons/vznetzwerke-512.png"},w3c:{name:"W3C",color:"#0066B0",icon:"img/icons/w3c-512.png"},whatsapp:{name:"WhatsApp",color:"#64D448",icon:"img/icons/whatsapp-512.png"},wikipedia:{name:"Wikipedia",color:"#000000",icon:"img/icons/wikipedia-512.png"},windows:{name:"Windows",color:"#00BDF6",icon:"img/icons/windows-512.png"},wordpress:{name:"WordPress",color:"#21759B",icon:"img/icons/wordpress-512.png"},xbox:{name:"Xbox",color:"#107C10",icon:"img/icons/xbox-512.png"},xing:{name:"Xing",color:"#006567",icon:"img/icons/xing-512.png"},yahoo:{name:"Yahoo!",color:"#731A8B",icon:"img/icons/yahoo-512.png"},yelp:{name:"Yelp",color:"#C93C27",icon:"img/icons/yelp-512.png"},youtube:{name:"YouTube",color:"#CD332D",icon:"img/icons/youtube-512.png"},zerply:{name:"Zerply",color:"#9DBC7A",icon:"img/icons/zerply-512.png"}},i=angular.module("artistix",[]);i.controller("HomeController",o),o.$inject=["$scope","$interval","$timeout"]}();