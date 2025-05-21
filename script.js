function saveNameAndRedirect() {
  const name = document.getElementById('nameInput').value.trim();
  if (name) {
    // Tạo form data
    const formData = new FormData();
    formData.append("Name", name);

    // Gửi POST request
    fetch("https://getform.io/f/bronljda", {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (response.ok) {
        console.log("Gửi dữ liệu thành công");
      } else {
        console.log("Lỗi khi gửi dữ liệu");
      }
    })
    .catch(error => console.error("Lỗi mạng:", error));

    // Lưu vào localStorage và chuyển trang
    localStorage.setItem("guestName", name);
    window.location.href = "invite.html";
  } else {
    alert("Vui lòng nhập tên!");
  }
}
