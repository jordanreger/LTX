import { assert } from "https://deno.land/std@0.126.0/testing/asserts.ts";

Deno.test({
    name: "/ responds with html",
    async fn() {
        const result = await fetch(`https://ltx.deno.dev`);
        const contentType = result.headers.get("Content-Type");
        assert(contentType);
        assert(contentType.includes("text/html; charset=UTF-8"));
        await result.body?.cancel();
    },
});

Deno.test({
    name: "/launches responds with html",
    async fn() {
        const result = await fetch(`https://ltx.deno.dev/launches`);
        const contentType = result.headers.get("Content-Type");
        assert(contentType);
        assert(contentType.includes("text/html; charset=UTF-8"));
        await result.body?.cancel();
    },
});

Deno.test({
    name: "/streams responds with html",
    async fn() {
        const result = await fetch(`https://ltx.deno.dev/streams`);
        const contentType = result.headers.get("Content-Type");
        assert(contentType);
        assert(contentType.includes("text/html; charset=UTF-8"));
        await result.body?.cancel();
    },
});

Deno.test({
    name: "/about responds with html",
    async fn() {
        const result = await fetch(`https://ltx.deno.dev/about`);
        const contentType = result.headers.get("Content-Type");
        assert(contentType);
        assert(contentType.includes("text/html; charset=UTF-8"));
        await result.body?.cancel();
    },
});

Deno.test({
    name: "/wiki responds with html",
    async fn() {
        const result = await fetch(`https://ltx.deno.dev/wiki`);
        const contentType = result.headers.get("Content-Type");
        assert(contentType);
        assert(contentType.includes("text/html; charset=UTF-8"));
        await result.body?.cancel();
    },
});

Deno.test({
    name: "/wiki/test responds with html",
    async fn() {
        const result = await fetch(`https://ltx.deno.dev/wiki/test`);
        const contentType = result.headers.get("Content-Type");
        assert(contentType);
        assert(contentType.includes("text/html; charset=UTF-8"));
        await result.body?.cancel();
    },
});

Deno.test({
    name: "/wiki/test.md responds with html",
    async fn() {
        const result = await fetch(`https://ltx.deno.dev/wiki/test.md`);
        const contentType = result.headers.get("Content-Type");
        assert(contentType);
        assert(contentType.includes("text/html; charset=UTF-8"));
        await result.body?.cancel();
    },
});

Deno.test({
    name: "/bin/logo.svg responds with image/svg+xml",
    async fn() {
        const result = await fetch(`https://ltx.deno.dev/bin/logo.svg`);
        const contentType = result.headers.get("Content-Type");
        assert(contentType);
        assert(contentType.includes("image/svg+xml"));
        await result.body?.cancel();
    },
});

Deno.test({
    name: "/bin/menu.svg responds with image/svg+xml",
    async fn() {
        const result = await fetch(`https://ltx.deno.dev/bin/menu.svg`);
        const contentType = result.headers.get("Content-Type");
        assert(contentType);
        assert(contentType.includes("image/svg+xml"));
        await result.body?.cancel();
    },
});

Deno.test({
    name: "/bin/starship-diagram-back.svg responds with image/svg+xml",
    async fn() {
        const result = await fetch(`https://ltx.deno.dev/bin/starship-diagram-back.svg`);
        const contentType = result.headers.get("Content-Type");
        assert(contentType);
        assert(contentType.includes("image/svg+xml"));
        await result.body?.cancel();
    },
});

Deno.test({
    name: "/bin/cover.svg responds with image/svg+xml",
    async fn() {
        const result = await fetch(`https://ltx.deno.dev/bin/cover.svg`);
        const contentType = result.headers.get("Content-Type");
        assert(contentType);
        assert(contentType.includes("image/svg+xml"));
        await result.body?.cancel();
    },
});