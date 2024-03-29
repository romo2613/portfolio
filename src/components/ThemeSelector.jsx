import { useEffect } from 'astro/client';

export default function ThemeSelector() {
    useEffect(() => {
        const themeButtons = document.querySelectorAll('[data-set-theme]');

        themeButtons.forEach((button) => {
            button.addEventListener('click', (e) => {
                const theme = e.target.getAttribute('data-set-theme');
                document.documentElement.setAttribute('data-theme', theme);
                localStorage.setItem('theme', theme);
            });
        });

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
        }
    }, []);

    // return (
    //     <div
    //         title="Change Theme"
    //         class="dropdown dropdown-end hidden [@supports(color:oklch(0_0_0))]:block"
    //     >
    //         <div tabindex="0" role="button" class="btn btn-ghost">
    //             <svg
    //                 width="20"
    //                 height="20"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 class="h-5 w-5 stroke-current"
    //             ><path
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
    //             ></path></svg
    //             >
    //             <svg
    //                 width="12px"
    //                 height="12px"
    //                 class="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 2048 2048"
    //             ><path
    //                 d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"
    //             ></path></svg
    //             >
    //         </div>
    //         <div
    //             tabindex="0"
    //             class="dropdown-content bg-base-200 text-base-content rounded-box top-px h-[28.6rem] max-h-[calc(100vh-10rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5 mt-16"
    //         >
    //             <div class="grid grid-cols-1 gap-3 p-3">
    //                 <button
    //                     class="outline-base-content text-start outline-offset-4"
    //                     data-set-theme="light"
    //                     data-act-class="[&_svg]:visible"
    //                 ><span
    //                     data-theme="light"
    //                     class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
    //                 ><span class="grid grid-cols-5 grid-rows-3"
    //                 ><span
    //                     class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
    //                 ><svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="16"
    //                     height="16"
    //                     viewBox="0 0 24 24"
    //                     fill="currentColor"
    //                     class="invisible h-3 w-3 shrink-0"
    //                 ><path
    //                     d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
    //                 ></path></svg
    //                                 >
    //                                 <span class="flex-grow text-sm">light</span>
    //                                 <span class="flex h-full shrink-0 flex-wrap gap-1"
    //                                 ><span class="bg-primary rounded-badge w-2"
    //                                 ></span>
    //                                     <span class="bg-secondary rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-accent rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-neutral rounded-badge w-2"
    //                                     ></span></span
    //                                 ></span
    //                             ></span
    //                         ></span
    //                     ></button
    //                 ><button
    //                     class="outline-base-content text-start outline-offset-4"
    //                     data-set-theme="dark"
    //                     data-act-class="[&_svg]:visible"
    //                 ><span
    //                     data-theme="dark"
    //                     class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
    //                 ><span class="grid grid-cols-5 grid-rows-3"
    //                 ><span
    //                     class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
    //                 ><svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="16"
    //                     height="16"
    //                     viewBox="0 0 24 24"
    //                     fill="currentColor"
    //                     class="invisible h-3 w-3 shrink-0"
    //                 ><path
    //                     d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
    //                 ></path></svg
    //                                 >
    //                                 <span class="flex-grow text-sm">dark</span>
    //                                 <span class="flex h-full shrink-0 flex-wrap gap-1"
    //                                 ><span class="bg-primary rounded-badge w-2"
    //                                 ></span>
    //                                     <span class="bg-secondary rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-accent rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-neutral rounded-badge w-2"
    //                                     ></span></span
    //                                 ></span
    //                             ></span
    //                         ></span
    //                     ></button
    //                 ><button
    //                     class="outline-base-content text-start outline-offset-4"
    //                     data-set-theme="cupcake"
    //                     data-act-class="[&_svg]:visible"
    //                 ><span
    //                     data-theme="cupcake"
    //                     class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
    //                 ><span class="grid grid-cols-5 grid-rows-3"
    //                 ><span
    //                     class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
    //                 ><svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="16"
    //                     height="16"
    //                     viewBox="0 0 24 24"
    //                     fill="currentColor"
    //                     class="invisible h-3 w-3 shrink-0"
    //                 ><path
    //                     d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
    //                 ></path></svg
    //                                 >
    //                                 <span class="flex-grow text-sm">cupcake</span>
    //                                 <span class="flex h-full shrink-0 flex-wrap gap-1"
    //                                 ><span class="bg-primary rounded-badge w-2"
    //                                 ></span>
    //                                     <span class="bg-secondary rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-accent rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-neutral rounded-badge w-2"
    //                                     ></span></span
    //                                 ></span
    //                             ></span
    //                         ></span
    //                     ></button
    //                 ><button
    //                     class="outline-base-content text-start outline-offset-4"
    //                     data-set-theme="bumblebee"
    //                     data-act-class="[&_svg]:visible"
    //                 ><span
    //                     data-theme="bumblebee"
    //                     class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
    //                 ><span class="grid grid-cols-5 grid-rows-3"
    //                 ><span
    //                     class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
    //                 ><svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="16"
    //                     height="16"
    //                     viewBox="0 0 24 24"
    //                     fill="currentColor"
    //                     class="invisible h-3 w-3 shrink-0"
    //                 ><path
    //                     d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
    //                 ></path></svg
    //                                 >
    //                                 <span class="flex-grow text-sm">bumblebee</span>
    //                                 <span class="flex h-full shrink-0 flex-wrap gap-1"
    //                                 ><span class="bg-primary rounded-badge w-2"
    //                                 ></span>
    //                                     <span class="bg-secondary rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-accent rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-neutral rounded-badge w-2"
    //                                     ></span></span
    //                                 ></span
    //                             ></span
    //                         ></span
    //                     ></button
    //                 ><button
    //                     class="outline-base-content text-start outline-offset-4"
    //                     data-set-theme="emerald"
    //                     data-act-class="[&_svg]:visible"
    //                 ><span
    //                     data-theme="emerald"
    //                     class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
    //                 ><span class="grid grid-cols-5 grid-rows-3"
    //                 ><span
    //                     class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
    //                 ><svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="16"
    //                     height="16"
    //                     viewBox="0 0 24 24"
    //                     fill="currentColor"
    //                     class="invisible h-3 w-3 shrink-0"
    //                 ><path
    //                     d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
    //                 ></path></svg
    //                                 >
    //                                 <span class="flex-grow text-sm">emerald</span>
    //                                 <span class="flex h-full shrink-0 flex-wrap gap-1"
    //                                 ><span class="bg-primary rounded-badge w-2"
    //                                 ></span>
    //                                     <span class="bg-secondary rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-accent rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-neutral rounded-badge w-2"
    //                                     ></span></span
    //                                 ></span
    //                             ></span
    //                         ></span
    //                     ></button
    //                 ><button
    //                     class="outline-base-content text-start outline-offset-4"
    //                     data-set-theme="corporate"
    //                     data-act-class="[&_svg]:visible"
    //                 ><span
    //                     data-theme="corporate"
    //                     class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
    //                 ><span class="grid grid-cols-5 grid-rows-3"
    //                 ><span
    //                     class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
    //                 ><svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="16"
    //                     height="16"
    //                     viewBox="0 0 24 24"
    //                     fill="currentColor"
    //                     class="invisible h-3 w-3 shrink-0"
    //                 ><path
    //                     d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
    //                 ></path></svg
    //                                 >
    //                                 <span class="flex-grow text-sm">corporate</span>
    //                                 <span class="flex h-full shrink-0 flex-wrap gap-1"
    //                                 ><span class="bg-primary rounded-badge w-2"
    //                                 ></span>
    //                                     <span class="bg-secondary rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-accent rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-neutral rounded-badge w-2"
    //                                     ></span></span
    //                                 ></span
    //                             ></span
    //                         ></span
    //                     ></button
    //                 ><button
    //                     class="outline-base-content text-start outline-offset-4"
    //                     data-set-theme="synthwave"
    //                     data-act-class="[&_svg]:visible"
    //                 ><span
    //                     data-theme="synthwave"
    //                     class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
    //                 ><span class="grid grid-cols-5 grid-rows-3"
    //                 ><span
    //                     class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
    //                 ><svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="16"
    //                     height="16"
    //                     viewBox="0 0 24 24"
    //                     fill="currentColor"
    //                     class="invisible h-3 w-3 shrink-0"
    //                 ><path
    //                     d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
    //                 ></path></svg
    //                                 >
    //                                 <span class="flex-grow text-sm">synthwave</span>
    //                                 <span class="flex h-full shrink-0 flex-wrap gap-1"
    //                                 ><span class="bg-primary rounded-badge w-2"
    //                                 ></span>
    //                                     <span class="bg-secondary rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-accent rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-neutral rounded-badge w-2"
    //                                     ></span></span
    //                                 ></span
    //                             ></span
    //                         ></span
    //                     ></button
    //                 ><button
    //                     class="outline-base-content text-start outline-offset-4"
    //                     data-set-theme="retro"
    //                     data-act-class="[&_svg]:visible"
    //                 ><span
    //                     data-theme="retro"
    //                     class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
    //                 ><span class="grid grid-cols-5 grid-rows-3"
    //                 ><span
    //                     class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
    //                 ><svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="16"
    //                     height="16"
    //                     viewBox="0 0 24 24"
    //                     fill="currentColor"
    //                     class="invisible h-3 w-3 shrink-0"
    //                 ><path
    //                     d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
    //                 ></path></svg
    //                                 >
    //                                 <span class="flex-grow text-sm">retro</span>
    //                                 <span class="flex h-full shrink-0 flex-wrap gap-1"
    //                                 ><span class="bg-primary rounded-badge w-2"
    //                                 ></span>
    //                                     <span class="bg-secondary rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-accent rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-neutral rounded-badge w-2"
    //                                     ></span></span
    //                                 ></span
    //                             ></span
    //                         ></span
    //                     ></button
    //                 ><button
    //                     class="outline-base-content text-start outline-offset-4"
    //                     data-set-theme="cyberpunk"
    //                     data-act-class="[&_svg]:visible"
    //                 ><span
    //                     data-theme="cyberpunk"
    //                     class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
    //                 ><span class="grid grid-cols-5 grid-rows-3"
    //                 ><span
    //                     class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
    //                 ><svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="16"
    //                     height="16"
    //                     viewBox="0 0 24 24"
    //                     fill="currentColor"
    //                     class="invisible h-3 w-3 shrink-0"
    //                 ><path
    //                     d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
    //                 ></path></svg
    //                                 >
    //                                 <span class="flex-grow text-sm">cyberpunk</span>
    //                                 <span class="flex h-full shrink-0 flex-wrap gap-1"
    //                                 ><span class="bg-primary rounded-badge w-2"
    //                                 ></span>
    //                                     <span class="bg-secondary rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-accent rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-neutral rounded-badge w-2"
    //                                     ></span></span
    //                                 ></span
    //                             ></span
    //                         ></span
    //                     ></button
    //                 ><button
    //                     class="outline-base-content text-start outline-offset-4"
    //                     data-set-theme="valentine"
    //                     data-act-class="[&_svg]:visible"
    //                 ><span
    //                     data-theme="valentine"
    //                     class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
    //                 ><span class="grid grid-cols-5 grid-rows-3"
    //                 ><span
    //                     class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
    //                 ><svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="16"
    //                     height="16"
    //                     viewBox="0 0 24 24"
    //                     fill="currentColor"
    //                     class="invisible h-3 w-3 shrink-0"
    //                 ><path
    //                     d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
    //                 ></path></svg
    //                                 >
    //                                 <span class="flex-grow text-sm">valentine</span>
    //                                 <span class="flex h-full shrink-0 flex-wrap gap-1"
    //                                 ><span class="bg-primary rounded-badge w-2"
    //                                 ></span>
    //                                     <span class="bg-secondary rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-accent rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-neutral rounded-badge w-2"
    //                                     ></span></span
    //                                 ></span
    //                             ></span
    //                         ></span
    //                     ></button
    //                 ><button
    //                     class="outline-base-content text-start outline-offset-4"
    //                     data-set-theme="halloween"
    //                     data-act-class="[&_svg]:visible"
    //                 ><span
    //                     data-theme="halloween"
    //                     class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
    //                 ><span class="grid grid-cols-5 grid-rows-3"
    //                 ><span
    //                     class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
    //                 ><svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="16"
    //                     height="16"
    //                     viewBox="0 0 24 24"
    //                     fill="currentColor"
    //                     class="invisible h-3 w-3 shrink-0"
    //                 ><path
    //                     d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
    //                 ></path></svg
    //                                 >
    //                                 <span class="flex-grow text-sm">halloween</span>
    //                                 <span class="flex h-full shrink-0 flex-wrap gap-1"
    //                                 ><span class="bg-primary rounded-badge w-2"
    //                                 ></span>
    //                                     <span class="bg-secondary rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-accent rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-neutral rounded-badge w-2"
    //                                     ></span></span
    //                                 ></span
    //                             ></span
    //                         ></span
    //                     ></button
    //                 ><button
    //                     class="outline-base-content text-start outline-offset-4"
    //                     data-set-theme="garden"
    //                     data-act-class="[&_svg]:visible"
    //                 ><span
    //                     data-theme="garden"
    //                     class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
    //                 ><span class="grid grid-cols-5 grid-rows-3"
    //                 ><span
    //                     class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
    //                 ><svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="16"
    //                     height="16"
    //                     viewBox="0 0 24 24"
    //                     fill="currentColor"
    //                     class="invisible h-3 w-3 shrink-0"
    //                 ><path
    //                     d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
    //                 ></path></svg
    //                                 >
    //                                 <span class="flex-grow text-sm">garden</span>
    //                                 <span class="flex h-full shrink-0 flex-wrap gap-1"
    //                                 ><span class="bg-primary rounded-badge w-2"
    //                                 ></span>
    //                                     <span class="bg-secondary rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-accent rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-neutral rounded-badge w-2"
    //                                     ></span></span
    //                                 ></span
    //                             ></span
    //                         ></span
    //                     ></button
    //                 ><button
    //                     class="outline-base-content text-start outline-offset-4"
    //                     data-set-theme="forest"
    //                     data-act-class="[&_svg]:visible"
    //                 ><span
    //                     data-theme="forest"
    //                     class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
    //                 ><span class="grid grid-cols-5 grid-rows-3"
    //                 ><span
    //                     class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
    //                 ><svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="16"
    //                     height="16"
    //                     viewBox="0 0 24 24"
    //                     fill="currentColor"
    //                     class="invisible h-3 w-3 shrink-0"
    //                 ><path
    //                     d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
    //                 ></path></svg
    //                                 >
    //                                 <span class="flex-grow text-sm">forest</span>
    //                                 <span class="flex h-full shrink-0 flex-wrap gap-1"
    //                                 ><span class="bg-primary rounded-badge w-2"
    //                                 ></span>
    //                                     <span class="bg-secondary rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-accent rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-neutral rounded-badge w-2"
    //                                     ></span></span
    //                                 ></span
    //                             ></span
    //                         ></span
    //                     ></button
    //                 ><button
    //                     class="outline-base-content text-start outline-offset-4"
    //                     data-set-theme="aqua"
    //                     data-act-class="[&_svg]:visible"
    //                 ><span
    //                     data-theme="aqua"
    //                     class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
    //                 ><span class="grid grid-cols-5 grid-rows-3"
    //                 ><span
    //                     class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
    //                 ><svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="16"
    //                     height="16"
    //                     viewBox="0 0 24 24"
    //                     fill="currentColor"
    //                     class="invisible h-3 w-3 shrink-0"
    //                 ><path
    //                     d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
    //                 ></path></svg
    //                                 >
    //                                 <span class="flex-grow text-sm">aqua</span>
    //                                 <span class="flex h-full shrink-0 flex-wrap gap-1"
    //                                 ><span class="bg-primary rounded-badge w-2"
    //                                 ></span>
    //                                     <span class="bg-secondary rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-accent rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-neutral rounded-badge w-2"
    //                                     ></span></span
    //                                 ></span
    //                             ></span
    //                         ></span
    //                     ></button
    //                 ><button
    //                     class="outline-base-content text-start outline-offset-4"
    //                     data-set-theme="lofi"
    //                     data-act-class="[&_svg]:visible"
    //                 ><span
    //                     data-theme="lofi"
    //                     class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
    //                 ><span class="grid grid-cols-5 grid-rows-3"
    //                 ><span
    //                     class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
    //                 ><svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="16"
    //                     height="16"
    //                     viewBox="0 0 24 24"
    //                     fill="currentColor"
    //                     class="invisible h-3 w-3 shrink-0"
    //                 ><path
    //                     d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
    //                 ></path></svg
    //                                 >
    //                                 <span class="flex-grow text-sm">lofi</span>
    //                                 <span class="flex h-full shrink-0 flex-wrap gap-1"
    //                                 ><span class="bg-primary rounded-badge w-2"
    //                                 ></span>
    //                                     <span class="bg-secondary rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-accent rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-neutral rounded-badge w-2"
    //                                     ></span></span
    //                                 ></span
    //                             ></span
    //                         ></span
    //                     ></button
    //                 ><button
    //                     class="outline-base-content text-start outline-offset-4"
    //                     data-set-theme="pastel"
    //                     data-act-class="[&_svg]:visible"
    //                 ><span
    //                     data-theme="pastel"
    //                     class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
    //                 ><span class="grid grid-cols-5 grid-rows-3"
    //                 ><span
    //                     class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
    //                 ><svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="16"
    //                     height="16"
    //                     viewBox="0 0 24 24"
    //                     fill="currentColor"
    //                     class="invisible h-3 w-3 shrink-0"
    //                 ><path
    //                     d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
    //                 ></path></svg
    //                                 >
    //                                 <span class="flex-grow text-sm">pastel</span>
    //                                 <span class="flex h-full shrink-0 flex-wrap gap-1"
    //                                 ><span class="bg-primary rounded-badge w-2"
    //                                 ></span>
    //                                     <span class="bg-secondary rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-accent rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-neutral rounded-badge w-2"
    //                                     ></span></span
    //                                 ></span
    //                             ></span
    //                         ></span
    //                     ></button
    //                 ><button
    //                     class="outline-base-content text-start outline-offset-4"
    //                     data-set-theme="fantasy"
    //                     data-act-class="[&_svg]:visible"
    //                 ><span
    //                     data-theme="fantasy"
    //                     class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
    //                 ><span class="grid grid-cols-5 grid-rows-3"
    //                 ><span
    //                     class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
    //                 ><svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="16"
    //                     height="16"
    //                     viewBox="0 0 24 24"
    //                     fill="currentColor"
    //                     class="invisible h-3 w-3 shrink-0"
    //                 ><path
    //                     d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
    //                 ></path></svg
    //                                 >
    //                                 <span class="flex-grow text-sm">fantasy</span>
    //                                 <span class="flex h-full shrink-0 flex-wrap gap-1"
    //                                 ><span class="bg-primary rounded-badge w-2"
    //                                 ></span>
    //                                     <span class="bg-secondary rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-accent rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-neutral rounded-badge w-2"
    //                                     ></span></span
    //                                 ></span
    //                             ></span
    //                         ></span
    //                     ></button
    //                 ><button
    //                     class="outline-base-content text-start outline-offset-4"
    //                     data-set-theme="wireframe"
    //                     data-act-class="[&_svg]:visible"
    //                 ><span
    //                     data-theme="wireframe"
    //                     class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
    //                 ><span class="grid grid-cols-5 grid-rows-3"
    //                 ><span
    //                     class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
    //                 ><svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="16"
    //                     height="16"
    //                     viewBox="0 0 24 24"
    //                     fill="currentColor"
    //                     class="invisible h-3 w-3 shrink-0"
    //                 ><path
    //                     d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
    //                 ></path></svg
    //                                 >
    //                                 <span class="flex-grow text-sm">wireframe</span>
    //                                 <span class="flex h-full shrink-0 flex-wrap gap-1"
    //                                 ><span class="bg-primary rounded-badge w-2"
    //                                 ></span>
    //                                     <span class="bg-secondary rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-accent rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-neutral rounded-badge w-2"
    //                                     ></span></span
    //                                 ></span
    //                             ></span
    //                         ></span
    //                     ></button
    //                 ><button
    //                     class="outline-base-content text-start outline-offset-4"
    //                     data-set-theme="black"
    //                     data-act-class="[&_svg]:visible"
    //                 ><span
    //                     data-theme="black"
    //                     class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
    //                 ><span class="grid grid-cols-5 grid-rows-3"
    //                 ><span
    //                     class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
    //                 ><svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="16"
    //                     height="16"
    //                     viewBox="0 0 24 24"
    //                     fill="currentColor"
    //                     class="invisible h-3 w-3 shrink-0"
    //                 ><path
    //                     d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
    //                 ></path></svg
    //                                 >
    //                                 <span class="flex-grow text-sm">black</span>
    //                                 <span class="flex h-full shrink-0 flex-wrap gap-1"
    //                                 ><span class="bg-primary rounded-badge w-2"
    //                                 ></span>
    //                                     <span class="bg-secondary rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-accent rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-neutral rounded-badge w-2"
    //                                     ></span></span
    //                                 ></span
    //                             ></span
    //                         ></span
    //                     ></button
    //                 ><button
    //                     class="outline-base-content text-start outline-offset-4"
    //                     data-set-theme="luxury"
    //                     data-act-class="[&_svg]:visible"
    //                 ><span
    //                     data-theme="luxury"
    //                     class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
    //                 ><span class="grid grid-cols-5 grid-rows-3"
    //                 ><span
    //                     class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
    //                 ><svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="16"
    //                     height="16"
    //                     viewBox="0 0 24 24"
    //                     fill="currentColor"
    //                     class="invisible h-3 w-3 shrink-0"
    //                 ><path
    //                     d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
    //                 ></path></svg
    //                                 >
    //                                 <span class="flex-grow text-sm">luxury</span>
    //                                 <span class="flex h-full shrink-0 flex-wrap gap-1"
    //                                 ><span class="bg-primary rounded-badge w-2"
    //                                 ></span>
    //                                     <span class="bg-secondary rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-accent rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-neutral rounded-badge w-2"
    //                                     ></span></span
    //                                 ></span
    //                             ></span
    //                         ></span
    //                     ></button
    //                 ><button
    //                     class="outline-base-content text-start outline-offset-4"
    //                     data-set-theme="dracula"
    //                     data-act-class="[&_svg]:visible"
    //                 ><span
    //                     data-theme="dracula"
    //                     class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
    //                 ><span class="grid grid-cols-5 grid-rows-3"
    //                 ><span
    //                     class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
    //                 ><svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="16"
    //                     height="16"
    //                     viewBox="0 0 24 24"
    //                     fill="currentColor"
    //                     class="invisible h-3 w-3 shrink-0"
    //                 ><path
    //                     d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
    //                 ></path></svg
    //                                 >
    //                                 <span class="flex-grow text-sm">dracula</span>
    //                                 <span class="flex h-full shrink-0 flex-wrap gap-1"
    //                                 ><span class="bg-primary rounded-badge w-2"
    //                                 ></span>
    //                                     <span class="bg-secondary rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-accent rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-neutral rounded-badge w-2"
    //                                     ></span></span
    //                                 ></span
    //                             ></span
    //                         ></span
    //                     ></button
    //                 ><button
    //                     class="outline-base-content text-start outline-offset-4"
    //                     data-set-theme="cmyk"
    //                     data-act-class="[&_svg]:visible"
    //                 ><span
    //                     data-theme="cmyk"
    //                     class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
    //                 ><span class="grid grid-cols-5 grid-rows-3"
    //                 ><span
    //                     class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
    //                 ><svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="16"
    //                     height="16"
    //                     viewBox="0 0 24 24"
    //                     fill="currentColor"
    //                     class="invisible h-3 w-3 shrink-0"
    //                 ><path
    //                     d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
    //                 ></path></svg
    //                                 >
    //                                 <span class="flex-grow text-sm">cmyk</span>
    //                                 <span class="flex h-full shrink-0 flex-wrap gap-1"
    //                                 ><span class="bg-primary rounded-badge w-2"
    //                                 ></span>
    //                                     <span class="bg-secondary rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-accent rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-neutral rounded-badge w-2"
    //                                     ></span></span
    //                                 ></span
    //                             ></span
    //                         ></span
    //                     ></button
    //                 ><button
    //                     class="outline-base-content text-start outline-offset-4"
    //                     data-set-theme="autumn"
    //                     data-act-class="[&_svg]:visible"
    //                 ><span
    //                     data-theme="autumn"
    //                     class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
    //                 ><span class="grid grid-cols-5 grid-rows-3"
    //                 ><span
    //                     class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
    //                 ><svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="16"
    //                     height="16"
    //                     viewBox="0 0 24 24"
    //                     fill="currentColor"
    //                     class="invisible h-3 w-3 shrink-0"
    //                 ><path
    //                     d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
    //                 ></path></svg
    //                                 >
    //                                 <span class="flex-grow text-sm">autumn</span>
    //                                 <span class="flex h-full shrink-0 flex-wrap gap-1"
    //                                 ><span class="bg-primary rounded-badge w-2"
    //                                 ></span>
    //                                     <span class="bg-secondary rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-accent rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-neutral rounded-badge w-2"
    //                                     ></span></span
    //                                 ></span
    //                             ></span
    //                         ></span
    //                     ></button
    //                 ><button
    //                     class="outline-base-content text-start outline-offset-4"
    //                     data-set-theme="business"
    //                     data-act-class="[&_svg]:visible"
    //                 ><span
    //                     data-theme="business"
    //                     class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
    //                 ><span class="grid grid-cols-5 grid-rows-3"
    //                 ><span
    //                     class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
    //                 ><svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="16"
    //                     height="16"
    //                     viewBox="0 0 24 24"
    //                     fill="currentColor"
    //                     class="invisible h-3 w-3 shrink-0"
    //                 ><path
    //                     d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
    //                 ></path></svg
    //                                 >
    //                                 <span class="flex-grow text-sm">business</span>
    //                                 <span class="flex h-full shrink-0 flex-wrap gap-1"
    //                                 ><span class="bg-primary rounded-badge w-2"
    //                                 ></span>
    //                                     <span class="bg-secondary rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-accent rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-neutral rounded-badge w-2"
    //                                     ></span></span
    //                                 ></span
    //                             ></span
    //                         ></span
    //                     ></button
    //                 ><button
    //                     class="outline-base-content text-start outline-offset-4"
    //                     data-set-theme="acid"
    //                     data-act-class="[&_svg]:visible"
    //                 ><span
    //                     data-theme="acid"
    //                     class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
    //                 ><span class="grid grid-cols-5 grid-rows-3"
    //                 ><span
    //                     class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
    //                 ><svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="16"
    //                     height="16"
    //                     viewBox="0 0 24 24"
    //                     fill="currentColor"
    //                     class="invisible h-3 w-3 shrink-0"
    //                 ><path
    //                     d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
    //                 ></path></svg
    //                                 >
    //                                 <span class="flex-grow text-sm">acid</span>
    //                                 <span class="flex h-full shrink-0 flex-wrap gap-1"
    //                                 ><span class="bg-primary rounded-badge w-2"
    //                                 ></span>
    //                                     <span class="bg-secondary rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-accent rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-neutral rounded-badge w-2"
    //                                     ></span></span
    //                                 ></span
    //                             ></span
    //                         ></span
    //                     ></button
    //                 ><button
    //                     class="outline-base-content text-start outline-offset-4"
    //                     data-set-theme="lemonade"
    //                     data-act-class="[&_svg]:visible"
    //                 ><span
    //                     data-theme="lemonade"
    //                     class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
    //                 ><span class="grid grid-cols-5 grid-rows-3"
    //                 ><span
    //                     class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
    //                 ><svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="16"
    //                     height="16"
    //                     viewBox="0 0 24 24"
    //                     fill="currentColor"
    //                     class="invisible h-3 w-3 shrink-0"
    //                 ><path
    //                     d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
    //                 ></path></svg
    //                                 >
    //                                 <span class="flex-grow text-sm">lemonade</span>
    //                                 <span class="flex h-full shrink-0 flex-wrap gap-1"
    //                                 ><span class="bg-primary rounded-badge w-2"
    //                                 ></span>
    //                                     <span class="bg-secondary rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-accent rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-neutral rounded-badge w-2"
    //                                     ></span></span
    //                                 ></span
    //                             ></span
    //                         ></span
    //                     ></button
    //                 ><button
    //                     class="outline-base-content text-start outline-offset-4"
    //                     data-set-theme="night"
    //                     data-act-class="[&_svg]:visible"
    //                 ><span
    //                     data-theme="night"
    //                     class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
    //                 ><span class="grid grid-cols-5 grid-rows-3"
    //                 ><span
    //                     class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
    //                 ><svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="16"
    //                     height="16"
    //                     viewBox="0 0 24 24"
    //                     fill="currentColor"
    //                     class="invisible h-3 w-3 shrink-0"
    //                 ><path
    //                     d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
    //                 ></path></svg
    //                                 >
    //                                 <span class="flex-grow text-sm">night</span>
    //                                 <span class="flex h-full shrink-0 flex-wrap gap-1"
    //                                 ><span class="bg-primary rounded-badge w-2"
    //                                 ></span>
    //                                     <span class="bg-secondary rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-accent rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-neutral rounded-badge w-2"
    //                                     ></span></span
    //                                 ></span
    //                             ></span
    //                         ></span
    //                     ></button
    //                 ><button
    //                     class="outline-base-content text-start outline-offset-4"
    //                     data-set-theme="coffee"
    //                     data-act-class="[&_svg]:visible"
    //                 ><span
    //                     data-theme="coffee"
    //                     class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
    //                 ><span class="grid grid-cols-5 grid-rows-3"
    //                 ><span
    //                     class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
    //                 ><svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="16"
    //                     height="16"
    //                     viewBox="0 0 24 24"
    //                     fill="currentColor"
    //                     class="invisible h-3 w-3 shrink-0"
    //                 ><path
    //                     d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
    //                 ></path></svg
    //                                 >
    //                                 <span class="flex-grow text-sm">coffee</span>
    //                                 <span class="flex h-full shrink-0 flex-wrap gap-1"
    //                                 ><span class="bg-primary rounded-badge w-2"
    //                                 ></span>
    //                                     <span class="bg-secondary rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-accent rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-neutral rounded-badge w-2"
    //                                     ></span></span
    //                                 ></span
    //                             ></span
    //                         ></span
    //                     ></button
    //                 ><button
    //                     class="outline-base-content text-start outline-offset-4"
    //                     data-set-theme="winter"
    //                     data-act-class="[&_svg]:visible"
    //                 ><span
    //                     data-theme="winter"
    //                     class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
    //                 ><span class="grid grid-cols-5 grid-rows-3"
    //                 ><span
    //                     class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
    //                 ><svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="16"
    //                     height="16"
    //                     viewBox="0 0 24 24"
    //                     fill="currentColor"
    //                     class="invisible h-3 w-3 shrink-0"
    //                 ><path
    //                     d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
    //                 ></path></svg
    //                                 >
    //                                 <span class="flex-grow text-sm">winter</span>
    //                                 <span class="flex h-full shrink-0 flex-wrap gap-1"
    //                                 ><span class="bg-primary rounded-badge w-2"
    //                                 ></span>
    //                                     <span class="bg-secondary rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-accent rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-neutral rounded-badge w-2"
    //                                     ></span></span
    //                                 ></span
    //                             ></span
    //                         ></span
    //                     ></button
    //                 ><button
    //                     class="outline-base-content text-start outline-offset-4"
    //                     data-set-theme="dim"
    //                     data-act-class="[&_svg]:visible"
    //                 ><span
    //                     data-theme="dim"
    //                     class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
    //                 ><span class="grid grid-cols-5 grid-rows-3"
    //                 ><span
    //                     class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
    //                 ><svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="16"
    //                     height="16"
    //                     viewBox="0 0 24 24"
    //                     fill="currentColor"
    //                     class="invisible h-3 w-3 shrink-0"
    //                 ><path
    //                     d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
    //                 ></path></svg
    //                                 >
    //                                 <span class="flex-grow text-sm">dim</span>
    //                                 <span class="flex h-full shrink-0 flex-wrap gap-1"
    //                                 ><span class="bg-primary rounded-badge w-2"
    //                                 ></span>
    //                                     <span class="bg-secondary rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-accent rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-neutral rounded-badge w-2"
    //                                     ></span></span
    //                                 ></span
    //                             ></span
    //                         ></span
    //                     ></button
    //                 ><button
    //                     class="outline-base-content text-start outline-offset-4"
    //                     data-set-theme="nord"
    //                     data-act-class="[&_svg]:visible"
    //                 ><span
    //                     data-theme="nord"
    //                     class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
    //                 ><span class="grid grid-cols-5 grid-rows-3"
    //                 ><span
    //                     class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
    //                 ><svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="16"
    //                     height="16"
    //                     viewBox="0 0 24 24"
    //                     fill="currentColor"
    //                     class="invisible h-3 w-3 shrink-0"
    //                 ><path
    //                     d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
    //                 ></path></svg
    //                                 >
    //                                 <span class="flex-grow text-sm">nord</span>
    //                                 <span class="flex h-full shrink-0 flex-wrap gap-1"
    //                                 ><span class="bg-primary rounded-badge w-2"
    //                                 ></span>
    //                                     <span class="bg-secondary rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-accent rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-neutral rounded-badge w-2"
    //                                     ></span></span
    //                                 ></span
    //                             ></span
    //                         ></span
    //                     ></button
    //                 ><button
    //                     class="outline-base-content text-start outline-offset-4"
    //                     data-set-theme="sunset"
    //                     data-act-class="[&_svg]:visible"
    //                 ><span
    //                     data-theme="sunset"
    //                     class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
    //                 ><span class="grid grid-cols-5 grid-rows-3"
    //                 ><span
    //                     class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
    //                 ><svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="16"
    //                     height="16"
    //                     viewBox="0 0 24 24"
    //                     fill="currentColor"
    //                     class="invisible h-3 w-3 shrink-0"
    //                 ><path
    //                     d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
    //                 ></path></svg
    //                                 >
    //                                 <span class="flex-grow text-sm">sunset</span>
    //                                 <span class="flex h-full shrink-0 flex-wrap gap-1"
    //                                 ><span class="bg-primary rounded-badge w-2"
    //                                 ></span>
    //                                     <span class="bg-secondary rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-accent rounded-badge w-2"
    //                                     ></span>
    //                                     <span class="bg-neutral rounded-badge w-2"
    //                                     ></span></span
    //                                 ></span
    //                             ></span
    //                         ></span
    //                     ></button
    //                 >
    //             </div>
    //         </div>
    //     </div>

    // )
}




