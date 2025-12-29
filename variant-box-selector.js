(function () {
  document.querySelectorAll('[id^="vbox-root-"]').forEach(root => {
    const cards = Array.from(root.querySelectorAll('.vbox-card'));
    if (!cards.length) return;

    function activate(card) {
      cards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');

      const variantId = card.dataset.variantId;

      document.querySelectorAll('form[action*="/cart/add"]').forEach(form => {
        let idInput = form.querySelector('input[name="id"]');
        if (!idInput) {
          idInput = document.createElement('input');
          idInput.type = 'hidden';
          idInput.name = 'id';
          idInput.className = 'vbox-hidden-id';
          form.appendChild(idInput);
        }
        idInput.value = variantId;
      });
    }

    cards.forEach(card => {
      card.addEventListener('click', () => {
        if (card.dataset.available === "false") return;
        activate(card);
      });
    });

    const defaultCard =
      cards.find(c => c.dataset.available === "true") || cards[0];
    activate(defaultCard);
  });
})();
