function saveNameAndRedirect() {
    const name = document.getElementById('nameInput').value.trim();
    if (name) {
      localStorage.setItem('guestName', name);

      // Gửi tên về Formspree
      fetch("https://formspree.io/f/xdkgjyro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
          _subject: "Người mới đăng ký!"
        })
      })
      .then(response => {
        if (response.ok) {
          console.log("Gửi thành công!");
        } else {
          console.error("Lỗi từ phía Formspree:", response.status);
        }
      })
      .catch(error => {
        console.error("Lỗi kết nối:", error);
      });

      // Chuyển trang luôn (hoặc chờ vài giây nếu muốn chắc gửi xong)
      window.location.href = "invite.html";
    } else {
      alert("Vui lòng nhập tên!");
    }
  }
