(this["webpackJsonpmake-cv-tool"]=this["webpackJsonpmake-cv-tool"]||[]).push([[0],{16:function(e,t,n){e.exports={skills_and_hobbies:"SkillsHobbies_skills_and_hobbies__wzm99"}},25:function(e,t,n){},26:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(14),s=n.n(i),l=(n(25),n(26),n(2)),r=n(6),o=n(0);var d=function(e){var t=e.dataValue,n=e.setDataFunction,a=e.fieldType,i=e.displaySwitch,s=e.style,l=c.a.createRef(),r=c.a.createRef();function d(){void 0!==i&&""!==l.current.value.trim()&&(l.current.style.display=i?"none":"block",r.current.style.display=i?"block":"none",i=!i)}return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",{className:"_inputField",onBlur:d,onKeyDown:function(e){"Enter"!==e.key&&"Escape"!==e.key||e.target.blur()},ref:l,type:a,minLength:"1",placeholder:t,value:t,onChange:function(e){return n(e.target.value)}}),Object(o.jsx)("p",{style:{display:"none"},className:s,ref:r,onClick:d,children:t})]})},u=n(46);var j=function(e){var t=e.info,n=e.addEntry,c=e.defaultValues,i=e.style,s=Object(a.useState)(""),j=Object(l.a)(s,2),f=j[0],b=j[1],O=Object(a.useState)(""),h=Object(l.a)(O,2),p=h[0],x=h[1],m=Object(a.useState)(""),y=Object(l.a)(m,2),_=y[0],v=y[1],g=Object(a.useState)(""),k=Object(l.a)(g,2),N=k[0],S=k[1],I=Object(a.useState)(!1),E=Object(l.a)(I,2),w=E[0],F=E[1];function C(){b(c.title),x(c.location),v(c.year),S(c.remarks)}return Object(a.useEffect)((function(){C()}),[t,c]),Object(o.jsxs)("div",{className:"_inputField",children:[Object(o.jsxs)("h4",{className:i.form_title,onClick:function(){F(!w)},children:[Object(o.jsx)(u.a,{children:"add"}),Object(o.jsx)("p",{children:"Add an Entry"})]}),w&&Object(o.jsxs)("div",{className:i.listed_info_input,style:{display:w?i.display:"none"},children:[Object(o.jsx)(d,{dataValue:f,setDataFunction:b,fieldType:"text"}),Object(o.jsx)(d,{dataValue:p,setDataFunction:x,fieldType:"text"}),Object(o.jsx)(d,{dataValue:_,setDataFunction:v,fieldType:"text"}),Object(o.jsx)("textarea",{onChange:function(e){return S(e.target.value)},value:N}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:function(){var e={entryTitle:f,entryLocation:p,entryYear:_};[c.remarks," ",""].some((function(e){return N===e}))||(e.entryRemarks=N),n((function(t){return[].concat(Object(r.a)(t),[e])}))},children:"Add"}),Object(o.jsx)("button",{onClick:C,children:"Clear"})]})]})]})};var f=function(e){var t=e.id,n=e.singleEntryInfo,a=e.removeEntry;return Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{children:n.entryTitle+" - "}),Object(o.jsx)("span",{children:n.entryYear}),Object(o.jsx)("p",{children:n.entryLocation}),Object(o.jsx)("p",{children:n.entryRemarks}),Object(o.jsx)("button",{className:"_inputField",onClick:function(){return a(t)},children:"Del"})]})},b=n(8),O=n.n(b);var h=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];function i(e){c(n.filter((function(t,n){return n!==e})))}return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("educationInfo"));null!==e&&c(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("educationInfo",JSON.stringify(n))})),Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:"Education "}),Object(o.jsx)("div",{className:O.a.listed_entries,children:Object(o.jsx)("ul",{children:n.map((function(e,t){return Object(o.jsx)(f,{id:t,singleEntryInfo:e,removeEntry:i},t)}))})}),Object(o.jsx)(j,{style:O.a,info:n,addEntry:c,defaultValues:{title:"Degree Title",location:"Location",year:"Year",remarks:"Extra Remarks"}})]})};var p=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];function i(e){c(n.filter((function(t,n){return n!==e})))}return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("jobInfo"));null!==e&&c(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("jobInfo",JSON.stringify(n))})),Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:"Job Experience "}),Object(o.jsx)("div",{className:O.a.listed_entries,children:n.map((function(e,t){return Object(o.jsx)(f,{id:t,singleEntryInfo:e,removeEntry:i},t)}))}),Object(o.jsx)(j,{style:O.a,info:n,addEntry:c,defaultValues:{title:"Position",location:"Location",year:"Date",remarks:"Extra Remarks"}})]})},x=n(3),m=n(5),y=n.n(m);var _=function(){var e=Object(a.useState)({userName:"",localAddress:"",emailAddress:"",phoneNumber:"",socialNetwork:"",personalProfile:""}),t=Object(l.a)(e,2),n=t[0],i=t[1],s=c.a.createRef(),r=c.a.createRef();function u(e){if(""!==r.current.value.trim()){var t="P"===e.target.nodeName;r.current.style.display=t?null:"none",s.current.style.display=t?"none":null}}return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("personalInfo"));i(null===e?{userName:"Your Name.",localAddress:"Where you live.",emailAddress:"Email Address.",phoneNumber:"Phone Number.",socialNetwork:"Social Network Link.",personalProfile:"Write a little about yourself..."}:e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("personalInfo",JSON.stringify(n))})),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:y.a.personal_info_div,children:[Object(o.jsx)("div",{children:Object(o.jsx)(d,{style:y.a.name,dataValue:n.userName,setDataFunction:function(e){return i(Object(x.a)(Object(x.a)({},n),{},{userName:e}))},fieldType:"text",displaySwitch:!0})}),Object(o.jsxs)("div",{className:y.a.detailed_info_div,children:[Object(o.jsx)("span",{children:"Email"}),Object(o.jsx)(d,{style:y.a.info,dataValue:n.emailAddress,setDataFunction:function(e){return i(Object(x.a)(Object(x.a)({},n),{},{emailAddress:e}))},fieldType:"email",displaySwitch:!0}),Object(o.jsx)("span",{children:"Address"}),Object(o.jsx)(d,{style:y.a.info,dataValue:n.localAddress,setDataFunction:function(e){return i(Object(x.a)(Object(x.a)({},n),{},{localAddress:e}))},fieldType:"text",displaySwitch:!0}),Object(o.jsx)("span",{children:"Phone Number"}),Object(o.jsx)(d,{style:y.a.info,dataValue:n.phoneNumber,setDataFunction:function(e){return i(Object(x.a)(Object(x.a)({},n),{},{phoneNumber:e}))},fieldType:"tel",displaySwitch:!0}),Object(o.jsx)("span",{children:"Social Network"}),Object(o.jsx)(d,{style:y.a.info,dataValue:n.socialNetwork,setDataFunction:function(e){return i(Object(x.a)(Object(x.a)({},n),{},{socialNetwork:e}))},fieldType:"text",displaySwitch:!0})]})]}),Object(o.jsxs)("div",{className:y.a.personal_profile_div,children:[Object(o.jsx)("h3",{children:"Profile "}),Object(o.jsx)("textarea",{className:"_inputField",ref:r,onBlur:u,onChange:function(e){return i(Object(x.a)(Object(x.a)({},n),{},{personalProfile:e.target.value}))},value:n.personalProfile}),Object(o.jsx)("p",{onClick:u,ref:s,style:{display:"none"},children:n.personalProfile})]})]})},v=n(16),g=n.n(v);var k=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),s=Object(l.a)(i,2),u=s[0],j=s[1],f="Type in one of your skills...";return Object(a.useEffect)((function(){j(f);var e=JSON.parse(localStorage.getItem("skills"));null!==e&&c(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("skills",JSON.stringify(n))})),Object(o.jsxs)("div",{className:g.a.skills_and_hobbies,children:[Object(o.jsx)("h3",{children:"Skills"}),Object(o.jsx)("ul",{children:n.length>0&&n.map((function(e,t){return Object(o.jsx)("li",{children:e},t)}))}),Object(o.jsxs)("div",{className:"_inputField",children:[Object(o.jsx)(d,{dataValue:u,setDataFunction:j,fieldType:"text"}),Object(o.jsx)("button",{onClick:function(){c([].concat(Object(r.a)(n),[u])),j(f)},children:"Add"})]})]})},N=n(17);var S=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("ul",{id:"top_nav",children:[Object(o.jsxs)("li",{onClick:function(){window.scrollTo(0,0);var e=document.getElementById("main_resume").cloneNode(!0);e.id="",e.style.width="600px",new N.a({format:"a4",unit:"pt"}).html(e,{callback:function(e){e.save()},filename:"CV",html2canvas:{scale:1,ignoreElements:function(e){return e.className.includes("_inputField")}}})},children:[Object(o.jsx)(u.a,{children:"save"})," Save"]}),Object(o.jsxs)("li",{onClick:function(){localStorage.clear(),document.location.reload()},children:[Object(o.jsx)(u.a,{children:"clearall"})," Clear"]})]}),Object(o.jsxs)("div",{id:"instructions",children:[Object(o.jsx)("h3",{children:"Instructions"}),Object(o.jsx)("h4",{children:"Click on each field to fill it in. You can click the text afterwards to edit any fields. The save button outputs a pdf file, and the clear button resets the entire page."})]}),Object(o.jsxs)("div",{id:"main_resume",children:[Object(o.jsx)(_,{}),Object(o.jsx)(h,{}),Object(o.jsx)(p,{}),Object(o.jsx)(k,{})]}),Object(o.jsxs)("div",{id:"footer",children:["Made by Carlos Moraes, 2021."," ",Object(o.jsx)("a",{href:"https://github.com/carloshrm/make-cv-tool",children:"Source on Github."})]})]})},I=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,435)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(S,{})}),document.getElementById("root")),I()},5:function(e,t,n){e.exports={name:"PersonalInfo_name__3poIe",info:"PersonalInfo_info__2wqe6",personal_info_div:"PersonalInfo_personal_info_div__26TXI",detailed_info_div:"PersonalInfo_detailed_info_div__LjQqS",personal_profile_div:"PersonalInfo_personal_profile_div__qoe2B"}},8:function(e,t,n){e.exports={listed_info_input:"ListedInfo_listed_info_input__3wamZ",listed_entries:"ListedInfo_listed_entries__W1WHL",form_title:"ListedInfo_form_title__OdPxM"}}},[[32,1,3]]]);
//# sourceMappingURL=main.6867f074.chunk.js.map