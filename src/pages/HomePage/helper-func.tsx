const baseURL = (lat?: number, long?: number): string => {
  if (!lat || !long) {
    return '/weather?q=Amsterdam&units=metric&appid=4fc689c1b5fac243121203a6445d5082'
  }

  return `/weather?lat=${lat}&lon=${long}&units=metric&appid=4fc689c1b5fac243121203a6445d5082`
}

export { baseURL }
