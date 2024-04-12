# Calling Tauri APIs from an iframe in isolation mode

Steps to reproduce:

- `npm run tauri dev`
- Inspect element and open the JS console
- Ensure you're running in the context of `www.example.com` (verify with `window.location`)
- Execute `await window.__TAURI_INVOKE__("greet", { name: "From iframe" })`
- See `Greeting `From iframe` from Rust` in your terminal

