function saveNameAndRedirect() {
  const name = document.getElementById('nameInput').value.trim();
  if (name) {
    // Lưu vào localStorage
    localStorage.setItem('guestName', name);

    // Gửi về server để lưu vào file
    fetch('https://formspree.io/f/xdkgjyro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name })
    })
    .then(response => {
      if (!response.ok) {
        console.error('Lưu tên thất bại!');
      }
    })
    .catch(err => {
      console.error('Lỗi kết nối server:', err);
    });

    // Chuyển trang
    window.location.href = "invite.html";
  } else {
    alert("Vui lòng nhập tên!");
  }
}
