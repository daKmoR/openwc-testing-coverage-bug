export default async function(name) {
  const who = await import('./who')

  return who(name)
}
