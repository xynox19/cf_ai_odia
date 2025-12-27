async function send() {
  const input = document.getElementById("input");
  const chat = document.getElementById("chat");

  const msg = input.value;
  input.value = "";

  chat.innerHTML += `<div>You: ${msg}</div>`;

  const res = await fetch("/api/chat", {
    method: "POST",
    body: JSON.stringify({
      userId: "demo",
      message: msg
    })
  });

  const data = await res.json();
  chat.innerHTML += `<div>AI: ${data.reply}</div>`;
}
