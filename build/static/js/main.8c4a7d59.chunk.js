(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{102:function(e,t,n){e.exports=n(222)},221:function(e,t,n){},222:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(41),o=n.n(r),l=n(8),s=n(21),i=n(25),u=n(26),m=n(28),d=n(27),E=n(29),p=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={test:1},n.componentWillMount=function(){console.log("Before Class component Mount")},n.componentDidMount=function(){console.log("Class Component Mounted")},n.componentDidUpdate=function(){console.log("Class Component Updated")},n.componentWillUnmount=function(){console.log("Class Component Destroy")},n.changestateDemo=function(){n.setState({test:n.state.test+1})},n}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentWillReceiveProps",value:function(e){console.log("Class Component Will receive props",e)}},{key:"render",value:function(){var e=this.state.test;return c.a.createElement("div",{className:"center-of-screen"},c.a.createElement("div",null,c.a.createElement("div",{className:"an-20 bold-text"},"It is your Simple Class Component;"),c.a.createElement("div",{className:"pt20 an-16 medium-text"},"Your State Value is ",c.a.createElement("span",{className:"redcolor--text ml10"},e)),c.a.createElement("button",{onClick:this.changestateDemo,className:"demo-button an-14 demi-bold-text mt20"},"click here to state change")))}}]),t}(a.Component),b=n(3),O=function(e){var t=Object(a.useState)(1),n=Object(b.a)(t,2),r=n[0],o=n[1];return Object(a.useEffect)((function(){console.log("Functional Component Mounted")}),[]),Object(a.useEffect)((function(){return console.log("Functional Component updated when state change"),function(){console.log("Functional Component Unmount")}}),[r]),c.a.createElement("div",{className:"center-of-screen"},c.a.createElement("div",null,c.a.createElement("div",{className:"an-20 bold-text"},"It is your Simple Functional Component;"),c.a.createElement("div",{className:"pt20 an-16 medium-text"},"Your State Value is ",c.a.createElement("span",{className:"redcolor--text ml10"},r)),c.a.createElement("button",{onClick:function(){return o(r+1)},className:"demo-button an-14 demi-bold-text mt20"},"click here to state change")))},f=function(e){var t=e.state1,n=e.state2,a=e.state3;return c.a.createElement("div",{className:"an-16 medium-text pt20"},c.a.createElement("div",null,"State 1 Value: ",c.a.createElement("span",{className:"redcolor--text"},t)),c.a.createElement("div",null,"State 2 Value: ",c.a.createElement("span",{className:"redcolor--text"},n)),a&&c.a.createElement("div",null,"State 3 Value: ",c.a.createElement("span",{className:"redcolor--text"},String(a))))},v=function(e){var t=Object(a.useState)(200),n=Object(b.a)(t,2),r=n[0],o=n[1],l=Object(a.useState)("chetan virani"),s=Object(b.a)(l,2),i=s[0],u=s[1],m=Object(a.useState)(!0),d=Object(b.a)(m,2),E=d[0],p=d[1];return c.a.createElement("div",{className:"center-of-screen"},c.a.createElement("div",null,c.a.createElement("div",{className:"an-20 bold-text"},"Demostration of State and Props"),c.a.createElement(f,{state1:r,state2:i,state3:E}),c.a.createElement("button",{onClick:function(){o(300),u("Dhruvesh Soni"),p(!1)},className:"demo-button an-14 demi-bold-text mt20"},"click here to state change")))},x=function(e){var t=e.state1,n=e.state2,a=e.state3,r=e.changeState1,o=e.changeState2,l=e.changeState3;return c.a.createElement("div",{className:"an-16 medium-text pt20"},c.a.createElement("div",null,"State 1 Value: ",c.a.createElement("span",{className:"redcolor--text"},t)),c.a.createElement("div",null,c.a.createElement("button",{onClick:r,className:"demo-button an-14 demi-bold-text mb20"},"State1 Change")),c.a.createElement("div",null,"State 2 Value: ",c.a.createElement("span",{className:"redcolor--text"},n)),c.a.createElement("div",null,c.a.createElement("button",{onClick:o,className:"demo-button an-14 demi-bold-text mb20"},"State2 Change")),a&&c.a.createElement("div",null,"State 3 Value: ",c.a.createElement("span",{className:"redcolor--text"},String(a))),c.a.createElement("div",null,c.a.createElement("button",{onClick:l,className:"demo-button an-14 demi-bold-text mb20"},"State3 Change")))},h=function(e){var t=Object(a.useState)(200),n=Object(b.a)(t,2),r=n[0],o=n[1],l=Object(a.useState)("chetan virani"),s=Object(b.a)(l,2),i=s[0],u=s[1],m=Object(a.useState)(!0),d=Object(b.a)(m,2),E=d[0],p=d[1],O=Object(a.useState)(1),f=Object(b.a)(O,2),v=f[0],h=f[1],g=Object(a.useState)(1),j=Object(b.a)(g,2),N=j[0],y=j[1];return c.a.createElement("div",{className:"center-of-screen"},c.a.createElement("div",null,c.a.createElement("div",{className:"an-20 bold-text"},"Demostration of Event Passing and handling"),c.a.createElement(x,{state1:r,state2:i,state3:E,changeState1:function(){o(300)},changeState2:function(){u("Dhruvesh Soni")},changeState3:function(){p(!E)}}),c.a.createElement("div",null,c.a.createElement("div",{onMouseOver:function(){h(v+1)},className:"an-16 medium-text"},"onMouseOver: ",c.a.createElement("span",{className:"redcolor--text"},v)),c.a.createElement("div",{onWheel:function(){y(N+1)},className:"an-16 medium-text mt20"},"onWheel: ",c.a.createElement("span",{className:"redcolor--text"},N)))))},g=function(e){return c.a.createElement(a.Fragment,null,c.a.createElement("div",{className:"an-20 bold-text text-center pt50"},"Fragment Demo"),c.a.createElement("div",{className:"an-18 bold-text text-center bluecolor--text pt20"},"Using Fragment you can return multiple root element. Fragment will not make element in the DOM."),c.a.createElement("div",{className:"an-20 medium-text text-center pt50"},"Root1"),c.a.createElement("div",{className:"an-20 medium-text text-center pt50"},"Root2"))},j=[{id:1,name:"Chetan Virani"},{id:2,name:"Dhruvesh Soni"},{id:3,name:"Vishwas"},{id:4,name:"Shekhar Raval"},{id:5,name:"Harsh"}],N=function(e){var t,n=Object(a.useState)(0),r=Object(b.a)(n,2),o=r[0],l=r[1],s=Object(a.useState)([]),i=Object(b.a)(s,2),u=i[0],m=i[1];return Object(a.useEffect)((function(){m(j)}),[]),t=o<0?c.a.createElement("div",{className:"bluecolor--text"},"Minus Count"):c.a.createElement("div",{className:"bluecolor--text"},"Plus Count"),c.a.createElement("div",{className:"center-of-screen"},c.a.createElement("div",{className:"text-center"},c.a.createElement("div",{className:"an-20 bold-text mb30"},"Demostration of Conditional Rendering and Loop"),c.a.createElement("div",null,c.a.createElement("div",{className:"an-20 medium-text pt10"},"Counter: ",c.a.createElement("span",{className:"redcolor--text"},o))),c.a.createElement("div",{className:"an-16 medium-text mt20"},5===o&&c.a.createElement("div",null,"You can see only when count is 5."),10===o?c.a.createElement("div",null,"You can see only when count is 10."):c.a.createElement("div",null,"Default Message")),c.a.createElement("div",{className:"an-16 medium-text mt30"},"Check Status:",t),c.a.createElement("div",{className:"pt15"},c.a.createElement("button",{onClick:function(){return l(o+1)},className:"demo-button an-14 demi-bold-text mb20 mr20"},"Plus"),c.a.createElement("button",{onClick:function(){return l(o-1)},className:"demo-button an-14 demi-bold-text mb20"},"Minus")),"Looping in JSX",u&&u.map((function(e,t){return c.a.createElement("div",{key:e.id,className:"dark light--text pa5 ma5"},e.name)}))))},y=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"center-of-screen"},c.a.createElement("div",{className:"text-center"},c.a.createElement("div",{className:"an-20 bold-text"},"Welcome Team"),c.a.createElement("div",{className:"my15 an-16 medium-text"},"React js learning step by step.")))}}]),t}(a.Component),C=function(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),n=t[0],r=t[1];return c.a.createElement("div",{className:"center-of-screen"},c.a.createElement("div",null,c.a.createElement("input",{className:"an-16 demi-bold-text pa10",type:"text",value:n,onChange:function(e){return r(e.target.value)}}),c.a.createElement("div",{className:"an-16 demi-bold-text redcolor--text pt20"},"Your FirstName is:  ",n)))},D=n(15),T=[{id:1,name:"Math"},{id:2,name:"Eng"},{id:3,name:"Hindi"},{id:4,name:"ADM"}],k=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(""),l=Object(b.a)(o,2),s=l[0],i=l[1];Object(a.useEffect)((function(){r(T)}),[]);return c.a.createElement("div",{className:"center-of-screen"},c.a.createElement("div",null,c.a.createElement("div",{className:"an-20 bold-text pb10"},"Book list"),c.a.createElement("div",null,n&&n.map((function(e){return c.a.createElement("div",{key:e.id,className:"an-16 medium-text bluecolor light--text py10 px20 my10"},e.name)}))),c.a.createElement("div",{className:"mt15"},c.a.createElement("input",{className:"an-16 demi-bold-text pa10",type:"text",placeholder:"Enter Bookname",value:s,onChange:function(e){return i(e.target.value)}})),c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{onClick:function(){var e={id:Math.random,name:s};r((function(t){return[].concat(Object(D.a)(t),[e])})),i("")},className:"demo-button an-14 demi-bold-text mt20"},"Add Book"))))},S=function(e){return c.a.createElement(a.Fragment,null,c.a.createElement("div",null,e.children),c.a.createElement("div",null,e.child2),c.a.createElement("div",null,e.child3))},w=function(){return c.a.createElement("div",{className:"center-of-screen"},c.a.createElement("div",null,c.a.createElement(S,null,c.a.createElement("div",{className:"an-20 demi-bold-text redcolor--text"},"Hello Child"))))};function L(e){var t=Object(a.useState)(e),n=Object(b.a)(t,2),c=n[0],r=n[1];Object(a.useDebugValue)(""===c?"NoInput":"HasInput");return[c,function(e){r(e.target.value)}]}var R=function(){var e=L("chetan"),t=Object(b.a)(e,2),n=t[0],a=t[1],r=L("virani"),o=Object(b.a)(r,2),l=o[0],s=o[1];return c.a.createElement("div",null,c.a.createElement("div",{className:"an-18 bluecolor--text bold-text text-center py10"},"CustomHooksDemo"),c.a.createElement("input",{className:"an-16 demi-bold-text pa10",type:"text",value:n,onChange:a}),c.a.createElement("input",{className:"an-16 demi-bold-text pa10",type:"text",value:l,onChange:s}),c.a.createElement("div",{className:"an-15 dmei-bold-text"},n,"+ ",l))},_=function(e){var t=e.apiData,r=e.simpleFlag,o=e.changeText,l=Object(a.useMemo)((function(){var e=n(107)(t,["created","asc"]);return console.log("orderBydata",e),e}),[t]);return c.a.createElement("div",null,c.a.createElement("div",{className:"an-18 bold-text redcolor--text text-center"},"UseMemo Demo"),c.a.createElement("div",{className:"text-center"},l&&l.map((function(e,t){return c.a.createElement("div",{key:t,className:"pa10 ma10 dark light--text"},e.name)}))),c.a.createElement("div",{onClick:o},"Simple Text is: ",String(r)))},P=new Set,I=function(){var e=Object(a.useState)(1),t=Object(b.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(0),l=Object(b.a)(o,2),s=l[0],i=l[1],u=Object(a.useCallback)((function(){return r((function(e){return e+1}))}),[]),m=Object(a.useCallback)((function(){return i((function(e){return e+1}))}),[]);return P.add(u),P.add(m),c.a.createElement("div",null,c.a.createElement("div",null," Count1 is ",n," "),c.a.createElement("div",null," Counter is ",s," "),c.a.createElement("br",null),c.a.createElement("div",null,c.a.createElement("button",{onClick:u},"Increment Delta"),c.a.createElement("button",{onClick:m},"Increment Counter")),c.a.createElement("br",null),c.a.createElement("div",null," Newly Created Functions: ",P.size-2," "))},A=n(20);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(n,!0).forEach((function(t){Object(A.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F={todos:[],todoInput:"",searchText:""},M=function(e,t){switch(t.type){case"setMyTodos":return U({},e,{todos:t.todos});case"deleteTodod":return U({},e,{todos:e.todos.filter((function(e){return e.id!==t.id}))});case"addTodo":return U({},e,{todos:[].concat(Object(D.a)(e.todos),[{id:Math.random(),text:t.text}])});case"setTodoInput":return U({},e,{todoInput:t.text});case"setSearchInput":return U({},e,{searchText:t.text});default:return U({},e)}},V=[{id:1,text:"design changed"},{id:2,text:"Metting"},{id:3,text:"Developing API"},{id:4,text:"Client Call"}],H=function(){var e=Object(a.useReducer)(M,F),t=Object(b.a)(e,2),n=t[0],r=t[1],o=n.todos,l=n.todoInput,s=n.searchText,i=Object(a.useMemo)((function(){return o.filter((function(e){return e.text.toLowerCase().includes(s.toLowerCase())}))}),[s,o]);Object(a.useEffect)((function(){r({type:"setMyTodos",todos:V})}),[]);return c.a.createElement("div",null,c.a.createElement("div",{className:"an-18 bold-text redcolor--text py15 text-center"},"UseReducer Demo"),c.a.createElement("input",{className:"an-16 demi-bold-text fill-width",type:"text",value:s,onChange:function(e){r({type:"setSearchInput",text:e.target.value})},placeholder:"search todo"}),c.a.createElement("div",null,i&&i.map((function(e,t){return c.a.createElement("div",{key:t,className:"an-12 py5 my5 dark light--text text-center flex-x"},c.a.createElement("div",{className:"flex-1"},e.text),c.a.createElement("div",{onClick:function(){return t=e.id,void r({type:"deleteTodod",id:t});var t}},"Delete"))}))),c.a.createElement("div",{className:"text-center"},c.a.createElement("input",{className:"an-16 demi-bold-text fill-width",type:"text",value:l,onChange:function(e){r({type:"setTodoInput",text:e.target.value})}}),c.a.createElement("div",null,c.a.createElement("button",{className:"demo-button an-14 demi-bold-text px20 my20",onClick:function(){return""!==(e=l)&&r({type:"addTodo",text:e}),void r({type:"setTodoInput",text:""});var e}},"Add"))))},B=Object(a.forwardRef)((function(e,t){Object(a.useImperativeHandle)(t,(function(){return{methodOfChildHandler:function(){n()}}}));var n=function(){console.log("call method in Child")};return c.a.createElement("div",null,c.a.createElement("div",{className:"an-20 bold-text text-center"},"MyChildComponent"),c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{onClick:n,className:"ma10 pa10"},"Call From Child")))})),Q=function(){var e=Object(a.useRef)();return c.a.createElement("div",null,c.a.createElement("div",{className:"an-18 bold-text redcolor--text py15 text-center"},"UseImperativeHandle Demo"),c.a.createElement("div",null,c.a.createElement(B,{ref:e}),c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{onClick:function(){e.current.methodOfChildHandler()},className:"ma10 pa10"},"Call From parent"))))},W=Object(a.createContext)(),q=function(e){var t=Object(a.useState)({data:[{name:"Lost Chameleon - Genesis"},{name:"The Hipsta - Shaken Soda"},{name:"Tobu - Such Fun"}]}),n=Object(b.a)(t,2),r=n[0],o=n[1];return Object(a.useEffect)((function(){console.log("change in state",r)}),[r]),c.a.createElement(W.Provider,{value:[r,o]},e.children)},Y=function(){var e=Object(a.useContext)(W),t=Object(b.a)(e,2),n=t[0],c=t[1];return{methodA:function(){c({data:[].concat(Object(D.a)(n.data),[{name:"call method A"}])})},methodB:function(){c({data:[].concat(Object(D.a)(n.data),[{name:"call method A"}])})},methodC:function(){c({data:[].concat(Object(D.a)(n.data),[{name:"call method C"}])})}}},J=function(){var e=Object(a.useContext)(W),t=Object(b.a)(e,2),n=t[0],r=t[1],o=Y(),l=o.methodA,s=o.methodB,i=o.methodC,u=n.data;return c.a.createElement("div",null,c.a.createElement("div",{className:"an-18 bold-text redcolor--text py15 text-center"},"UseContext Demo"),u&&u.length&&u.map((function(e,t){return c.a.createElement("div",{key:t,className:"pa10 ma10 text-center dark light--text an-15 medium-text"},e.name)})),c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{onClick:function(){r({data:[{name:"Change state in context"}]})},className:"pa10 ma10 an-15 bold-text"},"Change Context State")),c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{onClick:l,className:"pa10 ma10 an-15 bold-text"},"Call Method A")),c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{onClick:s,className:"pa10 ma10 an-15 bold-text"},"Call Method B")),c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{onClick:i,className:"pa10 ma10 an-15 bold-text"},"Call Method C")))},X=function(){return Object(a.useEffect)((function(){console.log("USE EFFECT FUNCTION TRIGGERED")})),Object(a.useEffect)((function(){console.log("USE SECOND EFFECT FUNCTION TRIGGERED")})),Object(a.useLayoutEffect)((function(){console.log("useLayoutEffect")})),console.log("render life cycle"),c.a.createElement("div",null,c.a.createElement("div",{className:"an-18 bold-text redcolor--text py15 text-center"},"UseLayoutEffect Demo"))},z=[{id:1,name:"Chetan",created:1569826497},{id:2,name:"Jyotil",created:1569740097},{id:3,name:"Dhruvesh",created:1569653697},{id:4,name:"Harsh",created:1569480897}],K=function(){var e=Object(a.useState)(null),t=Object(b.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(!0),l=Object(b.a)(o,2),s=l[0],i=l[1];Object(a.useEffect)((function(){r(z)}),[]);return c.a.createElement("div",{style:{maxWidth:"80%",margin:"0 auto"}},c.a.createElement("div",{className:"py50"},c.a.createElement("div",null,c.a.createElement(R,null)),c.a.createElement("div",null,n&&c.a.createElement(_,{apiData:n,simpleFlag:s,changeText:function(){i(!s)}})),c.a.createElement("div",null,c.a.createElement(I,null)),c.a.createElement("div",null,c.a.createElement(H,null)),c.a.createElement("div",null,c.a.createElement(Q,null)),c.a.createElement("div",null,c.a.createElement(J,null)),c.a.createElement("div",null,c.a.createElement(X,null))))},$=n(23),Z={LOGIN:"LOGIN",LOGOUT:"LOGOUT",login:function(e){return{type:Z.LOGIN,isLogin:!0,accessToken:e.token}},logout:function(){return{type:Z.LOGOUT,isLogin:!1,accessToken:null}}},ee=Z,te={LOGIN_REQUEST:"LOGIN_REQUEST",LOGOUT:"LOGOUT",LOGIN_SUCCESS:"LOGIN_SUCCESS",LOGIN_ERROR:"LOGIN_ERROR",GET_USER_PROFILE:"GET_USER_PROFILE",loginSaga:function(){return{type:te.LOGIN_REQUEST}},logoutSaga:function(){return{type:te.LOGOUT}}},ne=te,ae=ee.login,ce=ee.logout,re=ne.loginSaga,oe=ne.logoutSaga,le=function(){var e=Object($.c)(),t=Object($.d)((function(e){return e.auth.isLogin}));console.log("login",t);var n=Object(a.useCallback)((function(){e(ae({token:"YOURLOGINTOKEN"}))}),[e]),r=Object(a.useCallback)((function(){e(ce())}),[e]),o=Object(a.useCallback)((function(){e(re())}),[e]),l=Object(a.useCallback)((function(){e(oe())}),[e]);return c.a.createElement("div",{className:"pt100"},c.a.createElement("div",{className:"an-18 bluecolor--text bold-text text-center py10 myclass"},"Redux Use"),c.a.createElement("div",{className:"text-center pa10 ma10 dark light--text"},c.a.createElement("button",{onClick:n},"Login")),c.a.createElement("div",{className:"text-center pa10 ma10 redcolor light--text"},c.a.createElement("button",{onClick:r},"Logout")),c.a.createElement("div",{className:"an-18 bluecolor--text bold-text text-center py10 myclass"},"With Saga"),c.a.createElement("div",{className:"text-center pa10 ma10 dark light--text"},c.a.createElement("button",{onClick:o},"Login")),c.a.createElement("div",{className:"text-center pa10 ma10 redcolor light--text"},c.a.createElement("button",{onClick:l},"Logout")))},se=n(90);function ie(){var e=Object(se.a)(["\n  .myclass {\n    background: black;\n    color: white;\n    text-align: center;\n    padding: 15px;\n  }\n"]);return ie=function(){return e},e}var ue=n(91).a.div(ie()),me=function(){return c.a.createElement(ue,null,c.a.createElement("div",{className:"pt100"},c.a.createElement("div",{className:"an-18 bluecolor--text bold-text text-center py10"},"Style Component demo"),c.a.createElement("div",{className:"myclass"},"My class content")))},de=function(e,t){return function(){var n=Object(a.useState)(null),r=Object(b.a)(n,2),o=r[0],l=r[1];return Object(a.useEffect)((function(){console.log("HocComponent",t),l(t)}),[]),c.a.createElement("div",null,o&&c.a.createElement(e,{data:o}))}}((function(e){var t=e.data;return c.a.createElement("div",null,c.a.createElement("div",{className:"an-18 bluecolor--text bold-text text-center pt100"},"Example Of Higher Order Component"),c.a.createElement("div",null,t&&t.map((function(e){return c.a.createElement("div",{key:e.id,className:"pa10 ma10 text-center dark light--text"},e.name)}))))}),[{id:1,name:"Chetan"},{id:2,name:"Dhruvesh"},{id:3,name:"Harsh"}]),Ee={GETTODO:"GETTODO",TODORECEIVED:"TODORECEIVED",REQ_ADD_TODO:"REQ_ADD_TODO",ADD_TODO:"ADD_TODO",REQ_DELETE_TODO:"REQ_DELETE_TODO",DELETE_TODO:"DELETE_TODO",getTodo:function(){return{type:Ee.GETTODO}},todoReceived:function(e){return{type:Ee.TODORECEIVED,todos:e}},requestAddTodo:function(e){return{type:Ee.REQ_ADD_TODO,todoInput:e}},requestDeleteTodo:function(e){return{type:Ee.REQ_DELETE_TODO,id:e}},addTodo:function(e){return{type:Ee.ADD_TODO,todo:e}},deleteTodo:function(e){return{type:Ee.DELETE_TODO,id:e}}},pe=Ee,be=n(9),Oe=pe.getTodo,fe=pe.requestAddTodo,ve=pe.requestDeleteTodo,xe=[{path:"/welcome",component:y},{path:"/class-component",component:p},{path:"/functional-component",component:O},{path:"/props-state",component:v},{path:"/event-handling",component:h},{path:"/fragment-demo",component:g},{path:"/conditional-rendering",component:N},{path:"/forms",component:C},{path:"/basic-hooks",component:k},{path:"/composition",component:w},{path:"/advance-hook",component:K},{path:"/redux",component:le},{path:"/style-component",component:me},{path:"/higher-order-component",component:de},{path:"/redux-saga",component:Object(be.d)(s.g,Object($.b)((function(e){return{todos:e.todo.todos}}),{getTodo:Oe,requestAddTodo:fe,requestDeleteTodo:ve}))((function(e){var t=Object(a.useState)(""),n=Object(b.a)(t,2),r=n[0],o=n[1],l=e.todos,s=e.getTodo;Object(a.useEffect)((function(){s()}),[s]);return c.a.createElement("div",null,c.a.createElement("div",{className:"an-20 bold-text bluecolor--text text-center py20"},"TODO List"),l&&l.map((function(t,n){return c.a.createElement("div",{key:n,className:"an-20 dark light--text text-center py10 ma10 flex-x"},c.a.createElement("div",{className:"flex-1"},t.name),c.a.createElement("div",{className:"an-14 redcolor--text mr10 cursor-pointer",onClick:function(){return e.requestDeleteTodo(t.id)}},"Delete"))})),c.a.createElement("div",{className:"text-center"},c.a.createElement("input",{type:"text",placeholder:"Enter Todo Name",className:"an-16 pa10 ma10 demi-bold-text",value:r,onChange:function(e){return o(e.target.value)}}),c.a.createElement("div",null,c.a.createElement("button",{className:"pa10 cursor-pointer",onClick:function(){""!==r&&e.requestAddTodo(r)}},"ADD TODO"))))}))}],he=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement(a.Fragment,null,c.a.createElement("div",{className:"bluecolor text-center an-20 pt15 light--text bold-text"},"React Concepts"),c.a.createElement("div",{className:"header bluecolor pa20 flex-x flex-wrap"},c.a.createElement(l.b,{to:"/class-component",className:"nav-url an-15 medium-text"},"Class Based Component"),c.a.createElement(l.b,{to:"/functional-component",className:"nav-url an-15 medium-text"},"Functional Component"),c.a.createElement(l.b,{to:"/props-state",className:"nav-url an-15 medium-text"},"Props and State Demo"),c.a.createElement(l.b,{to:"/event-handling",className:"nav-url an-15 medium-text"},"Event Handling"),c.a.createElement(l.b,{to:"/fragment-demo",className:"nav-url an-15 medium-text"},"Fragment Demo"),c.a.createElement(l.b,{to:"/forms",className:"nav-url an-15 medium-text"},"Forms"),c.a.createElement(l.b,{to:"/basic-hooks",className:"nav-url an-15 medium-text"},"Hooks"),c.a.createElement(l.b,{to:"/conditional-rendering",className:"nav-url an-15 medium-text"},"Conditional Rendering and looping"),c.a.createElement(l.b,{to:"/composition",className:"nav-url an-15 medium-text"},"Composition"),c.a.createElement(l.b,{to:"/advance-hook",className:"nav-url an-15 medium-text"},"Advance In hooks"),c.a.createElement(l.b,{to:"/style-component",className:"nav-url an-15 medium-text"},"Styled Component"),c.a.createElement(l.b,{to:"/higher-order-component",className:"nav-url an-15 medium-text"},"Higher-order-component"),c.a.createElement(l.b,{to:"/redux",className:"nav-url an-15 medium-text"},"Redux"),c.a.createElement(l.b,{to:"/redux-saga",className:"nav-url an-15 medium-text"},"Redux Saga")))}}]),t}(a.Component);function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(n,!0).forEach((function(t){Object(A.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ne={isLogin:!1,accessToken:null};function ye(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee.LOGIN:return je({},e,{isLogin:t.isLogin,accessToken:t.accessToken});case ee.LOGOUT:return je({},e,{isLogin:t.isLogin,accessToken:null});default:return e}}var Ce={idToken:null};function De(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne.LOGIN_SUCCESS:return{idToken:t.token};case ne.LOGOUT:return Ce;default:return e}}function Te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ke(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Te(n,!0).forEach((function(t){Object(A.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Te(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Se={todos:[],loading:!1};function we(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe.GETTODO:return ke({},e,{loading:!0});case pe.TODORECEIVED:return ke({},e,{todos:t.todos,loading:!1});case pe.REQ_ADD_TODO:return ke({},e,{todoAddLoader:!0});case pe.REQ_DELETE_TODO:return ke({},e,{todoDeleteLoader:!0});case pe.ADD_TODO:return ke({},e,{todoAddLoader:!1,todos:[].concat(Object(D.a)(e.todos),[t.todo])});case pe.DELETE_TODO:return ke({},e,{todoDeleteLoader:!1,todos:e.todos.filter((function(e){return e.id!==t.id}))});default:return e}}var Le=n(95);function Re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var _e=function(e){return Object(be.c)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Re(n,!0).forEach((function(t){Object(A.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Re(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({auth:ye,authSaga:De,todo:we,router:Le.routerReducer},e))},Pe=n(57),Ie=n(96),Ae=n.n(Ie),Ge=n(97),Ue=n.n(Ge),Fe=n(99),Me=n(6),Ve=n.n(Me),He=n(7),Be=Ve.a.mark(ze),Qe=Ve.a.mark(Ke),We=Ve.a.mark($e),qe=Ve.a.mark(Ze),Ye=Ve.a.mark(et),Je=Ve.a.mark(tt),Xe=Ve.a.mark(nt);function ze(){var e;return Ve.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[{id:1,name:"Design"},{id:2,name:"Develop"}],t.next=3,Object(He.c)({type:pe.TODORECEIVED,todos:e});case 3:case"end":return t.stop()}}),Be)}function Ke(e){var t;return Ve.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("addTodo",e),t={id:Math.random(),name:e.todoInput},n.next=4,Object(He.c)({type:pe.ADD_TODO,todo:t});case 4:case"end":return n.stop()}}),Qe)}function $e(e){return Ve.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(He.c)({type:pe.DELETE_TODO,id:e.id});case 2:case"end":return t.stop()}}),We)}function Ze(){return Ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(He.d)(pe.GETTODO,ze);case 2:case"end":return e.stop()}}),qe)}function et(){return Ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(He.d)(pe.REQ_DELETE_TODO,$e);case 2:case"end":return e.stop()}}),Ye)}function tt(){return Ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(He.d)(pe.REQ_ADD_TODO,Ke);case 2:case"end":return e.stop()}}),Je)}function nt(){return Ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(He.a)([Object(He.b)(Ze),Object(He.b)(et),Object(He.b)(tt)]);case 2:case"end":return e.stop()}}),Xe)}var at=n(43),ct=n.n(at),rt=Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_Name:"Production"}).REACT_APP_APIBASE,ot=function(e){return new Promise((function(){}))},lt=function(e){return ct.a.post("".concat(rt,"users/login"),e).then((function(e){return e.data})).catch(ot)},st=Ve.a.mark(mt),it=Ve.a.mark(dt),ut=Ve.a.mark(Et);function mt(){return Ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(He.d)("LOGIN_REQUEST",Ve.a.mark((function e(){var t;return Ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,lt({email:"chetan.virani@volansys.com",password:"123456"});case 2:if(200!==(t=e.sent).status){e.next=8;break}return e.next=6,Object(He.c)({type:ne.LOGIN_SUCCESS,token:t.data.token,profile:"Profile"});case 6:e.next=10;break;case 8:return e.next=10,Object(He.c)({type:ne.LOGIN_ERROR});case 10:case"end":return e.stop()}}),e)})));case 2:case"end":return e.stop()}}),st)}function dt(){return Ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(He.d)(ne.LOGIN_ERROR,Ve.a.mark((function e(){return Ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));case 2:case"end":return e.stop()}}),it)}function Et(){return Ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(He.a)([Object(He.b)(mt),Object(He.b)(dt)]);case 2:case"end":return e.stop()}}),ut)}var pt=Ve.a.mark(bt);function bt(){return Ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(He.a)([nt(),Et()]);case 2:case"end":return e.stop()}}),pt)}var Ot=Object(Fe.a)(),ft={key:"root",storage:Ae.a,whitelist:["auth","authSaga"]},vt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||be.d,xt=Object(Pe.a)(ft,_e()),ht=Object(be.e)(xt,Object(be.d)(Object(be.a)(Ue.a,(function(e){return function(e){return function(t){console.log("Redux Log:",t),e(t)}}}),Ot),vt()));Ot.run(bt);var gt=Object(Pe.b)(ht),jt=n(98),Nt=(n(221),function(){return console.log("REACT_APP_Name","Production"),c.a.createElement("div",{className:"App"},c.a.createElement(l.a,null,c.a.createElement($.a,{store:ht},c.a.createElement(jt.a,{loading:null,persistor:gt},c.a.createElement("div",{className:"flex-y fill-height"},c.a.createElement("header",null,c.a.createElement(he,null)),c.a.createElement("main",{className:"flex-1"},c.a.createElement(q,null,c.a.createElement(s.d,null,c.a.createElement(s.b,{exact:!0,path:"/",render:function(){return c.a.createElement(s.a,{to:"/welcome"})}}),xe.map((function(e,t){return c.a.createElement(s.b,{path:e.path,component:e.component,key:t})})))),c.a.createElement("div",{className:"author an-15 bold-text black--text"},"By: Chetan Virani",c.a.createElement("div",null,"Volansys Technologies"))))))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(Nt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[102,1,2]]]);
//# sourceMappingURL=main.8c4a7d59.chunk.js.map