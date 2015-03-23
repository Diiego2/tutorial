function mostraraletra() { alert('hizo clic!'); }

function hacerclic() { document.getElementsByTagName('input')[2].onclick = mostraraletra; }

window.onload = hacerclic;