function cekNama() {
	var ceknama = $('#ceknama').val();
    if (ceknama.match(/^[a-zA-Z]+$/) && ceknama.length >= 3) {
        $(location).attr('href',siteurl+'cek/'+ceknama.toLowerCase());
    } else {
        alert('Nama harus berupa abjad a-z saja, tidak boleh ada spasi, min 3 karakter.');
        return false;
    }
}
$(function(){
	$('#ceknama_btn').on('click',function(){
		cekNama();
	});
	$("#ceknama").keyup(function (e) {
	    if (e.keyCode == 13) {
			cekNama();
	    }
	});
});
