import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import { GitPullRequestIcon, FileTextIcon, FolderIcon, MoreHorizontalIcon, GithubIcon, DollarSignIcon, MenuIcon } from "qwik-feather-icons";

export default component$(() => {
  return (
    <nav class="z-20 fixed top-0 w-screen my-3 pointer-events-none drop-shadow-lg">
      <div class="mx-auto max-w-7xl px-4 lg:px-6">
        <div class="relative flex h-16 items-center justify-between">
          <div class="flex flex-1 items-center justify-start">
            <Link href="/" class="transition duration-200 pointer-events-auto text-gray-300 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 pl-3 pr-4 py-2 rounded-lg text-lg flex items-center whitespace-nowrap">
              <img class="h-8 w-8 rounded-md" src="https://avatars.githubusercontent.com/u/86643576" alt="LuminescentDev" />
              <span class="font-bold ml-4">luminescent.dev</span>
            </Link>
          </div>
          <div class="flex flex-1 items-center justify-end">
            <div class="pointer-events-auto flex gap-2 text-gray-300 whitespace-nowrap">
              <Link href="/forks" class="transition duration-200 hidden bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold md:flex items-center gap-4">
                <GitPullRequestIcon/>Fork Graph
              </Link>
              <Link href="/resume" class="transition duration-200 hidden bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold sm:flex items-center gap-4">
                <FileTextIcon/>Resume
              </Link>
              <Link href="https://github.com/LuminescentDev" class="transition duration-200 hidden bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold sm:flex items-center gap-4">
                <GithubIcon/>GitHub
              </Link>
              <button id="mobile-menu-button" onClick$={() => document.getElementById('mobile-menu')?.classList.toggle("hidden")} class="transition duration-200 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-2 py-2 rounded-lg text-md font-bold flex">
                <MenuIcon/>
              </button>
            </div>
          </div>
        </div>

        <div id="mobile-menu" class="pointer-events-auto space-y-1 py-4 px-3 justify-center items-center bg-gray-800 rounded-lg border-2 border-gray-700 mt-2 hidden">
          <Link href="/forks" class="transition duration-200 flex md:hidden hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-800 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold items-center gap-4">
            <GitPullRequestIcon/>Fork Graph
          </Link>
          <Link href="/resume" class="transition duration-200 flex sm:hidden hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-800 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold items-center gap-4">
            <FileTextIcon/>Resume
          </Link>
          <Link href="https://github.com/LuminescentDev" class="transition duration-200 flex sm:hidden hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-800 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold items-center gap-4">
            <GithubIcon/>GitHub
          </Link>
          <Link href="https://cactie.luminescent.dev" class="transition duration-200 flex hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-800 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold items-center gap-4">
            <img class="h-6 w-6 rounded-xl" src={`https://cactie.luminescent.dev/assets/images/Cactie.webp`} alt="Cactie Bot" />
            Cactie
          </Link>
          <Link href="https://netherdepths.com" class="transition duration-200 flex hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-800 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold items-center gap-4">
            <img class="h-6 w-6 rounded-xl" src={`https://raw.githubusercontent.com/saboooor/Nether-Depths/main/Branding/nd.png`} alt="Cactie Bot" />
            Nether Depths
          </Link>
          <Link href="https://simplymc.art" class="transition duration-200 flex hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-800 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold items-center gap-4">
            <img class="h-6 w-6 rounded-xl" src={`https://www.simplymc.art/images/icon.png`} alt="Cactie Bot" />
            SimplyMC
          </Link>
          <Link href="https://github.com/pemigrade/botflop" class="transition duration-200 flex hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-800 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold items-center gap-4">
            <img class="h-6 w-6 rounded-xl" src={`https://i.imgur.com/deE1oID.png`} alt="Cactie Bot" />
            Botflop
          </Link>
        </div>
      </div>
    </nav>
  );
});