function saveNameAndRedirect() {
  const name = document.getElementById('nameInput').value.trim();
  if (name) {
    localStorage.setItem('guestName', name);

    // Gửi tên qua Formspree
    fetch("https://formspree.io/f/xdkgjyro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name
      })
    }).then(response => {
      if (response.ok) {
        console.log("Đã gửi tên đến Formspree");
      } else {
        console.error("Lỗi khi gửi đến Formspree");
      }
    }).catch(error => {
      console.error("Lỗi kết nối:", error);
    });

    window.location.href = "invite.html";
  } else {
    alert("Vui lòng nhập tên!");
  }
}
