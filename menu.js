// On attend que la page soit prête avant de chercher les éléments.
document.addEventListener('DOMContentLoaded', function () {
  // On récupère tous les boutons burger du site.
  var toggles = document.querySelectorAll('.nav-toggle');

  // On parcourt chaque bouton pour lui donner le même comportement.
  toggles.forEach(function (toggle) {
    // On lit l'identifiant du menu à ouvrir depuis aria-controls.
    var targetId = toggle.getAttribute('aria-controls');

    // On cherche le menu correspondant dans la page.
    var targetMenu = document.getElementById(targetId);

    // Si le menu n'existe pas, on arrête ici pour éviter une erreur.
    if (!targetMenu) {
      return;
    }

    // Au clic, on ouvre ou on ferme le menu mobile.
    toggle.addEventListener('click', function () {
      // On vérifie si le menu est déjà ouvert.
      var isOpen = targetMenu.getAttribute('aria-hidden') === 'false';

      // Si le menu est ouvert, on enlève la classe.
      if (isOpen) {
        targetMenu.setAttribute('aria-hidden', 'true');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        // Sinon, on change l'attribut pour l'afficher.
        targetMenu.setAttribute('aria-hidden', 'false');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });
  });
});
