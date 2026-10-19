var barang = ['pensil', 'buku', 'penggaris'];

// menampilkan data
function ShowData() {
    var listBarang = document.getElementById('daftar-barang');
    var kosong = document.getElementById('kosong');
    var ringkasan = document.getElementById('ringkasan');

    listBarang.innerHTML = '';

    for (var i = 0; i < barang.length; i++) {
        var linkEdit = '<button type="button" class="btn btn-outline-primary btn-sm" onclick="EditData(' + i + ')">Edit</button>';
        var linkHapus = '<button type="button" class="btn btn-outline-danger btn-sm" onclick="DelData(' + i + ')">Hapus</button>';
        listBarang.innerHTML += '<li class="list-group-item d-flex align-items-center gap-2">' +
            '<span class="flex-grow-1 teks-barang">' + barang[i] + '</span> ' + linkEdit + ' ' + linkHapus + '</li>';
    }

    // teks kosong dan ringkasan
    if (barang.length === 0) {
        kosong.style.display = 'block';
        ringkasan.innerHTML = 'Belum ada barang.';
    } else {
        kosong.style.display = 'none';
        ringkasan.innerHTML = 'Ada ' + barang.length + ' barang.';
    }
}

// menambahkan data
function AddData() {
    var input = document.getElementById('input-barang');
    if (input.value.trim() === '') {
        return;
    }
    // memasukan data ke array
    barang.push(input.value.trim());
    input.value = '';
    ShowData();
}

// mengubah data
function EditData(id) {
    var baru = prompt('Ubah nama barang:', barang[id]);
    if (baru !== null && baru.trim() !== '') {
        // mengganti isi array pada indeks tertentu
        barang[id] = baru.trim();
        ShowData();
    }
}

// menghapus data
function DelData(id) {
    // menghapus elemen dari indeks array
    barang.splice(id, 1);
    ShowData();
}

// tombol Tambah (form) memanggil AddData
document.getElementById('form-tambah').addEventListener('submit', function (e) {
    e.preventDefault();
    AddData();
});

// menjalankan fungsi tampil data
ShowData();