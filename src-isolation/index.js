window.__TAURI_ISOLATION_HOOK__ = (payload, opts) => {
  // let's not verify or modify anything, just print the content from the hook
  console.log('Isolation hook fired', payload, opts)
  return payload
}

