import{L as s}from"./index-BcEpMg4B.js";import{s as n,t as r,L as o,a as P,i as Q,f as i,g as a,b as c}from"./_index-R__T1VdO.js";import"./components-C2bXmY7p.js";import"./theme-DlDW8xfi.js";const g=n({String:r.string,Number:r.number,"True False":r.bool,PropertyName:r.propertyName,Null:r.null,", :":r.separator,"[ ]":r.squareBracket,"{ }":r.brace}),p=s.deserialize({version:14,states:"$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#ClOOQO'#Cr'#CrQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CtOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59W,59WO!iQPO,59WOVQPO,59QOqQPO'#CmO!nQPO,59`OOQO1G.k1G.kOVQPO'#CnO!vQPO,59aOOQO1G.r1G.rOOQO1G.l1G.lOOQO,59X,59XOOQO-E6k-E6kOOQO,59Y,59YOOQO-E6l-E6l",stateData:"#O~OeOS~OQSORSOSSOTSOWQO_ROgPO~OVXOgUO~O^[O~PVO[^O~O]_OVhX~OVaO~O]bO^iX~O^dO~O]_OVha~O]bO^ia~O",goto:"!kjPPPPPPkPPkqwPPPPk{!RPPP!XP!e!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",nodeNames:"⚠ JsonText True False Null Number String } { Object Property PropertyName : , ] [ Array",maxTerm:25,nodeProps:[["isolate",-2,6,11,""],["openedBy",7,"{",14,"["],["closedBy",8,"}",15,"]"]],propSources:[g],skippedNodes:[0],repeatNodeCount:2,tokenData:"(|~RaXY!WYZ!W]^!Wpq!Wrs!]|}$u}!O$z!Q!R%T!R![&c![!]&t!}#O&y#P#Q'O#Y#Z'T#b#c'r#h#i(Z#o#p(r#q#r(w~!]Oe~~!`Wpq!]qr!]rs!xs#O!]#O#P!}#P;'S!];'S;=`$o<%lO!]~!}Og~~#QXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#m~#pR!Q![#y!c!i#y#T#Z#y~#|R!Q![$V!c!i$V#T#Z$V~$YR!Q![$c!c!i$c#T#Z$c~$fR!Q![!]!c!i!]#T#Z!]~$rP;=`<%l!]~$zO]~~$}Q!Q!R%T!R![&c~%YRT~!O!P%c!g!h%w#X#Y%w~%fP!Q![%i~%nRT~!Q![%i!g!h%w#X#Y%w~%zR{|&T}!O&T!Q![&Z~&WP!Q![&Z~&`PT~!Q![&Z~&hST~!O!P%c!Q![&c!g!h%w#X#Y%w~&yO[~~'OO_~~'TO^~~'WP#T#U'Z~'^P#`#a'a~'dP#g#h'g~'jP#X#Y'm~'rOR~~'uP#i#j'x~'{P#`#a(O~(RP#`#a(U~(ZOS~~(^P#f#g(a~(dP#i#j(g~(jP#X#Y(m~(rOQ~~(wOW~~(|OV~",tokenizers:[0],topRules:{JsonText:[0,1]},tokenPrec:0}),f=()=>t=>{try{JSON.parse(t.state.doc.toString())}catch(O){if(!(O instanceof SyntaxError))throw O;const e=l(O,t.state.doc);return[{from:e,message:O.message,severity:"error",to:e}]}return[]};function l(t,O){let e;return(e=t.message.match(/at position (\d+)/))?Math.min(+e[1],O.length):(e=t.message.match(/at line (\d+) column (\d+)/))?Math.min(O.line(+e[1]).from+ +e[2]-1,O.length):0}const m=o.define({name:"json",parser:p.configure({props:[Q.add({Object:a({except:/^\s*\}/}),Array:a({except:/^\s*\]/})}),i.add({"Object Array":c})]}),languageData:{closeBrackets:{brackets:["[","{",'"']},indentOnInput:/^\s*[\}\]]$/}});function h(){return new P(m)}export{h as json,m as jsonLanguage,f as jsonParseLinter};
