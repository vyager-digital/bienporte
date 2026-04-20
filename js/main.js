document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('application-form');
  const formWrap = document.querySelector('.application-form');
  const success = document.querySelector('.form-success');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const btn = form.querySelector('.form-submit');
      btn.textContent = 'Enviando...';
      btn.disabled = true;

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });

        if (res.ok) {
          formWrap.classList.add('hidden');
          success.classList.add('visible');
        } else {
          btn.textContent = 'Quero minha vaga';
          btn.disabled = false;
          alert('Ocorreu um erro. Por favor, tente novamente.');
        }
      } catch {
        btn.textContent = 'Quero minha vaga';
        btn.disabled = false;
        alert('Ocorreu um erro. Por favor, tente novamente.');
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
