document.addEventListener('DOMContentLoaded', () => {

  // Append Meta _fbc click ID to signup CTAs for cross-domain attribution
  function getCookie(name) {
    const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
    return match ? decodeURIComponent(match[1]) : null;
  }

  const fbc = getCookie('_fbc') || new URLSearchParams(window.location.search).get('fbclid');

  if (fbc) {
    document.querySelectorAll('a[href*="analise.bienporte.com/auth"]').forEach(a => {
      const url = new URL(a.href);
      url.searchParams.set('_fbc', fbc);
      a.href = url.toString();
    });
  }

});
