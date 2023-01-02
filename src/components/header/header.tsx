import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import { GitPullRequestIcon, FileTextIcon, FolderIcon, MoreHorizontalIcon, GithubIcon, DollarSignIcon } from "qwik-feather-icons";

export default component$(() => {
  return (
    <nav class="z-20 fixed top-0 w-screen my-3 pointer-events-none drop-shadow-lg">
      <div class="mx-auto max-w-7xl px-4 lg:px-6">
        <div class="relative flex h-16 items-center justify-between">
          <div class="flex flex-1 items-center justify-start">
            <Link href="/" class="transition duration-200 pointer-events-auto text-gray-300 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 pl-3 pr-4 py-2 rounded-lg text-lg flex items-center whitespace-nowrap">
              <img class="h-8 w-8 rounded-md" src="https://avatars.githubusercontent.com/u/42164502" alt="sab's pfp" />
              <span class="font-bold ml-4">smhsmh.club</span>
            </Link>
          </div>
          <div class="hidden sm:ml-6 lg:flex flex-1 items-center justify-end">
            <div class="pointer-events-auto flex gap-2 text-gray-300 whitespace-nowrap">
              <Link href="/forks" class="transition duration-200 hidden bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold sm:flex items-center gap-4">
                <GitPullRequestIcon/>Fork Graph
              </Link>
              <Link href="/resume" class="transition duration-200 hidden bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold sm:flex items-center gap-4">
                <FileTextIcon/>Resume
              </Link>
              <a href="/filehost" class="transition duration-200 hidden bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold sm:flex items-center gap-4">
                <FolderIcon/>Files
              </a>
              <Link href="https://github.com/saboooor" class="transition duration-200 hidden bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold sm:flex items-center gap-4">
                <GithubIcon/>GitHub
              </Link>
              <Link href="https://paypal.me/youhavebeenyoted" class="transition duration-200 hidden bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold sm:flex items-center gap-4">
                <DollarSignIcon/>PayPal
              </Link>
              <Link href="/zoo" class="transition duration-200 hidden bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold sm:flex items-center gap-4">
                <MoreHorizontalIcon/>Zoo
              </Link>
            </div>
          </div>
          <div class="flex flex-1 items-center justify-end lg:items-stretch lg:hidden">
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
            <Link href="/zoo" class="text-gray-300 hover:bg-gray-700 hover:text-white hover:drop-shadow-2xl px-3 py-2 rounded-xl text-sm font-medium flex items-center whitespace-nowrap">
              Zoo
            </Link>
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
          <Link href="/zoo" class="text-gray-300 hover:bg-gray-700 hover:text-white hover:drop-shadow-2xl px-3 py-2 rounded-xl text-sm font-medium flex items-center whitespace-nowrap">
            Zoo
          </Link>
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
  );
});