import readlineSync from 'readline-sync';

const getFreeStones = () => {
  const stonesCount = [Number(readlineSync.question('Сколько камней? '))];
  if (!Number.isInteger(stonesCount[0])) {
    console.log('Вы ввели не число. Повторите вызов программы и введите целое числовое значение');
    return;
  }

  let bugsCount = Number(readlineSync.question('Сколько жуков? '));

  if (!Number.isInteger(bugsCount)) {
    console.log('Вы ввели не число. Повторите вызов программы и введите целое числовое значение');
    return;
  }

  let leftFreeStones;
  let rightFreeStones;
  let stonesRemains;
  while (bugsCount > 0) {
    bugsCount -= 1; // жук занимает камень
    // достаем из очереди количество камней и забираем один для жука
    stonesRemains = stonesCount.shift() - 1;
    // делим остаток камней на левую и правую часть
    rightFreeStones = Math.ceil(stonesRemains / 2);
    leftFreeStones = Math.floor(stonesRemains / 2);
    // добавляем полученные части в конец массива
    stonesCount.push(rightFreeStones, leftFreeStones);
  }
  console.log(`Свободные камни слева от последнего жука: ${leftFreeStones}, справа: ${rightFreeStones}`);
};

getFreeStones();
