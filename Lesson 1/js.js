let money =  +prompt ( " Ваш бюджет на месяц? " , ' ' ),
    time =  prompt ( ' Введите дату в формате YYYY-MM-DD ' , ' ' );

let appData = {
	budget : money,
	costs : {},
	nonexpenses : {},
	income : [],
	timeData : time,
	saving :  false
};

//let i = 0;
//while(i < 2) {
//	console.log(i);
//	i++;

//do {
//	console.log(i);
//	i++;
//}
//	while(i < 2);

for (let i = 0; i < 2; i++) {
	let a =  prompt ( " Введите обязательную статью расходов в этом месяце " , ' ' ),
		b =  prompt ( " Во сколько обойдется? " , ' ' );

		if((typeof (a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
		&& a != " " && a.length < 50) {
		console.log ("done");
		appData.nonexpenses[а] = b;
		} else {
			alert(a);
			console.log("Да ты блядь Стив Джобс!");
		};
	
	}
appData.moneyPerDey = appData.budget / 30;

alert('Ежедневный расход: ' + appData.moneyPerDey);

if(appData.moneyPerDey < 100) {
	console.log("Минимальный уровень достатка");
} else if(appData.moneyPerDey > 100 && appData.moneyPerDey < 2000) {
	console.log('Средний уровень достатка');
} else if(appData.moneyPerDey > 2000) {
	console.log('Высокий уровень достатка');
} else {
	console.log('Произошла ошибка');
}

// вроде готово



	


    