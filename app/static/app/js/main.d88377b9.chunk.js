(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,a){e.exports=a(281)},123:function(e,t,a){},277:function(e,t,a){},278:function(e,t,a){},281:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(44),c=a.n(i),o=(a(123),a(6)),s=a(7),l=a(9),u=a(8),m=a(10),d=a(32),h=a.n(d),p=a(41),f=a.n(p),g=a(35),v=a.n(g),E=a(33),b=a.n(E),O=a(282),j=a(63),x=a.n(j),y=function(e){return r.a.createElement(h.a,{component:"nav"},r.a.createElement(f.a,{component:"div"},r.a.createElement(v.a,{inset:!0},r.a.createElement(b.a,{color:"inherit",variant:"title"},r.a.createElement(x.a,{color:"inherit",component:O.a,to:"/students"},"Students"))),r.a.createElement(v.a,{inset:!0},r.a.createElement(b.a,{color:"inherit",variant:"title"},r.a.createElement(x.a,{color:"inherit",component:O.a,to:"/exams"},"Exams"))),r.a.createElement(v.a,{inset:!0},r.a.createElement(b.a,{color:"inherit",variant:"title"},r.a.createElement(x.a,{color:"inherit",component:O.a,to:"/chart"},"Chart")))))},k=a(115),N=a.n(k),C=a(286),S=a(285),w=a(284),D=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(w.a,{to:"/students/"})}}]),t}(r.a.Component),L=a(19),F=a(17),P=a.n(F),B=a(55),A=a.n(B),R=a(56),I=a.n(R),T=a(36),M=a.n(T),W=a(57),z=a.n(W),G=a(109),H=a.n(G),J=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={redirect:!1},a.fullName="".concat(a.props.lastName,", ").concat(a.props.firstName),a.average="Average: ".concat(a.props.average),a.id=a.props.id,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=r.a.createElement(w.a,{to:"students/?id=".concat(this.id)});return r.a.createElement(f.a,{className:"studentListItem",button:!0,onClick:function(t){return e.redirect(t)}},this.state.redirect?t:null,r.a.createElement(A.a,null,r.a.createElement(H.a,null)),r.a.createElement(v.a,{primary:this.fullName,secondary:this.average}),r.a.createElement(I.a,null,r.a.createElement(M.a,{onClick:function(){return e.deleteStudent(e.props.id)},"aria-label":"Delete"},r.a.createElement(z.a,null))))}},{key:"deleteStudent",value:function(e){var t=this;P.a.delete("/api/students/"+e+"/",{student:e}).then(function(e){t.props.updateParent()}).catch(function(e){console.log(e.response)})}},{key:"redirect",value:function(){console.log("redirecting..."),this.setState({redirect:!0})}}]),t}(r.a.Component),K=a(21),U=a.n(K),$=a(24),q=a.n($),Q=a(23),V=a.n(Q),X=a(58),Y=a.n(X),Z=a(59),_=a.n(Z),ee=a(16),te=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={firstName:"",lastName:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"addStudent",value:function(){var e=this;P.a.post("/api/students/",{firstName:this.state.firstName,lastName:this.state.lastName}).then(function(t){e.props.updateParent()}).catch(function(e){console.log(e.response)})}},{key:"handleFirstNameChange",value:function(e){this.setState({firstName:e.target.value})}},{key:"handleLastNameChange",value:function(e){this.setState({lastName:e.target.value})}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.container},r.a.createElement(U.a,{className:t.formControl},r.a.createElement(V.a,{htmlFor:"firstname-input"},"First Name"),r.a.createElement(q.a,{id:"firstname-input",value:this.state.firstName,onChange:function(t){return e.handleFirstNameChange(t)}})),r.a.createElement(U.a,{className:t.formControl},r.a.createElement(V.a,{htmlFor:"lastname-input"},"Last Name"),r.a.createElement(q.a,{id:"lastname-input",value:this.state.lastName,onChange:function(t){return e.handleLastNameChange(t)}})),r.a.createElement(Y.a,{onClick:function(){return e.addStudent(e.props.id)},color:"primary","aria-label":"Add"},r.a.createElement(_.a,null)))}}]),t}(r.a.Component),ae=Object(ee.withStyles)(function(e){return{container:{marginTop:"15px",marginLeft:"auto",marginRight:"auto",width:"fit-content"},formControl:{marginRight:"10px"}}})(te),ne=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).createList=function(){var e=[];return a.state.studentList.map(function(t){return e.push(r.a.createElement(J,{key:t.id,id:t.id,firstName:t.firstName,lastName:t.lastName,average:t.average,updateParent:a.getData})),e}),e},a.state={studentList:[],loading:!0},a.getData=a.getData.bind(Object(L.a)(Object(L.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;P.a.get("/api/students/").then(function(t){e.setState({studentList:t.data,loading:!1})})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(ae,{updateParent:this.getData}),r.a.createElement(h.a,{className:e.container},this.createList()))}}]),t}(r.a.Component),re=Object(ee.withStyles)(function(e){return{container:{margin:"auto",maxWidth:"800px"}}})(ne),ie=a(110),ce=a.n(ie),oe=a(60),se=a.n(oe),le=a(111),ue=a.n(le),me=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isBeingEdited:!1,score:a.props.score},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=r.a.createElement(U.a,{className:t.formControl},r.a.createElement(V.a,{htmlFor:"score"},"Score"),r.a.createElement(q.a,{disabled:!0,id:"score",value:this.props.score})),n=r.a.createElement(U.a,{className:t.formControl},r.a.createElement(V.a,{htmlFor:"score"},"Score"),r.a.createElement(q.a,{id:"score",value:this.state.score,onChange:function(t){return e.handleScoreChange(t)}})),i=r.a.createElement(U.a,{className:t.formControl},r.a.createElement(M.a,{onClick:function(){return e.editItem(e.props.id)},"aria-label":"Edit"},r.a.createElement(ce.a,null))),c=r.a.createElement(U.a,{className:t.formControl},r.a.createElement(M.a,{onClick:function(){return e.editItem(e.props.id)},"aria-label":"Cancel"},r.a.createElement(ue.a,null))),o=r.a.createElement(U.a,{className:t.formControl},r.a.createElement(M.a,{onClick:function(){return e.saveItem(e.props.id)},"aria-label":"Save"},r.a.createElement(se.a,null)));return r.a.createElement("div",{className:t.container},r.a.createElement(U.a,{className:t.formControl},r.a.createElement(V.a,{htmlFor:"exam-name"},"Exam Name"),r.a.createElement(q.a,{disabled:!0,id:"exam-name",value:this.props.examName})),this.state.isBeingEdited?n:a,this.state.isBeingEdited?o:i,this.state.isBeingEdited?c:null)}},{key:"handleScoreChange",value:function(e){this.setState({score:e.target.value})}},{key:"editItem",value:function(e){this.setState(function(e){return{isBeingEdited:!e.isBeingEdited}})}},{key:"saveItem",value:function(){var e=this,t=this.props.id,a=this.state.score,n="/api/grades/"+t+"/";console.log(n),console.log(parseFloat(this.state.score)),P.a.patch(n,{score:a}).then(function(t){e.props.updateParent(),e.setState(function(e){return{isBeingEdited:!e.isBeingEdited}})}).catch(function(e){})}}]),t}(r.a.Component),de=Object(ee.withStyles)(function(e){return{container:{marginTop:"15px",marginLeft:"auto",marginRight:"auto",width:"fit-content"},formControl:{marginRight:"10px"}}})(me),he=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).createList=function(){var e=[];if(!a.state.loading)return a.state.gradesList.map(function(t){return e.push(r.a.createElement(de,{key:t.id,id:t.id,examName:t.exam,score:t.score,updateParent:a.getData})),e}),e},a.state={gradesList:[],loading:!0},a.getData=a.getData.bind(Object(L.a)(Object(L.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;P.a.get("/api/students/"+this.props.id+"/").then(function(t){e.setState({studentInfo:t.data,gradesList:t.data.grades,loading:!1})})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.container},r.a.createElement(h.a,{className:e.container},this.createList()))}}]),t}(r.a.Component),pe=Object(ee.withStyles)(function(e){return{container:{marginTop:"15px",marginLeft:"auto",marginRight:"auto",width:"fit-content"},formControl:{marginRight:"10px"}}})(he),fe=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.location.search.slice(4);return e?r.a.createElement(pe,{id:e}):r.a.createElement(re,null)}}]),t}(r.a.Component),ge=Object(ee.withStyles)(function(e){return{container:{marginTop:"15px",marginLeft:"auto",marginRight:"auto",width:"fit-content"},formControl:{marginRight:"10px"}}})(fe),ve=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={examName:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"addExam",value:function(){var e=this;P.a.post("/api/exams/",{name:this.state.examName}).then(function(t){e.props.updateParent(),e.setState({examName:""}),e.props.changeExamFocus(t.data.id)}).catch(function(e){console.log(e.response)})}},{key:"handleExamNameChange",value:function(e){this.setState({examName:e.target.value})}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.container},r.a.createElement(U.a,{className:t.formControl},r.a.createElement(V.a,{htmlFor:"examname-input"},"New Exam"),r.a.createElement(q.a,{id:"examname-input",value:this.state.examName,onChange:function(t){return e.handleExamNameChange(t)}})),r.a.createElement(Y.a,{onClick:function(){return e.addExam(e.props.id)},color:"primary","aria-label":"Add"},r.a.createElement(_.a,null)))}}]),t}(r.a.Component),Ee=Object(ee.withStyles)(function(e){return{container:{marginTop:"15px",marginLeft:"auto",marginRight:"auto",width:"fit-content"},formControl:{marginRight:"10px"}}})(ve),be=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={score:a.props.score},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.container},r.a.createElement(U.a,{className:t.formControl},0===this.props.idx?r.a.createElement(V.a,{htmlFor:"student-name"},"Student Name"):null,r.a.createElement(q.a,{disabled:!0,id:"student-name",value:this.props.studentName})),r.a.createElement(U.a,{className:t.formControl},0===this.props.idx?r.a.createElement(V.a,{htmlFor:"score"},"Score"):null,r.a.createElement(q.a,{id:"score",value:this.state.score,onChange:function(t){return e.handleScoreChange(t)}})))}},{key:"handleScoreChange",value:function(e){this.setState({score:e.target.value}),this.props.updateScore(this.props.id,e.target.value)}}]),t}(r.a.Component),Oe=Object(ee.withStyles)(function(e){return{button:{marginTop:"15px"}}})(be),je=a(112),xe=a.n(je),ye=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).createList=function(){var e=[];if(!a.state.loading)return a.state.gradesList.map(function(t,n){return e.push(r.a.createElement(Oe,{idx:n,key:t.id,id:t.id,studentName:t.studentName,score:t.score,updateParent:a.getData,updateScore:a.updateScore})),e}),e},a.updateScore=a.updateScore.bind(Object(L.a)(Object(L.a)(a))),a.saveBatch=a.saveBatch.bind(Object(L.a)(Object(L.a)(a))),a.updatedScores={},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getData(this.props.id)}},{key:"componentWillReceiveProps",value:function(e){e.id!==this.props.id&&this.getData(e.id)}},{key:"componentDidUpdate",value:function(){this.updatedScores={}}},{key:"getData",value:function(e){var t=this;P.a.get("api/exams/"+e+"/").then(function(e){t.setState({examName:e.data.name,gradesList:e.data.grades,average:e.data.average,loading:!1})}).catch(function(e){console.log(e)})}},{key:"updateScore",value:function(e,t){this.updatedScores[e]=t}},{key:"saveBatch",value:function(){var e=this;P.a.post("/api/grade-batch",{updatedScores:this.updatedScores}).then(function(t){e.getData(e.props.id)}).catch(function(e){console.log(e.response)})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,this.state&&this.state.examName&&r.a.createElement("h1",null,this.state.examName),this.state&&this.state.examName&&r.a.createElement("h3",null,"Average score: ",this.state.average),this.state&&this.state.examName&&this.createList(),r.a.createElement(xe.a,{onClick:this.saveBatch,className:e.button,variant:"contained",size:"small"},r.a.createElement(se.a,null),"Save"))}}]),t}(r.a.Component),ke=Object(ee.withStyles)(function(e){return{button:{marginTop:"15px"}}})(ye),Ne=a(61),Ce=a.n(Ne),Se=a(64),we=a.n(Se),De=a(113),Le=a(114),Fe=a.n(Le),Pe=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={redirect:!1},a.average="Average: ".concat(a.props.average),a.id=a.props.id,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(f.a,{button:!0,onClick:function(){return e.props.changeExamFocus(e.props.id)}},r.a.createElement(A.a,null,r.a.createElement(Fe.a,null)),r.a.createElement(v.a,{primary:this.props.examName,secondary:this.average}),r.a.createElement(I.a,null,r.a.createElement(M.a,{onClick:function(){return e.deleteExam(e.props.id)},"aria-label":"Delete"},r.a.createElement(z.a,null))))}},{key:"changeExamFocus",value:function(e){this.props.changeExamFocus(e)}},{key:"deleteExam",value:function(e){var t=this;P.a.delete("/api/exams/"+e+"/",{id:e}).then(function(e){t.props.updateParent()}).catch(function(e){console.log(e.response)})}}]),t}(r.a.Component),Be=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).createList=function(){var e=[];return a.props.data.map(function(t){return e.push(r.a.createElement(Pe,{key:t.id,id:t.id,examName:t.name,average:t.average,updateParent:a.props.updateParent,changeExamFocus:a.props.changeExamFocus})),e}),e},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(h.a,{className:e.root},this.props&&this.props.data&&this.createList())}}]),t}(r.a.Component),Ae=Object(ee.withStyles)(function(e){return{root:Object(De.a)({margin:"auto"},e.breakpoints.down("sm"),{maxHeight:150,overflow:"scroll",backgroundColor:"#ddd"})}})(Be),Re=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={loading:!0},a.getData=a.getData.bind(Object(L.a)(Object(L.a)(a))),a.changeExamFocus=a.changeExamFocus.bind(Object(L.a)(Object(L.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;P.a.get("/api/exams/").then(function(t){e.setState({examList:t.data,selectedExam:e.getSelectedExam(t),loading:!1})})}},{key:"getSelectedExam",value:function(e){if(e&&null==this.state.selectedExam&&e.data[0])return e.data[0].id}},{key:"changeExamFocus",value:function(e){this.setState({selectedExam:e})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(we.a,{container:!0,spacing:24},r.a.createElement(we.a,{item:!0,md:4,sm:12,xs:12},r.a.createElement(Ce.a,{className:e.paper},this.state.loading?null:r.a.createElement(Ee,{updateParent:this.getData,changeExamFocus:this.changeExamFocus}),this.state.loading?null:r.a.createElement(Ae,{className:e.examList,updateParent:this.getData,changeExamFocus:this.changeExamFocus,data:this.state.examList}))),r.a.createElement(we.a,{item:!0,md:8,sm:12,xs:12},r.a.createElement(Ce.a,{className:e.paper},this.state.loading?null:r.a.createElement(ke,{id:this.state.selectedExam,updateParent:this.getData})))))}}]),t}(r.a.Component),Ie=Object(ee.withStyles)(function(e){return{root:{flexGrow:1,margin:10},examList:{maxHeight:50,overflow:"scroll",backgroundColor:"#000"},paper:{padding:2*e.spacing.unit,textAlign:"center",color:e.palette.text.secondary}}})(Re),Te=a(65),Me=a(38),We=(a(277),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"drawChart",value:function(){var e=new Te.Element("div");e.setAttribute("id","container");var t=new Te.Element("svg");e.appendChild(t);var a=Me.e(t),n=a.append("g").attr("transform","translate(".concat(60,", ").concat(60,")")),r=Me.d().range([480,0]).domain([0,100]);n.append("g").call(Me.b(r));var i=Me.c().range([0,880]).domain(this.props.data.map(function(e){return e.name})).padding(.2);n.append("g").attr("transform","translate(0, ".concat(480,")")).call(Me.a(i));n.selectAll().data(this.props.data).enter().append("rect").attr("class","bar").attr("x",function(e){return i(e.name)}).attr("y",function(e){return r(e.average)}).attr("height",function(e){return 480-r(e.average)}).attr("width",i.bandwidth());return n.append("g").attr("class","grid").attr("transform","translate(0, ".concat(480,")")).call(Me.a().scale(i).tickSize(-480,0,0).tickFormat("")),n.append("g").attr("class","grid").call(Me.b().scale(r).tickSize(-880,0,0).tickFormat("")),a.append("text").attr("x",-300).attr("y",25).attr("transform","rotate(-90)").attr("text-anchor","middle").text("Score (%)"),a.append("text").attr("x",500).attr("y",40).attr("text-anchor","middle").text("Average Exam Scores"),e.toReact()}},{key:"render",value:function(){return this.drawChart()}}]),t}(r.a.Component)),ze=Object(Te.withFauxDOM)(We),Ge=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.container},this.state&&this.state.data&&r.a.createElement(ze,{data:this.state.data}))}},{key:"getData",value:function(){var e=this;P.a.get("api/exams/").then(function(t){e.setState({data:t.data,loading:!1})})}}]),t}(r.a.Component),He=Object(ee.withStyles)(function(e){return{container:{marginTop:"15px",marginLeft:"auto",marginRight:"auto",width:"fit-content"}}})(Ge),Je=function(){return r.a.createElement("main",null,r.a.createElement(C.a,null,r.a.createElement(S.a,{exact:!0,path:"/",component:D}),r.a.createElement(S.a,{path:"/students/:id?",component:ge}),r.a.createElement(S.a,{path:"/exams",component:Ie}),r.a.createElement(S.a,{path:"/chart",component:He})))},Ke=a(116),Ue=a.n(Ke),$e=a(117),qe=a.n($e),Qe=(a(278),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.title="Grade Keeper"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N.a,{color:"primary",position:"static"},r.a.createElement(Ue.a,null,r.a.createElement(b.a,{variant:"title",color:"inherit"},r.a.createElement(qe.a,null),"GradeKeeper\xa0",r.a.createElement(y,null)))),r.a.createElement(Je,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ve=a(283);c.a.render(r.a.createElement(Ve.a,null,r.a.createElement(Qe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[118,1,2]]]);
//# sourceMappingURL=main.d88377b9.chunk.js.map