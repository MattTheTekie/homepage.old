import { component$, useStore, useClientEffect$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
    const store = useStore({
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
        hour2: 0,
        minute2: 0,
        second2: 0,
        millisecond2: 0,
    });

    useClientEffect$(() => {
        const now = new Date();
        store.hour = now.getHours();
        store.minute = now.getMinutes();
        store.second = now.getSeconds();
        store.millisecond = now.getMilliseconds();
        store.hour2 = now.getHours() * 0.666666666;
        store.minute2 = now.getMinutes() * 1.666666666;
        store.second2 = now.getSeconds() * 1.666666666;
        store.millisecond2 = now.getMilliseconds() * 14.4;
        const update = () => {
            store.millisecond += 20;
            store.millisecond2 += 42;
            if (store.millisecond >= 1000) { store.millisecond = 0; store.second += 1; }
            if (store.millisecond2 >= 1000) { store.millisecond2 = 0; store.second2 += 1; }
            if (store.second >= 60) { store.second = 0; store.minute += 1; }
            if (store.second2 >= 100) { store.second2 = 0; store.minute2 += 1; }
            if (store.minute >= 60) { store.minute = 0; store.hour += 1; }
            if (store.minute2 >= 100) { store.minute2 = 0; store.hour2 += 1; }
            if (store.hour >= 24) { store.hour = 0; }
            if (store.hour2 >= 15.9) { store.hour2 = 0; }
        };
        const tmrId = setInterval(update, 20);
        return () => clearInterval(tmrId);
    });

    return (
        <section class="mx-auto max-w-6xl px-6" style={{ minHeight: 'calc(100dvh - 64px)' }}>
            <h1 class="font-bold text-white text-5xl py-12">
                Zoo
            </h1>
            <h1 class="font-bold text-3xl pb-6">
                If time used multiples of 100 instead of 60
            </h1>
            <p class="w-full text-xl">
                {("0" + Math.floor(store.hour)).slice(-2)}:{("0" + Math.floor(store.minute)).slice(-2)}:{("0" + Math.floor(store.second)).slice(-2)}:{Math.floor(store.millisecond)}<br/>
                {("0" + Math.floor(store.hour2)).slice(-2)}:{("0" + Math.floor(store.minute2)).slice(-2)}:{("0" + Math.floor(store.second2)).slice(-2)}:{Math.floor(store.millisecond2)}
            </p>
        </section>
    );
});

export const head: DocumentHead = {
    title: 'Zoo',
    meta: [
        {
            name: 'description',
            content: 'This is where i test stuff idk'
        },
        {
            property: 'og:description',
            content: 'This is where i test stuff idk'
        },
        {
            name: 'og:image',
            content: 'https://avatars.githubusercontent.com/u/42164502'
        }
    ]
}
