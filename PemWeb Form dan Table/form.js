document.addEventListener('DOMContentLoaded', function() {
    const formContainer = document.getElementById('form-container');

    // HTML structure untuk form dan tabel
    formContainer.innerHTML = `
        <div class="container">
            <h2>Form Input to Table</h2>
            <form id="myForm">
                <label for="name">Nama:</label><br>
                <input type="text" id="name" name="name"><br><br>

                <label for="nim">NIM:</label><br>
                <input type="text" id="nim" name="nim"><br><br>

                <label for="class">Kelas:</label><br>
                <input type="text" id="class" name="class"><br><br>

                <label for="address">Alamat:</label><br>
                <input type="text" id="address" name="address"><br><br>

                <button type="submit" id="submitBtn">Submit</button>
            </form>

            <h2>Submitted Data</h2>
            <table id="dataTable">
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>NIM</th>
                        <th>Kelas</th>
                        <th>Alamat</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    `;

    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const nimInput = document.getElementById('nim');
    const classInput = document.getElementById('class');
    const addressInput = document.getElementById('address');
    const dataTable = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

    // Event 'focus' ketika input mendapatkan fokus
    nameInput.addEventListener('focus', function() {
        console.log('Nama field is focused');
    });

    // Event 'blur' ketika input kehilangan fokus
    addressInput.addEventListener('blur', function() {
        console.log('Alamat field lost focus');
    });

    // Event 'change' ketika nilai input berubah
    nimInput.addEventListener('change', function() {
        console.log(`NIM changed to: ${nimInput.value}`);
    });

    // Event 'submit' untuk menambahkan data ke tabel
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah reload halaman secara otomatis

        const name = nameInput.value;
        const nim = nimInput.value;
        const kelas = classInput.value;
        const address = addressInput.value;

        // Validasi sederhana: memastikan semua field terisi
        if (name === '' || nim === '' || kelas === '' || address === '') {
            alert('Semua field harus diisi!');
            return;
        }

        // Menambahkan data ke tabel
        const newRow = dataTable.insertRow();

        const nameCell = newRow.insertCell(0);
        const nimCell = newRow.insertCell(1);
        const classCell = newRow.insertCell(2);
        const addressCell = newRow.insertCell(3);

        nameCell.textContent = name;
        nimCell.textContent = nim;
        classCell.textContent = kelas;
        addressCell.textContent = address;

        // Reset form setelah submit
        form.reset();

        console.log('Form submitted successfully and data added to the table');
    });

    // Event tambahan: klik tombol submit
    document.getElementById('submitBtn').addEventListener('click', function() {
        console.log('Submit button clicked');
    });
});
