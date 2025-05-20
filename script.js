function saveNameAndRedirect() {
    const name = document.getElementById('nameInput').value.trim();
    if (name) {
      localStorage.setItem('guestName', name);
      window.location.href = "invite.html";
    } else {
      alert("Vui lòng nhập tên!");
    }
  }
  