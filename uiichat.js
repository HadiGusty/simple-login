function getData(form){
	var konfirmasi = confirm("Apakah anda yakin ?")
	if (konfirmasi == true) {
	 	if (form.nim.value == 0) {
			alert("Kolom NIM wajib diisi");
			form.nama.focus();
			form.nama.select();
			return false;
		}
	   		if (form.nim.value.length !=8) {
				alert("NIM harus 8 digit");
				form.nim.focus();
				form.nim.select();
				return false;
			}
		if (form.nama.value == "") {
			alert("Kolom Nama wajib diisi");
			form.nama.focus();
			form.nama.select();
			return false;
		}
		if (form.nohp.value == 0) {
			alert("Kolom No Hp wajib diisi");
			form.nohp.focus();
			form.nohp.select();
			return false;
		}
			if (form.nohp.value.length != 12 ) {
				alert("Np Hp harus 12 digit");
				form.nohp.focus();
				form.nohp.select();
				return false;
			}
		if (form.pass.value == "") {
			alert("Kolom Password wajib diisi");
			form.pass.focus();
			form.pass.select();
			return false;
		} 
		if (form.ulangi.value == "") {
			alert("Kolom Ulangi Password wajib diisi");
			form.ulangi.focus();
			form.ulangi.select();
			return false;
		}
	 		if (form.ulangi.value != form.pass.value) {
				alert("Password tidak sesuai");
				form.ulangi.focus();
				form.ulangi.select();
				return false;
			}
	else{
		document.getElementById("selamat").innerHTML = "Selamat "+form.nama.value+", anda telah terdaftar di UIIChat";
	return false;
	}
	}
}
