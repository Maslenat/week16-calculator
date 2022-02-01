let option = document.createElement("option");
let model = document.getElementById('model');
model.appendChild(option);
option.text = "Модель";

const choose = () => {
    const marka = document.getElementById('marka').value;
    const toyota = [
        [100, 'Corolla'],
        [150, 'Vista'],
        [120, 'RAV-4']
    ];
    const subaru = [
        [200, 'Forester'],
        [160, 'XV'],
        [150, 'Legasy']
    ];
    const honda = [
        [180, 'HRV'],
        [120, 'Accord'],
        [200, 'CRV']
    ];

    let massivModels = [];
    let selectModels = document.getElementById('model');
    selectModels.innerHTML = '';


    if (marka == "marka") {
        selectModels.disabled = true;
        let option = document.createElement("option");
        let model = document.getElementById('model');
        model.appendChild(option);
        option.text = "Модель";
        return;
    } else if (marka == "toyota") {
        massivModels = [...toyota];
    } else if (marka == "subaru") {
        massivModels = [...subaru];
    } else if (marka == "honda") {
        massivModels = [...honda];
    }

    selectModels.disabled = false

    for (const val of massivModels) {
        let option = document.createElement("option");
        option.value = val[0];
        option.text = val[1];
        selectModels.appendChild(option);
    }

}

document.getElementById('marka').onchange = choose;

document.getElementById('calc').onclick = function () {

    const marka2 = document.getElementById('marka').value;

    if (marka2 == "marka") {
        document.getElementById('summa').innerHTML = "";
        return;
    } else {
        const initialPrice = +document.getElementById('model').value;
        const agePrice = +document.querySelectorAll('input[name=age]:checked')[0].value;
        const salon = document.getElementById('salon');
        const salonPrice = salon.checked ? salon.value : 0;
        const klimat = document.getElementById('klimat');
        const klimatPrice = klimat.checked ? klimat.value : 0;
        const multi = document.getElementById('multi');
        const multiPrice = multi.checked ? multi.value : 0;

        document.getElementById('summa').innerText = `Итого ${initialPrice+agePrice+Number(salonPrice)+Number(klimatPrice)+Number(multiPrice)} рублей`;
        document.getElementById('summa').classList.add("summa-container");

    }
}

const chooseMarka = () => {
    const marka = document.getElementById('marka').value;
    if (marka2 == "marka") {
        document.getElementById('summa').innerHTML = "";
    }

}