(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{141:function(e,t){e.exports={appId:"f6848992-be00-4b00-8eb6-18f1654d6a81",scopes:["https://graph.microsoft.com/.default"]}},235:function(e,t,n){e.exports=n(448)},240:function(e,t,n){},446:function(e,t,n){},448:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(6),i=n.n(s),o=(n(240),n(110),n(55)),c=(n(79),n(33)),l=(n(98),n(52)),u=(n(111),n(64)),p=n(3),h=n.n(p),f=n(21),m=n(12),d=n(15),w=n(26),g=n(24),b=n(61),y=n(27),v=n(460),E=n(75),k=n(56),x=n(141),j=n.n(x),O=n(227),F=(n(248),n(230)),U=(n(250),n(76)),S=(n(145),n(11)),D=n(229),A=(n(126),n(46)),L=(n(181),n(49)),I=(n(112),n(74));var z=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(w.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),n.props.form.validateFields(function(){var e=Object(f.a)(h.a.mark((function e(t,a){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=8;break}return"https://cad-cw-cmy1g17.azurewebsites.net/api/postStatus",r={method:"POST",headers:{Authorization:"Bearer "+n.props.accessToken}},a.id=n.props.user.id,a.username=n.props.user.username,r.body=JSON.stringify(a),e.next=8,fetch("https://cad-cw-cmy1g17.azurewebsites.net/api/postStatus",r).then((function(e){return e.json()})).then((function(e){return n.props.form.resetFields()})).then((function(e){return n.props.handler(!0)})).catch((function(e){return console.log(e)}));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.form.validateFields()}},{key:"render",value:function(){var e,t=this.props.form,n=t.getFieldDecorator,a=t.isFieldTouched,s=t.getFieldsError,i=t.getFieldError,o=a("content")&&i("content");return r.a.createElement(v.a,{style:{width:"60vw",textAlign:"center"}},r.a.createElement(A.a,{bordered:!1},r.a.createElement(L.a,{onSubmit:this.handleSubmit},r.a.createElement(L.a.Item,{validateStatus:o?"error":"",help:o||""},n("content",{rules:[{required:!0,message:"You cannot post empty status"}]})(r.a.createElement(I.a.TextArea,{rows:"5",cols:"35",style:{resize:"none",width:"50%",fontSize:"18px"},placeholder:"What do you want to post today?"}))),r.a.createElement(L.a.Item,null,r.a.createElement(c.a,{size:"large",type:"primary",htmlType:"submit",disabled:(e=s(),Object.keys(e).some((function(t){return e[t]})))},"Post")))))}}]),t}(r.a.Component),C=L.a.create({name:"status_box"})(z),P=(n(202),n(96)),T=(n(387),n(228)),R=A.a.Meta,_=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(w.a)(this,Object(g.a)(t).call(this,e))).showModal=function(){n.setState({visible:!0,new_content:n.props.item.content})},n.handleChange=function(e){n.setState({new_content:e.target.value})},n.handleCancel=function(e){n.setState({visible:!1})},n.handleOk=function(){var e=Object(f.a)(h.a.mark((function e(t){var a,r,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.state.new_content,r="https://cad-cw-cmy1g17.azurewebsites.net/api/editStatus?id="+n.props.item.id,(s={method:"POST"}).body=JSON.stringify({content:a}),e.next=6,fetch(r,s).then((function(e){return e.json()})).then((function(e){return n.setState({visible:!1})})).then((function(e){return n.props.handler()})).catch((function(e){return console.log(e)}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={visible:!1,new_content:""},n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"isUserTweet",value:function(){return this.props.user.username===this.props.item.username}},{key:"handleDelete",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t,n,a=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://cad-cw-cmy1g17.azurewebsites.net/api/deleteStatus?id="+this.props.item.id,n={method:"GET"},e.next=4,fetch(t,n).then((function(e){return e.json()})).then((function(e){return a.props.handler()})).catch((function(e){return console.log(e)}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=r.a.createElement(R,{title:this.props.item.username+"  ("+this.props.item.datetime+")",description:this.props.item.content});return this.isUserTweet()?r.a.createElement(v.a,{style:{width:"60vw",textAlign:"center"}},r.a.createElement(A.a,{style:{margin:0,padding:0},actions:[r.a.createElement(S.a,{type:"edit",key:"edit",onClick:this.showModal}),r.a.createElement(S.a,{type:"delete",onClick:this.handleDelete.bind(this)})]},e),r.a.createElement(T.a,{title:"Edit your status",visible:this.state.visible,onOk:this.handleOk.bind(this),onCancel:this.handleCancel},r.a.createElement(I.a.TextArea,{id:"textarea",onChange:this.handleChange.bind(this),rows:"5",cols:"35",style:{resize:"none",fontSize:"18px"},value:this.state.new_content,placeholder:"What do you want to post today?"}))):r.a.createElement(v.a,{style:{width:"60vw",textAlign:"center"}},r.a.createElement(A.a,null,e))}}]),t}(r.a.Component),N=function(e){function t(e){return Object(m.a)(this,t),Object(w.a)(this,Object(g.a)(t).call(this,e))}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(P.a,{dataSource:this.props.data,style:{textAlign:"center"},renderItem:function(t){return r.a.createElement(P.a.Item,null,r.a.createElement(_,{key:t.id,item:t,user:e.props.user,handler:e.props.handler}))}})}}]),t}(r.a.Component),M=o.a.Content,W=function(e){function t(e){return Object(m.a)(this,t),Object(w.a)(this,Object(g.a)(t).call(this,e))}return Object(y.a)(t,e),Object(d.a)(t,[{key:"display",value:function(){return this.props.updatedEdit||this.props.updatedPost?r.a.createElement(l.a,null):r.a.createElement(N,{data:this.props.status,user:this.props.user,handler:this.props.handlerEdit})}},{key:"render",value:function(){return r.a.createElement(o.a,null,r.a.createElement(M,null,r.a.createElement(v.a,{style:{textAlign:"center"}},r.a.createElement(C,{user:this.props.user,accessToken:this.props.accessToken,handler:this.props.handlerPost}),this.display())))}}]),t}(r.a.Component),q=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(w.a)(this,Object(g.a)(t).call(this,e))).handleUnfollow=function(){var e=Object(f.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://cad-cw-cmy1g17.azurewebsites.net/api/unfollowUser?from="+n.props.user.id+"&to="+n.props.profile.id,e.next=3,fetch(a).then((function(e){return e.json()})).then(n.props.handler()).catch((function(e){return console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleFollow=function(){var e=Object(f.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://cad-cw-cmy1g17.azurewebsites.net/api/followUser?from="+n.props.user.id+"&to="+n.props.profile.id,e.next=3,fetch(a).then((function(e){return e.json()})).then(n.props.handler()).catch((function(e){return console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e;return e=this.props.following.includes(this.props.profile.id)?r.a.createElement(c.a,{type:"primary",onClick:this.handleUnfollow},"Following"):r.a.createElement(c.a,{type:"primary",onClick:this.handleFollow},"Follow"),r.a.createElement(A.a,{bordered:!1,title:"@"+this.props.profile.username,style:{textAlign:"center"}},r.a.createElement("div",null,this.props.profile.name),r.a.createElement("div",null,e))}}]),t}(r.a.Component),B=o.a.Content,J=(u.a.Title,function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(w.a)(this,Object(g.a)(t).call(this,e))).state={updateFollow:!1},n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.fetchUsers();case 2:return e.next=4,this.props.fetchFollowingList();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handler",value:function(){this.setState({updateFollow:!0})}},{key:"componentDidUpdate",value:function(){var e=Object(f.a)(h.a.mark((function e(t,n){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.updateFollow){e.next=5;break}return a=t.following.length,e.next=4,this.props.fetchFollowingList();case 4:a!==this.props.following.length&&this.setState({updateFollow:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement(o.a,null,r.a.createElement(B,null,r.a.createElement(v.a,{style:{textAlign:"center"}},r.a.createElement("h1",null,"Explore the community"),r.a.createElement(P.a,{grid:{gutter:16,column:4},dataSource:this.props.users,renderItem:function(t){return r.a.createElement(P.a.Item,null,r.a.createElement(q,{user:e.props.user,following:e.props.following,profile:t,handler:e.handler.bind(e)}))}}))))}}]),t}(r.a.Component)),G=(n(179),n(62)),H=(n(180),n(36)),V=(n(449),n(176)),Y=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(w.a)(this,Object(g.a)(t).call(this,e))).following.bind(Object(b.a)(n)),n.follower.bind(Object(b.a)(n)),n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.fetchFollowingList();case 2:return e.next=4,this.props.fetchFollowerList();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"following",value:function(){for(var e=[],t=this.props.followingData,n=0;n<t.length;n++)e.push({key:"following"+n,username:"@"+t[n].username,name:t[n].name,email:t[n].email});return this.props.updateFollowingList?r.a.createElement(v.a,{style:{textAlign:"center"}},r.a.createElement(l.a,null)):r.a.createElement(v.a,{style:{textAlign:"center"}},r.a.createElement("h2",null,"List of Following"),r.a.createElement(V.a,{columns:[{title:"Username",dataIndex:"username",key:"username"},{title:"Name",dataIndex:"name",key:"name"},{title:"Email",dataIndex:"email",key:"email"}],dataSource:t}))}},{key:"follower",value:function(){for(var e=[],t=this.props.followerData,n=0;n<t.length;n++)e.push({key:"follower"+n,username:"@"+t[n].username,name:t[n].name,email:t[n].email});return this.props.updateFollowList?r.a.createElement(v.a,{style:{textAlign:"center"}},r.a.createElement(l.a,null)):r.a.createElement(v.a,{style:{textAlign:"center"}},r.a.createElement("h2",null,"List of Follower"),r.a.createElement(V.a,{columns:[{title:"Username",dataIndex:"username",key:"username"},{title:"Name",dataIndex:"name",key:"name"},{title:"Email",dataIndex:"email",key:"email"}],dataSource:t}))}},{key:"render",value:function(){return r.a.createElement(k.a,null,r.a.createElement("div",null,r.a.createElement(G.a,null,r.a.createElement(H.a,{span:24},r.a.createElement(v.a,{style:{textAlign:"center"}},r.a.createElement(A.a,{bordered:!1},r.a.createElement("h1",null,"@"+this.props.user.username),r.a.createElement("div",{style:{fontSize:"20px"}},this.props.user.name),r.a.createElement("div",{style:{fontSize:"20px"}},this.props.user.email)),r.a.createElement(G.a,null,r.a.createElement(H.a,{span:12},r.a.createElement(v.a,null,r.a.createElement(k.b,{to:"/follower"},r.a.createElement(A.a,null,r.a.createElement("h2",null,"Number of Followers"),r.a.createElement("div",{style:{fontSize:"30px"}},this.props.followerList.length))))),r.a.createElement(H.a,{span:12},r.a.createElement(v.a,null,r.a.createElement(k.b,{to:"/following"},r.a.createElement(A.a,null,r.a.createElement("h2",null,"Number of Following"),r.a.createElement("div",{style:{fontSize:"30px"}},this.props.followingList.length))))))))),r.a.createElement(G.a,null,r.a.createElement(H.a,{span:24},r.a.createElement(E.d,null,r.a.createElement(E.b,{exact:!0,path:"/following"},this.following()),r.a.createElement(E.b,{exact:!0,path:"/follower"},this.follower()))))))}}]),t}(r.a.Component),$=(o.a.Header,o.a.Content,u.a.Title,{fontSize:"20px",paddingTop:"25px"}),K={height:"10vh",width:"20vw",textAlign:"center"},Q=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(w.a)(this,Object(g.a)(t).call(this,e))).state={statusData:[],users:[],following:[],followerList:[],followingData:[],followerData:[],updatedPost:!1,updatedEdit:!1,updateFollowList:!1,updateFollowingList:!1},n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchFollowingList();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(f.a)(h.a.mark((function e(t,n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.updatedPost&&!this.state.updatedEdit){e.next=4;break}return e.next=3,this.statusUpdate();case 3:n.statusData!=this.state.statusData&&(console.log(n.statusData),console.log(this.state.statusData),this.setState({updatedEdit:!1,updatedPost:!1}));case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"handlerPost",value:function(e){this.setState({updatedPost:!0})}},{key:"handlerEdit",value:function(e){this.setState({updatedEdit:!0})}},{key:"fetchUsers",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t,n=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://cad-cw-cmy1g17.azurewebsites.net/api/getAllUsers",t=this.props.location.state.user.id,e.next=4,fetch("https://cad-cw-cmy1g17.azurewebsites.net/api/getAllUsers").then((function(e){return e.json()})).then((function(e){return e.filter((function(e,n,a){return e.id!==t}))})).then((function(e){return n.setState({users:e})}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchFollowingList",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t,n=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.location.state.user.id,t="https://cad-cw-cmy1g17.azurewebsites.net/api/getFollowing?id="+this.props.location.state.user.id,e.next=4,fetch(t).then((function(e){return e.json()})).then(function(){var e=Object(f.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({following:t}),e.next=3,n.statusUpdate();case 3:return e.next=5,n.fetchFollowingUserData();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchFollowingUserData",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t,n=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.state.updateFollowingList=!0,t=this.state.following,e.next=4,Promise.all(t.map((function(e){return fetch("https://cad-cw-cmy1g17.azurewebsites.net/api/getUserFromDb?id="+e,{cache:"no-cache"}).then((function(e){return e.json()}))}))).then((function(e){for(var t=[],n=0;n<e.length;n++)e.length>0&&(t=t.concat(e[n]));return t})).then((function(e){return n.setState({followingData:e,updateFollowingList:!1})})).catch((function(e){return console.log(e)}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchFollowerUserData",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t,n=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.state.updateFollowList=!1,t=this.state.followerList,e.next=4,Promise.all(t.map((function(e){return fetch("https://cad-cw-cmy1g17.azurewebsites.net/api/getUserFromDb?id="+e,{cache:"no-cache"}).then((function(e){return e.json()}))}))).then((function(e){for(var t=[],n=0;n<e.length;n++)e.length>0&&(t=t.concat(e[n]));return t})).then((function(e){return n.setState({followerData:e,updateFollowList:!1})})).catch((function(e){return console.log(e)}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchFollowerList",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t,n=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.location.state.user.id,t="https://cad-cw-cmy1g17.azurewebsites.net/api/getFollowers?id="+this.props.location.state.user.id,e.next=4,fetch(t).then((function(e){return e.json()})).then(function(){var e=Object(f.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({followerList:t}),e.next=3,n.fetchFollowerUserData();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"statusUpdate",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t,n=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.state.updatedEdit=!0,t=this.state.following,(t=Object(D.a)(t)).includes(this.props.location.state.user.id)||t.push(this.props.location.state.user.id),e.next=6,Promise.all(t.map((function(e){return fetch("https://cad-cw-cmy1g17.azurewebsites.net/api/getStatus/"+e,{cache:"no-cache"}).then((function(e){return e.json()}))}))).then((function(e){for(var t=[],n=0;n<e.length;n++)e.length>0&&(t=t.concat(e[n]));return t=t.sort((function(e,t){return Date.parse(e.datetime)<Date.parse(t.datetime)?1:-1}))})).then((function(e){return n.setState({statusData:e})})).catch((function(e){return console.log(e)}));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(k.a,null,r.a.createElement(U.a,{theme:"dark",mode:"horizontal",style:{height:"10vh"}},r.a.createElement(U.a.Item,{key:"profile",style:K},r.a.createElement(k.b,{to:"/profile"},r.a.createElement("span",{style:$},r.a.createElement(S.a,{type:"smile",style:$}),"Profile "))),r.a.createElement(U.a.Item,{key:"status",style:K},r.a.createElement(k.b,{to:"/statusList"},r.a.createElement("span",{style:$},r.a.createElement(S.a,{type:"message",style:$}),"Status "))),r.a.createElement(U.a.Item,{key:"user",style:K},r.a.createElement(k.b,{to:"/community"},r.a.createElement("span",{style:$},r.a.createElement(S.a,{type:"user",style:$})," Explore ")))),r.a.createElement(E.d,null,r.a.createElement(E.b,{path:"/status"},r.a.createElement(F.a,{icon:r.a.createElement(S.a,{type:"smile",theme:"twoTone"}),title:"Welcome to the Social Media App!"})),r.a.createElement(E.b,{path:"/profile"},r.a.createElement(Y,{user:this.props.location.state.user,followingList:this.state.following,followingData:this.state.followingData,followerData:this.state.followerData,fetchFollowingList:this.fetchFollowingList.bind(this),followerList:this.state.followerList,fetchFollowerList:this.fetchFollowerList.bind(this),updateFollowList:this.state.updateFollowList,updateFollowingList:this.state.updateFollowingList})," "),r.a.createElement(E.b,{path:"/statusList"},r.a.createElement(W,{updatedPost:this.state.updatedPost,updatedEdit:this.state.updatedEdit,handlerPost:this.handlerPost.bind(this),handlerEdit:this.handlerEdit.bind(this),status:this.state.statusData,user:this.props.location.state.user,statusUpdate:this.statusUpdate.bind(this),followinglist:this.state.following,fetchFollowingList:this.fetchFollowingList.bind(this)})),r.a.createElement(E.b,{path:"/community"},r.a.createElement(J,{user:this.props.location.state.user,users:this.state.users,following:this.state.following,fetchUsers:this.fetchUsers.bind(this),fetchFollowingList:this.fetchFollowingList.bind(this)}))))}}]),t}(r.a.Component),X=(n(144),n(85)),Z=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(w.a)(this,Object(g.a)(t).call(this,e))).handleSubmit=function(){var e=Object(f.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n.props.form.validateFields(function(){var e=Object(f.a)(h.a.mark((function e(t,a){var r,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=8;break}return r=n.props.user.id,a.id=r,(s={method:"POST",headers:{Authorization:"Bearer "+n.props.accessToken}}).body=JSON.stringify(a),"https://cad-cw-cmy1g17.azurewebsites.net/api/registerUser",e.next=8,fetch("https://cad-cw-cmy1g17.azurewebsites.net/api/registerUser",s).then((function(e){return console.log(e.json())})).then((function(e){return n.props.handleRegister()})).catch((function(e){return console.log(e)}));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement(L.a,Object.assign({},{wrapperCol:{xs:{span:24},sm:{span:24}}},{onSubmit:this.handleSubmit,className:"login-form"}),r.a.createElement(L.a.Item,{label:"E-mail"},e("email",{rules:[{required:!0,message:"Please input your email address!"},{type:"email",message:"The input is not a valid email"}],initialValue:this.props.user.mail})(r.a.createElement(I.a,{prefix:r.a.createElement(S.a,{type:"mail",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"E-mail"}))),r.a.createElement(L.a.Item,{label:"Name"},e("name",{rules:[{required:!0,message:"Please input your Name!"}],initialValue:this.props.user.givenName+" "+this.props.user.surname})(r.a.createElement(I.a,{placeholder:"Input your name"}))),r.a.createElement(L.a.Item,{label:r.a.createElement("span",null,"Username\xa0",r.a.createElement(X.a,{title:"This name will be shown to other users"},r.a.createElement(S.a,{type:"question-circle-o"})))},e("username",{rules:[{required:!0,message:"Please input your username!"}]})(r.a.createElement(I.a,{placeholder:"Input your username"}))),r.a.createElement(L.a.Item,null,r.a.createElement(c.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Register")))}}]),t}(r.a.Component),ee=L.a.create({name:"normal_login"})(Z),te=n(459),ne=function(e){function t(e){return Object(m.a)(this,t),Object(w.a)(this,Object(g.a)(t).call(this,e))}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=u.a.Title;return r.a.createElement(te.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh",minWidth:"100vw",background:"#FFFACD"}},r.a.createElement(te.a,{item:!0},r.a.createElement(u.a,null,r.a.createElement(e,null,"Register for your first sign in"))),r.a.createElement(te.a,{item:!0},r.a.createElement(ee,{user:this.props.location.state.user,handleRegister:this.props.location.handleRegister})))}}]),t}(r.a.Component),ae=function(e){function t(e){var n;Object(m.a)(this,t),(n=Object(w.a)(this,Object(g.a)(t).call(this,e))).UserAgentApplication=new O.a({auth:{clientId:j.a.appId,authority:"https://login.microsoftonline.com/4a5378f9-29f4-4d3e-be89-669d03ada9d8",redirectURI:"https://cmy1g17-cad-cw1.azurewebsites.net/"},cache:{cacheLocation:"localStorage",storeAuthStateInCookie:!1}});var a=n.UserAgentApplication.getAccount();return n.state={user:{},isAuthenticated:null!==a,authResponse:null,error:{},db_user:[],updateUser:!1},a&&n.getUserProfile(),n.getUserProfile=n.getUserProfile.bind(Object(b.a)(n)),n.getUserDetails=n.getUserDetails.bind(Object(b.a)(n)),n.signIn=n.signIn.bind(Object(b.a)(n)),n.getUserFromDb=n.getUserFromDb.bind(Object(b.a)(n)),n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"getUserDetails",value:function(){var e=Object(f.a)(h.a.mark((function e(t){var a,r,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n(447),r=a.Client.init({authProvider:function(e){e(null,t.accessToken)}}),e.next=4,r.api("/me").get();case 4:return s=e.sent,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getUserProfile",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.UserAgentApplication.acquireTokenSilent({scopes:j.a.scopes});case 3:if(!(t=e.sent)){e.next=11;break}return e.next=7,this.getUserDetails(t);case 7:return n=e.sent,this.setState({isAuthenticated:!0,user:n,error:{},authResponse:t.accessToken,updateUser:!0}),e.next=11,this.getUserFromDb();case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),this.setState({isAuthenticated:!1});case 16:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"signIn",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.UserAgentApplication.loginPopup({scopes:j.a.scopes,prompt:"select_account"});case 3:return e.next=5,this.getUserProfile();case 5:e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),{},t={message:e.t0.message,debug:JSON.stringify(e.t0)},this.setState({isAuthenticated:!1,user:{},error:t});case 12:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"getUserFromDb",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t,n,a=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.state.updateUser=!0,t="https://cad-cw-cmy1g17.azurewebsites.net/api/getUserFromDB?id="+this.state.user.id,n={method:"GET",headers:{Authorization:"Bearer "+this.state.authResponse}},e.next=5,fetch(t,n).then((function(e){return e.json()})).then((function(e){return a.setState({db_user:e})}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleRegister",value:function(){this.setState({updateUser:!0})}},{key:"componentDidUpdate",value:function(){var e=Object(f.a)(h.a.mark((function e(t,n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.updateUser){e.next=4;break}return e.next=3,this.getUserFromDb();case 3:n.db_user!==this.state.db_user&&this.setState({updateUser:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"logIn",value:function(){var e=u.a.Title;return this.state.isAuthenticated?this.state.updateUser?r.a.createElement(v.a,{style:{width:"100vw",height:"100vh",textAlign:"center"}},r.a.createElement(l.a,{size:"large"})):0===this.state.db_user.length?r.a.createElement(E.a,{to:{pathname:"/register",state:{user:this.state.user,accessToken:this.state.authResponse},handleRegister:this.handleRegister.bind(this)}}):r.a.createElement(E.a,{to:{pathname:"/status",state:{user:this.state.db_user[0],accessToken:this.state.authResponse}}}):r.a.createElement(o.a,{style:{textAlign:"center",margin:"20%",background:"white"}},r.a.createElement(v.a,null,r.a.createElement(e,null,"Welcome to the Social Media!"),r.a.createElement(c.a,{onClick:this.signIn},"Click here to sign in")))}},{key:"render",value:function(){return r.a.createElement(k.a,null,r.a.createElement("div",null,this.logIn()),r.a.createElement(E.d,null,r.a.createElement(E.b,{path:"/register",component:ne}),r.a.createElement(E.b,{path:"/status",component:Q})))}}]),t}(r.a.Component);n(446);var re=function(){return r.a.createElement(ae,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[235,1,2]]]);
//# sourceMappingURL=main.45643b3f.chunk.js.map