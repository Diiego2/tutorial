function mostraraletra() { alert('hizo clic!'); }

function hacerclic() { document.getElementsByTagName('input')[0].onclick = mostraraletra; }

window.onload = hacerclic;