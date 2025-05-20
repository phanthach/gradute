function saveNameAndRedirect() {
  const name = document.getElementById('nameInput').value.trim();
  if (name) {
    // Gửi dữ liệu tên lên Getform
    fetch("https://getform.io/f/bronljda", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: name })
    })
    .then(res => {
      if (res.ok) {
        console.log("Gửi tên thành công!");
      } else {
        console.error("Lỗi khi gửi tên");
      }
    })
    .catch(err => console.error("Lỗi kết nối:", err));

    // Lưu tên vào localStorage nếu cần
    localStorage.setItem('guestName', name);

    // Chuyển trang
    window.location.href = "invite.html";
  } else {
    alert("Vui lòng nhập tên!");
  }
}
