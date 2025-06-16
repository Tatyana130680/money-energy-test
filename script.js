
document.getElementById("start").addEventListener("click", () => {
  document.getElementById("app").innerHTML = `
    <p>🌀 Вопрос 1: Как ты воспринимаешь деньги?</p>
    <button onclick="next()">1</button>
    <button onclick="next()">2</button>
    <button onclick="next()">3</button>
    <button onclick="next()">4</button>
  `;
});

function next() {
  document.getElementById("app").innerHTML = `
    <p>✨ Твой архетип: Творец</p>
    <p>Ты создаёшь красоту и смысл. Деньги приходят, когда ты проявляешь вдохновение.</p>
    <button onclick="location.reload()">🔁 Пройти ещё раз</button>
  `;
}
