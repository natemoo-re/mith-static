(self.webpackChunkmith_static=self.webpackChunkmith_static||[]).push([[836],{1097:function(e,t,a){"use strict";var l=a(5444),n=a(7294);t.Z=function(e){var t=e.count,a=e.path;return n.createElement("section",{className:"pagination-wrap"},n.createElement("ul",{className:"pagination"},Array.from({length:t},(function(e,t){return n.createElement("li",{className:"page-link"},n.createElement(l.rU,{activeClassName:"active",className:"page-link",key:"pagination-number"+(t+1),to:"/"+a+"/"+(0===t?"":t+1)},t+1))}))))}},5177:function(e,t,a){"use strict";a.r(t);var l=a(7294),n=a(5444),s=a(378),i=a(1097),c=a(7487),r=a(8821),o=a(422);t.default=function(e){var t=e.data,a=e.pageContext,m=t.allEventsJson.nodes,u=t.allEventsJson.pageInfo.pageCount,p=a.headshots;return l.createElement(s.Z,null,l.createElement(c.Z,{title:"MITH Digital Dialogues"}),l.createElement("div",{className:"page-dialogues"},l.createElement("section",{className:"posts dialogues events"},l.createElement("h1",{className:"page-title"},"Digital Dialogues"),m.map((function(e){var t="/digital-dialogues/"+e.id+"/",a=e.event_title,s=e.talk_title,i=s||a,c=e.talk_subtitle?l.createElement("h2",{className:"title"},l.createElement(n.rU,{to:t},i,l.createElement("span",{className:"subtitle"},e.talk_subtitle))):l.createElement("h2",{className:"title"},l.createElement(n.rU,{to:t},i)),m=e.location?l.createElement("div",{className:"location"},e.location):"",u=null,g=null,d=e.speakers?e.speakers:[];return e.speakers.length>0&&(u=d.map((function(e,t){return e.headshot=p[e.slug],l.createElement(o.Z,{key:"p"+t,person:e,type:"dialogue-index"})})),g=l.createElement("div",{className:"speakers"},u)),l.createElement("article",{className:"post dialogue event",id:e.id.toLowerCase().replace(/-/g,"_"),key:"dialogue-"+e.id},c,l.createElement("div",{className:"meta"},g,m,l.createElement(r.Z,{start:e.start})))}))),l.createElement(i.Z,{count:u,path:"digital-dialogues"})))}}}]);
//# sourceMappingURL=component---src-templates-dialogue-index-js-0ffd5a104b8b4ffbcc54.js.map