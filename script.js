function saveNameAndRedirect() {
  const name = document.getElementById('nameInput').value.trim();
  if (!name) {
    alert("Vui lòng nhập tên!");
    return;
  }

  const formData = new URLSearchParams();
  formData.append("Name", name);

  fetch("https://script.google.com/macros/s/AKfycbxW-JZgH6oZ5JNU7WWyB-KDLdzvNmbLfgA98XPZY35mukYH6Gp6Kfw5zKYzKr0cf3TS4g/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: formData.toString()
  })
  .then(response => {
    if (response.ok) {
      localStorage.setItem("guestName", name);
      window.location.href = "invite.html";
    } else {
      alert("Gửi dữ liệu thất bại.");
    }
  })
  .catch(error => {
    console.error("Lỗi mạng:", error);
    alert("Đã xảy ra lỗi.");
  });
}
