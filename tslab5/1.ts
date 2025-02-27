function getCurrentDate(): void {
    console.log(Date.now());
    }
    getCurrentDate();

    window.onload = function() {
        setTimeout(getCurrentDate, 10000);
    };

    function createCounter(): () => void {
        let count = 0;
        
        return function(): void {
            count++;
            console.log(`Текущий счетчик: ${count}`);
        };
    }
    
    const counter = createCounter();
    counter();
    counter();
    counter();