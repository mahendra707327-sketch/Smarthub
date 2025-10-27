// script.js - small helpers
function submitForm(e){
  e.preventDefault();
  const name = document.getElementById('name').value || 'Friend';
  const email = document.getElementById('email').value || '';
  const msg = document.getElementById('message').value || '';
  const status = document.getElementById('formStatus');
  status.textContent = 'Thanks ' + name + '! We received your message. (Sample response — no backend)';
  // clear fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
  // If you want, integrate Formspree or Netlify Forms — I can add that.
}
document.addEventListener('click', function(e){
  if(e.target.matches('.btn-outline') || e.target.matches('.link')){ e.preventDefault(); window.location.href = e.target.getAttribute('href'); }
}, false);
