var ie=Object.defineProperty;var re=(t,e,s)=>e in t?ie(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var Lt=(t,e,s)=>re(t,typeof e!="symbol"?e+"":e,s);import{u as ae,b as ne}from"./chunk-RZ5BOZE2-CZOP7Uhi.js";import{p as d,F as T,h as D,t as oe,u as le,az as ce,q as j,A as he,l as de,o as ue,f as pe,d as ye,w as fe,x as ge}from"./mermaid.js";var Tt=(function(){var t=d(function(v,a,n,f){for(n=n||{},f=v.length;f--;n[v[f]]=a);return n},"o"),e=[1,2],s=[1,3],o=[1,4],l=[2,4],r=[1,9],p=[1,11],u=[1,16],h=[1,17],m=[1,18],b=[1,19],O=[1,32],L=[1,20],y=[1,21],$=[1,22],I=[1,23],B=[1,24],P=[1,26],w=[1,27],N=[1,28],q=[1,29],Q=[1,30],Z=[1,31],tt=[1,34],et=[1,35],st=[1,36],it=[1,37],U=[1,33],g=[1,4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],rt=[1,4,5,14,15,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],Dt=[4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],pt={trace:d(function(){},"trace"),yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,SD:6,document:7,line:8,statement:9,classDefStatement:10,styleStatement:11,cssClassStatement:12,idStatement:13,DESCR:14,"-->":15,HIDE_EMPTY:16,scale:17,WIDTH:18,COMPOSIT_STATE:19,STRUCT_START:20,STRUCT_STOP:21,STATE_DESCR:22,AS:23,ID:24,FORK:25,JOIN:26,CHOICE:27,CONCURRENT:28,note:29,notePosition:30,NOTE_TEXT:31,direction:32,acc_title:33,acc_title_value:34,acc_descr:35,acc_descr_value:36,acc_descr_multiline_value:37,classDef:38,CLASSDEF_ID:39,CLASSDEF_STYLEOPTS:40,DEFAULT:41,style:42,STYLE_IDS:43,STYLEDEF_STYLEOPTS:44,class:45,CLASSENTITY_IDS:46,STYLECLASS:47,direction_tb:48,direction_bt:49,direction_rl:50,direction_lr:51,eol:52,";":53,EDGE_STATE:54,STYLE_SEPARATOR:55,left_of:56,right_of:57,$accept:0,$end:1},terminals_:{2:"error",4:"SPACE",5:"NL",6:"SD",14:"DESCR",15:"-->",16:"HIDE_EMPTY",17:"scale",18:"WIDTH",19:"COMPOSIT_STATE",20:"STRUCT_START",21:"STRUCT_STOP",22:"STATE_DESCR",23:"AS",24:"ID",25:"FORK",26:"JOIN",27:"CHOICE",28:"CONCURRENT",29:"note",31:"NOTE_TEXT",33:"acc_title",34:"acc_title_value",35:"acc_descr",36:"acc_descr_value",37:"acc_descr_multiline_value",38:"classDef",39:"CLASSDEF_ID",40:"CLASSDEF_STYLEOPTS",41:"DEFAULT",42:"style",43:"STYLE_IDS",44:"STYLEDEF_STYLEOPTS",45:"class",46:"CLASSENTITY_IDS",47:"STYLECLASS",48:"direction_tb",49:"direction_bt",50:"direction_rl",51:"direction_lr",53:";",54:"EDGE_STATE",55:"STYLE_SEPARATOR",56:"left_of",57:"right_of"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[8,1],[8,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,3],[9,4],[9,1],[9,2],[9,1],[9,4],[9,3],[9,6],[9,1],[9,1],[9,1],[9,1],[9,4],[9,4],[9,1],[9,2],[9,2],[9,1],[10,3],[10,3],[11,3],[12,3],[32,1],[32,1],[32,1],[32,1],[52,1],[52,1],[13,1],[13,1],[13,3],[13,3],[30,1],[30,1]],performAction:d(function(v,a,n,f,S,i,k){var c=i.length-1;switch(S){case 3:return f.setRootDoc(i[c]),i[c];case 4:this.$=[];break;case 5:i[c]!="nl"&&(i[c-1].push(i[c]),this.$=i[c-1]);break;case 6:case 7:this.$=i[c];break;case 8:this.$="nl";break;case 12:this.$=i[c];break;case 13:const X=i[c-1];X.description=f.trimColon(i[c]),this.$=X;break;case 14:this.$={stmt:"relation",state1:i[c-2],state2:i[c]};break;case 15:const yt=f.trimColon(i[c]);this.$={stmt:"relation",state1:i[c-3],state2:i[c-1],description:yt};break;case 19:this.$={stmt:"state",id:i[c-3],type:"default",description:"",doc:i[c-1]};break;case 20:var F=i[c],H=i[c-2].trim();if(i[c].match(":")){var nt=i[c].split(":");F=nt[0],H=[H,nt[1]]}this.$={stmt:"state",id:F,type:"default",description:H};break;case 21:this.$={stmt:"state",id:i[c-3],type:"default",description:i[c-5],doc:i[c-1]};break;case 22:this.$={stmt:"state",id:i[c],type:"fork"};break;case 23:this.$={stmt:"state",id:i[c],type:"join"};break;case 24:this.$={stmt:"state",id:i[c],type:"choice"};break;case 25:this.$={stmt:"state",id:f.getDividerId(),type:"divider"};break;case 26:this.$={stmt:"state",id:i[c-1].trim(),note:{position:i[c-2].trim(),text:i[c].trim()}};break;case 29:this.$=i[c].trim(),f.setAccTitle(this.$);break;case 30:case 31:this.$=i[c].trim(),f.setAccDescription(this.$);break;case 32:case 33:this.$={stmt:"classDef",id:i[c-1].trim(),classes:i[c].trim()};break;case 34:this.$={stmt:"style",id:i[c-1].trim(),styleClass:i[c].trim()};break;case 35:this.$={stmt:"applyClass",id:i[c-1].trim(),styleClass:i[c].trim()};break;case 36:f.setDirection("TB"),this.$={stmt:"dir",value:"TB"};break;case 37:f.setDirection("BT"),this.$={stmt:"dir",value:"BT"};break;case 38:f.setDirection("RL"),this.$={stmt:"dir",value:"RL"};break;case 39:f.setDirection("LR"),this.$={stmt:"dir",value:"LR"};break;case 42:case 43:this.$={stmt:"state",id:i[c].trim(),type:"default",description:""};break;case 44:this.$={stmt:"state",id:i[c-2].trim(),classes:[i[c].trim()],type:"default",description:""};break;case 45:this.$={stmt:"state",id:i[c-2].trim(),classes:[i[c].trim()],type:"default",description:""};break}},"anonymous"),table:[{3:1,4:e,5:s,6:o},{1:[3]},{3:5,4:e,5:s,6:o},{3:6,4:e,5:s,6:o},t([1,4,5,16,17,19,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],l,{7:7}),{1:[2,1]},{1:[2,2]},{1:[2,3],4:r,5:p,8:8,9:10,10:12,11:13,12:14,13:15,16:u,17:h,19:m,22:b,24:O,25:L,26:y,27:$,28:I,29:B,32:25,33:P,35:w,37:N,38:q,42:Q,45:Z,48:tt,49:et,50:st,51:it,54:U},t(g,[2,5]),{9:38,10:12,11:13,12:14,13:15,16:u,17:h,19:m,22:b,24:O,25:L,26:y,27:$,28:I,29:B,32:25,33:P,35:w,37:N,38:q,42:Q,45:Z,48:tt,49:et,50:st,51:it,54:U},t(g,[2,7]),t(g,[2,8]),t(g,[2,9]),t(g,[2,10]),t(g,[2,11]),t(g,[2,12],{14:[1,39],15:[1,40]}),t(g,[2,16]),{18:[1,41]},t(g,[2,18],{20:[1,42]}),{23:[1,43]},t(g,[2,22]),t(g,[2,23]),t(g,[2,24]),t(g,[2,25]),{30:44,31:[1,45],56:[1,46],57:[1,47]},t(g,[2,28]),{34:[1,48]},{36:[1,49]},t(g,[2,31]),{39:[1,50],41:[1,51]},{43:[1,52]},{46:[1,53]},t(rt,[2,42],{55:[1,54]}),t(rt,[2,43],{55:[1,55]}),t(g,[2,36]),t(g,[2,37]),t(g,[2,38]),t(g,[2,39]),t(g,[2,6]),t(g,[2,13]),{13:56,24:O,54:U},t(g,[2,17]),t(Dt,l,{7:57}),{24:[1,58]},{24:[1,59]},{23:[1,60]},{24:[2,46]},{24:[2,47]},t(g,[2,29]),t(g,[2,30]),{40:[1,61]},{40:[1,62]},{44:[1,63]},{47:[1,64]},{24:[1,65]},{24:[1,66]},t(g,[2,14],{14:[1,67]}),{4:r,5:p,8:8,9:10,10:12,11:13,12:14,13:15,16:u,17:h,19:m,21:[1,68],22:b,24:O,25:L,26:y,27:$,28:I,29:B,32:25,33:P,35:w,37:N,38:q,42:Q,45:Z,48:tt,49:et,50:st,51:it,54:U},t(g,[2,20],{20:[1,69]}),{31:[1,70]},{24:[1,71]},t(g,[2,32]),t(g,[2,33]),t(g,[2,34]),t(g,[2,35]),t(rt,[2,44]),t(rt,[2,45]),t(g,[2,15]),t(g,[2,19]),t(Dt,l,{7:72}),t(g,[2,26]),t(g,[2,27]),{4:r,5:p,8:8,9:10,10:12,11:13,12:14,13:15,16:u,17:h,19:m,21:[1,73],22:b,24:O,25:L,26:y,27:$,28:I,29:B,32:25,33:P,35:w,37:N,38:q,42:Q,45:Z,48:tt,49:et,50:st,51:it,54:U},t(g,[2,21])],defaultActions:{5:[2,1],6:[2,2],46:[2,46],47:[2,47]},parseError:d(function(v,a){if(a.recoverable)this.trace(v);else{var n=new Error(v);throw n.hash=a,n}},"parseError"),parse:d(function(v){var a=this,n=[0],f=[],S=[null],i=[],k=this.table,c="",F=0,H=0,nt=2,X=1,yt=i.slice.call(arguments,1),_=Object.create(this.lexer),Y={yy:{}};for(var ft in this.yy)Object.prototype.hasOwnProperty.call(this.yy,ft)&&(Y.yy[ft]=this.yy[ft]);_.setInput(v,Y.yy),Y.yy.lexer=_,Y.yy.parser=this,typeof _.yylloc>"u"&&(_.yylloc={});var gt=_.yylloc;i.push(gt);var ee=_.options&&_.options.ranges;typeof Y.yy.parseError=="function"?this.parseError=Y.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function se(x){n.length=n.length-2*x,S.length=S.length-x,i.length=i.length-x}d(se,"popStack");function $t(){var x;return x=f.pop()||_.lex()||X,typeof x!="number"&&(x instanceof Array&&(f=x,x=f.pop()),x=a.symbols_[x]||x),x}d($t,"lex");for(var E,G,C,mt,M={},ot,A,vt,lt;;){if(G=n[n.length-1],this.defaultActions[G]?C=this.defaultActions[G]:((E===null||typeof E>"u")&&(E=$t()),C=k[G]&&k[G][E]),typeof C>"u"||!C.length||!C[0]){var St="";lt=[];for(ot in k[G])this.terminals_[ot]&&ot>nt&&lt.push("'"+this.terminals_[ot]+"'");_.showPosition?St="Parse error on line "+(F+1)+`:
`+_.showPosition()+`
Expecting `+lt.join(", ")+", got '"+(this.terminals_[E]||E)+"'":St="Parse error on line "+(F+1)+": Unexpected "+(E==X?"end of input":"'"+(this.terminals_[E]||E)+"'"),this.parseError(St,{text:_.match,token:this.terminals_[E]||E,line:_.yylineno,loc:gt,expected:lt})}if(C[0]instanceof Array&&C.length>1)throw new Error("Parse Error: multiple actions possible at state: "+G+", token: "+E);switch(C[0]){case 1:n.push(E),S.push(_.yytext),i.push(_.yylloc),n.push(C[1]),E=null,H=_.yyleng,c=_.yytext,F=_.yylineno,gt=_.yylloc;break;case 2:if(A=this.productions_[C[1]][1],M.$=S[S.length-A],M._$={first_line:i[i.length-(A||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(A||1)].first_column,last_column:i[i.length-1].last_column},ee&&(M._$.range=[i[i.length-(A||1)].range[0],i[i.length-1].range[1]]),mt=this.performAction.apply(M,[c,H,F,Y.yy,C[1],S,i].concat(yt)),typeof mt<"u")return mt;A&&(n=n.slice(0,-1*A*2),S=S.slice(0,-1*A),i=i.slice(0,-1*A)),n.push(this.productions_[C[1]][0]),S.push(M.$),i.push(M._$),vt=k[n[n.length-2]][n[n.length-1]],n.push(vt);break;case 3:return!0}}return!0},"parse")},te=(function(){var v={EOF:1,parseError:d(function(a,n){if(this.yy.parser)this.yy.parser.parseError(a,n);else throw new Error(a)},"parseError"),setInput:d(function(a,n){return this.yy=n||this.yy||{},this._input=a,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:d(function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a;var n=a.match(/(?:\r\n?|\n).*/g);return n?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},"input"),unput:d(function(a){var n=a.length,f=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-n),this.offset-=n;var S=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),f.length-1&&(this.yylineno-=f.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:f?(f.length===S.length?this.yylloc.first_column:0)+S[S.length-f.length].length-f[0].length:this.yylloc.first_column-n},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-n]),this.yyleng=this.yytext.length,this},"unput"),more:d(function(){return this._more=!0,this},"more"),reject:d(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:d(function(a){this.unput(this.match.slice(a))},"less"),pastInput:d(function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:d(function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:d(function(){var a=this.pastInput(),n=new Array(a.length+1).join("-");return a+this.upcomingInput()+`
`+n+"^"},"showPosition"),test_match:d(function(a,n){var f,S,i;if(this.options.backtrack_lexer&&(i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(i.yylloc.range=this.yylloc.range.slice(0))),S=a[0].match(/(?:\r\n?|\n).*/g),S&&(this.yylineno+=S.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:S?S[S.length-1].length-S[S.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],f=this.performAction.call(this,this.yy,this,n,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),f)return f;if(this._backtrack){for(var k in i)this[k]=i[k];return!1}return!1},"test_match"),next:d(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,n,f,S;this._more||(this.yytext="",this.match="");for(var i=this._currentRules(),k=0;k<i.length;k++)if(f=this._input.match(this.rules[i[k]]),f&&(!n||f[0].length>n[0].length)){if(n=f,S=k,this.options.backtrack_lexer){if(a=this.test_match(f,i[k]),a!==!1)return a;if(this._backtrack){n=!1;continue}else return!1}else if(!this.options.flex)break}return n?(a=this.test_match(n,i[S]),a!==!1?a:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:d(function(){var a=this.next();return a||this.lex()},"lex"),begin:d(function(a){this.conditionStack.push(a)},"begin"),popState:d(function(){var a=this.conditionStack.length-1;return a>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:d(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:d(function(a){return a=this.conditionStack.length-1-Math.abs(a||0),a>=0?this.conditionStack[a]:"INITIAL"},"topState"),pushState:d(function(a){this.begin(a)},"pushState"),stateStackSize:d(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:d(function(a,n,f,S){switch(f){case 0:return 41;case 1:return 48;case 2:return 49;case 3:return 50;case 4:return 51;case 5:break;case 6:break;case 7:return 5;case 8:break;case 9:break;case 10:break;case 11:break;case 12:return this.pushState("SCALE"),17;case 13:return 18;case 14:this.popState();break;case 15:return this.begin("acc_title"),33;case 16:return this.popState(),"acc_title_value";case 17:return this.begin("acc_descr"),35;case 18:return this.popState(),"acc_descr_value";case 19:this.begin("acc_descr_multiline");break;case 20:this.popState();break;case 21:return"acc_descr_multiline_value";case 22:return this.pushState("CLASSDEF"),38;case 23:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 24:return this.popState(),this.pushState("CLASSDEFID"),39;case 25:return this.popState(),40;case 26:return this.pushState("CLASS"),45;case 27:return this.popState(),this.pushState("CLASS_STYLE"),46;case 28:return this.popState(),47;case 29:return this.pushState("STYLE"),42;case 30:return this.popState(),this.pushState("STYLEDEF_STYLES"),43;case 31:return this.popState(),44;case 32:return this.pushState("SCALE"),17;case 33:return 18;case 34:this.popState();break;case 35:this.pushState("STATE");break;case 36:return this.popState(),n.yytext=n.yytext.slice(0,-8).trim(),25;case 37:return this.popState(),n.yytext=n.yytext.slice(0,-8).trim(),26;case 38:return this.popState(),n.yytext=n.yytext.slice(0,-10).trim(),27;case 39:return this.popState(),n.yytext=n.yytext.slice(0,-8).trim(),25;case 40:return this.popState(),n.yytext=n.yytext.slice(0,-8).trim(),26;case 41:return this.popState(),n.yytext=n.yytext.slice(0,-10).trim(),27;case 42:return 48;case 43:return 49;case 44:return 50;case 45:return 51;case 46:this.pushState("STATE_STRING");break;case 47:return this.pushState("STATE_ID"),"AS";case 48:return this.popState(),"ID";case 49:this.popState();break;case 50:return"STATE_DESCR";case 51:return 19;case 52:this.popState();break;case 53:return this.popState(),this.pushState("struct"),20;case 54:break;case 55:return this.popState(),21;case 56:break;case 57:return this.begin("NOTE"),29;case 58:return this.popState(),this.pushState("NOTE_ID"),56;case 59:return this.popState(),this.pushState("NOTE_ID"),57;case 60:this.popState(),this.pushState("FLOATING_NOTE");break;case 61:return this.popState(),this.pushState("FLOATING_NOTE_ID"),"AS";case 62:break;case 63:return"NOTE_TEXT";case 64:return this.popState(),"ID";case 65:return this.popState(),this.pushState("NOTE_TEXT"),24;case 66:return this.popState(),n.yytext=n.yytext.substr(2).trim(),31;case 67:return this.popState(),n.yytext=n.yytext.slice(0,-8).trim(),31;case 68:return 6;case 69:return 6;case 70:return 16;case 71:return 54;case 72:return 24;case 73:return n.yytext=n.yytext.trim(),14;case 74:return 15;case 75:return 28;case 76:return 55;case 77:return 5;case 78:return"INVALID"}},"anonymous"),rules:[/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:style\s+)/i,/^(?:[\w,]+\s+)/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[9,10],inclusive:!1},struct:{rules:[9,10,22,26,29,35,42,43,44,45,54,55,56,57,71,72,73,74,75],inclusive:!1},FLOATING_NOTE_ID:{rules:[64],inclusive:!1},FLOATING_NOTE:{rules:[61,62,63],inclusive:!1},NOTE_TEXT:{rules:[66,67],inclusive:!1},NOTE_ID:{rules:[65],inclusive:!1},NOTE:{rules:[58,59,60],inclusive:!1},STYLEDEF_STYLEOPTS:{rules:[],inclusive:!1},STYLEDEF_STYLES:{rules:[31],inclusive:!1},STYLE_IDS:{rules:[],inclusive:!1},STYLE:{rules:[30],inclusive:!1},CLASS_STYLE:{rules:[28],inclusive:!1},CLASS:{rules:[27],inclusive:!1},CLASSDEFID:{rules:[25],inclusive:!1},CLASSDEF:{rules:[23,24],inclusive:!1},acc_descr_multiline:{rules:[20,21],inclusive:!1},acc_descr:{rules:[18],inclusive:!1},acc_title:{rules:[16],inclusive:!1},SCALE:{rules:[13,14,33,34],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[48],inclusive:!1},STATE_STRING:{rules:[49,50],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[9,10,36,37,38,39,40,41,46,47,51,52,53],inclusive:!1},ID:{rules:[9,10],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,10,11,12,15,17,19,22,26,29,32,35,53,57,68,69,70,71,72,73,74,76,77,78],inclusive:!0}}};return v})();pt.lexer=te;function at(){this.yy={}}return d(at,"Parser"),at.prototype=pt,pt.Parser=at,new at})();Tt.parser=Tt;var We=Tt,me="TB",jt="TB",It="dir",ht="state",kt="relation",Se="classDef",be="style",_e="applyClass",J="default",zt="divider",Ht="fill:none",Mt="fill: #333",Ut="c",Xt="text",Wt="normal",bt="rect",_t="rectWithTitle",Te="stateStart",ke="stateEnd",At="divider",Ot="roundedWithTitle",Ee="note",xe="noteGroup",K="statediagram",Ce="state",De=`${K}-${Ce}`,Vt="transition",$e="note",ve="note-edge",Le=`${Vt} ${ve}`,Ie=`${K}-${$e}`,Ae="cluster",Oe=`${K}-${Ae}`,we="cluster-alt",Ne=`${K}-${we}`,Jt="parent",Kt="note",Re="state",Ct="----",Be=`${Ct}${Kt}`,wt=`${Ct}${Jt}`,qt=d((t,e=jt)=>{if(!t.doc)return e;let s=e;for(const o of t.doc)o.stmt==="dir"&&(s=o.value);return s},"getDir"),Pe=d(function(t,e){return e.db.getClasses()},"getClasses"),Fe=d(async function(t,e,s,o){T.info("REF0:"),T.info("Drawing state diagram (v2)",e);const{securityLevel:l,state:r,layout:p}=D();o.db.extract(o.db.getRootDocV2());const u=o.db.getData(),h=ae(e,l);u.type=o.type,u.layoutAlgorithm=p,u.nodeSpacing=r?.nodeSpacing||50,u.rankSpacing=r?.rankSpacing||50,u.markers=["barb"],u.diagramId=e,await oe(u,h),le.insertTitle(h,"statediagramTitleText",r?.titleTopMargin??25,o.db.getDiagramTitle()),ne(h,8,K,r?.useMaxWidth??!0)},"draw"),Ve={getClasses:Pe,draw:Fe,getDir:qt},dt=new Map,R=0;function ut(t="",e=0,s="",o=Ct){const l=s!==null&&s.length>0?`${o}${s}`:"";return`${Re}-${t}${l}-${e}`}d(ut,"stateDomId");var Ye=d((t,e,s,o,l,r,p,u)=>{T.trace("items",e),e.forEach(h=>{switch(h.stmt){case ht:V(t,h,s,o,l,r,p,u);break;case J:V(t,h,s,o,l,r,p,u);break;case kt:{V(t,h.state1,s,o,l,r,p,u),V(t,h.state2,s,o,l,r,p,u);const m={id:"edge"+R,start:h.state1.id,end:h.state2.id,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:Ht,labelStyle:"",label:j.sanitizeText(h.description,D()),arrowheadStyle:Mt,labelpos:Ut,labelType:Xt,thickness:Wt,classes:Vt,look:p};l.push(m),R++}break}})},"setupDoc"),Nt=d((t,e=jt)=>{let s=e;if(t.doc)for(const o of t.doc)o.stmt==="dir"&&(s=o.value);return s},"getDir");function W(t,e,s){if(!e.id||e.id==="</join></fork>"||e.id==="</choice>")return;e.cssClasses&&(Array.isArray(e.cssCompiledStyles)||(e.cssCompiledStyles=[]),e.cssClasses.split(" ").forEach(l=>{if(s.get(l)){const r=s.get(l);e.cssCompiledStyles=[...e.cssCompiledStyles,...r.styles]}}));const o=t.find(l=>l.id===e.id);o?Object.assign(o,e):t.push(e)}d(W,"insertOrUpdateNode");function Qt(t){return t?.classes?.join(" ")??""}d(Qt,"getClassesFromDbInfo");function Zt(t){return t?.styles??[]}d(Zt,"getStylesFromDbInfo");var V=d((t,e,s,o,l,r,p,u)=>{const h=e.id,m=s.get(h),b=Qt(m),O=Zt(m);if(T.info("dataFetcher parsedItem",e,m,O),h!=="root"){let L=bt;e.start===!0?L=Te:e.start===!1&&(L=ke),e.type!==J&&(L=e.type),dt.get(h)||dt.set(h,{id:h,shape:L,description:j.sanitizeText(h,D()),cssClasses:`${b} ${De}`,cssStyles:O});const y=dt.get(h);e.description&&(Array.isArray(y.description)?(y.shape=_t,y.description.push(e.description)):y.description?.length>0?(y.shape=_t,y.description===h?y.description=[e.description]:y.description=[y.description,e.description]):(y.shape=bt,y.description=e.description),y.description=j.sanitizeTextOrArray(y.description,D())),y.description?.length===1&&y.shape===_t&&(y.type==="group"?y.shape=Ot:y.shape=bt),!y.type&&e.doc&&(T.info("Setting cluster for XCX",h,Nt(e)),y.type="group",y.isGroup=!0,y.dir=Nt(e),y.shape=e.type===zt?At:Ot,y.cssClasses=`${y.cssClasses} ${Oe} ${r?Ne:""}`);const $={labelStyle:"",shape:y.shape,label:y.description,cssClasses:y.cssClasses,cssCompiledStyles:[],cssStyles:y.cssStyles,id:h,dir:y.dir,domId:ut(h,R),type:y.type,isGroup:y.type==="group",padding:8,rx:10,ry:10,look:p};if($.shape===At&&($.label=""),t&&t.id!=="root"&&(T.trace("Setting node ",h," to be child of its parent ",t.id),$.parentId=t.id),$.centerLabel=!0,e.note){const I={labelStyle:"",shape:Ee,label:e.note.text,cssClasses:Ie,cssStyles:[],cssCompilesStyles:[],id:h+Be+"-"+R,domId:ut(h,R,Kt),type:y.type,isGroup:y.type==="group",padding:D().flowchart.padding,look:p,position:e.note.position},B=h+wt,P={labelStyle:"",shape:xe,label:e.note.text,cssClasses:y.cssClasses,cssStyles:[],id:h+wt,domId:ut(h,R,Jt),type:"group",isGroup:!0,padding:16,look:p,position:e.note.position};R++,P.id=B,I.parentId=B,W(o,P,u),W(o,I,u),W(o,$,u);let w=h,N=I.id;e.note.position==="left of"&&(w=I.id,N=h),l.push({id:w+"-"+N,start:w,end:N,arrowhead:"none",arrowTypeEnd:"",style:Ht,labelStyle:"",classes:Le,arrowheadStyle:Mt,labelpos:Ut,labelType:Xt,thickness:Wt,look:p})}else W(o,$,u)}e.doc&&(T.trace("Adding nodes children "),Ye(e,e.doc,s,o,l,!r,p,u))},"dataFetcher"),Ge=d(()=>{dt.clear(),R=0},"reset"),Et="[*]",Rt="start",Bt=Et,Pt="end",Ft="color",Yt="fill",je="bgFill",ze=",";function xt(){return new Map}d(xt,"newClassesList");var Gt=d(()=>({relations:[],states:new Map,documents:{}}),"newDoc"),ct=d(t=>JSON.parse(JSON.stringify(t)),"clone"),z,Je=(z=class{constructor(e){this.clear(),this.version=e,this.setRootDoc=this.setRootDoc.bind(this),this.getDividerId=this.getDividerId.bind(this),this.setDirection=this.setDirection.bind(this),this.trimColon=this.trimColon.bind(this)}version;nodes=[];edges=[];rootDoc=[];classes=xt();documents={root:Gt()};currentDocument=this.documents.root;startEndCount=0;dividerCnt=0;setRootDoc(e){T.info("Setting root doc",e),this.rootDoc=e,this.version===1?this.extract(e):this.extract(this.getRootDocV2())}getRootDoc(){return this.rootDoc}docTranslator(e,s,o){if(s.stmt===kt)this.docTranslator(e,s.state1,!0),this.docTranslator(e,s.state2,!1);else if(s.stmt===ht&&(s.id==="[*]"?(s.id=o?e.id+"_start":e.id+"_end",s.start=o):s.id=s.id.trim()),s.doc){const l=[];let r=[],p;for(p=0;p<s.doc.length;p++)if(s.doc[p].type===zt){const u=ct(s.doc[p]);u.doc=ct(r),l.push(u),r=[]}else r.push(s.doc[p]);if(l.length>0&&r.length>0){const u={stmt:ht,id:ce(),type:"divider",doc:ct(r)};l.push(ct(u)),s.doc=l}s.doc.forEach(u=>this.docTranslator(s,u,!0))}}getRootDocV2(){return this.docTranslator({id:"root"},{id:"root",doc:this.rootDoc},!0),{id:"root",doc:this.rootDoc}}extract(e){let s;e.doc?s=e.doc:s=e,T.info(s),this.clear(!0),T.info("Extract initial document:",s),s.forEach(r=>{switch(T.warn("Statement",r.stmt),r.stmt){case ht:this.addState(r.id.trim(),r.type,r.doc,r.description,r.note,r.classes,r.styles,r.textStyles);break;case kt:this.addRelation(r.state1,r.state2,r.description);break;case Se:this.addStyleClass(r.id.trim(),r.classes);break;case be:{const p=r.id.trim().split(","),u=r.styleClass.split(",");p.forEach(h=>{let m=this.getState(h);if(m===void 0){const b=h.trim();this.addState(b),m=this.getState(b)}m.styles=u.map(b=>b.replace(/;/g,"")?.trim())})}break;case _e:this.setCssClass(r.id.trim(),r.styleClass);break}});const o=this.getStates(),l=D().look;Ge(),V(void 0,this.getRootDocV2(),o,this.nodes,this.edges,!0,l,this.classes),this.nodes.forEach(r=>{if(Array.isArray(r.label)){if(r.description=r.label.slice(1),r.isGroup&&r.description.length>0)throw new Error("Group nodes can only have label. Remove the additional description for node ["+r.id+"]");r.label=r.label[0]}})}addState(e,s=J,o=null,l=null,r=null,p=null,u=null,h=null){const m=e?.trim();if(this.currentDocument.states.has(m)?(this.currentDocument.states.get(m).doc||(this.currentDocument.states.get(m).doc=o),this.currentDocument.states.get(m).type||(this.currentDocument.states.get(m).type=s)):(T.info("Adding state ",m,l),this.currentDocument.states.set(m,{id:m,descriptions:[],type:s,doc:o,note:r,classes:[],styles:[],textStyles:[]})),l&&(T.info("Setting state description",m,l),typeof l=="string"&&this.addDescription(m,l.trim()),typeof l=="object"&&l.forEach(b=>this.addDescription(m,b.trim()))),r){const b=this.currentDocument.states.get(m);b.note=r,b.note.text=j.sanitizeText(b.note.text,D())}p&&(T.info("Setting state classes",m,p),(typeof p=="string"?[p]:p).forEach(b=>this.setCssClass(m,b.trim()))),u&&(T.info("Setting state styles",m,u),(typeof u=="string"?[u]:u).forEach(b=>this.setStyle(m,b.trim()))),h&&(T.info("Setting state styles",m,u),(typeof h=="string"?[h]:h).forEach(b=>this.setTextStyle(m,b.trim())))}clear(e){this.nodes=[],this.edges=[],this.documents={root:Gt()},this.currentDocument=this.documents.root,this.startEndCount=0,this.classes=xt(),e||he()}getState(e){return this.currentDocument.states.get(e)}getStates(){return this.currentDocument.states}logDocuments(){T.info("Documents = ",this.documents)}getRelations(){return this.currentDocument.relations}startIdIfNeeded(e=""){let s=e;return e===Et&&(this.startEndCount++,s=`${Rt}${this.startEndCount}`),s}startTypeIfNeeded(e="",s=J){return e===Et?Rt:s}endIdIfNeeded(e=""){let s=e;return e===Bt&&(this.startEndCount++,s=`${Pt}${this.startEndCount}`),s}endTypeIfNeeded(e="",s=J){return e===Bt?Pt:s}addRelationObjs(e,s,o){let l=this.startIdIfNeeded(e.id.trim()),r=this.startTypeIfNeeded(e.id.trim(),e.type),p=this.startIdIfNeeded(s.id.trim()),u=this.startTypeIfNeeded(s.id.trim(),s.type);this.addState(l,r,e.doc,e.description,e.note,e.classes,e.styles,e.textStyles),this.addState(p,u,s.doc,s.description,s.note,s.classes,s.styles,s.textStyles),this.currentDocument.relations.push({id1:l,id2:p,relationTitle:j.sanitizeText(o,D())})}addRelation(e,s,o){if(typeof e=="object")this.addRelationObjs(e,s,o);else{const l=this.startIdIfNeeded(e.trim()),r=this.startTypeIfNeeded(e),p=this.endIdIfNeeded(s.trim()),u=this.endTypeIfNeeded(s);this.addState(l,r),this.addState(p,u),this.currentDocument.relations.push({id1:l,id2:p,title:j.sanitizeText(o,D())})}}addDescription(e,s){const o=this.currentDocument.states.get(e),l=s.startsWith(":")?s.replace(":","").trim():s;o.descriptions.push(j.sanitizeText(l,D()))}cleanupLabel(e){return e.substring(0,1)===":"?e.substr(2).trim():e.trim()}getDividerId(){return this.dividerCnt++,"divider-id-"+this.dividerCnt}addStyleClass(e,s=""){this.classes.has(e)||this.classes.set(e,{id:e,styles:[],textStyles:[]});const o=this.classes.get(e);s?.split(ze).forEach(l=>{const r=l.replace(/([^;]*);/,"$1").trim();if(RegExp(Ft).exec(l)){const p=r.replace(Yt,je).replace(Ft,Yt);o.textStyles.push(p)}o.styles.push(r)})}getClasses(){return this.classes}setCssClass(e,s){e.split(",").forEach(o=>{let l=this.getState(o);if(l===void 0){const r=o.trim();this.addState(r),l=this.getState(r)}l.classes.push(s)})}setStyle(e,s){const o=this.getState(e);o!==void 0&&o.styles.push(s)}setTextStyle(e,s){const o=this.getState(e);o!==void 0&&o.textStyles.push(s)}getDirectionStatement(){return this.rootDoc.find(e=>e.stmt===It)}getDirection(){return this.getDirectionStatement()?.value??me}setDirection(e){const s=this.getDirectionStatement();s?s.value=e:this.rootDoc.unshift({stmt:It,value:e})}trimColon(e){return e&&e[0]===":"?e.substr(1).trim():e.trim()}getData(){const e=D();return{nodes:this.nodes,edges:this.edges,other:{},config:e,direction:qt(this.getRootDocV2())}}getConfig(){return D().state}getAccTitle=de;setAccTitle=ue;getAccDescription=pe;setAccDescription=ye;setDiagramTitle=fe;getDiagramTitle=ge},d(z,"StateDB"),Lt(z,"relationType",{AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3}),z),He=d(t=>`
defs #statediagram-barbEnd {
    fill: ${t.transitionColor};
    stroke: ${t.transitionColor};
  }
g.stateGroup text {
  fill: ${t.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${t.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${t.stateLabelColor};
}

g.stateGroup rect {
  fill: ${t.mainBkg};
  stroke: ${t.nodeBorder};
}

g.stateGroup line {
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.transition {
  stroke: ${t.transitionColor};
  stroke-width: 1;
  fill: none;
}

.stateGroup .composit {
  fill: ${t.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${t.noteBorderColor};
  fill: ${t.noteBkgColor};

  text {
    fill: ${t.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${t.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${t.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel {
  background-color: ${t.edgeLabelBackground};
  p {
    background-color: ${t.edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${t.edgeLabelBackground};
    fill: ${t.edgeLabelBackground};
  }
  text-align: center;
}
.edgeLabel .label text {
  fill: ${t.transitionLabelColor||t.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${t.transitionLabelColor||t.tertiaryTextColor};
}

.stateLabel text {
  fill: ${t.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node .fork-join {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node circle.state-end {
  fill: ${t.innerEndBackground};
  stroke: ${t.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${t.compositeBackground||t.background};
  // stroke: ${t.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${t.stateBkg||t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}
.node polygon {
  fill: ${t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};;
  stroke-width: 1px;
}
#statediagram-barbEnd {
  fill: ${t.lineColor};
}

.statediagram-cluster rect {
  fill: ${t.compositeTitleBackground};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}

.cluster-label, .nodeLabel {
  color: ${t.stateLabelColor};
  // line-height: 1;
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${t.stateBorder||t.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${t.compositeBackground||t.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${t.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${t.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${t.noteTextColor};
}

#dependencyStart, #dependencyEnd {
  fill: ${t.lineColor};
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${t.textColor};
}
`,"getStyles"),Ke=He;export{Je as H,We as U,Ve as j,Ke as z};
