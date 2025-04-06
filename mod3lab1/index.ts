function loadUniversityData(url: string): void {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onload = function () {
        if (xhr.status === 200) {
            try {
                const data = JSON.parse(xhr.responseText);
                console.log("Данные университета: ", data);
                alert("Данные успешно загружены! Проверьте консоль для просмотра.");
            } catch (error) {
                console.error("Ошибка парсинга данных:", error);
                alert("Возникла ошибка при обработке данных.");
            }
        } else {
            console.error("Ошибка загрузки данных:", xhr.status, xhr.statusText);
            alert("Не удалось загрузить данные: " + xhr.statusText);
        }
    };

    xhr.onerror = function () {
        console.error("Сетевая ошибка");
        alert("Сетевая ошибка. Попробуйте еще раз.");
    };

    xhr.send();
}

loadUniversityData("data.json");
loadUniversityData("invalid-url.json");