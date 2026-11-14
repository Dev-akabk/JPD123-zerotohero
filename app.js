/* JPD123 – logic ứng dụng. Cần data.js nạp trước (D, K, T, EN, GR, VI, GN, SPK, ROM). */
const ROWS=['あいうえお','かきくけこ','さしすせそ','たちつてと','なにぬねの','はひふへほ','まみむめも','やゆよ','らりるれろ','わをん'];
const rowOf=w=>{let c=w.k[0];if(c>='ァ'&&c<='ヶ')c=String.fromCharCode(c.charCodeAt(0)-96);c=c.normalize('NFD')[0];return ROWS.findIndex(r=>r.includes(c))};
D.forEach(w=>{w.r=rowOf(w);w.kj=K[w.k.replace(/\s*[（(].*[）)]/,'')]||''});
const KEY='jpd123_v1';let P={},pref={dir:0,shuf:1,gs:{},lang:'vi'};
try{const s=JSON.parse(localStorage.getItem(KEY)||'{}');P=s.p||{};pref=Object.assign(pref,s.pref||{})}catch(e){}
const u=(v,e)=>pref.lang=='en'?e:v;
const FTS=[['Mặc định hệ thống','System Default','system-ui,-apple-system,"Segoe UI",Roboto,"Noto Sans JP",sans-serif'],['Gothic (Dễ đọc)','Gothic (JP)','"Noto Sans JP","Hiragino Sans","Yu Gothic",Meiryo,sans-serif'],['Mincho (Truyền thống)','Mincho (JP)','"Noto Serif JP","Hiragino Mincho ProN","Yu Mincho","MS Mincho",serif']];
if(pref.ft==null)pref.ft=0;if(pref.fsz==null)pref.fsz=1;
const applyFt=()=>{try{if(!FTS[pref.ft])pref.ft=0;document.documentElement.style.setProperty('--ff',FTS[pref.ft][2]);document.documentElement.style.setProperty('--fs',(pref.fsz==0?0.85:pref.fsz==2?1.25:1).toString());document.documentElement.style.setProperty('--lhm','1');save()}catch(e){}};
const updateLg=()=>document.querySelectorAll('.lg-wrap').forEach(el=>el.outerHTML=lg());
const setFt=i=>{pref.ft=i;applyFt();updateLg()};
const setFsz=i=>{pref.fsz=i;applyFt();updateLg()};
applyFt();
const ll=l=>l.replace('Bài',u('Bài','Lesson'));
const mn=w=>pref.lang=='en'?w.e:w.m;
const kd=w=>`<div>${w.k}${w.kj?`<div style="font-size:18px;font-weight:400;color:var(--mu);margin-top:8px">${w.kj}</div>`:''}</div>`;
const lg=()=>`<span class="row lg-wrap" style="gap:4px">${['vi','en'].map(k=>`<button class="${pref.lang==k?'on':''}" style="padding:6px 10px" onclick="setLang('${k}')">${k.toUpperCase()}</button>`).join('')}<details class="ft-dd"><summary title="Font">Aa</summary><div class="ft-menu"><div class="sec">${u('Phông chữ','Font')}</div>${FTS.map((f,i)=>`<button class="${pref.ft==i?'on':''}" style="font-family:${f[2]}" onclick="setFt(${i})">${u(f[0],f[1])}${pref.ft==i?' ✓':''}</button>`).join('')}<div class="sec">${u('Cỡ chữ','Size')}</div>${[0,1,2].map(i=>`<button class="${pref.fsz==i?'on':''}" onclick="setFsz(${i})">${u(['Nhỏ','Vừa','Lớn'][i],['Small','Medium','Large'][i])}${pref.fsz==i?' ✓':''}</button>`).join('')}</div></details></span>`;
const setLang=k=>{pref.lang=k;save();SPS?sprender():S?study():cur?setView():ZQ?zq():tab=='g'?gram():home()};
const ALL=()=>u('Tất cả từ vựng','All vocabulary');
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify({p:P,pref}))}catch(e){}};
const st=id=>P[id]||0;
let tab='t',cur=null,S=null;
const $=s=>document.getElementById('app');
const sets={t:()=>Object.entries(T).map(([k,n])=>({n:u(n[0],n[1]),ws:D.filter(w=>w.t===k)})),
 a:()=>ROWS.map((r,i)=>({n:u('Hàng ','Row ')+r[0],ws:D.filter(w=>w.r===i)}))};
const shuf=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const cnt=ws=>ws.filter(w=>st(w.id)==2).length;
const bar=(ws)=>`<div class="bar"><i style="width:${ws.length?cnt(ws)/ws.length*100:0}%"></i></div>`;
let nvo=0;
const TN=()=>[['t','📚',u('Chủ đề','Topics')],['a','あ',u('Bảng chữ cái','Alphabet')],['g','📝',u('Ngữ pháp','Grammar')],['z','🏆',u('Quiz tổng','Master quiz')],['s','🎤','Speaking']];
const pick=k=>{tab=k;nvo=0;home()};
const tabs=()=>{const c=TN().find(x=>x[0]==tab);return `<div class="row" style="justify-content:flex-end;margin-top:8px">${lg()}</div><div class="dd"><button class="ddb" onclick="nvo^=1;home()"><span>${c[1]} ${c[2]}</span><span>${nvo?'▴':'▾'}</span></button>${nvo?`<div class="ddl">${TN().map(x=>`<button class="${x[0]==tab?'on':''}" onclick="pick('${x[0]}')">${x[1]} ${x[2]}${x[0]==tab?' ✓':''}</button>`).join('')}</div>`:''}</div>`};
function home(){S=null;cur=null;ZQ=null;spStop();if(tab=='s')return shome();if(tab=='g')return gram();if(tab=='z')return zhome();const list=sets[tab]();const all={n:ALL(),ws:D};
 $().innerHTML=`<h1>JPD123 – ${u('Từ vựng','Vocabulary')}</h1><div class="mu">${u(`${D.length} từ · đã thuộc ${cnt(D)}`,`${D.length} words · known ${cnt(D)}`)}</div>${bar(D)}
 ${tabs()}
 <div class="grid"><button class="chip" onclick="openSet(-1)"><b>${all.n}</b><span class="mu">${cnt(D)}/${D.length}</span>${bar(D)}</button>
 ${list.map((s,i)=>`<button class="chip" onclick="openSet(${i})"><b>${s.n}</b><span class="mu">${cnt(s.ws)}/${s.ws.length}</span>${bar(s.ws)}</button>`).join('')}</div>
 <p class="mu" style="margin-top:18px">${u('Tiến độ tự lưu trong trình duyệt.','Progress is saved in your browser.')}</p>`}
function openSet(i){cur=i<0?{n:ALL(),ws:D}:sets[tab]()[i];cur.i=i;setView()}
function setView(){S=null;const i0=cur.i;cur=i0<0?{n:ALL(),ws:D}:sets[tab]()[i0];cur.i=i0;const ws=cur.ws,n=cnt(ws),lr=ws.filter(w=>st(w.id)==1).length;
 $().innerHTML=`<div class="top"><button onclick="home()">${u('← Quay lại','← Back')}</button><button onclick="resetSet()">${u('↺ Học lại từ đầu','↺ Reset')}</button>${lg()}</div>
 <h2 style="margin-top:14px">${cur.n}</h2><div class="mu">${u(`${ws.length} từ · thuộc ${n} · đang học ${lr} · mới ${ws.length-n-lr}`,`${ws.length} words · known ${n} · learning ${lr} · new ${ws.length-n-lr}`)}</div>${bar(ws)}
 <div class="row" style="margin:14px 0"><button class="${pref.shuf?'on':''}" onclick="pref.shuf^=1;save();setView()">🔀 ${u('Trộn','Shuffle')}</button>
 <button class="${pref.dir?'on':''}" onclick="pref.dir^=1;save();setView()">${pref.dir?u('Việt → Nhật','Meaning → JP'):u('Nhật → Việt','JP → Meaning')}</button></div>
 <div class="row"><button class="p" onclick="start('flash')">${u('Lật thẻ','Flip cards')}</button><button class="p" onclick="start('cram')">⚡ ${u('Nhồi nhét','Cram')}</button></div>
 <div class="list">${ws.map(w=>`<div class="w"><span class="dot d${st(w.id)}" onclick="cyc(${w.id})" title="Đổi trạng thái"></span><span>${w.k}${w.kj?` <small class="mu">【${w.kj}】</small>`:''}</span><span class="mu">${mn(w)}</span></div>`).join('')}</div>`}
function cyc(id){P[id]=(st(id)+1)%3;save();setView()}
function resetSet(){if(!confirm(u('Xóa tiến độ của "'+cur.n+'" để học lại từ đầu?','Reset progress for "'+cur.n+'"?')))return;cur.ws.forEach(w=>delete P[w.id]);save();setView()}
function start(mode){let ws=cur.ws;if(mode=='cram'){const u=ws.filter(w=>st(w.id)!=2);if(u.length)ws=u}
 S={mode,q:(pref.shuf?shuf(ws):[...ws]).map(w=>w.id),i:0,f:0,total:ws.length,seen:0};study()}
function study(){if(!S)return;const q=S.q,done=S.mode=='flash'?S.i>=q.length:!q.length;
 if(done){$().innerHTML=`<div class="top"><button onclick="setView()">${u('← Thoát','← Exit')}</button></div><div class="card" style="cursor:default;flex-direction:column;gap:14px">🎉 ${u('Hoàn thành!','Done!')}<span class="mu" style="font-size:16px">${u(`Đã thuộc ${cnt(cur.ws)}/${cur.ws.length} từ trong học phần này`,`Known ${cnt(cur.ws)}/${cur.ws.length} words in this set`)}</span></div><div class="act"><button onclick="start('${S.mode}')">${u('Học lại','Again')}</button><button class="p" onclick="setView()">${u('Xong','Done')}</button></div>`;return}
 const w=D[q[S.mode=='flash'?S.i:0]],fr=pref.dir?mn(w):kd(w),bk=pref.dir?kd(w):mn(w);
 const prog=S.mode=='flash'?`${S.i+1}/${q.length}`:u(`Còn ${q.length} thẻ`,`${q.length} cards left`);
 $().innerHTML=`<div class="top"><button onclick="setView()">${u('← Thoát','← Exit')}</button><span class="mu">${S.mode=='cram'?'⚡ '+u('Nhồi nhét','Cram')+' · ':''}${prog}</span>${lg()}</div>
 <div class="card ${S.f?'b':''}" onclick="S.f^=1;study()">${S.f?bk:fr}</div><div class="mu" style="text-align:center">${u('Chạm thẻ hoặc nhấn Space để lật','Tap the card or press Space to flip')}</div>
 <div class="act" style="margin-top:14px"><button class="no" onclick="ans(0)">✗ ${u('Chưa nhớ','Not yet')}</button><button class="yes" onclick="ans(1)">✓ ${u('Đã nhớ','Got it')}</button></div>
 ${S.mode=='flash'?`<div class="row" style="margin-top:10px;justify-content:center"><button onclick="S.i=Math.max(0,S.i-1);S.f=0;study()">←</button><button onclick="S.i=Math.min(q.length,S.i+1);S.f=0;study()">→</button></div>`:''}`}
function ans(ok){const id=S.q[S.mode=='flash'?S.i:0];P[id]=ok?2:1;save();S.f=0;
 if(S.mode=='flash')S.i++;else{S.q.shift();if(!ok)S.q.splice(Math.min(3,S.q.length),0,id)}study()}
document.addEventListener('keydown',e=>{if(!S||e.metaKey||e.ctrlKey)return;if(e.code=='Space'){e.preventDefault();S.f^=1;study()}else if(e.key=='ArrowRight')ans(1);else if(e.key=='ArrowLeft')ans(0)});

GN.forEach(n=>{GR.push({l:n.l,t:n.t[1],r:n.r[1],q:n.q.map(s=>{const a=s.split('|');return[a[0],a[1],a[2],a[3],a[4],a[6]].join('|')})});VI.push({t:n.t[0],r:n.r[0],q:n.q.map(s=>{const a=s.split('|');return'|'+a[5]})})});
const tt=(i,k)=>pref.lang=='vi'?VI[i][k]:GR[i][k];
const gq=g=>{const v=pref.lang=='vi'?VI[GR.indexOf(g)]:null;return g.q.map((s,i)=>{const a=s.split('|');let p=a[0],e=a[5],o=a.slice(1,5);if(v){const b=v.q[i].split('|');if(b[0])p=b[0];e=b[1];if(b[2])o=b.slice(2,6)}return{p,c:o[0],o,e}})};
let Q=null,go=-1;
const bt=k=>pref.gs[k]!=null?' · '+u('tốt nhất','best')+' '+pref.gs[k]+'%':'';
function gram(){const ls=[...new Set(GR.map(g=>g.l))];
 $().innerHTML=`<h1>JPD123 – ${u('Ngữ pháp','Grammar')}</h1><div class="mu">${u(`${GR.length} cấu trúc · mở từng mục để xem, rồi làm trắc nghiệm`,`${GR.length} patterns · open each one, then take the quiz`)}</div>${tabs()}`
 +ls.map(l=>`<h2 style="margin:18px 0 6px">${ll(l)}</h2>`+GR.map((g,i)=>g.l==l?`<details ${i==go?'open':''}><summary><span>${tt(i,'t')}</span><span class="mu">${pref.gs['G'+i]!=null?pref.gs['G'+i]+'%':''}</span></summary><div class="gr"><p>${tt(i,'r')}</p><button class="p" onclick="gstart(${i})">${u('Làm','Do')} ${GR[i].q.length} ${u('câu','questions')}</button></div></details>`:'').join('')
 +`<button class="p" style="width:100%;margin-top:6px;padding:14px" onclick="gtest('${l}')">📝 ${u('Kiểm tra','Test')} ${ll(l)}${bt('L'+l)}</button>`).join('')
 +`<button class="p" style="width:100%;margin-top:26px;padding:16px" onclick="gall()">🏆 ${u('Kiểm tra toàn khóa (20 câu)','Full-course test (20 questions)')}${bt('ALL')}</button>`}
function runQ(k,t,qs,re){Q={k,t,re,qs:shuf(qs),i:0,sc:0,pk:null,wr:[]};qz()}
function gstart(i){go=i;runQ('G'+i,tt(i,'t'),gq(GR[i]),()=>gstart(i))}
function gtest(l){runQ('L'+l,u('Kiểm tra ','Test ')+ll(l),GR.filter(g=>g.l==l).flatMap(gq),()=>gtest(l))}
function gall(){runQ('ALL',u('Kiểm tra toàn khóa','Full-course test'),shuf(GR.flatMap(gq)).slice(0,20),gall)}
function qz(){const n=Q.qs.length;
 if(Q.i>=n){const pc=Math.round(Q.sc/n*100);if(pc>(pref.gs[Q.k]||0)){pref.gs[Q.k]=pc;save()}
  $().innerHTML=`<div class="top"><button onclick="home()">${u('← Danh sách','← List')}</button><span class="mu">${Q.t}</span></div><div class="card" style="cursor:default;flex-direction:column;gap:10px">${pc>=80?'🎉':'💪'} ${Q.sc}/${n}<span class="mu" style="font-size:16px">${pc}%${bt(Q.k)}</span></div>`
  +(Q.wr.length?`<div class="mu">${u('Các câu làm sai:','Questions you missed:')}</div><div class="list">${Q.wr.map(q=>`<div class="w" style="display:block"><div>${q.p}</div><div class="yes">✓ ${q.c}</div><div class="mu">${q.e}</div></div>`).join('')}</div>`:'')
  +`<div class="act" style="margin-top:14px"><button onclick="Q.re()">${u('Làm lại','Retry')}</button><button class="p" onclick="home()">${u('Xong','Done')}</button></div>`;return}
 const q=Q.qs[Q.i];q.s=q.s||shuf(q.o);const d=Q.pk!==null;
 $().innerHTML=`<div class="top"><button onclick="home()">${u('← Thoát','← Exit')}</button><span class="mu">${Q.t} · ${Q.i+1}/${n}</span></div><div class="bar"><i style="width:${Q.i/n*100}%"></i></div><div class="q">${q.p}</div>`
 +q.s.map((o,j)=>`<button class="op ${d?(o==q.c?'yes':j==Q.pk?'no':''):''}" onclick="qa(${j})">${o}</button>`).join('')
 +(d?`<div class="fb ${q.s[Q.pk]==q.c?'yes':'no'}">${q.s[Q.pk]==q.c?(pref.lang=='vi'?'✓ Đúng':'✓ Correct'):(pref.lang=='vi'?'✗ Sai · đáp án: ':'✗ Incorrect · answer: ')+q.c}<div class="ex">${q.e}</div></div><button class="p" style="width:100%;margin-top:10px;padding:14px" onclick="Q.i++;Q.pk=null;qz()">${Q.i+1<n?u('Câu tiếp →','Next →'):u('Xem kết quả','See results')}</button>`:'')}
function qa(j){if(Q.pk!==null)return;const q=Q.qs[Q.i];Q.pk=j;if(q.s[j]==q.c)Q.sc++;else Q.wr.push(q);qz()}
const fs=()=>{const d=document,e=d.documentElement;try{d.fullscreenElement||d.webkitFullscreenElement?(d.exitFullscreen||d.webkitExitFullscreen).call(d):(e.requestFullscreen||e.webkitRequestFullscreen).call(e)}catch(x){}};
const fsb=document.getElementById('fsb');
fsb.addEventListener('click',fs);
if(!(document.documentElement.requestFullscreen||document.documentElement.webkitRequestFullscreen))fsb.hidden=true;
['fullscreenchange','webkitfullscreenchange'].forEach(ev=>document.addEventListener(ev,()=>{fsb.textContent=(document.fullscreenElement||document.webkitFullscreenElement)?'✕':'⛶'}));
let ZQ=null;const LET='ABCDE';
const none=()=>u('Không có đáp án nào đúng','None of the above');
const gz=q=>{const nn=Math.random()<.25;return{p:q.p,o:shuf(nn?q.o.filter(x=>x!=q.c):q.o),c:nn?null:q.c,ans:q.c,e:q.e}};
const vq=()=>{const w=D[Math.random()*D.length|0],rev=Math.random()<.5,key=x=>rev?x.k:mn(x),c=key(w),seen=new Set([c]),ds=[];
 for(const x of shuf(D.filter(x=>x.id!=w.id)).sort((a,b)=>(b.t==w.t)-(a.t==w.t))){const k=key(x);if(!seen.has(k)){seen.add(k);ds.push(k)}if(ds.length==5)break}
 const nn=Math.random()<.25;
 return{p:(rev?mn(w):w.k+(w.kj?' 【'+w.kj+'】':''))+`<div class="mu" style="font-size:14px">${rev?u('Từ tiếng Nhật nào có nghĩa này?','Which Japanese word matches?'):u('Nghĩa của từ này là gì?','What does this word mean?')}</div>`,o:nn?ds.slice(0,5):shuf([c,...ds.slice(0,4)]),c:nn?null:c,ans:c,e:w.k+' = '+mn(w)}};
function zhome(){$().innerHTML=`<h1>JPD123 – ${u('Quiz tổng','Master quiz')}</h1><div class="mu">${u(`${D.length} từ · ${GR.flatMap(g=>g.q).length} câu ngữ pháp`,`${D.length} words · ${GR.flatMap(g=>g.q).length} grammar questions`)}</div>${tabs()}
 <div class="zc"><h2>🃏 Flashcard</h2><p class="mu">${u('Lật thẻ toàn bộ từ vựng của môn học.','Flip through all course vocabulary.')}</p><button class="p" onclick="openSet(-1)">${u('Học flashcard toàn khóa','Study all flashcards')}</button></div>
 <div class="zc"><h2>📝 ${u('Kiểm tra A–F','A–F test')}</h2><p class="mu">${u('Mỗi câu có đáp án A–E và F = “Không có đáp án nào đúng”. Khoảng 1/4 số câu đáp án đúng là F nên đừng lụi! Điểm tính theo thang 10.','Each question has A–E plus F = “None of the above”. About 1 in 4 questions has F as the answer, so no blind guessing! Scored out of 10.')}</p>
 <div class="row">${[10,20,30,50].map(n=>`<button class="p" onclick="zstart(${n})">${n} ${u('câu','Qs')}</button>`).join('')}</div>${pref.zb!=null?`<p class="mu">${u('Điểm cao nhất','Best score')}: ${pref.zb}/10</p>`:''}</div>`}
function zstart(n){const nv=Math.round(n*.7),g=shuf(GR.flatMap(gq)).slice(0,n-nv).map(gz);ZQ={qs:shuf([...g,...Array.from({length:n-g.length},vq)]),i:0,sc:0,pk:null,wr:[],n};zq()}
const zok=q=>q.c==null?q.o.length:q.o.indexOf(q.c),zl=(q,j)=>j==q.o.length?'F':LET[j];
function zq(){const z=ZQ,n=z.n;if(z.i>=n)return zend();const q=z.qs[z.i],d=z.pk!==null,ok=zok(q);
 $().innerHTML=`<div class="top"><button onclick="home()">${u('← Thoát','← Exit')}</button><span class="mu">${u('Quiz tổng','Master quiz')} · ${z.i+1}/${n}</span>${lg()}</div><div class="bar"><i style="width:${z.i/n*100}%"></i></div><div class="q">${q.p}</div>`
 +[...q.o,none()].map((o,j)=>`<button class="op ${d?(j==ok?'yes':j==z.pk?'no':''):''}" onclick="zans(${j})"><b>${zl(q,j)}.</b> ${o}</button>`).join('')
 +(d?`<div class="fb ${z.pk==ok?'yes':'no'}">${z.pk==ok?u('✓ Đúng','✓ Correct'):u('✗ Sai · đáp án: ','✗ Incorrect · answer: ')+zl(q,ok)+(q.c==null?' ('+u('không có đáp án nào đúng','none of the above')+')':'')}<div class="ex">${q.c==null?u('Đáp án thật là: ','The real answer is: ')+q.ans+' — ':''}${q.e}</div></div><button class="p" style="width:100%;margin-top:10px;padding:14px" onclick="ZQ.i++;ZQ.pk=null;zq()">${z.i+1<n?u('Câu tiếp →','Next →'):u('Xem kết quả','See results')}</button>`:'')}
function zans(j){const z=ZQ;if(z.pk!==null)return;const q=z.qs[z.i];z.pk=j;if(j==zok(q))z.sc++;else z.wr.push(q);zq()}
const ZM=[['Anh bạn tày đấy','You are something else'],['Làm tốt, hẹn bạn kì sau','Nice try, see you next term'],['Ngấp ngoải vậy má, rớt ba mẹ thương em','Barely alive… fail, but your parents still love you'],['Tạm thôi ku em, học không ổn rớt môn đó','Meh, kid. Study like this and you fail'],['Làm tốt đấy','Well done'],['Điểm quá ngon','Excellent score'],['Bạn chưa tày đâu','You are not that good yet']];
function zend(){const z=ZQ,n=z.n,s=Math.round(z.sc/n*100)/10;let b=Math.round(s);if(z.sc>0&&b==0)b=1;if(!z.sc)b=0;
 const m=ZM[b==0?0:b<=4?1:b==5?2:b<=7?3:b==8?4:b==9?5:6];if(pref.zb==null||s>pref.zb){pref.zb=s;save()}
 $().innerHTML=`<div class="top"><button onclick="home()">${u('← Quay lại','← Back')}</button>${lg()}</div><div class="card" style="cursor:default;flex-direction:column;gap:10px">${b>=8?'🎉':b>=5?'💪':'😅'} ${s}/10<span style="font-size:20px">${u(m[0],m[1])}</span><span class="mu" style="font-size:16px">${z.sc}/${n} ${u('câu đúng','correct')}</span></div>`
 +(z.wr.length?`<div class="mu">${u('Các câu làm sai:','Questions you missed:')}</div><div class="list">${z.wr.map(q=>`<div class="w" style="display:block"><div>${q.p}</div><div class="yes">→ ${q.ans}</div><div class="mu" style="font-size:14px">${q.e}</div></div>`).join('')}</div>`:'')
 +`<div class="act" style="margin-top:14px"><button onclick="zstart(${n})">${u('Làm lại','Retry')}</button><button class="p" onclick="home()">${u('Xong','Done')}</button></div>`}
/* ===== Speaking ===== */
const SPD=[['Cực kì dễ','Very easy'],['Dễ','Easy'],['Trung bình','Medium'],['Khó','Hard'],['Siêu khó – Cảnh giới tu tiên','Insane'],['Chưa xếp loại','Unrated']];
const SPT=20000;let SPS=null,spTm=null,spLast=-1;
pref.sp=pref.sp||{};pref.spm=pref.spm||'t';pref.spf=pref.spf||[];if(pref.spc==null)pref.spc=1;if(pref.spr==null)pref.spr=1;
const spf=ms=>{const s=ms/1000;return s>=60?Math.floor(s/60)+':'+(s%60).toFixed(1).padStart(4,'0'):s.toFixed(1)+' s'};
const spl=k=>u(SPD[k][0].split(' –')[0],SPD[k][1]);
function spSeg(i){const p=SPK[i],r=ROM[p[0]];if(r)return r.split('|').map(s=>{const k=s.indexOf('/');return [s.slice(0,k),s.slice(k+1)]});return (p[2].match(/[^。！？]*[。！？]?/g)||[]).filter(Boolean).map(s=>[s,null])}
function spClr(){if(spTm){clearInterval(spTm);spTm=null}}
function spStop(){spClr();SPS=null}
function spList(){const f=pref.spf;return SPK.map((p,i)=>i).filter(i=>!f.length||f.includes(SPK[i][1]))}
function spgo(i){spLast=i;pref.spm=='p'?spprac(i):spstart(i)}
function spnext(){const l=spList();if(!l.length)return shome();const c=SPS?SPS.i:spLast,n=l.find(i=>i>c);spgo(n==null?l[0]:n)}
function sprand(){const l=spList();if(!l.length)return;const c=SPS?SPS.i:spLast;let q=l.filter(i=>i!=c);if(!q.length)q=l;spgo(q[Math.floor(Math.random()*q.length)])}
function spsetm(m){pref.spm=m;save();shome()}
function spfl(k){if(k<0)pref.spf=[];else{const a=pref.spf,j=a.indexOf(k);j<0?a.push(k):a.splice(j,1);if(a.length>=SPD.length)pref.spf=[]}save();shome()}
function spclock(v){pref.spc=v?1:0;save()}
function sprom(v){pref.spr=v?1:0;save();const x=document.getElementById('sptxt');if(x)x.classList.toggle('nr',!v)}
function shome(){spStop();const P=pref.spm=='p',l=spList();
 $().innerHTML=`<h1>JPD123 – Speaking</h1><div class="mu">${P?u(`${SPK.length} bài · đọc to, rê chuột hoặc chạm từng cụm để xem romaji (không tính thời gian)`,`${SPK.length} passages · read aloud, hover or tap each chunk to see romaji (untimed)`):u(`${SPK.length} bài · xem bài ${SPT/1000} giây → bài bị ẩn → đọc to và bấm Space khi xong để đo thời gian`,`${SPK.length} passages · preview ${SPT/1000}s → text hides → read aloud, press Space when done to time it`)}</div>${tabs()}
 <div class="row" style="margin:8px 0"><button class="${P?'':'on'}" onclick="spsetm('t')">⏱ ${u('Đo thời gian','Timed')}</button><button class="${P?'on':''}" onclick="spsetm('p')">📖 ${u('Luyện đọc','Practice')}</button></div>
 <div class="row" style="margin:8px 0;flex-wrap:wrap"><button class="${pref.spf.length?'':'on'}" onclick="spfl(-1)">${u('Tất cả','All')}</button>${SPD.map((d,k)=>`<button class="${pref.spf.includes(k)?'on':''}" onclick="spfl(${k})">${spl(k)}</button>`).join('')}</div>
 <div class="row" style="margin:8px 0;align-items:center"><button class="p" onclick="sprand()" ${l.length?'':'disabled'}>🎲 ${u('Bài ngẫu nhiên','Random lesson')}</button>${P?'':`<label class="mu"><input type="checkbox" ${pref.spc?'checked':''} onchange="spclock(this.checked)"> ${u('Hiện đồng hồ khi đọc','Show clock while reading')}</label>`}</div>
 ${l.length?l.map(i=>{const p=SPK[i],r=pref.sp[p[0]];return `<button class="sp-item" onclick="spgo(${i})"><span><b>${u('Bài','Lesson')} ${p[0]}</b> <small>${spl(p[1])}</small></span><small>${!P&&r?'⏱ '+spf(r.last)+' · '+u('nhanh nhất','best')+' '+spf(r.best):''}</small></button>`}).join(''):`<div class="mu">${u('Không có bài nào trong bộ lọc này.','No lessons match this filter.')}</div>`}`}
function spstart(i){spStop();SPS={i,ph:'pre',end:performance.now()+SPT};sprender();
 spTm=setInterval(()=>{if(!SPS||SPS.ph!='pre')return;const l=SPS.end-performance.now();if(l<=0){spend();return}
  const a=document.getElementById('spcd'),b=document.getElementById('spbar');if(a)a.textContent=Math.ceil(l/1000);if(b)b.style.width=(l/SPT*100)+'%'},100)}
function spprac(i){spStop();SPS={i,ph:'prac',pins:new Set(),all:false};sprender()}
function spend(){spClr();if(SPS&&SPS.ph=='pre'){SPS.ph='hid';sprender()}}
function spreveal(){if(!SPS||SPS.ph!='hid')return;SPS.ph='read';SPS.t0=performance.now();sprender();spClr();
 if(pref.spc)spTm=setInterval(()=>{const e=document.getElementById('spclk');if(e&&SPS&&SPS.ph=='read')e.textContent=spf(performance.now()-SPS.t0)},100)}
function spdone(){if(!SPS||SPS.ph!='read')return;const ms=performance.now()-SPS.t0,id=SPK[SPS.i][0],r=pref.sp[id];spClr();SPS.ms=ms;SPS.prev=r?r.best:null;
 pref.sp[id]={last:ms,best:r?Math.min(r.best,ms):ms};save();SPS.ph='done';sprender()}
function spHTML(i,ro){const sg=spSeg(i),pn=SPS&&SPS.pins;
 return `<div class="sp-txt${ro?' ro':''}${!ro&&SPS&&SPS.all?' all':''}${ro&&!pref.spr?' nr':''}" id="sptxt">`+sg.map((s,k)=>{const t=s[0].trim(),m=s[1],on=!ro&&pn&&pn.has(k);
  return m?`<span class="rk t${on?' pin':''}"${ro?'':` tabindex="0" role="button" aria-pressed="${on}" data-k="${k}" onclick="sptog(this)" onkeydown="spkd(event,this)"`}><span class="jp">${t}</span><span class="rm">${m}</span></span>`:`<span class="rk"><span class="jp">${t}</span><span class="rm">&nbsp;</span></span>`}).join('')+'</div>'}
function sptog(el){const k=+el.dataset.k,p=SPS.pins,on=!p.has(k);on?p.add(k):p.delete(k);el.classList.toggle('pin',on);el.setAttribute('aria-pressed',on)}
function spkd(e,el){if(e.key=='Enter'||e.key==' '){e.preventDefault();sptog(el)}}
const spAllL=()=>SPS.all?u('Che tất cả','Hide all'):u('Hiện tất cả','Show all');
function spall(){SPS.all=!SPS.all;const x=document.getElementById('sptxt'),b=document.getElementById('spallb');if(x)x.classList.toggle('all',SPS.all);if(b)b.textContent=spAllL()}
function sprender(){if(!SPS)return;const p=SPK[SPS.i],h=`<div class="top"><button onclick="shome()">${u('← Thoát','← Exit')}</button><span class="mu">${u('Bài','Lesson')} ${p[0]} · ${spl(p[1])}</span>${lg()}</div>`,no=ROM[p[0]]?'':`<div class="mu" style="text-align:center">${u('Bài này chưa có dữ liệu romaji.','This lesson has no romaji data yet.')}</div>`;
 if(SPS.ph=='pre'){const l=Math.max(0,SPS.end-performance.now());
  $().innerHTML=h+`<div class="sp-cd" id="spcd">${Math.ceil(l/1000)}</div><div class="bar"><i id="spbar" style="width:${l/SPT*100}%;background:var(--ac)"></i></div><div class="sp-card">${p[2]}</div><div class="mu" style="text-align:center">${u('Đọc thầm trong 20 giây — hết giờ bài sẽ bị ẩn.','Read silently for 20 seconds — the text hides when time is up.')}</div><div class="act" style="margin-top:14px"><button onclick="spend()">${u('Ẩn bài ngay (Space)','Hide now (Space)')}</button></div>`}
 else if(SPS.ph=='hid'){
  $().innerHTML=h+`<div class="sp-card hid">${u('Bài đã được ẩn.','The text is hidden.')}</div><div class="act"><button class="p" onclick="spreveal()">▶ ${u('Mở bài & bắt đầu đọc (Space)','Show text & start reading (Space)')}</button></div><div class="mu" style="text-align:center;margin-top:10px">${u('Bấm khi bạn sẵn sàng. Đồng hồ bắt đầu chạy ngay khi bài hiện ra.','Press when ready. The timer starts the moment the text appears.')}</div>`}
 else if(SPS.ph=='read'){
  $().innerHTML=h+`<div class="mu" style="text-align:center"><span class="sp-rec"></span>${u('Đang đọc…','Reading…')}</div>${pref.spc?`<div class="sp-cd" id="spclk">0.0 s</div>`:''}<div class="sp-card">${p[2]}</div><div class="act"><button class="p" onclick="spdone()">⏹ ${u('Đọc xong — Dừng (Space)','Finished — Stop (Space)')}</button></div>`}
 else if(SPS.ph=='prac'){
  $().innerHTML=h+no+`<div class="sp-card" style="min-height:0">${spHTML(SPS.i,0)}</div><div class="mu" style="text-align:center">${u('Rê chuột hoặc chạm vào cụm từ để xem romaji · bấm để ghim · Tab + Enter/Space trên bàn phím','Hover or tap a chunk to see its romaji · click to pin · Tab + Enter/Space on keyboard')}</div><div class="act" style="margin-top:14px"><button id="spallb" onclick="spall()">${spAllL()}</button><button onclick="spnext()">${u('Bài tiếp →','Next →')}</button><button class="p" onclick="sprand()">🎲 ${u('Bài ngẫu nhiên','Random lesson')}</button></div>`}
 else{const n=p[2].replace(/\s/g,'').length,pb=SPS.prev==null||SPS.ms<SPS.prev;
  $().innerHTML=h+`<div class="card" style="cursor:default;flex-direction:column;gap:8px;min-height:200px"><span class="mu" style="font-size:16px">${u('Thời gian đọc của bạn','Your reading time')}</span><span class="sp-big">${spf(SPS.ms)}</span><span class="mu" style="font-size:16px">${n} ${u('ký tự','characters')} · ${(n/(SPS.ms/1000)).toFixed(1)} ${u('ký tự/giây','chars/sec')}</span>${pb?`<span style="font-size:18px">🎉 ${SPS.prev==null?u('Lần đo đầu tiên','First time recorded'):u('Kỷ lục mới!','New best!')}</span>`:`<span class="mu" style="font-size:16px">${u('Nhanh nhất','Best')}: ${spf(SPS.prev)}</span>`}</div>${no}<label class="mu" style="display:block;margin:8px 0"><input type="checkbox" ${pref.spr?'checked':''} onchange="sprom(this.checked)"> ${u('Hiện romaji','Show romaji')}</label><div class="sp-card" style="min-height:0">${spHTML(SPS.i,1)}</div><div class="act"><button onclick="spstart(SPS.i)">${u('Làm lại','Retry')}</button><button onclick="spnext()">${u('Bài tiếp →','Next →')}</button><button onclick="sprand()">🎲 ${u('Bài ngẫu nhiên','Random lesson')}</button><button class="p" onclick="shome()">${u('Danh sách','List')}</button></div>`}}
document.addEventListener('keydown',e=>{if(!SPS||SPS.ph=='prac'||e.code!='Space'||e.metaKey||e.ctrlKey||e.altKey)return;e.preventDefault();if(e.repeat)return;if(document.activeElement&&document.activeElement.blur)document.activeElement.blur();
 if(SPS.ph=='pre')spend();else if(SPS.ph=='hid')spreveal();else if(SPS.ph=='read')spdone()});
document.addEventListener('keyup',e=>{if(SPS&&e.code=='Space')e.preventDefault()});

home();
