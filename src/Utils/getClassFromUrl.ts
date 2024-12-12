export default function getClassFromUrl(): string {
  const url = window.location.pathname;
  if (url === '/') return 'wapp-contact'

  const urlParts = url.split('/');
  return `${'wapp'}-${urlParts[urlParts.length - 1]}`;
}