import{doOrder,cancelOrder,fillOutForm,
    massageCancel,confirmOrder,body,
    like,dislike,checkboxElements,errorMassage,
    radioValue,cheese,tomato,chicken,mushrooms,sausage} from './variables.js';
import{cookingShowMassage,hideCancelOrderShowMassage,travelShowMassage,delivereShowMassage,
        serviceShowMassage,thankShowMassage} from './function.js';
import{validateCheckbox} from './validate.js';
import{Order}  from './class.js';      
// проверяем при клике на кнопку правильность 
// заполнения формы, если введено менее 3х
// checkbox выводим сообщение об ошибке,
// иначе появляется модальное окно
doOrder.onclick = function () {
    if (!validateCheckbox(checkboxElements)) {
        errorMassage.hidden = false;
        fillOutForm.style.marginBottom = '0px';
        doOrder.removeAttribute('data-toggle')
        return false;
    } else {
        errorMassage.hidden = true;
        fillOutForm.style.marginBottom = '30px';
        doOrder.setAttribute('data-toggle', "modal");
    };

}

// при клике отменить заказ
// прячем форму
// выводим сообщение
// прячем сообщение
// показываем форму
cancelOrder.onclick = function () {

    fillOutForm.hidden = true;/**скрываем форму */
    doOrder.hidden = true;/**скрываем скрываем кнопку */
    massageCancel.hidden = false;
    setTimeout(hideCancelOrderShowMassage, 2000)
}
// при клике подтвердить формируем заказ и добавляем 
// его в масив заказов,последовательно выводим сообщения
confirmOrder.onclick = function () {

    Order.describeOrder({
        small: radioValue == 'small',
        midle: radioValue == 'midle',
        big: radioValue == 'big',
        cheese: cheese.checked == true,
        tomato: tomato.checked == true,
        chicken: chicken.checked == true,
        mushrooms: mushrooms.checked == true,
        sausage: sausage.checked == true
    })

    fillOutForm.hidden = true;/**скрываем форму */
    doOrder.hidden = true;/**скрываем скрываем кнопку */
    body.classList.add('center')/**устанавливаем позицию вывода сообщений по центру */
    setTimeout(cookingShowMassage, 1000);/**выводим сообщения */
    setTimeout(travelShowMassage, 3000);
    setTimeout(delivereShowMassage, 6000);
    setTimeout(serviceShowMassage, 9000);

}
like.onclick = function () {

    setTimeout(thankShowMassage, 500);
}
dislike.onclick = function () {
    setTimeout(thankShowMassage, 500);
}



