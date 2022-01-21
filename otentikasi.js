function validasi() {
  var user = document.getElementById("username").value;
  var user = document.getElementById("password").value;
  if (user == "" && pass == "") {
    alert("Silakan Masukkan Username / Password dengan Benar");
    return false;
  }
  else if (user == "admin" && pass == "admin") {
    alert('Anda berhasil login');
    window.location = "admin.html";
    return false;
  }
  else {
    alert("Silakan Masukkan Username / Password dengan Benar");
  }
}