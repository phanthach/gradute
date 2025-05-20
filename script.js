function saveNameAndRedirect() {
  const name = document.getElementById('nameInput').value.trim();
  if (name) {
    const url = `https://getform.io/f/bronljda?Name=${name}`;

  // Gửi request GET
  fetch(url)
    .then(response => {
      if (response.ok) {
        console.log('Gửi dữ liệu thành công');
      } else {
        console.log('Lỗi khi gửi dữ liệu');
      }
    })
    .catch(error => console.error('Lỗi mạng:', error));
} else {
  console.log('Không có tên trong localStorage');
  }

    localStorage.setItem('guestName', name);
    window.location.href = "invite.html";
  } else {
    alert("Vui lòng nhập tên!");
  }
}
