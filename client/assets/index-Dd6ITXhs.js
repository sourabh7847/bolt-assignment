import{L as w,E as m,a as v}from"./index-BcEpMg4B.js";import{s as Z,t as o,L as R,a as z,n as W,i as x,f as T,g as U,b as E,K as Y,I as _}from"./_index-R__T1VdO.js";import"./components-C2bXmY7p.js";import"./theme-DlDW8xfi.js";const G=101,S=1,C=102,q=103,h=2,$=[9,10,11,12,13,32,133,160,5760,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8232,8233,8239,8287,12288],N=58,V=40,P=95,D=91,p=45,I=46,F=35,K=37,B=38,L=92,j=10;function d(e){return e>=65&&e<=90||e>=97&&e<=122||e>=161}function X(e){return e>=48&&e<=57}const A=new m((e,t)=>{for(let l=!1,a=0,O=0;;O++){let{next:r}=e;if(d(r)||r==p||r==P||l&&X(r))!l&&(r!=p||O>0)&&(l=!0),a===O&&r==p&&a++,e.advance();else if(r==L&&e.peek(1)!=j)e.advance(),e.next>-1&&e.advance(),l=!0;else{l&&e.acceptToken(r==V?C:a==2&&t.canShift(h)?h:q);break}}}),J=new m(e=>{if($.includes(e.peek(-1))){let{next:t}=e;(d(t)||t==P||t==F||t==I||t==D||t==N&&d(e.peek(1))||t==p||t==B)&&e.acceptToken(G)}}),H=new m(e=>{if(!$.includes(e.peek(-1))){let{next:t}=e;if(t==K&&(e.advance(),e.acceptToken(S)),d(t)){do e.advance();while(d(e.next)||X(e.next));e.acceptToken(S)}}}),M=Z({"AtKeyword import charset namespace keyframes media supports":o.definitionKeyword,"from to selector":o.keyword,NamespaceName:o.namespace,KeyframeName:o.labelName,KeyframeRangeName:o.operatorKeyword,TagName:o.tagName,ClassName:o.className,PseudoClassName:o.constant(o.className),IdName:o.labelName,"FeatureName PropertyName":o.propertyName,AttributeName:o.attributeName,NumberLiteral:o.number,KeywordQuery:o.keyword,UnaryQueryOp:o.operatorKeyword,"CallTag ValueName":o.atom,VariableName:o.variableName,Callee:o.operatorKeyword,Unit:o.unit,"UniversalSelector NestingSelector":o.definitionOperator,MatchOp:o.compareOperator,"ChildOp SiblingOp, LogicOp":o.logicOperator,BinOp:o.arithmeticOperator,Important:o.modifier,Comment:o.blockComment,ColorLiteral:o.color,"ParenthesizedContent StringLiteral":o.string,":":o.punctuation,"PseudoOp #":o.derefOperator,"; ,":o.separator,"( )":o.paren,"[ ]":o.squareBracket,"{ }":o.brace}),ee={__proto__:null,lang:34,"nth-child":34,"nth-last-child":34,"nth-of-type":34,"nth-last-of-type":34,dir:34,"host-context":34,url:62,"url-prefix":62,domain:62,regexp:62,selector:140},Oe={__proto__:null,"@import":120,"@media":144,"@charset":148,"@namespace":152,"@keyframes":158,"@supports":170},ae={__proto__:null,not:134,only:134},te=w.deserialize({version:14,states:":|QYQ[OOO#_Q[OOP#fOWOOOOQP'#Cd'#CdOOQP'#Cc'#CcO#kQ[O'#CfO$[QXO'#CaO$fQ[O'#CiO$qQ[O'#DUO$vQ[O'#DXOOQP'#Eo'#EoO${QdO'#DhO%jQ[O'#DuO${QdO'#DwO%{Q[O'#DyO&WQ[O'#D|O&`Q[O'#ESO&nQ[O'#EUOOQS'#En'#EnOOQS'#EX'#EXQYQ[OOO&uQXO'#CdO'jQWO'#DdO'oQWO'#EtO'zQ[O'#EtQOQWOOP(UO#tO'#C_POOO)C@^)C@^OOQP'#Ch'#ChOOQP,59Q,59QO#kQ[O,59QO(aQ[O,59TO$qQ[O,59pO$vQ[O,59sO(lQ[O,59vO(lQ[O,59xO(lQ[O,59yO(lQ[O'#E^O)WQWO,58{O)`Q[O'#DcOOQS,58{,58{OOQP'#Cl'#ClOOQO'#DS'#DSOOQP,59T,59TO)gQWO,59TO)lQWO,59TOOQP'#DW'#DWOOQP,59p,59pOOQO'#DY'#DYO)qQ`O,59sOOQS'#Cq'#CqO${QdO'#CrO)yQvO'#CtO+ZQtO,5:SOOQO'#Cy'#CyO)lQWO'#CxO+oQWO'#CzO+tQ[O'#DPOOQS'#Eq'#EqOOQO'#Dk'#DkO+|Q[O'#DrO,[QWO'#EuO&`Q[O'#DpO,jQWO'#DsOOQO'#Ev'#EvO)ZQWO,5:aO,oQpO,5:cOOQS'#D{'#D{O,wQWO,5:eO,|Q[O,5:eOOQO'#EO'#EOO-UQWO,5:hO-ZQWO,5:nO-cQWO,5:pOOQS-E8V-E8VO-kQdO,5:OO-{Q[O'#E`O.YQWO,5;`O.YQWO,5;`POOO'#EW'#EWP.eO#tO,58yPOOO,58y,58yOOQP1G.l1G.lOOQP1G.o1G.oO)gQWO1G.oO)lQWO1G.oOOQP1G/[1G/[O.pQ`O1G/_O/ZQXO1G/bO/qQXO1G/dO0XQXO1G/eO0oQXO,5:xOOQO-E8[-E8[OOQS1G.g1G.gO0yQWO,59}O1OQ[O'#DTO1VQdO'#CpOOQP1G/_1G/_O${QdO1G/_O1^QpO,59^OOQS,59`,59`O${QdO,59bO1fQWO1G/nOOQS,59d,59dO1kQ!bO,59fOOQS'#DQ'#DQOOQS'#EZ'#EZO1vQ[O,59kOOQS,59k,59kO2OQWO'#DkO2ZQWO,5:WO2`QWO,5:^O&`Q[O,5:YO2hQ[O'#EaO3PQWO,5;aO3[QWO,5:[O(lQ[O,5:_OOQS1G/{1G/{OOQS1G/}1G/}OOQS1G0P1G0PO3mQWO1G0PO3rQdO'#EPOOQS1G0S1G0SOOQS1G0Y1G0YOOQS1G0[1G0[O3}QtO1G/jOOQO1G/j1G/jOOQO,5:z,5:zO4eQ[O,5:zOOQO-E8^-E8^O4rQWO1G0zPOOO-E8U-E8UPOOO1G.e1G.eOOQP7+$Z7+$ZOOQP7+$y7+$yO${QdO7+$yOOQS1G/i1G/iO4}QXO'#EsO5XQWO,59oO5^QtO'#EYO6UQdO'#EpO6`QWO,59[O6eQpO7+$yOOQS1G.x1G.xOOQS1G.|1G.|OOQS7+%Y7+%YOOQS1G/Q1G/QO6mQWO1G/QOOQS-E8X-E8XOOQS1G/V1G/VO${QdO1G/rOOQO1G/x1G/xOOQO1G/t1G/tO6rQWO,5:{OOQO-E8_-E8_O7QQXO1G/yOOQS7+%k7+%kO7XQYO'#CtOOQO'#ER'#ERO7dQ`O'#EQOOQO'#EQ'#EQO7oQWO'#EbO7wQdO,5:kOOQS,5:k,5:kO8SQtO'#E_O${QdO'#E_O9TQdO7+%UOOQO7+%U7+%UOOQO1G0f1G0fO9hQpO<<HeO9pQ[O'#E]O9zQWO,5;_OOQP1G/Z1G/ZOOQS-E8W-E8WO:SQdO'#E[O:^QWO,5;[OOQT1G.v1G.vOOQP<<He<<HeOOQS7+$l7+$lO:fQdO7+%^OOQO7+%e7+%eOOQO,5:l,5:lO3uQdO'#EcO7oQWO,5:|OOQS,5:|,5:|OOQS-E8`-E8`OOQS1G0V1G0VO:mQtO,5:yOOQS-E8]-E8]OOQO<<Hp<<HpOOQPAN>PAN>PO;nQXO,5:wOOQO-E8Z-E8ZO;xQdO,5:vOOQO-E8Y-E8YOOQO<<Hx<<HxOOQO,5:},5:}OOQO-E8a-E8aOOQS1G0h1G0h",stateData:"<[~O#]OS#^QQ~OUYOXYOZTO^VO_VOrXOyWO!]aO!^ZO!j[O!l]O!n^O!q_O!w`O#ZRO~OQfOUYOXYOZTO^VO_VOrXOyWO!]aO!^ZO!j[O!l]O!n^O!q_O!w`O#ZeO~O#W#hP~P!ZO#^jO~O#ZlO~OZnO^oO_oOrqOypO!PrO!StO#XsO~OuuO!UwO~P#pOa}O#YzO#ZyO~O#Z!OO~O#Z!QO~OQ![Oc!TOg![Oi![Oo!YOr!ZO#Y!WO#Z!SO#f!UO~Oc!^O!e!`O!h!aO#Z!]O!U#iP~Oi!fOo!YO#Z!eO~Oi!hO#Z!hO~Oc!^O!e!`O!h!aO#Z!]O~O!Z#iP~P%jOZWX^WX^!XX_WXrWXuWXyWX!PWX!SWX!UWX#XWX~O^!mO~O!Z!nO#W#hX!T#hX~O#W#hX!T#hX~P!ZO#_!qO#`!qO#a!sO~Oa!wO#YzO#ZyO~OUYOXYOZTO^VO_VOrXOyWO#ZRO~OuuO!UwO~O!T#hP~P!ZOc#RO~Oc#SO~Oq#TO}#UO~OP#WOchXkhX!ZhX!ehX!hhX#ZhXbhXQhXghXihXohXrhXuhX!YhX#WhX#YhX#fhXqhX!ThX~Oc!^Ok#XO!e!`O!h!aO#Z!]O!Z#iP~Oc#[O~Oq#`O#Z#]O~Oc!^O!e!`O!h!aO#Z#aO~Ou#eO!c#dO!U#iX!Z#iX~Oc#hO~Ok#XO!Z#jO~O!Z#kO~Oi#lOo!YO~O!U#mO~O!UwO!c#dO~O!UwO!Z#pO~O!Y#rO!Z!Wa#W!Wa!T!Wa~P${O!Z#SX#W#SX!T#SX~P!ZO!Z!nO#W#ha!T#ha~O#_!qO#`!qO#a#xO~Oq#zO}#{O~OZnO^oO_oOrqOypO~Ou!Oi!P!Oi!S!Oi!U!Oi#X!Oib!Oi~P.xOu!Qi!P!Qi!S!Qi!U!Qi#X!Qib!Qi~P.xOu!Ri!P!Ri!S!Ri!U!Ri#X!Rib!Ri~P.xOu#Qa!U#Qa~P#pO!T#|O~Ob#gP~P(lOb#dP~P${Ob$TOk#XO~O!Z$VO~Ob$WOi$XOp$XO~Oq$ZO#Z#]O~O^!aXb!_X!c!_X~O^$[O~Ob$]O!c#dO~Oc!^O!e!`O!h!aO#Z!]Ou#TX!U#TX!Z#TX~Ou#eO!U#ia!Z#ia~O!c#dOu!da!U!da!Z!dab!da~O!Z$bO~O!T$iO#Z$dO#f$cO~Ok#XOu$kO!Y$mO!Z!Wi#W!Wi!T!Wi~P${O!Z#Sa#W#Sa!T#Sa~P!ZO!Z!nO#W#hi!T#hi~Ou$pOb#gX~P#pOb$rO~Ok#XOQ!|Xb!|Xc!|Xg!|Xi!|Xo!|Xr!|Xu!|X#Y!|X#Z!|X#f!|X~Ou$tOb#dX~P${Ob$vO~Ok#XOq$wO~Ob$xO~O!c#dOu#Ta!U#Ta!Z#Ta~Ob$zO~P#pOP#WOuhX!UhX~O#f$cOu!tX!U!tX~Ou$|O!UwO~O!T%QO#Z$dO#f$cO~Ok#XOQ#RXc#RXg#RXi#RXo#RXr#RXu#RX!Y#RX!Z#RX#W#RX#Y#RX#Z#RX#f#RX!T#RX~Ou$kO!Y%TO!Z!Wq#W!Wq!T!Wq~P${Ok#XOq%UO~Ob#PXu#PX~P(lOu$pOb#ga~Ob#OXu#OX~P${Ou$tOb#da~Ob%ZO~P${Ok#XOQ#Rac#Rag#Rai#Rao#Rar#Rau#Ra!Y#Ra!Z#Ra#W#Ra#Y#Ra#Z#Ra#f#Ra!T#Ra~Ob#Pau#Pa~P#pOb#Oau#Oa~P${O#]p#^#fk!S#f~",goto:"-o#kPPP#lP#oP#x$YP#xP$j#xPP$pPPP$v%P%PP%cP%PP%P%}&aPPPP%P&yP&}'T#xP'Z#x'aP#xP#x#xPPP'g'|(ZPP#oPP(b(b(l(bP(bP(b(bP#oP#oP#oP(o#oP(r(u(x)P#oP#oP)U)[)k)y*P*V*]*c*i*s*y+PPPPPPPPPPP+V+`,O,RP,w,z-Q-ZRkQ_bOPdhw!n#tmYOPdhrstuw!n#R#h#t$pmSOPdhrstuw!n#R#h#t$pQmTR!tnQ{VR!uoQ!u}Q#Z!XR#y!wq![Z]!T!m#S#U#X#q#{$Q$[$k$l$t$y%Xp![Z]!T!m#S#U#X#q#{$Q$[$k$l$t$y%XU$f#m$h$|R${$eq!XZ]!T!m#S#U#X#q#{$Q$[$k$l$t$y%Xp![Z]!T!m#S#U#X#q#{$Q$[$k$l$t$y%XQ!f^R#l!gT#^!Z#_Q|VR!voQ!u|R#y!vQ!PWR!xpQ!RXR!yqQxUQ#PvQ#i!cQ#o!jQ#p!kQ%O$gR%^$}SgPwQ!phQ#s!nR$n#tZfPhw!n#ta!b[`a!V!^!`#d#eR#b!^R!g^R!i_R#n!iS$g#m$hR%[$|V$e#m$h$|Q!rjR#w!rQdOShPwU!ldh#tR#t!nQ$Q#SU$s$Q$y%XQ$y$[R%X$tQ#_!ZR$Y#_Q$u$QR%Y$uQ$q#}R%W$qQvUR#OvQ$l#qR%S$lQ!ogS#u!o#vR#v!pQ#f!_R$`#fQ$h#mR%P$hQ$}$gR%]$}_cOPdhw!n#t^UOPdhw!n#tQ!zrQ!{sQ!|tQ!}uQ#}#RQ$a#hR%V$pR$R#SQ!VZQ!d]Q#V!TQ#q!m[$P#S$Q$[$t$y%XQ$S#UQ$U#XS$j#q$lQ$o#{R%R$kR$O#RQiPR#QwQ!c[Q!kaR#Y!VU!_[a!VQ!j`Q#c!^Q#g!`Q$^#dR$_#e",nodeNames:"⚠ Unit VariableName Comment StyleSheet RuleSet UniversalSelector TagSelector TagName NestingSelector ClassSelector . ClassName PseudoClassSelector : :: PseudoClassName PseudoClassName ) ( ArgList ValueName ParenthesizedValue ColorLiteral NumberLiteral StringLiteral BinaryExpression BinOp CallExpression Callee CallLiteral CallTag ParenthesizedContent ] [ LineNames LineName , PseudoClassName ArgList IdSelector # IdName AttributeSelector AttributeName MatchOp ChildSelector ChildOp DescendantSelector SiblingSelector SiblingOp } { Block Declaration PropertyName Important ; ImportStatement AtKeyword import KeywordQuery FeatureQuery FeatureName BinaryQuery LogicOp UnaryQuery UnaryQueryOp ParenthesizedQuery SelectorQuery selector MediaStatement media CharsetStatement charset NamespaceStatement namespace NamespaceName KeyframesStatement keyframes KeyframeName KeyframeList KeyframeSelector KeyframeRangeName SupportsStatement supports AtRule Styles",maxTerm:118,nodeProps:[["isolate",-2,3,25,""],["openedBy",18,"(",33,"[",51,"{"],["closedBy",19,")",34,"]",52,"}"]],propSources:[M],skippedNodes:[0,3,88],repeatNodeCount:12,tokenData:"J^~R!^OX$}X^%u^p$}pq%uqr)Xrs.Rst/utu6duv$}vw7^wx7oxy9^yz9oz{9t{|:_|}?Q}!O?c!O!P@Q!P!Q@i!Q![Ab![!]B]!]!^CX!^!_$}!_!`Cj!`!aC{!a!b$}!b!cDw!c!}$}!}#OFa#O#P$}#P#QFr#Q#R6d#R#T$}#T#UGT#U#c$}#c#dHf#d#o$}#o#pH{#p#q6d#q#rI^#r#sIo#s#y$}#y#z%u#z$f$}$f$g%u$g#BY$}#BY#BZ%u#BZ$IS$}$IS$I_%u$I_$I|$}$I|$JO%u$JO$JT$}$JT$JU%u$JU$KV$}$KV$KW%u$KW&FU$}&FU&FV%u&FV;'S$};'S;=`JW<%lO$}`%QSOy%^z;'S%^;'S;=`%o<%lO%^`%cSp`Oy%^z;'S%^;'S;=`%o<%lO%^`%rP;=`<%l%^~%zh#]~OX%^X^'f^p%^pq'fqy%^z#y%^#y#z'f#z$f%^$f$g'f$g#BY%^#BY#BZ'f#BZ$IS%^$IS$I_'f$I_$I|%^$I|$JO'f$JO$JT%^$JT$JU'f$JU$KV%^$KV$KW'f$KW&FU%^&FU&FV'f&FV;'S%^;'S;=`%o<%lO%^~'mh#]~p`OX%^X^'f^p%^pq'fqy%^z#y%^#y#z'f#z$f%^$f$g'f$g#BY%^#BY#BZ'f#BZ$IS%^$IS$I_'f$I_$I|%^$I|$JO'f$JO$JT%^$JT$JU'f$JU$KV%^$KV$KW'f$KW&FU%^&FU&FV'f&FV;'S%^;'S;=`%o<%lO%^l)[UOy%^z#]%^#]#^)n#^;'S%^;'S;=`%o<%lO%^l)sUp`Oy%^z#a%^#a#b*V#b;'S%^;'S;=`%o<%lO%^l*[Up`Oy%^z#d%^#d#e*n#e;'S%^;'S;=`%o<%lO%^l*sUp`Oy%^z#c%^#c#d+V#d;'S%^;'S;=`%o<%lO%^l+[Up`Oy%^z#f%^#f#g+n#g;'S%^;'S;=`%o<%lO%^l+sUp`Oy%^z#h%^#h#i,V#i;'S%^;'S;=`%o<%lO%^l,[Up`Oy%^z#T%^#T#U,n#U;'S%^;'S;=`%o<%lO%^l,sUp`Oy%^z#b%^#b#c-V#c;'S%^;'S;=`%o<%lO%^l-[Up`Oy%^z#h%^#h#i-n#i;'S%^;'S;=`%o<%lO%^l-uS!Y[p`Oy%^z;'S%^;'S;=`%o<%lO%^~.UWOY.RZr.Rrs.ns#O.R#O#P.s#P;'S.R;'S;=`/o<%lO.R~.sOi~~.vRO;'S.R;'S;=`/P;=`O.R~/SXOY.RZr.Rrs.ns#O.R#O#P.s#P;'S.R;'S;=`/o;=`<%l.R<%lO.R~/rP;=`<%l.Rn/zYyQOy%^z!Q%^!Q![0j![!c%^!c!i0j!i#T%^#T#Z0j#Z;'S%^;'S;=`%o<%lO%^l0oYp`Oy%^z!Q%^!Q![1_![!c%^!c!i1_!i#T%^#T#Z1_#Z;'S%^;'S;=`%o<%lO%^l1dYp`Oy%^z!Q%^!Q![2S![!c%^!c!i2S!i#T%^#T#Z2S#Z;'S%^;'S;=`%o<%lO%^l2ZYg[p`Oy%^z!Q%^!Q![2y![!c%^!c!i2y!i#T%^#T#Z2y#Z;'S%^;'S;=`%o<%lO%^l3QYg[p`Oy%^z!Q%^!Q![3p![!c%^!c!i3p!i#T%^#T#Z3p#Z;'S%^;'S;=`%o<%lO%^l3uYp`Oy%^z!Q%^!Q![4e![!c%^!c!i4e!i#T%^#T#Z4e#Z;'S%^;'S;=`%o<%lO%^l4lYg[p`Oy%^z!Q%^!Q![5[![!c%^!c!i5[!i#T%^#T#Z5[#Z;'S%^;'S;=`%o<%lO%^l5aYp`Oy%^z!Q%^!Q![6P![!c%^!c!i6P!i#T%^#T#Z6P#Z;'S%^;'S;=`%o<%lO%^l6WSg[p`Oy%^z;'S%^;'S;=`%o<%lO%^d6gUOy%^z!_%^!_!`6y!`;'S%^;'S;=`%o<%lO%^d7QS}Sp`Oy%^z;'S%^;'S;=`%o<%lO%^b7cSXQOy%^z;'S%^;'S;=`%o<%lO%^~7rWOY7oZw7owx.nx#O7o#O#P8[#P;'S7o;'S;=`9W<%lO7o~8_RO;'S7o;'S;=`8h;=`O7o~8kXOY7oZw7owx.nx#O7o#O#P8[#P;'S7o;'S;=`9W;=`<%l7o<%lO7o~9ZP;=`<%l7on9cSc^Oy%^z;'S%^;'S;=`%o<%lO%^~9tOb~n9{UUQkWOy%^z!_%^!_!`6y!`;'S%^;'S;=`%o<%lO%^n:fWkW!SQOy%^z!O%^!O!P;O!P!Q%^!Q![>T![;'S%^;'S;=`%o<%lO%^l;TUp`Oy%^z!Q%^!Q![;g![;'S%^;'S;=`%o<%lO%^l;nYp`#f[Oy%^z!Q%^!Q![;g![!g%^!g!h<^!h#X%^#X#Y<^#Y;'S%^;'S;=`%o<%lO%^l<cYp`Oy%^z{%^{|=R|}%^}!O=R!O!Q%^!Q![=j![;'S%^;'S;=`%o<%lO%^l=WUp`Oy%^z!Q%^!Q![=j![;'S%^;'S;=`%o<%lO%^l=qUp`#f[Oy%^z!Q%^!Q![=j![;'S%^;'S;=`%o<%lO%^l>[[p`#f[Oy%^z!O%^!O!P;g!P!Q%^!Q![>T![!g%^!g!h<^!h#X%^#X#Y<^#Y;'S%^;'S;=`%o<%lO%^n?VSu^Oy%^z;'S%^;'S;=`%o<%lO%^l?hWkWOy%^z!O%^!O!P;O!P!Q%^!Q![>T![;'S%^;'S;=`%o<%lO%^n@VUZQOy%^z!Q%^!Q![;g![;'S%^;'S;=`%o<%lO%^~@nTkWOy%^z{@}{;'S%^;'S;=`%o<%lO%^~AUSp`#^~Oy%^z;'S%^;'S;=`%o<%lO%^lAg[#f[Oy%^z!O%^!O!P;g!P!Q%^!Q![>T![!g%^!g!h<^!h#X%^#X#Y<^#Y;'S%^;'S;=`%o<%lO%^bBbU^QOy%^z![%^![!]Bt!];'S%^;'S;=`%o<%lO%^bB{S_Qp`Oy%^z;'S%^;'S;=`%o<%lO%^nC^S!Z^Oy%^z;'S%^;'S;=`%o<%lO%^dCoS}SOy%^z;'S%^;'S;=`%o<%lO%^bDQU!PQOy%^z!`%^!`!aDd!a;'S%^;'S;=`%o<%lO%^bDkS!PQp`Oy%^z;'S%^;'S;=`%o<%lO%^bDzWOy%^z!c%^!c!}Ed!}#T%^#T#oEd#o;'S%^;'S;=`%o<%lO%^bEk[!]Qp`Oy%^z}%^}!OEd!O!Q%^!Q![Ed![!c%^!c!}Ed!}#T%^#T#oEd#o;'S%^;'S;=`%o<%lO%^nFfSr^Oy%^z;'S%^;'S;=`%o<%lO%^nFwSq^Oy%^z;'S%^;'S;=`%o<%lO%^bGWUOy%^z#b%^#b#cGj#c;'S%^;'S;=`%o<%lO%^bGoUp`Oy%^z#W%^#W#XHR#X;'S%^;'S;=`%o<%lO%^bHYS!cQp`Oy%^z;'S%^;'S;=`%o<%lO%^bHiUOy%^z#f%^#f#gHR#g;'S%^;'S;=`%o<%lO%^fIQS!UUOy%^z;'S%^;'S;=`%o<%lO%^nIcS!T^Oy%^z;'S%^;'S;=`%o<%lO%^fItU!SQOy%^z!_%^!_!`6y!`;'S%^;'S;=`%o<%lO%^`JZP;=`<%l$}",tokenizers:[J,H,A,1,2,3,4,new v("m~RRYZ[z{a~~g~aO#`~~dP!P!Qg~lO#a~~",28,107)],topRules:{StyleSheet:[0,4],Styles:[1,87]},specialized:[{term:102,get:e=>ee[e]||-1},{term:59,get:e=>Oe[e]||-1},{term:103,get:e=>ae[e]||-1}],tokenPrec:1246});let Q=null;function u(){if(!Q&&typeof document=="object"&&document.body){let{style:e}=document.body,t=[],l=new Set;for(let a in e)a!="cssText"&&a!="cssFloat"&&typeof e[a]=="string"&&(/[A-Z]/.test(a)&&(a=a.replace(/[A-Z]/g,O=>"-"+O.toLowerCase())),l.has(a)||(t.push(a),l.add(a)));Q=t.sort().map(a=>({type:"property",label:a,apply:a+": "}))}return Q||[]}const f=["active","after","any-link","autofill","backdrop","before","checked","cue","default","defined","disabled","empty","enabled","file-selector-button","first","first-child","first-letter","first-line","first-of-type","focus","focus-visible","focus-within","fullscreen","has","host","host-context","hover","in-range","indeterminate","invalid","is","lang","last-child","last-of-type","left","link","marker","modal","not","nth-child","nth-last-child","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","part","placeholder","placeholder-shown","read-only","read-write","required","right","root","scope","selection","slotted","target","target-text","valid","visited","where"].map(e=>({type:"class",label:e})),y=["above","absolute","activeborder","additive","activecaption","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","antialiased","appworkspace","asterisks","attr","auto","auto-flow","avoid","avoid-column","avoid-page","avoid-region","axis-pan","background","backwards","baseline","below","bidi-override","blink","block","block-axis","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","bullets","button","button-bevel","buttonface","buttonhighlight","buttonshadow","buttontext","calc","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","clear","clip","close-quote","col-resize","collapse","color","color-burn","color-dodge","column","column-reverse","compact","condensed","contain","content","contents","content-box","context-menu","continuous","copy","counter","counters","cover","crop","cross","crosshair","currentcolor","cursive","cyclic","darken","dashed","decimal","decimal-leading-zero","default","default-button","dense","destination-atop","destination-in","destination-out","destination-over","difference","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic-abegede-gez","ethiopic-halehame-aa-er","ethiopic-halehame-gez","ew-resize","exclusion","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fill-box","fixed","flat","flex","flex-end","flex-start","footnotes","forwards","from","geometricPrecision","graytext","grid","groove","hand","hard-light","help","hidden","hide","higher","highlight","highlighttext","horizontal","hsl","hsla","hue","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-grid","inline-table","inset","inside","intrinsic","invert","italic","justify","keep-all","landscape","large","larger","left","level","lighter","lighten","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-hexadecimal","lower-latin","lower-norwegian","lowercase","ltr","luminosity","manipulation","match","matrix","matrix3d","medium","menu","menutext","message-box","middle","min-intrinsic","mix","monospace","move","multiple","multiple_mask_images","multiply","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","opacity","open-quote","optimizeLegibility","optimizeSpeed","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","perspective","pinch-zoom","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row","row-resize","row-reverse","rtl","run-in","running","s-resize","sans-serif","saturation","scale","scale3d","scaleX","scaleY","scaleZ","screen","scroll","scrollbar","scroll-position","se-resize","self-start","self-end","semi-condensed","semi-expanded","separate","serif","show","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","soft-light","solid","source-atop","source-in","source-out","source-over","space","space-around","space-between","space-evenly","spell-out","square","start","static","status-bar","stretch","stroke","stroke-box","sub","subpixel-antialiased","svg_masks","super","sw-resize","symbolic","symbols","system-ui","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","text","text-bottom","text-top","textarea","textfield","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","to","top","transform","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","unidirectional-pan","unset","up","upper-latin","uppercase","url","var","vertical","vertical-text","view-box","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","wrap","wrap-reverse","x-large","x-small","xor","xx-large","xx-small"].map(e=>({type:"keyword",label:e})).concat(["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"].map(e=>({type:"constant",label:e}))),oe=["a","abbr","address","article","aside","b","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","dd","del","details","dfn","dialog","div","dl","dt","em","figcaption","figure","footer","form","header","hgroup","h1","h2","h3","h4","h5","h6","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","meter","nav","ol","output","p","pre","ruby","section","select","small","source","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","tr","u","ul"].map(e=>({type:"type",label:e})),re=["@charset","@color-profile","@container","@counter-style","@font-face","@font-feature-values","@font-palette-values","@import","@keyframes","@layer","@media","@namespace","@page","@position-try","@property","@scope","@starting-style","@supports","@view-transition"].map(e=>({type:"keyword",label:e})),s=/^(\w[\w-]*|-\w[\w-]*|)$/,le=/^-(-[\w-]*)?$/;function ie(e,t){var l;if((e.name=="("||e.type.isError)&&(e=e.parent||e),e.name!="ArgList")return!1;let a=(l=e.parent)===null||l===void 0?void 0:l.firstChild;return a?.name!="Callee"?!1:t.sliceString(a.from,a.to)=="var"}const g=new Y,ne=["Declaration"];function se(e){for(let t=e;;){if(t.type.isTop)return t;if(!(t=t.parent))return e}}function k(e,t,l){if(t.to-t.from>4096){let a=g.get(t);if(a)return a;let O=[],r=new Set,i=t.cursor(_.IncludeAnonymous);if(i.firstChild())do for(let n of k(e,i.node,l))r.has(n.label)||(r.add(n.label),O.push(n));while(i.nextSibling());return g.set(t,O),O}else{let a=[],O=new Set;return t.cursor().iterate(r=>{var i;if(l(r)&&r.matchContext(ne)&&((i=r.node.nextSibling)===null||i===void 0?void 0:i.name)==":"){let n=e.sliceString(r.from,r.to);O.has(n)||(O.add(n),a.push({label:n,type:"variable"}))}}),a}}const de=e=>t=>{let{state:l,pos:a}=t,O=W(l).resolveInner(a,-1),r=O.type.isError&&O.from==O.to-1&&l.doc.sliceString(O.from,O.to)=="-";if(O.name=="PropertyName"||(r||O.name=="TagName")&&/^(Block|Styles)$/.test(O.resolve(O.to).name))return{from:O.from,options:u(),validFor:s};if(O.name=="ValueName")return{from:O.from,options:y,validFor:s};if(O.name=="PseudoClassName")return{from:O.from,options:f,validFor:s};if(e(O)||(t.explicit||r)&&ie(O,l.doc))return{from:e(O)||r?O.from:a,options:k(l.doc,se(O),e),validFor:le};if(O.name=="TagName"){for(let{parent:c}=O;c;c=c.parent)if(c.name=="Block")return{from:O.from,options:u(),validFor:s};return{from:O.from,options:oe,validFor:s}}if(O.name=="AtKeyword")return{from:O.from,options:re,validFor:s};if(!t.explicit)return null;let i=O.resolve(a),n=i.childBefore(a);return n&&n.name==":"&&i.name=="PseudoClassSelector"?{from:a,options:f,validFor:s}:n&&n.name==":"&&i.name=="Declaration"||i.name=="ArgList"?{from:a,options:y,validFor:s}:i.name=="Block"||i.name=="Styles"?{from:a,options:u(),validFor:s}:null},ce=de(e=>e.name=="VariableName"),b=R.define({name:"css",parser:te.configure({props:[x.add({Declaration:U()}),T.add({"Block KeyframeList":E})]}),languageData:{commentTokens:{block:{open:"/*",close:"*/"}},indentOnInput:/^\s*\}$/,wordChars:"-"}});function Se(){return new z(b,b.data.of({autocomplete:ce}))}export{Se as css,ce as cssCompletionSource,b as cssLanguage,de as defineCSSCompletionSource};
