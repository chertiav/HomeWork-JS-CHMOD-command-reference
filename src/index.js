const fromHTML = Number (prompt('Введите цифру от 0 до 7'));

if (isNaN(fromHTML)){
    console.log('Введите цифру от 0 до 7')
} else switch (fromHTML) {
    case 0 : {
        console.log('никаких прав');
        break;
    }
    case 1 : {
        console.log('только выполнение');
        break;
    }
    case 2 : {
        console.log('только запись');
        break;
    }
    case 3 : {
        console.log('выполнение и запись');
        break;
    }
    case 4 : {
        console.log('только чтение');
        break;
    }
    case 5 : {
        console.log('чтение и выполнение');
        break;
    }
    case 6 : {
        console.log('чтение и запись');
        break;
    }
    case 7 : {
        console.log('чтение запись и выполнение');
        break;
    }
    default: {
        console.log('Вы ввели число не в диапозоне от 0 до 7')
    }
}
