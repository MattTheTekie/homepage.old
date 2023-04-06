import { component$, Slot } from '@builder.io/qwik';
import { Link, useNavigate } from '@builder.io/qwik-city';

import { InDiscord, InGithub, InMenu, InCode, InGitFork } from '@qwikest/icons/iconoir';
import Logo from '~/components/elements/Logo';

export default component$(() => {
  return (
    <Nav>
      <MainNav>
        <NavButton href="/forks" extraClass="hidden xl:flex gap-2">
          <InGitFork class="text-2xl" />
          Fork Graph
        </NavButton>
        <NavButton href="/projects" extraClass="hidden xl:flex gap-2">
          <InCode class="text-2xl" />
          Projects
        </NavButton>
        <NavButton external icon href="https://github.com/LuminescentDev" title="GitHub" extraClass="hidden xl:flex">
          <InGithub />
        </NavButton>
        <NavButton icon href="/discord" title="Discord" extraClass="hidden xl:flex">
          <InDiscord />
        </NavButton>
        <button id="mobile-menu-button" type="button" title="Menu" onClick$={() => {
          const classList = document.getElementById('mobile-menu')?.classList;
          if (classList?.contains('hidden')) classList.replace('hidden', 'flex');
          else classList?.replace('flex', 'hidden');
        }} class="transition duration-200 ease-in-out hover:bg-gray-800 hover:text-white px-4 py-2 rounded-lg text-3xl xl:hidden">
          <InMenu />
        </button>
      </MainNav>
      <MobileNav>
        <NavButton mobile href="/forks" extraClass="flex xl:hidden gap-2">
          <InGitFork class="text-2xl" />
          Fork Graph
        </NavButton>
        <NavButton mobile href="/forks" extraClass="flex xl:hidden gap-2">
          <InCode class="text-2xl" />
          Projects
        </NavButton>
        <div class="flex flex-row">
          <NavButton external mobile icon href="https://github.com/LuminescentDev" title="GitHub" extraClass="flex xl:hidden">
            <InGithub />
          </NavButton>
          <NavButton mobile icon href="/discord" title="Discord" extraClass="flex xl:hidden">
            <InDiscord />
          </NavButton>
        </div>
      </MobileNav>
    </Nav>
  );
});

export const Nav = component$(() => {
  return (
    <nav class="z-20 fixed top-0 w-screen py-2 bg-gray-900/70 backdrop-blur-xl">
      <div class="mx-auto max-w-7xl px-4 lg:px-6">
        <Slot />
      </div>
    </nav>
  );
});

export const Brand = component$(() => {
  return (
    <div class="flex flex-1 items-center justify-start">
      <Link href="/" class="transition duration-200 ease-in-out text-gray-300 hover:bg-gray-800 hover:text-white drop-shadow-2xl px-3 pt-3 pb-2 rounded-lg text-lg flex items-center whitespace-nowrap">
        <div style="filter: drop-shadow(0 0 0 #DD6CFF);" class="h-8 w-32">
          <div style="filter: drop-shadow(0 0 1rem #CB6CE6);">
            <Logo/>
          </div>
        </div>
      </Link>
    </div>
  );
});

export const MainNav = component$(() => {
  return (
    <div class="relative flex h-16 items-center justify-between">
      <Brand/>
      <div class="flex flex-1 items-center justify-end">
        <div class="flex gap-2 text-gray-300 whitespace-nowrap">
          <Slot/>
        </div>
      </div>
    </div>
  );
});

export const MobileNav = component$(() => {
  return (
    <div id="mobile-menu" class="gap-4 py-4 px-3 bg-black rounded-lg mt-2 hidden flex-col xl:hidden">
      <Slot />
    </div>
  );
});

export const NavButton = component$(({ href, title, icon, external, extraClass }: any) => {
  const nav = useNavigate();
  return <>
    {external &&
      <a href={href} title={title} class={`group transition duration-200 ease-in-out ${extraClass} hover:bg-gray-800 hover:text-white px-4 py-2 rounded-lg ${icon ? 'text-3xl' : ''} items-center`}>
        <Slot />
      </a>
    }
    {!external &&
      <button onClick$={() => { document.getElementById('mobile-menu')?.classList.replace('flex', 'hidden'); nav(href); }} title={title} class={`group transition duration-200 ease-in-out ${extraClass} hover:bg-gray-800 hover:text-white px-4 py-2 rounded-lg ${icon ? 'text-3xl' : ''} items-center`}>
        <Slot />
      </button>
    }
  </>;
});