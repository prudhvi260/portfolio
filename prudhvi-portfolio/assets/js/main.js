// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Copy-to-clipboard buttons
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', async () => {
    const value = btn.getAttribute('data-copy');
    try {
      await navigator.clipboard.writeText(value);
      const old = btn.innerHTML;
      btn.innerHTML = '<i class="bi bi-check2"></i>';
      setTimeout(() => (btn.innerHTML = old), 1200);
    } catch {
      alert('Copy failed. Please copy manually.');
    }
  });
});

// Light/Dark theme toggle using Bootstrap 5.3 color modes
const root = document.documentElement;
const icon = document.getElementById('themeIcon');
const key = 'prefers-theme';

function setTheme(mode) {
  root.setAttribute('data-bs-theme', mode);
  if (icon) icon.className = mode === 'dark' ? 'bi bi-moon-stars' : 'bi bi-sun';
}

const saved = localStorage.getItem(key);
setTheme(saved || 'dark');

document.getElementById('themeToggle')?.addEventListener('click', () => {
  const current = root.getAttribute('data-bs-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
  localStorage.setItem(key, next);
});
