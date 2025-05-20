function saveNameAndRedirect() {
  const name = document.getElementById('nameInput').value.trim();
  if (name) {
    fetch("https://getform.io/f/bronljda", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({ Name: name })  // lưu ý chữ "Name" viết hoa như bạn dùng trong URL query
    })
    .then(res => {
      if (res.ok) {
        console.log("Gửi tên thành công!");
      } else {
        console.error("Lỗi khi gửi tên");
      }
    })
    .catch(err => console.error("Lỗi kết nối:", err));

    localStorage.setItem('guestName', name);
    window.location.href = "invite.html";
  } else {
    alert("Vui lòng nhập tên!");
  }
}
