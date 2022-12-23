import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <header>
      <nav class="z-10 fixed top-0 w-screen my-3 pointer-events-none">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="flex md:flex-1 items-center justify-center md:items-stretch md:justify-start">
              <Link href="/" class="transition duration-200 pointer-events-auto text-gray-300 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl pl-2 pr-3 py-2 rounded-full text-sm font-medium flex items-center">
                <img class="h-8 w-8 mr-3 rounded-full" src="https://avatars.githubusercontent.com/u/42164502" alt="sab's pfp" />
                smhsmh.club
              </Link>
            </div>
            <div class="flex-1 items-center hidden justify-center md:flex">
              <div class="md:ml-6 md:block">
                <div class="pointer-events-auto flex space-x-4">
                  <Link href="/forks" class="transition duration-200 text-gray-300 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                    Fork Graph
                  </Link>
                  <Link href="/resume" class="transition duration-200 text-gray-300 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl px-3 py-2 rounded-full text-sm font-medium">
                    Resume
                  </Link>
                  <a href="/filehost" class="transition duration-200 text-gray-300 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl px-3 py-2 rounded-full text-sm font-medium">
                    Files
                  </a>
                  <Link href="/zoo" class="transition duration-200 text-gray-300 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl px-3 py-2 rounded-full text-sm font-medium">
                    Zoo
                  </Link>
                  <a href="https://github.com/saboooor" class="transition duration-200 text-gray-300 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl px-3 py-2 rounded-full text-sm font-medium">
                    GitHub
                  </a>
                  <a href="https://paypal.me/youhavebeenyoted" class="transition duration-200 text-gray-300 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl px-3 py-2 rounded-full text-sm font-medium">
                    PayPal
                  </a>
                </div>
              </div>
            </div>
            <div class="flex-1 items-center hidden justify-end md:flex md:items-stretch">
              <div class="md:ml-6 md:block">
                <div class="pointer-events-auto flex space-x-4">
                  <a href="https://cactie.smhsmh.club" class="transition duration-200 group text-gray-300 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl px-3 py-2 rounded-full text-sm font-medium flex items-center whitespace-nowrap">
                    <img class="h-8 w-8 group-hover:mr-3 rounded-full" src={`https://cactie.smhsmh.club/assets/images/Cactie.webp`} alt="Cactie Bot" />
                    <span class="hidden group-hover:flex">Cactie</span>
                  </a>
                  <a href="https://netherdepths.com" class="transition duration-200 group text-gray-300 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl px-3 py-2 rounded-full text-sm font-medium flex items-center whitespace-nowrap">
                    <img class="h-8 w-8 group-hover:mr-3 rounded-full" src={`https://raw.githubusercontent.com/saboooor/Nether-Depths/main/Branding/nd.png`} alt="Nether Depths" />
                    <span class="hidden group-hover:flex">Nether Depths</span>
                  </a>
                  <a href="https://simplymc.art" class="transition duration-200 group text-gray-300 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl px-3 py-2 rounded-full text-sm font-medium flex items-center whitespace-nowrap">
                    <img class="h-8 w-8 group-hover:mr-3 rounded-full" src={`https://www.simplymc.art/images/icon.png`} alt="SimplyMC" />
                    <span class="hidden group-hover:flex">SimplyMC</span>
                  </a>
                  <a href="https://github.com/pemigrade/botflop" class="transition duration-200 group text-gray-300 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl px-3 py-2 rounded-full text-sm font-medium flex items-center whitespace-nowrap">
                    <img class="h-8 w-8 group-hover:mr-3 rounded-full" src={`https://i.imgur.com/deE1oID.png`} alt="Botflop" />
                    <span class="hidden group-hover:flex">Botflop</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="flex flex-1 items-center justify-end md:items-stretch md:hidden">
              <button type="button" id="mobile-menu-button" onClick$={() => document.getElementById('mobile-menu')?.classList.toggle("hidden")} class="pointer-events-auto inline-flex items-center justify-center rounded-full p-2 text-gray-400 bg-gray-900 hover:text-white focus:outline-none focus:bg-gray-800" aria-controls="mobile-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="hidden px-6" id="mobile-menu">
          <div class="pointer-events-auto space-y-1 py-3 px-3 justify-center items-center bg-gray-800 rounded-2xl">
            <Link href="/forks" class="text-gray-300 bg-gray-700 hover:text-white hover:drop-shadow-2xl px-3 py-2 rounded-xl text-sm font-medium flex items-center whitespace-nowrap">
              Fork Graph
            </Link>
            <Link href="/resume" class="text-gray-300 hover:bg-gray-700 hover:text-white hover:drop-shadow-2xl px-3 py-2 rounded-xl text-sm font-medium flex items-center whitespace-nowrap">
              Resume
            </Link>
            <a href="/filehost" class="text-gray-300 hover:bg-gray-700 hover:text-white hover:drop-shadow-2xl px-3 py-2 rounded-xl text-sm font-medium flex items-center whitespace-nowrap">
              Files
            </a>
            <a href="https://github.com/saboooor" class="text-gray-300 hover:bg-gray-700 hover:text-white hover:drop-shadow-2xl px-3 py-2 rounded-xl text-sm font-medium flex items-center whitespace-nowrap">
              GitHub
            </a>
            <a href="https://paypal.me/youhavebeenyoted" class="text-gray-300 hover:bg-gray-700 hover:text-white hover:drop-shadow-2xl px-3 py-2 rounded-xl text-sm font-medium flex items-center whitespace-nowrap">
              PayPal
            </a>
            <a href="https://cactie.smhsmh.club" class="text-gray-300 hover:bg-gray-700 hover:text-white hover:drop-shadow-2xl px-3 py-2 rounded-xl text-sm font-medium flex items-center whitespace-nowrap">
              <img class="h-6 w-6 mr-3 rounded-full" src={`https://cactie.smhsmh.club/assets/images/Cactie.webp`} alt="Cactie Bot" />
              Cactie
            </a>
            <a href="https://netherdepths.com" class="text-gray-300 hover:bg-gray-700 hover:text-white hover:drop-shadow-2xl px-3 py-2 rounded-xl text-sm font-medium flex items-center whitespace-nowrap">
              <img class="h-6 w-6 mr-3 rounded-full" src={`https://raw.githubusercontent.com/saboooor/Nether-Depths/main/Branding/nd.png`} alt="Nether Depths" />
              Nether Depths
            </a>
            <a href="https://simplymc.art" class="text-gray-300 hover:bg-gray-700 hover:text-white hover:drop-shadow-2xl px-3 py-2 rounded-xl text-sm font-medium flex items-center whitespace-nowrap">
              <img class="h-6 w-6 mr-3 rounded-full" src={`https://www.simplymc.art/images/icon.png`} alt="SimplyMC" />
              SimplyMC
            </a>
            <a href="https://github.com/pemigrade/botflop" class="text-gray-300 hover:bg-gray-700 hover:text-white hover:drop-shadow-2xl px-3 py-2 rounded-xl text-sm font-medium flex items-center whitespace-nowrap">
              <img class="h-6 w-6 mr-3 rounded-full" src={`https://i.imgur.com/deE1oID.png`} alt="Botflop" />
              Botflop
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
});