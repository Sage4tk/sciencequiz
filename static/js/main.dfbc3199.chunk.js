(this.webpackJsonpsciencequiz=this.webpackJsonpsciencequiz||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),i=n(5),a=n.n(i),o=n(3),c=n(2),l=n.p+"static/media/select.e1001441.mp3",h=n(0),u=function(e){var t=e.setting,n=e.setSetting;return 1!==t.currentPage?null:Object(h.jsx)("div",{className:"mainMenu",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"The Earth is under attack by aliens and your knowledge of Earth Science is the only thing stopping them from destroying earth!"}),Object(h.jsx)("button",{onClick:function(){new Audio(l).play(),setTimeout((function(){n((function(e){return Object(c.a)(Object(c.a)({},e),{},{currentPage:2})}))}),1e3)},children:"Play"})]})})},g=n.p+"static/media/worldwide.82e95fdd.svg",d=n.p+"static/media/ufo.270b3f5c.svg",b=function(e){var t={width:e.health+"%"};return Object(h.jsxs)("div",{className:"health-position",children:[Object(h.jsx)("p",{children:"Current Health"}),Object(h.jsx)("div",{className:"health",children:Object(h.jsx)("div",{className:"health__inside",style:t})})]})},m=n.p+"static/media/wrong.e7d520aa.mp3",j=n.p+"static/media/score.5423532c.mp3";function p(e){var t=e.data,n=e.page,s=e.setPage,r=e.health,i=e.setHealth,a=e.tries,o=e.setTries;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("p",{onClick:function(){var e=new Audio(m);e.volume=.2;var c=new Audio(j);c.volume=.2,t.correct?(c.play(),o(1),s(n+1)):1!==a?(e.play(),i(r-25),s(n+1)):(e.play(),o(0))},children:t.answer})})}function y(e){var t=e.tries,n=e.content;return 0!==t?null:Object(h.jsx)("div",{className:"tip",children:Object(h.jsxs)("p",{children:["Hint: ",n]})})}function w(e){var t=e.content,n=e.page,r=e.setPage,i=e.health,a=e.setHealth,c=Object(s.useState)(1),l=Object(o.a)(c,2),u=l[0],g=l[1];return n!==t.questionNum||0===i?null:Object(h.jsxs)("div",{className:"question-placement",children:[Object(h.jsxs)("div",{className:"question",children:[Object(h.jsxs)("p",{children:[t.questionNum,"."]}),Object(h.jsx)("p",{children:t.question})]}),Object(h.jsx)("div",{className:"answer-position",children:t.answers.map((function(e){return Object(h.jsx)(p,{data:e,page:n,setPage:r,health:i,setHealth:a,tries:u,setTries:g})}))}),Object(h.jsx)(y,{tries:u,content:t.tips})]})}function x(e){var t=e.page,n=e.setPage,s=e.setSetting,r=e.setHealth;return 10!==t?null:Object(h.jsxs)("div",{className:"win",children:[Object(h.jsx)("h1",{children:"YOU SAVED EARTH!"}),Object(h.jsx)("button",{onClick:function(){r(100),n(1),s((function(e){return Object(c.a)(Object(c.a)({},e),{},{currentPage:1})}))},children:"Restart"})]})}function f(e){var t=e.health,n=e.setSetting,s=e.setPage,r=e.setHealth;return 0!==t?null:Object(h.jsxs)("div",{className:"win",children:[Object(h.jsx)("h1",{children:"Game Over"}),Object(h.jsx)("button",{onClick:function(){r(100),s(1),n((function(e){return Object(c.a)(Object(c.a)({},e),{},{currentPage:1})}))},children:"Restart"})]})}var v=[{questionNum:1,question:"Describe and illustrate Earth's oxygen cycle?",answers:[{answer:"The oxygen cycle is the various stages the oxygen goes through, It starts the photosynthesis in plants where carbon dioxide is converted into oxygen where it's then ready for living beings that needs oxygen to turn into carbon dioxide",correct:!0},{answer:"The oxygen cycle is the various stages the oxygen goes through, It starts the evaporation in plants where carbon dioxide is converted into oxygen where it's then ready for living beings that needs oxygen to turn into carbon dioxide",correct:!1},{answer:"The oxygen cycle is the various stages the oxygen goes through, It starts the tranpiration in plants where carbon dioxide is converted into oxygen where it's then ready for living beings that needs oxygen to turn into carbon dioxide",correct:!1}],tips:"The cycle occurs with plants taking in oxygen"},{questionNum:2,question:"Why is the oxygen cycle important for all living beings on earth?",answers:[{answer:"The oxygen cycle is important as there is just a limited amount of oxygen that all living being needs to survive.",correct:!0},{answer:"The oxygen cycle is important for living beings as it is needed for modern technology.",correct:!1},{answer:"The oxygen cycle is not important at all.",correct:!1}],tips:"We need to breathe."},{questionNum:3,question:"Describe how the suns energy is important for the carbon cycle.",answers:[{answer:"The suns uv rays is important for vitamin D",correct:!1},{answer:"The suns energy starts convertion of oxygen to carbon",correct:!1},{answer:"Photosynthesis requires the suns energy to convert carbon into oxygen",correct:!0}],tips:"It requires plants."},{questionNum:4,question:"What isn't an example of a carbon form.",answers:[{answer:"Graphite",correct:!1},{answer:"Iron",correct:!0},{answer:"Diamond",correct:!1}],tips:"Carbon has multiple special structures that makes multiple forms possible."},{questionNum:5,question:"Why is there multiple forms of carbom?",answers:[{answer:"Carbon's attract with its outer layer",correct:!1},{answer:"Carbon's structure deems it possible as it can create strong bonds with its valence eletrons",correct:!0},{answer:"Carbon takes up mutple forms due to its size.",correct:!1}],tips:"It has to do with how carbon is layered."},{questionNum:6,question:"Describe the nitrogen cycle",answers:[{answer:"The nitrogen cycle is when nitrogen is inhaled and turned into carbon dioxide.",correct:!1},{answer:"The nitrogen cycle is when oxygen is enforced around the atmosphere and turned into nitrogen.",correct:!1},{answer:"The nitrogen cycle starts with precipitation enforcing nitrogen in the soil where many bacterias assimilates the plants with nitratrogen where it's ready for consumption.",correct:!0}],tips:"It starts when rain helps the nitrogen in our air into the ground."},{questionNum:7,question:"What do bacteria and other microoragnism play part in the nitrogen cycle.",answers:[{answer:"Microorganism converts atmospheric nitrogen for plants to store and be ready for consumption.",correct:!0},{answer:"Microorganism takes nitrogen from plants and releases it to the atmosphere.",correct:!1},{answer:"Nitrogen is converted into microorganism for plants.",correct:!1}],tips:"Microorganism plays an important part for our need of nitrogen."},{questionNum:8,question:"Why is the nitrogen cycle needed.",answers:[{answer:"It is suboptimal for our survival therefore not actually needed.",correct:!1},{answer:"It is needed due to to various living beings needing a form of nitrogen to help survive.",correct:!0},{answer:"It is needed by living things to create energy.",correct:!1}],tips:"Nitrogen is optimal for living."},{questionNum:9,question:"How does the creation of ammonium fertilizer hinder the natural nitrogen cycle.",answers:[{answer:"It slows down the creation nitrogen.",correct:!1},{answer:"It has created an imbalance due to its usage of hydrogen.",correct:!1},{answer:"It has created an imbalance, nitrogen by organism has no where to go but the atmosphere which is currently infalting the nitrogen count.",correct:!0}],tips:"The nitrogen cycle is needed by every living being."}],O=function(e){var t=e.setting,n=e.setSetting,r=Object(s.useState)(100),i=Object(o.a)(r,2),a=i[0],c=i[1],l=Object(s.useState)(1),u=Object(o.a)(l,2),m=u[0],j=u[1],p={display:"none"},y={display:"block"};return 2!==t.currentPage?null:Object(h.jsxs)("div",{className:"gamescreen",children:[Object(h.jsx)(b,{health:a}),Object(h.jsx)("img",{src:g,alt:"globe",className:"earth"}),Object(h.jsx)("img",{src:d,alt:"ufo",className:"ufo__1",style:m>9?p:y}),Object(h.jsx)("img",{src:d,alt:"ufo",className:"ufo__2",style:m>9?p:y}),Object(h.jsx)("img",{src:d,alt:"ufo",className:"ufo__3",style:m>9?p:y}),Object(h.jsx)("img",{src:d,alt:"ufo",className:"ufo__4",style:m>9?p:y}),Object(h.jsx)("img",{src:d,alt:"ufo",className:"ufo__5",style:m>9?p:y}),v.map((function(e){return Object(h.jsx)(w,{content:e,page:m,setPage:j,health:a,setHealth:c},e.questionNum)})),Object(h.jsx)(x,{page:m,setPage:j,setSetting:n,setHealth:c}),Object(h.jsx)(f,{health:a,setSetting:n,setHealth:c,setPage:j})]})},N=function(){var e=Object(s.useState)({currentPage:1}),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(h.jsxs)("div",{className:"background",children:[Object(h.jsx)(u,{setting:n,setSetting:r}),Object(h.jsx)(O,{setting:n,setSetting:r})]})};n(11);var q=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(N,{})})};a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(q,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.dfbc3199.chunk.js.map