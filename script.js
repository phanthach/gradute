function saveNameAndRedirect() {
  const name = document.getElementById('nameInput').value.trim();
  if (name) {
    const url = `https://script.google.com/macros/s/AKfycbxV9rfs9VqbzRNclk-Se1hhJjCSNyl3ctxN3wfZbS1ErzCsTpmyMUnjhpsZB9Eqh1qb/exec`;
    
    // Gửi request POST
    fetch(url, {
      method: 'POST',
      body: new URLSearchParams({
        'Name': name
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(response => {
      if (response.ok) {
        console.log('Tên đã được lưu thành công');
        window.location.href = "invite.html"; // Chuyển hướng sau khi lưu
      } else {
        console.log('Lỗi khi gửi dữ liệu');
      }
    })
    .catch(error => console.error('Lỗi mạng:', error));
  } else {
    alert("Vui lòng nhập tên!");
  }
}
