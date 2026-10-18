import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Brain, CalendarDays, Check, ChevronRight, Globe2, GraduationCap, MapPin, Menu, Microscope, Phone, ShieldCheck, Sparkles, Stethoscope, X, Network, Activity, ExternalLink, Sun, Moon } from "lucide-react";
import "./styles.css";

const translations = {
 en:{
  nav:["Home","About","Specialties","Education & Credentials","Contact"],book:"Book Appointment",eyebrow:"BRAIN · SPINE · NERVE",role:"CONSULTANT NEUROSURGEON",name1:"Dr. Khalid Khan",name2:"Zadran",
  intro:"Advanced neurosurgical care, guided by precision, experience, and a commitment to every patient.",claim:"Recognized as the first FCPS neurosurgeon in Afghanistan",appointment:"Book an Appointment",explore:"Explore Specialties",
  servicesLabel:"AREAS OF EXPERTISE",services:[["Brain Surgery","Assessment and surgical care for brain tumors, trauma, and structural disorders."],["Spine Surgery","Care for spinal disorders, disc conditions, reconstruction, and nerve compression."],["Nerve Disorders","Diagnosis and treatment planning for peripheral nerve conditions."]],
  aboutLabel:"ABOUT THE DOCTOR",aboutTitle:"A leader in neurosurgery.",aboutText:"Dr. Khalid Khan Zadran is a consultant neurosurgeon and brain and spine surgeon practicing in Kabul, Afghanistan. His clinical interests include modern neurosurgical techniques, neuronavigation-assisted procedures, and research into brain disorders.",credentials:"Education & Credentials",credentialList:["MBBS · MD · RMP · MCPS · FCPS (Neurosurgery)","Ayub Medical College, Abbottabad, Pakistan","College of Physicians and Surgeons Pakistan (CPSP)","Pakistan Society of Neurosurgeons","World Federation of Neurosurgical Societies (WFNS)","American Association of Neurological Surgeons (AANS)","Researcher in Afghan brain disorders"],
  quote:"Neurosurgery is not just a profession. It is a responsibility to bring hope, restore function, and improve lives.",impact:"OUR IMPACT",impactTitle:"A commitment to excellence",stats:[["FCPS","Professional qualification"],["3","Core areas of expertise"],["KBL","Practice location"]],pioneering:"Advancing neurosurgical care in Afghanistan",
  contactLabel:"CONTACT",contactTitle:"Begin with a consultation.",contactText:"For appointments and clinic enquiries, please contact the practice directly.",clinic:"Rifah Medical Complex",city:"Kabul, Afghanistan",phoneLabel:"Call the clinic",facebookLabel:"Clinical updates & educational videos",directions:"Get Directions",disclaimer:"This website provides general information and is not a substitute for professional medical advice. Please confirm credentials and services directly with the clinic.",footer:"All rights reserved.",created:"Website crafted by",webdev:"Web Development",modalTitle:"Request an Appointment",modalText:"Please call the clinic directly to arrange a consultation.",close:"Close",more:"More About Dr. Zadran",blog:"Medical Insights"
 },
 fa:{
  nav:["خانه","درباره داکتر","تخصص‌ها","تحصیلات و مدارک","تماس"],book:"درخواست نوبت",eyebrow:"مغز · ستون فقرات · اعصاب",role:"متخصص جراحی اعصاب",name1:"داکتر خالد خان",name2:"ځدران",
  intro:"مراقبت‌های پیشرفته جراحی اعصاب با تکیه بر دقت، تجربه و توجه به نیازهای هر بیمار.",claim:"شناخته‌شده به‌عنوان نخستین جراح اعصاب دارای FCPS در افغانستان",appointment:"درخواست نوبت",explore:"دیدن تخصص‌ها",
  servicesLabel:"حوزه‌های تخصصی",services:[["جراحی مغز","ارزیابی و درمان جراحی تومورهای مغزی، آسیب‌ها و اختلالات ساختاری مغز."],["جراحی ستون فقرات","رسیدگی به اختلالات ستون فقرات، دیسک، بازسازی و فشار بر اعصاب."],["اختلالات اعصاب","تشخیص و برنامه‌ریزی درمان برای مشکلات اعصاب محیطی."]],
  aboutLabel:"درباره داکتر",aboutTitle:"پیشگام در جراحی اعصاب.",aboutText:"داکتر خالد خان ځدران متخصص جراحی اعصاب، مغز و ستون فقرات است و در کابل افغانستان فعالیت می‌کند. حوزه کاری او شامل روش‌های نوین جراحی اعصاب، استفاده از نیوروناویگیشن و پژوهش در زمینه اختلالات مغزی است.",credentials:"تحصیلات و مدارک حرفه‌ای",credentialList:["MBBS · MD · RMP · MCPS · FCPS (جراحی اعصاب)","کالج طبی ایوب، ایبت‌آباد، پاکستان","کالج پزشکان و جراحان پاکستان (CPSP)","انجمن جراحان اعصاب پاکستان","فدراسیون جهانی انجمن‌های جراحی اعصاب (WFNS)","انجمن جراحان اعصاب امریکا (AANS)","پژوهشگر اختلالات مغزی در افغانستان"],
  quote:"جراحی اعصاب تنها یک حرفه نیست؛ مسئولیتی است برای بازگرداندن امید، توانایی و بهبود زندگی.",impact:"دستاوردها",impactTitle:"تعهد به برتری در مراقبت",stats:[["FCPS","صلاحیت حرفه‌ای"],["۳","حوزه اصلی تخصص"],["کابل","محل فعالیت"]],pioneering:"پیشرفت مراقبت‌های جراحی اعصاب در افغانستان",
  contactLabel:"تماس",contactTitle:"با مشاوره آغاز کنید.",contactText:"برای نوبت و معلومات کلینیک، لطفاً مستقیماً با مطب تماس بگیرید.",clinic:"مجتمع طبی رفاه",city:"کابل، افغانستان",phoneLabel:"تماس با کلینیک",facebookLabel:"خبرهای کلینیک و ویدیوهای آموزشی",directions:"مسیریابی",disclaimer:"این ویب‌سایت معلومات عمومی ارائه می‌کند و جایگزین مشوره طبی مسلکی نیست. مدارک و خدمات را مستقیماً با کلینیک تأیید کنید.",footer:"تمام حقوق محفوظ است.",created:"طراحی و توسعه توسط",webdev:"توسعه وب",modalTitle:"درخواست نوبت",modalText:"برای تنظیم مشاوره، لطفاً مستقیماً با کلینیک تماس بگیرید.",close:"بستن",more:"معلومات بیشتر",blog:"معلومات طبی"
 },
 ps:{
  nav:["کور","د ډاکټر په اړه","تخصصونه","زده کړې او اسناد","اړیکه"],book:"د ملاقات غوښتنه",eyebrow:"ماغزه · ملا تیر · اعصاب",role:"د اعصابو مشاور جراح",name1:"ډاکټر خالد خان",name2:"ځدراڼ",
  intro:"دقت، تجربې او هر ناروغ ته د پاملرنې پر بنسټ د عصبي جراحۍ پرمختللې پاملرنه.",claim:"په افغانستان کې د لومړي FCPS عصبي جراح په توګه پېژندل شوی",appointment:"د ملاقات غوښتنه",explore:"تخصصونه وګورئ",
  servicesLabel:"د تخصص برخې",services:[["د ماغزو جراحي","د ماغزو د تومورونو، ټپونو او جوړښتي ستونزو ارزونه او جراحي درملنه."],["د ملا تیر جراحي","د ملا تیر د ناروغیو، ډیسک، بیا رغونې او پر اعصابو د فشار درملنه."],["د اعصابو ستونزې","د محیطي اعصابو د ستونزو تشخیص او د درملنې پلان."]],
  aboutLabel:"د ډاکټر په اړه",aboutTitle:"د عصبي جراحۍ په برخه کې مخکښ.",aboutText:"ډاکټر خالد خان ځدراڼ په کابل، افغانستان کې د اعصابو، ماغزو او ملا تیر مشاور جراح دی. د هغه په کار کې د عصبي جراحۍ عصري لارې، د نیوروناوېګېشن په مرسته پروسیجرونه او د ماغزو د اختلالاتو څېړنه شامله ده.",credentials:"زده کړې او مسلکي اسناد",credentialList:["MBBS · MD · RMP · MCPS · FCPS (عصبي جراحي)","ایوب طبي کالج، ایبټ آباد، پاکستان","د پاکستان د ډاکټرانو او جراحانو کالج (CPSP)","د پاکستان د عصبي جراحانو ټولنه","د عصبي جراحۍ ټولنو نړیوال فدراسیون (WFNS)","د امریکا د عصبي جراحانو ټولنه (AANS)","په افغانستان کې د ماغزو د اختلالاتو څېړونکی"],
  quote:"عصبي جراحي یوازې مسلک نه دی؛ دا د هیلې، وړتیا او د ژوند د ښه کولو مسؤلیت دی.",impact:"زموږ ژمنتیا",impactTitle:"د غوره پاملرنې لپاره ژمنتیا",stats:[["FCPS","مسلکي وړتیا"],["۳","د تخصص اصلي برخې"],["کابل","د کار ځای"]],pioneering:"په افغانستان کې د عصبي پاملرنې پرمختګ",
  contactLabel:"اړیکه",contactTitle:"له مشورې پیل وکړئ.",contactText:"د ملاقات او کلینیک د معلوماتو لپاره له کلینیک سره مستقیمه اړیکه ونیسئ.",clinic:"رفاه طبي کمپلکس",city:"کابل، افغانستان",phoneLabel:"کلینیک ته زنګ ووهئ",facebookLabel:"کلینیکي خبرونه او ښوونیزې ویډیوګانې",directions:"لارښوونې",disclaimer:"دا ویب‌سایټ عمومي معلومات وړاندې کوي او د مسلکي طبي مشورې بدیل نه دی. اسناد او خدمات له کلینیک سره تایید کړئ.",footer:"ټول حقوق خوندي دي.",created:"ویب‌سایټ جوړ کړی",webdev:"ویب پراختیا",modalTitle:"د ملاقات غوښتنه",modalText:"د مشورې د تنظیم لپاره له کلینیک سره مستقیمه اړیکه ونیسئ.",close:"بندول",more:"نور معلومات",blog:"طبي معلومات"
 }
};

const reveal = { hidden:{opacity:0,y:28}, show:{opacity:1,y:0,transition:{duration:.7,ease:[.22,1,.36,1]}} };
function BrainGraphic(){
 return <div className="brain-scene">
  <div className="brain-halo"/><div className="brain-ring ring-a"/><div className="brain-ring ring-b"/>
  <svg viewBox="0 0 520 520" className="brain-svg" aria-label="Abstract gold neurological brain illustration">
   <defs><radialGradient id="glow"><stop stopColor="#d9b56e" stopOpacity=".3"/><stop offset="1" stopColor="#d9b56e" stopOpacity="0"/></radialGradient><filter id="softGlow"><feGaussianBlur stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
   <circle cx="260" cy="250" r="210" fill="url(#glow)"/>
   <g fill="none" stroke="#d6ae60" strokeWidth="1.8" opacity=".9" filter="url(#softGlow)">
    <path d="M259 112C220 76 164 105 153 143C110 148 100 191 120 219C92 251 112 288 143 296C133 333 164 357 197 344C211 374 247 370 260 347C280 371 312 360 321 337C358 347 386 321 374 291C410 271 406 230 380 211C395 177 370 145 338 145C325 106 287 95 259 112Z"/>
    <path d="M258 114C241 146 245 171 258 193C235 214 242 239 258 254C240 278 246 309 260 347M154 145C183 151 190 171 179 192C201 205 201 229 182 244C197 264 187 284 145 296M338 145C310 153 305 174 323 193C301 211 306 233 333 245C315 265 332 283 374 291"/>
    <path d="M188 126C205 145 207 165 193 180M135 214C160 210 170 225 165 245M163 317C187 305 203 316 205 341M309 124C291 146 293 166 310 180M376 211C350 210 340 227 346 245M355 321C334 306 316 319 314 341M213 104C218 127 233 137 251 138M273 138C294 131 301 117 301 101M205 215C222 203 239 209 246 224M278 222C295 207 311 214 316 230M206 280C224 268 241 277 244 292M279 292C298 275 314 284 316 299"/>
   </g>
   <g fill="#f1d797">{[[153,143],[120,219],[143,296],[197,344],[260,347],[321,337],[374,291],[380,211],[338,145],[259,112],[205,215],[316,299],[165,245],[346,245]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="3.3"/>)}</g>
   <g fill="#d8b46b" fontSize="9" letterSpacing="2"><text x="58" y="170">NEURAL MAP</text><text x="390" y="170">PRECISION</text><text x="192" y="466">NEUROSCIENCE · KABUL</text></g>
  </svg>
  <span className="art-label label-top"><i/> NEURAL PRECISION</span><span className="art-label label-bottom">BRAIN · SPINE · NERVE</span>
 </div>;
}
function App(){
 const [lang,setLang]=useState("en"),[menu,setMenu]=useState(false),[modal,setModal]=useState(false),[light,setLight]=useState(false);
 const t=translations[lang],rtl=lang!=="en";
 const navIds=["home","about","services","credentials","contact"];
 const go=(id)=>{setMenu(false);document.getElementById(id)?.scrollIntoView({behavior:"smooth"})};
 return <div className={`site ${light?"light-mode":""}`} dir={rtl?"rtl":"ltr"}>
  <header className="header">
   <a href="#home" className="brand"><span className="brand-mark">K<span>Z</span></span><span className="brand-copy"><strong>Dr. Khalid Khan Zadran</strong><small>NEUROSURGEON</small></span></a>
   <button className="mobile-menu icon-button" onClick={()=>setMenu(!menu)} aria-label="Toggle menu">{menu?<X/>:<Menu/>}</button>
   <nav className={menu?"nav nav-open":"nav"}>{t.nav.map((label,i)=><a key={label} href={`#${navIds[i]}`} onClick={()=>setMenu(false)}>{label}</a>)}</nav>
   <div className="header-actions"><div className="language-switch"><Globe2 size={14}/>{["en","fa","ps"].map(l=><button key={l} className={lang===l?"active":""} onClick={()=>setLang(l)}>{l==="en"?"EN":l==="fa"?"دری":"پښتو"}</button>)}</div><button className="icon-button theme-toggle" onClick={()=>setLight(!light)} aria-label="Toggle dark or light mode">{light?<Moon size={16}/>:<Sun size={16}/>}</button><button className="button button-small" onClick={()=>setModal(true)}><CalendarDays size={14}/>{t.book}</button></div>
  </header>
  <main>
   <section className="hero section-shell" id="home">
    <motion.div className="hero-copy" variants={reveal} initial="hidden" animate="show">
     <div className="eyebrow"><span className="eyebrow-line"/>{t.eyebrow}</div>
     <h1>{t.name1}<br/><em>{t.name2}</em></h1><p className="role">{t.role}</p><p className="hero-intro">{t.intro}</p>
     <div className="hero-proof"><ShieldCheck size={17}/><span>{t.claim}</span></div>
     <div className="hero-actions"><button className="button" onClick={()=>setModal(true)}>{t.appointment}<ArrowRight size={16}/></button><a className="text-link" href="#about">{t.explore}<ArrowRight size={16}/></a></div>
     <div className="hero-index"><span>01</span><i/><span>CONSULTANT · KABUL, AFGHANISTAN</span></div>
    </motion.div>
    <motion.div className="hero-visual" initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}} transition={{duration:1.1,ease:"easeOut"}}>
     <div className="doctor-photo-frame"><img src="src/image/about-doctor.jpeg" alt="Dr. Khalid Khan Zadran" className="doctor-photo"/><div className="photo-shade"/><div className="photo-caption"><span>CONSULTANT NEUROSURGEON</span><strong>Dr. Khalid Khan Zadran</strong></div></div>
     <div className="brain-overlay"><BrainGraphic/></div>
     <span className="visual-index">NEUROSURGICAL CARE / 01</span>
    </motion.div>
    <div className="hero-side-note"><span className="vertical-line"/><p>Expertise in the most complex parts of the human body.</p></div>
   </section>
   <section className="specialty-strip" id="services"><div className="section-shell"><div className="section-kicker">{t.servicesLabel}<span/></div><div className="specialty-grid">{t.services.map(([title,desc],i)=><motion.article className="specialty-card" key={title} variants={reveal} initial="hidden" whileInView="show" viewport={{once:true,amount:.2}} transition={{delay:i*.12}}><div className="service-icon">{i===0?<Brain/>:i===1?<Activity/>:<Network/>}</div><div><h3>{title}</h3><p>{desc}</p></div><ArrowUpRight className="card-arrow"/></motion.article>)}</div></div></section>
   <section className="about section-shell" id="about">
    <motion.div className="about-heading" variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}}><div className="section-kicker">{t.aboutLabel}<span/></div><h2>{t.aboutTitle}</h2><p>{t.aboutText}</p><a href="#credentials" className="outline-link">{t.more}<ArrowDownRight size={17}/></a></motion.div>
    <motion.div className="credential-panel" id="credentials" variants={reveal} initial="hidden" whileInView="show" viewport={{once:true,amount:.15}}><div className="panel-heading"><GraduationCap/><h3>{t.credentials}</h3></div>{t.credentialList.map((item,i)=><div className="credential-row" key={item}><span className="credential-icon">{i===0?<Stethoscope/>:i===1?<GraduationCap/>:i===6?<Microscope/>:<Check/>}</span><p>{item}</p></div>)}</motion.div>
    <motion.aside className="quote-panel" initial={{opacity:0,x:25}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.7}}><div className="mountain-bg"/><div className="quote-mark">“</div><p>{t.quote}</p><span>Dr. Khalid Khan Zadran</span><i/></motion.aside>
   </section>
   <section className="impact"><div className="section-shell impact-inner"><div className="impact-heading"><div className="section-kicker">{t.impact}<span/></div><h2>{t.impactTitle}</h2></div>{t.stats.map(([num,label],i)=><motion.div className="impact-stat" key={label} variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}} transition={{delay:i*.1}}><span className="stat-icon">{i===0?<ShieldCheck/>:i===1?<Brain/>:<MapPin/>}</span><strong>{num}</strong><small>{label}</small></motion.div>)}<div className="pioneer">{t.pioneering}<i/></div></div></section>
   <section className="contact section-shell" id="contact"><div className="contact-heading"><div className="section-kicker">{t.contactLabel}<span/></div><h2>{t.contactTitle}</h2><p>{t.contactText}</p></div><div className="contact-details"><div className="contact-item"><span className="contact-icon"><MapPin/></span><div><strong>{t.clinic}</strong><small>{t.city}</small></div></div><a className="contact-item" href="tel:+93787654751"><span className="contact-icon"><Phone/></span><div><strong>+93 78 765 4751</strong><small>{t.phoneLabel}</small></div></a><a className="contact-item" href="https://www.facebook.com/" target="_blank" rel="noreferrer"><span className="contact-icon facebook-letter">f</span><div><strong>Facebook</strong><small>{t.facebookLabel}</small></div><ExternalLink size={15}/></a></div><div className="contact-cta"><p>{t.disclaimer}</p><a className="button button-outline" href="https://www.google.com/maps/search/?api=1&query=Rifah+Medical+Complex+Kabul+Afghanistan" target="_blank" rel="noreferrer">{t.directions}<ArrowUpRight size={16}/></a></div></section>
  </main>
  <footer className="footer"><div className="footer-top section-shell"><a href="#home" className="brand footer-brand"><span className="brand-mark">K<span>Z</span></span><span className="brand-copy"><strong>Dr. Khalid Khan Zadran</strong><small>CONSULTANT NEUROSURGEON</small></span></a><span className="footer-note">BRAIN · SPINE · NERVE</span><div className="footer-language">{["en","fa","ps"].map(l=><button key={l} onClick={()=>setLang(l)} className={lang===l?"active":""}>{l==="en"?"EN":l==="fa"?"دری":"پښتو"}</button>)}</div></div><div className="footer-bottom section-shell"><span>© {new Date().getFullYear()} Dr. Khalid Khan Zadran. {t.footer}</span><span className="creator-credit">{t.created} <strong>Muskan Ekrami</strong><i/> <b>{t.webdev}</b></span></div></footer>
  <AnimatePresence>{modal&&<motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setModal(false)}><motion.div className="appointment-modal" role="dialog" aria-modal="true" initial={{opacity:0,y:22,scale:.97}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:15}} onClick={e=>e.stopPropagation()}><button className="modal-close icon-button" onClick={()=>setModal(false)} aria-label={t.close}><X/></button><div className="modal-emblem"><CalendarDays/></div><div className="section-kicker">{t.contactLabel}<span/></div><h2>{t.modalTitle}</h2><p>{t.modalText}</p><a className="button" href="tel:+93787654751"><Phone size={16}/>{t.phoneLabel}<ArrowUpRight size={16}/></a><button className="modal-text-button" onClick={()=>setModal(false)}>{t.close}</button></motion.div></motion.div>}</AnimatePresence>
 </div>;
}
createRoot(document.getElementById("root")).render(<React.StrictMode><App/></React.StrictMode>);