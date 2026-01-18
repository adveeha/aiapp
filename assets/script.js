// Basic contact form script. Replace the FORM_ENDPOINT with your Formspree endpoint.
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('year').textContent = new Date().getFullYear();

  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');

  // Replace this with your Formspree endpoint: https://formspree.io/f/yourId
  const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    msg.textContent = 'Sending…';
    const data = new FormData(form);

    try {
      // Try send to Formspree; if not configured, fallback to mailto link
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data
      });

      if (res.ok) {
        form.reset();
        msg.textContent = 'Thanks — your message was sent.';
      } else {
        // fallback behavior
        msg.innerHTML = 'Could not send the message via the server. You can email <a href="mailto:adveeha@gmail.com">adveeha@gmail.com</a>.';
      }
    } catch (err) {
      msg.innerHTML = 'Network error. You can email <a href="mailto:adveeha@gmail.com">adveeha@gmail.com</a>.';
    }
  });
});