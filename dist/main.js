!function(e){var t={};function a(c){if(t[c])return t[c].exports;var r=t[c]={i:c,l:!1,exports:{}};return e[c].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,c){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(c,r,function(t){return e[t]}.bind(null,r));return c},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/dist",a(a.s=0)}([function(e,t){function a(e){return React.createElement("a",{href:"tel:"+e.phone},e.phone)}function c(e){return React.createElement("button",{className:"btn main-btn"},React.createElement("span",null,e.btnText))}function r(e){return React.createElement("input",{type:e.inputType,placeholder:e.inputPaceholder})}function n(e){return React.createElement("div",{className:"features-slider_item"},React.createElement("div",{className:"features-img "+e.featuresImg}),React.createElement("div",{className:"features-feature"},e.sliderItemText))}function l(){return React.createElement("div",null,React.createElement("header",null,React.createElement("div",{className:"wrapper"},React.createElement("div",{className:"header"},React.createElement("a",{href:"#"},React.createElement("div",{className:"header-logo"})),React.createElement("a",{href:"tel:888",className:"header-phone"}),React.createElement("div",{className:"header-phonelink"},React.createElement(a,{phone:"+7(962)556-1234"}))))),React.createElement("main",null,React.createElement("div",{className:"wrapper"},React.createElement("div",{className:"main"},React.createElement("h1",{className:"main-head"},"Заголовок c уникальным торговым предложение по системе 4U"),React.createElement("div",{className:"main-small"},"Описания предлжения компании. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более."),React.createElement(c,{btnText:"Подробнее"})))),React.createElement("section",{className:"features"},React.createElement("div",{className:"wrapper"},React.createElement("div",{className:"features-wrapper"},React.createElement("h2",{className:"features-head"},"Уникальный заголовок для преимущества компании"),React.createElement("div",{className:"features-subhead"},"О нас"),React.createElement("div",{className:"features-description"},"Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить."),React.createElement("div",{className:"features-slider"},React.createElement("div",{className:"features-slider_items"},React.createElement(n,{featuresImg:"features-img1",sliderItemText:"Первое целевое преимущество"}),React.createElement(n,{featuresImg:"features-img2",sliderItemText:"Второе целевое преимущество"}),React.createElement(n,{featuresImg:"features-img3",sliderItemText:"Третье целевое преимущество"}),React.createElement(n,{featuresImg:"features-img4",sliderItemText:"Четвертое целевое преимущество"})),React.createElement("button",{className:"features-slider-arrow features-slider-prev"},React.createElement("svg",{width:"9",height:"16",xmlns:"http://www.w3.org/2000/svg"},React.createElement("path",{d:"M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z"}))),React.createElement("button",{className:"features-slider-arrow features-slider-next"},React.createElement("svg",{width:"9",height:"16",xmlns:"http://www.w3.org/2000/svg"},React.createElement("path",{d:"M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z"}))))))),React.createElement("section",{className:"contact"},React.createElement("div",{className:"wrapper"},React.createElement("div",{className:"contact-wrapper"},React.createElement("h2",{className:"contact-title"},"Остались вопросы?"),React.createElement("div",{className:"contact-description"},"Оставьте номер телефона, и мы перезвоним вам"),React.createElement("form",{action:"../mailer.smart.php",className:"contact-form"},React.createElement(r,{inputType:"text",inputPaceholder:"Ваше имя"}),React.createElement(r,{inputType:"tel",inputPaceholder:"Телефон"}),React.createElement(r,{inputType:"email",inputPaceholder:"E-mail"}),React.createElement(c,{btnText:"Позвоните мне"})),React.createElement("div",{className:"contact-personal"},"Я даю своё ",React.createElement("a",{href:"#"},"согласие")," на обработку моих персональных данных.")))),React.createElement("footer",null,React.createElement("div",{className:"footer"},React.createElement("div",{className:"footer-logo"}),React.createElement("div",{className:"footer-company"},React.createElement("span",null,"© 2020 XXXcompany. Все права защищены.")),React.createElement("a",{href:"tel:888",className:"footer-phone"}),React.createElement("div",{className:"footer-websurfer"},React.createElement("span",{className:"footer-websurfer_build"},"Сделано")," ",React.createElement("a",{href:"#"},"Ваше имя")),React.createElement("div",{className:"footer-phonelink"},React.createElement(a,{phone:"+7(962)556-1234"})))))}ReactDOM.render(React.createElement(l,null),document.getElementById("root"))}]);