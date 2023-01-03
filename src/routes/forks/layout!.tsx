import { component$, Slot } from '@builder.io/qwik';
import Header from '../../components/Nav';

export default component$(() => {
  return (
    <main>
      <Header />
      <section class="pt-16 bg-black">
        <Slot />
      </section>
    </main>
  );
});
