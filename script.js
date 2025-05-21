function saveNameAndRedirect() {
  const name = document.getElementById('nameInput').value.trim();
  if (name) {
    // Thêm tham số Name vào URL
    const url = `https://script.google.com/macros/s/AKfycbxV9rfs9VqbzRNclk-Se1hhJjCSNyl3ctxN3wfZbS1ErzCsTpmyMUnjhpsZB9Eqh1qb/exec?Name=${encodeURIComponent(name)}`;
    
    // Gửi request POST không có body, chỉ có params trên URL
    fetch(url, {
      method: 'POST'
    })
    .then(response => {
      if (response.ok) {
        console.log('Tên đã được lưu thành công');
        window.location.href = "invite.html";
      } else {
        console.log('Lỗi khi gửi dữ liệu');
      }
    })
    .catch(error => console.error('Lỗi mạng:', error));
  } else {
    alert("Vui lòng nhập tên!");
  }
}
