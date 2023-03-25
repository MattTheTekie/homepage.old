import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import { GitPullRequestIcon, GithubIcon, MenuIcon, CodeIcon } from 'qwik-feather-icons';
import Logo from '~/components/elements/Logo';

export default component$(() => {
  return (
    <nav class="z-20 fixed top-0 w-screen my-3 pointer-events-none drop-shadow-lg">
      <div class="mx-auto max-w-7xl px-4 lg:px-6">
        <div class="relative flex h-16 items-center justify-between">
          <div class="flex flex-1 items-center justify-start">
            <Link href="/" class="transition duration-200 pointer-events-auto text-gray-300 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 pl-3 pr-4 py-2 rounded-lg text-lg flex items-center whitespace-nowrap">
              <div style="filter: drop-shadow(0 0 0 #DD6CFF);" class="h-8 w-32">
                <div style="filter: drop-shadow(0 0 1rem #CB6CE6);">
                  <Logo/>
                </div>
              </div>
            </Link>
          </div>
          <div class="flex flex-1 items-center justify-end">
            <div class="pointer-events-auto flex gap-2 text-gray-300 whitespace-nowrap">
              <Link href="/forks" class="transition duration-200 hidden bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold sm:flex items-center gap-4">
                <GitPullRequestIcon/>Fork Graph
              </Link>
              <Link href="/projects" class="transition duration-200 hidden bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold sm:flex items-center gap-4">
                <CodeIcon/>Projects
              </Link>
              <a href="https://github.com/LuminescentDev" class="transition duration-200 hidden bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold sm:flex items-center gap-4">
                <GithubIcon/>GitHub
              </a>
              <a href="/discord" class="transition duration-200 hidden bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold sm:flex items-center gap-4">
                Discord
              </a>
              <button id="mobile-menu-button" onClick$={() => document.getElementById('mobile-menu')?.classList.toggle('hidden')} class="transition duration-200 bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-2 py-2 rounded-lg text-md font-bold flex sm:hidden">
                <MenuIcon/>
              </button>
            </div>
          </div>
        </div>

        <div id="mobile-menu" class="pointer-events-auto space-y-1 py-4 px-3 justify-center items-center bg-gray-800 rounded-lg border-2 border-gray-700 mt-2 hidden">
          <Link href="/forks" class="transition duration-200 flex md:hidden hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-800 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold items-center gap-4">
            <GitPullRequestIcon/>Fork Graph
          </Link>
          <Link href="/projects" class="transition duration-200 flex sm:hidden hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-800 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold items-center gap-4">
            <CodeIcon/>Projects
          </Link>
          <a href="https://github.com/LuminescentDev" class="transition duration-200 flex sm:hidden hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-800 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold items-center gap-4">
            <GithubIcon/>GitHub
          </a>
          <a href="/discord" class="transition duration-200 hidden bg-gray-900 hover:bg-gray-800 hover:text-white hover:drop-shadow-2xl border-2 border-gray-900 hover:border-gray-700 px-4 py-2 rounded-lg text-md font-bold sm:flex items-center gap-4">
            Discord
          </a>
        </div>
      </div>
    </nav>
  );
});