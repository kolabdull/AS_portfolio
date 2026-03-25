import React, { useRef } from 'react';

const TechStackCards = () => {
  const iframeRef = useRef(null);

  const handleIframeLoad = () => {
    try {
      const iframeDoc = iframeRef.current?.contentDocument;
      const contentElem = iframeDoc?.querySelector('.content');
      if (contentElem) {
        contentElem.scrollTop = 0;
      }
    } catch (e) {
      console.warn('Could not access iframe content', e);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F0F0F0] p-4">
      <div
        style={{
          width: '375px',
          aspectRatio: '375 / 675',
          borderRadius: '36px',               // matches the phone's screen radius
          overflow: 'hidden',                 // clips the iframe to the curve
          boxShadow: '0 25px 45px -12px rgba(0,0,0,0.35)',
          border: '10px solid black',         // replaces the phone's outer frame
        }}
      >
        <iframe
          ref={iframeRef}
          src="/tech-stack.html"
          title="Tech Stack UI"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          onLoad={handleIframeLoad}
        />
      </div>
    </div>
  );
};

export default TechStackCards;

// export default TechStackCards;

// import { useEffect, useRef, useLayoutEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const TechStackCards = () => {
//   const phoneRef = useRef(null);
//   const timeRef = useRef(null);
//   const contentRef = useRef(null);
//   const articlesRef = useRef([]);

//   const techCategories = [
//     { title: "Languages", items: ["JavaScript", "TypeScript", "Python", "C++", "SQL"] },
//     { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
//     { title: "Backend", items: ["Node.js", "FastAPI", "Express"] },
//     { title: "Data Science", items: ["TensorFlow", "PyTorch", "Pandas", "Scikit-learn", "NumPy"] },
//     { title: "DevOps & Cloud", items: ["Docker", "AWS", "Kubernetes", "CI/CD"] },
//     { title: "Databases", items: ["PostgreSQL", "Supabase", "Redis", "Firebase"] },
//   ];

//   useEffect(() => {
//     const updateTime = () => {
//       if (timeRef.current) {
//         const now = new Date();
//         const hours = now.getHours().toString().padStart(2, '0');
//         const minutes = now.getMinutes().toString().padStart(2, '0');
//         timeRef.current.textContent = `${hours}:${minutes}`;
//       }
//     };
//     updateTime();
//     const interval = setInterval(updateTime, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   useLayoutEffect(() => {
//     if (!contentRef.current) return;

//     const phoneElem = phoneRef.current;
//     const contentElem = contentRef.current;
//     const articles = articlesRef.current.filter(el => el !== null);

//     if (articles.length === 0) return;

//     const handleScroll = () => {
//       if (contentElem.scrollTop > 2550) contentElem.scrollTop = 2550;
//     };
//     contentElem.addEventListener('scroll', handleScroll);

//     const timelines = [];
//     const scrollTriggers = [];

//     const roll = (content, article, articlesArr, index) => {
//       const tl = gsap.timeline();
//       const inner = article.querySelector('.inner');

//       tl.to(inner, {
//         '--clip': `${article.offsetHeight + 112}px`,
//         '--compact-s': 1,
//         '--compact-o': 1,
//         duration: 1,
//         delay: 0.05,
//         ease: 'none'
//       })
//       .to(inner, {
//         '--border-radius-h': '180px',
//         '--border-radius-v': '20px',
//         repeat: 1,
//         yoyo: true,
//         duration: 0.15,
//         onStart: () => { inner.style.overflow = 'hidden'; },
//         onComplete: () => { inner.style.overflow = 'visible'; }
//       }, 0)
//       .to(article, {
//         '--article-r': getComputedStyle(article).getPropertyValue('--to-article-r'),
//         '--article-x': getComputedStyle(article).getPropertyValue('--to-article-x'),
//         '--article-y': getComputedStyle(article).getPropertyValue('--to-article-y'),
//         duration: 0.15
//       });

//       if (index === 0) {
//         tl.to(phoneElem, {
//           '--headline-y': '-28px',
//           duration: 0.3
//         }, 1.05);
//       }

//       if (index === 1) {
//         tl.to(articlesArr[index - 1], {
//           '--article-y': '-64px',
//           '--article-r': '-2deg',
//           duration: 0.15
//         }, 1.08);
//       }

//       if (index === 2) {
//         tl.to(articlesArr[index - 2], {
//           '--article-y': '-70px',
//           duration: 0.15
//         }, 1.14);
//         tl.to(articlesArr[index - 1], {
//           '--article-y': '-42px',
//           '--article-r': '-2deg',
//           duration: 0.15
//         }, 1.08);
//       }

//       if (index === articlesArr.length - 1) {
//         tl.to(phoneElem, {
//           '--empty-mask': '0%',
//           duration: 0.3
//         });
//       }

//       const st = ScrollTrigger.create({
//         animation: tl,
//         trigger: article,
//         scroller: content,
//         scrub: true,
//         start: `top top+=184`,
//         end: `bottom top+=112`
//       });

//       return { tl, st };
//     };

//     articles.forEach((article, idx) => {
//       const { tl, st } = roll(contentElem, article, articles, idx);
//       timelines.push(tl);
//       scrollTriggers.push(st);
//     });

//     const progressST = ScrollTrigger.create({
//       scroller: contentElem,
//       start: 0,
//       end: 2550
//     });
//     let oldProgress;
//     const onRefreshInit = () => {
//       oldProgress = progressST.progress;
//       contentElem.scrollTop = 0;
//     };
//     const onRefresh = () => {
//       progressST.scroll(oldProgress * 2550);
//     };
//     ScrollTrigger.addEventListener('refreshInit', onRefreshInit);
//     ScrollTrigger.addEventListener('refresh', onRefresh);

//     return () => {
//       contentElem.removeEventListener('scroll', handleScroll);
//       timelines.forEach(tl => tl.kill());
//       scrollTriggers.forEach(st => st.kill());
//       progressST.kill();
//       ScrollTrigger.removeEventListener('refreshInit', onRefreshInit);
//       ScrollTrigger.removeEventListener('refresh', onRefresh);
//       ScrollTrigger.getAll().forEach(st => st.kill());
//     };
//   }, [techCategories]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white p-0 sm:p-6">
//       <div
//         id="phone"
//         ref={phoneRef}
//         className="relative font-sans text-sm text-black w-[375px]"
//         style={{
//           '--c-frame': '#1c1c1e',
//           '--c-interface': '#000',
//           '--c-headline': '#000',
//           '--c-screen': '#f5f5f7',
//           '--c-letter': '#fff',
//           '--c-date': '#000',
//           '--c-subline': '#6c6c70',
//           '--c-text': '#8e8e93',
//           '--empty-mask': '100%',
//           '--headline-y': '0',
//           color: 'var(--c-interface)',
//           fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
//           fontSize: '14px',
//         }}
//       >
//         {/* Phone frame – outer border and speaker cutout for desktop */}
//         <div className="hidden sm:block absolute inset-0 rounded-[9.6%_/_4.43%] shadow-[0_0_0_10px_var(--c-frame),0_25px_40px_-12px_rgba(0,0,0,0.3)] pointer-events-none" />
//         <div className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[30px] rounded-b-2xl bg-[var(--c-frame)] z-10 pointer-events-none" />

//         {/* Status bar icons */}
//         <div className="time absolute top-[15px] left-[21px] font-semibold text-white text-sm z-10 sm:text-black">
//           <span ref={timeRef}>--:--</span>
//         </div>
//         <svg className="battery absolute top-[17px] right-[15px] w-[25px] h-[12px] text-white sm:text-black z-10" viewBox="0 0 25 12">
//           <rect x="0.5" y="0.833374" width="21" height="10.3333" rx="2.16667" fill="none" stroke="currentColor" strokeOpacity="0.35" />
//           <path d="M23 4V8C23.8047 7.66122 24.328 6.87313 24.328 6C24.328 5.12687 23.8047 4.33878 23 4" fill="currentColor" fillOpacity="0.4" />
//           <rect x="2" y="2.33337" width="18" height="7.33333" rx="1.33333" fill="currentColor" />
//         </svg>
//         <svg className="cellular absolute top-[17px] right-[64px] w-[18px] h-[12px] text-white sm:text-black z-10" viewBox="0 0 18 12">
//           <path fillRule="evenodd" clipRule="evenodd" d="M16.6665 0.666626H15.6665C15.1142 0.666626 14.6665 1.11434 14.6665 1.66663V10.3333C14.6665 10.8856 15.1142 11.3333 15.6665 11.3333H16.6665C17.2188 11.3333 17.6665 10.8856 17.6665 10.3333V1.66663C17.6665 1.11434 17.2188 0.666626 16.6665 0.666626ZM10.9998 2.99996H11.9998C12.5521 2.99996 12.9998 3.44767 12.9998 3.99996V10.3333C12.9998 10.8856 12.5521 11.3333 11.9998 11.3333H10.9998C10.4476 11.3333 9.99984 10.8856 9.99984 10.3333V3.99996C9.99984 3.44767 10.4476 2.99996 10.9998 2.99996ZM7.33317 5.33329H6.33317C5.78089 5.33329 5.33317 5.78101 5.33317 6.33329V10.3333C5.33317 10.8856 5.78089 11.3333 6.33317 11.3333H7.33317C7.88546 11.3333 8.33317 10.8856 8.33317 10.3333V6.33329C8.33317 5.78101 7.88546 5.33329 7.33317 5.33329ZM2.6665 7.33329H1.6665C1.11422 7.33329 0.666504 7.78101 0.666504 8.33329V10.3333C0.666504 10.8856 1.11422 11.3333 1.6665 11.3333H2.6665C3.21879 11.3333 3.6665 10.8856 3.6665 10.3333V8.33329C3.6665 7.78101 3.21879 7.33329 2.6665 7.33329Z" fill="currentColor" />
//         </svg>
//         <svg className="wifi absolute top-[17px] right-[44px] w-[16px] h-[12px] text-white sm:text-black z-10" viewBox="0 0 16 12">
//           <path fillRule="evenodd" clipRule="evenodd" d="M8.33045 2.60802C10.5463 2.60811 12.6775 3.45955 14.2835 4.98635C14.4044 5.10422 14.5977 5.10274 14.7168 4.98302L15.8728 3.81635C15.9331 3.75563 15.9667 3.67338 15.9662 3.58779C15.9657 3.50221 15.9311 3.42036 15.8701 3.36035C11.655 -0.679198 5.00522 -0.679198 0.79012 3.36035C0.729062 3.42032 0.694418 3.50215 0.693855 3.58773C0.693292 3.67331 0.726856 3.75558 0.78712 3.81635L1.94345 4.98302C2.06248 5.10292 2.25593 5.10441 2.37679 4.98635C3.98294 3.45945 6.11434 2.60801 8.33045 2.60802ZM8.33045 6.40368C9.54794 6.40361 10.722 6.85614 11.6245 7.67335C11.7465 7.78933 11.9388 7.78682 12.0578 7.66768L13.2125 6.50102C13.2733 6.43982 13.307 6.3568 13.3061 6.27054C13.3052 6.18427 13.2698 6.10196 13.2078 6.04202C10.4596 3.48563 6.20365 3.48563 3.45545 6.04202C3.39338 6.10196 3.35796 6.18432 3.35714 6.27061C3.35633 6.3569 3.39019 6.43991 3.45112 6.50102L4.60545 7.66768C4.72444 7.78682 4.91672 7.78933 5.03879 7.67335C5.94066 6.85668 7.11377 6.40419 8.33045 6.40368ZM10.6434 8.9575C10.6452 9.04401 10.6112 9.12741 10.5495 9.18802L8.55212 11.2037C8.49357 11.2629 8.41374 11.2963 8.33045 11.2963C8.24716 11.2963 8.16734 11.2629 8.10879 11.2037L6.11112 9.18802C6.04941 9.12736 6.01546 9.04394 6.01729 8.95743C6.01912 8.87092 6.05657 8.789 6.12079 8.73102C7.39636 7.65213 9.26455 7.65213 10.5401 8.73102C10.6043 8.78905 10.6417 8.87099 10.6434 8.9575Z" fill="currentColor" />
//         </svg>

//         {/* Screen – improved background */}
//         <div
//           className="screen relative w-full sm:bg-[var(--c-screen)] sm:translate-z-0 sm:rounded-[36px] sm:overflow-hidden sm:[-webkit-mask-image:-webkit-radial-gradient(white,black)] h-screen sm:h-auto"
//           style={{
//             paddingBottom: '180%',
//             boxShadow: '0 25px 45px -12px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.6)',
//             background: 'radial-gradient(circle at 50% 0%, #f8f8fc, #e8e8ec)',
//           }}
//         >
//           {/* Heading – with a light backdrop blur to separate it from cards */}
//           <h1
//             className="absolute top-[92px] left-0 right-0 text-center text-[30px] font-serif font-normal m-0"
//             style={{
//               fontFamily: "'DM Serif Display', serif",
//               color: 'var(--c-headline)',
//               transform: 'translateY(var(--headline-y)) translateZ(0)',
//               textShadow: '0 1px 2px rgba(0,0,0,0.05)',
//               background: 'rgba(245,245,247,0.7)',
//               backdropFilter: 'blur(8px)',
//               padding: '8px 0',
//               margin: '0 auto',
//               width: '80%',
//               left: '10%',
//               right: '10%',
//               borderRadius: '40px',
//               zIndex: 20,
//             }}
//           >
//             Tech Stack
//           </h1>

//           {/* Empty state */}
//           <div
//             className="empty absolute left-0 right-0 top-1/2 -translate-y-1/2 text-center"
//             style={{
//               color: 'var(--c-text)',
//               WebkitMaskImage: 'linear-gradient(to left, transparent var(--empty-mask), black calc(var(--empty-mask) + 10%))',
//               maskImage: 'linear-gradient(to left, transparent var(--empty-mask), black calc(var(--empty-mask) + 10%))',
//             }}
//           >
//             <svg className="block w-12 h-12 mx-auto mb-3" viewBox="0 0 48 48" fill="currentColor">
//               <path d="M47.3296 9.02336C46.9238 8.85514 46.4566 8.94821 46.1461 9.25869L26.2748 29.13C26.1703 29.2345 26.0916 29.3551 26.0386 29.4836C25.9866 29.6094 25.9576 29.7471 25.9567 29.8914C25.9567 29.892 25.9567 29.8925 25.9567 29.8929C25.9567 29.8932 25.9567 29.8933 25.9567 29.8934C25.9567 29.8938 25.9567 29.8941 25.9567 29.8946C25.9567 29.8949 25.9567 29.8951 25.9567 29.8954C25.9567 29.8958 25.9567 29.8959 25.9567 29.8962C25.9567 29.8967 25.9567 29.8973 25.9567 29.8979C25.9567 37.2506 19.975 43.2324 12.6223 43.2324C6.85987 43.2324 2.17195 38.5443 2.17195 32.7821C2.17195 28.2919 5.82494 24.639 10.315 24.639C13.7874 24.639 16.6122 27.4639 16.6122 30.9362C16.6122 33.5944 14.4497 35.7569 11.7916 35.7569C9.78483 35.7569 8.15229 34.1242 8.15229 32.1175C8.15229 30.6319 9.36098 29.4232 10.8466 29.4232C11.4463 29.4232 11.9326 28.9371 11.9326 28.3373C11.9326 27.7375 11.4463 27.2513 10.8466 27.2513C8.16337 27.2513 5.98034 29.4343 5.98034 32.1175C5.98034 35.3219 8.58722 37.9288 11.7916 37.9288C13.6865 37.9288 15.4077 37.1712 16.6683 35.943C16.6915 35.9233 16.7141 35.9026 16.736 35.8808L36.6075 16.0094C37.9281 14.6887 38.6555 12.9328 38.6555 11.065C38.6555 6.39509 34.8563 2.5957 30.1864 2.5957C27.4311 2.5957 24.8408 3.66864 22.8925 5.61688L3.02118 25.4882C2.99522 25.5142 2.97079 25.5412 2.94798 25.569C1.12539 27.4303 0 29.9774 0 32.7821C0 39.7421 5.66237 45.4043 12.6223 45.4043C16.8781 45.4043 20.7386 43.6813 23.5432 40.8958C23.5763 40.8697 23.6081 40.8415 23.6385 40.811L43.4582 20.9913C46.387 18.0626 48 14.1685 48 10.0267C48 9.58741 47.7353 9.19147 47.3296 9.02336ZM24.4283 7.15266C25.9663 5.61471 28.0111 4.76765 30.1862 4.76765C33.6586 4.76765 36.4835 7.59259 36.4835 11.065C36.4835 12.3526 35.9821 13.5632 35.0715 14.4737L18.7826 30.7627C18.6899 26.1724 14.9271 22.4669 10.315 22.4669C9.88181 22.4669 9.45426 22.4939 9.03497 22.546L24.4283 7.15266ZM41.9225 19.4555L27.6501 33.7279C27.9264 32.6444 28.0883 31.5148 28.1221 30.3545L45.5033 12.9732C44.9566 15.4096 43.7313 17.6467 41.9225 19.4555Z" />
//             </svg>
//             <span className="block text-xl font-serif" style={{ fontFamily: "'DM Serif Display', serif" }}>
//               No more tech
//             </span>
//           </div>

//           {/* Scrollable content */}
//           <div
//             ref={contentRef}
//             className="content absolute inset-0 overflow-y-auto overflow-x-hidden scrollbar-none"
//             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//           >
//             <div className="entries" style={{ height: '4000px' }}>
//               {techCategories.map((category, idx) => (
//                 <article
//                   key={category.title}
//                   ref={(el) => (articlesRef.current[idx] = el)}
//                   className="relative mx-5 sticky top-[184px]"
//                   style={{
//                     marginTop: idx === 0 ? '184px' : '32px',
//                     marginLeft: '20px',
//                     marginRight: '20px',
//                     marginBottom: 0,
//                     transformOrigin: '50% 12px',
//                     transform: 'translate(var(--article-x, 0px), var(--article-y, 0px)) rotate(var(--article-r, 0deg)) translateZ(0)',
//                     borderRadius: 'var(--border-radius-h, 0px) 0px 0px 0px / var(--border-radius-v, 0px) 0px 0px 0px',
//                     '--clip': '0px',
//                     '--compact-s': 0,
//                     '--compact-o': 0,
//                     '--border-radius-h': '0px',
//                     '--border-radius-v': '0px',
//                     '--article-r': '0deg',
//                     '--article-x': '0px',
//                     '--article-y': '0px',
//                     '--to-article-r': idx === 0 ? '-4deg' : idx === 1 ? '-3deg' : idx === 2 ? '1deg' : '0deg',
//                     '--to-article-x': idx === 0 ? '-4px' : idx === 1 ? '-2px' : '0px',
//                     '--to-article-y': idx === 0 ? '-44px' : idx === 1 ? '-36px' : idx === 2 ? '-8px' : '0px',
//                   }}
//                 >
//                   {/* Compact bar */}
//                   <div
//                     className="compact absolute left-0 right-0 origin-top z-10"
//                     style={{
//                       transform: 'scaleY(var(--compact-s, 0))',
//                       top: 0,
//                     }}
//                   >
//                     <div
//                       className="absolute left-0 right-0 top-0 h-[60px] blur-sm"
//                       style={{
//                         background: 'linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0))',
//                         opacity: 'var(--compact-o, 0)',
//                       }}
//                     />
//                     <div
//                       className="relative z-10 block w-full h-6"
//                       style={{
//                         background: 'linear-gradient(#d5d5d5, #ffffff 65%, #dddddd)',
//                         boxShadow: '0 4px 5px rgba(0, 0, 0, 0.08)',
//                       }}
//                     />
//                   </div>

//                   {/* Inner content – clipped and shifted */}
//                   <div
//                     className="inner bg-white rounded-lg shadow-md overflow-hidden"
//                     style={{
//                       transform: 'translateY(calc(var(--clip, 0px) * -1))',
//                       clipPath: 'polygon(0 var(--clip, 0px), 100% var(--clip, 0px), 100% 100%, 0% 100%)',
//                       background: 'var(--c-letter)',
//                     }}
//                   >
//                     <div className="info p-6 border-b border-gray-100">
//                       <strong
//                         className="block font-serif text-xl mb-1"
//                         style={{
//                           color: 'var(--c-date)',
//                           fontFamily: "'DM Serif Display', serif",
//                           fontSize: '21px',
//                         }}
//                       >
//                         {category.title}
//                       </strong>
//                       <small
//                         className="block text-sm font-medium"
//                         style={{
//                           color: 'var(--c-subline)',
//                           fontFamily: "'Poppins', sans-serif",
//                         }}
//                       >
//                         {category.items.length} technologies
//                       </small>
//                     </div>
//                     <div
//                       className="text p-6"
//                       style={{
//                         color: 'var(--c-text)',
//                         fontFamily: "'Poppins', sans-serif",
//                         fontSize: '14px',
//                         lineHeight: '1.6',
//                       }}
//                     >
//                       <div className="flex flex-wrap gap-2">
//                         {category.items.map(item => (
//                           <span
//                             key={item}
//                             className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full"
//                           >
//                             {item}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TechStackCards;



// // TechStackCards.jsx
// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// const TechStackCards = () => {
//   const phoneRef = useRef(null);

//   useEffect(() => {
//     // Register ScrollTrigger
//     gsap.registerPlugin(ScrollTrigger);

//     // Wait for the inner DOM to be fully rendered
//     const phoneEl = phoneRef.current;
//     if (!phoneEl) return;

//     // Re-run the same init function you had in the original HTML
//     // (you can copy the entire <script> content here, but replace
//     //  document.querySelector with ref-based selections)
//     const timeElem = phoneEl.querySelector('.time');
//     const contentElem = phoneEl.querySelector('.content');
//     const articles = contentElem.querySelectorAll('article');

//     // ... rest of your GSAP animation logic (the same as in the original)

//     // Don’t forget to clean up ScrollTrigger instances on unmount
//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-[#F0F0F0]">
//       <div
//         ref={phoneRef}
//         dangerouslySetInnerHTML={{
//           __html: `
//             <!-- paste the entire HTML content from your tech-stack.html here -->
//           `,
//         }}
//       />
//     </div>
//   );
// };

// export default TechStackCards;

// // TechStackCards.jsx
// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // The HTML content (without the GSAP script)
// const htmlContent = `
//   <div id="phone">
//     <div class="screen">
//       <h1>Tech Stack</h1>
//       <div class="empty">...</div>
//       <div class="content">
//         <div class="entries" style="height: 4000px;">
//           <!-- your 3 articles with tech categories -->
//         </div>
//       </div>
//     </div>
//     <div class="time">11:30</div>
//     <svg class="battery">...</svg>
//     <svg class="wifi">...</svg>
//     <svg class="cellular">...</svg>
//   </div>
//   <a class="dribbble">...</a>
//   <a class="twitter">...</a>
// `;

// const TechStackCards = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     // Register GSAP plugins
//     gsap.registerPlugin(ScrollTrigger);

//     // Wait for the DOM to be fully rendered
//     const container = containerRef.current;
//     if (!container) return;

//     // Get elements inside the container
//     const phoneElem = container.querySelector('#phone');
//     const timeElem = phoneElem?.querySelector('.time');
//     const contentElem = phoneElem?.querySelector('.content');
//     const articles = contentElem?.querySelectorAll('article');

//     if (!phoneElem || !contentElem || !articles || articles.length === 0) {
//       console.warn('Required elements not found');
//       return;
//     }

//     // Update clock
//     const setTime = (elem) => {
//       if (!elem) return;
//       const now = new Date();
//       elem.textContent = now.toLocaleTimeString('en-US', {
//         hour12: false,
//         hour: 'numeric',
//         minute: 'numeric',
//       });
//     };
//     setTime(timeElem);
//     const interval = setInterval(() => setTime(timeElem), 5000);

//     // Limit scroll
//     const handleScroll = () => {
//       if (contentElem.scrollTop > 2550) {
//         contentElem.scrollTop = 2550;
//       }
//     };
//     contentElem.addEventListener('scroll', handleScroll);

//     // Create scroll animations for each article
//     const triggers = [];
//     const roll = (article, idx) => {
//       const anim = gsap.timeline()
//         .to(article, {
//           '--clip': `${article.offsetHeight + 112}px`,
//           '--compact-s': 1,
//           '--compact-o': 1,
//           duration: 1,
//           delay: 0.05,
//           ease: 'none',
//         }, 0)
//         .to(article, {
//           '--border-radius-h': '180px',
//           '--border-radius-v': '20px',
//           repeat: 1,
//           yoyo: true,
//           duration: 0.15,
//           onStart: () => (article.style.overflow = 'hidden'),
//           onComplete: () => (article.style.overflow = 'visible'),
//         }, 0)
//         .to(article, {
//           '--article-r': getComputedStyle(article).getPropertyValue('--to-article-r'),
//           '--article-x': getComputedStyle(article).getPropertyValue('--to-article-x'),
//           '--article-y': getComputedStyle(article).getPropertyValue('--to-article-y'),
//           duration: 0.15,
//         }, 0);

//       if (idx === 0) {
//         anim.to(phoneElem, { '--headline-y': '-28px', duration: 0.3 }, 1.05);
//       }
//       if (idx === 1) {
//         anim.to(articles[idx - 1], {
//           '--article-y': '-64px',
//           '--article-r': '-2deg',
//           duration: 0.15,
//         }, 1.08);
//       }
//       if (idx === 2) {
//         anim.to(articles[idx - 2], { '--article-y': '-70px', duration: 0.15 }, 1.14);
//         anim.to(articles[idx - 1], {
//           '--article-y': '-42px',
//           '--article-r': '-2deg',
//           duration: 0.15,
//         }, 1.08);
//       }
//       if (idx === articles.length - 1) {
//         anim.to(phoneElem, { '--empty-mask': '0%', duration: 0.3 }, '+=0.2');
//       }

//       return ScrollTrigger.create({
//         animation: anim,
//         trigger: article,
//         scroller: contentElem,
//         scrub: true,
//         start: `top top+=184`,
//         end: `bottom top+=112`,
//       });
//     };

//     articles.forEach((article, i) => {
//       triggers.push(roll(article, i));
//     });

//     // Preserve scroll progress on resize
//     const progressST = ScrollTrigger.create({
//       scroller: contentElem,
//       start: 0,
//       end: 2550,
//     });
//     let oldProgress = 0;
//     const onRefreshInit = () => {
//       oldProgress = progressST.progress;
//       contentElem.scrollTop = 0;
//     };
//     const onRefresh = () => {
//       progressST.scroll(oldProgress * 2550);
//     };
//     ScrollTrigger.addEventListener('refreshInit', onRefreshInit);
//     ScrollTrigger.addEventListener('refresh', onRefresh);

//     // Refresh after load
//     const onLoad = () => ScrollTrigger.refresh();
//     window.addEventListener('load', onLoad);

//     // Cleanup
//     return () => {
//       clearInterval(interval);
//       contentElem.removeEventListener('scroll', handleScroll);
//       triggers.forEach(trigger => trigger.kill());
//       progressST.kill();
//       ScrollTrigger.removeEventListener('refreshInit', onRefreshInit);
//       ScrollTrigger.removeEventListener('refresh', onRefresh);
//       window.removeEventListener('load', onLoad);
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-[#F0F0F0] p-4">
//       <div
//         ref={containerRef}
//         dangerouslySetInnerHTML={{ __html: htmlContent }}
//         style={{ width: '375px', aspectRatio: '375 / 675' }}
//       />
//     </div>
//   );
// };

// export default TechStackCards;