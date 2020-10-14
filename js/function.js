import{doOrder,cancelOrder,fillOutForm,
    massageCancel,confirmOrder,cooking,body,service,
    like,dislike,checkboxElements,errorMassage,
    radioValue,cheese,tomato,chicken,mushrooms,sausage} from './variables.js';
function cookingShowMassage() {
    cooking.hidden = false;
}
function hideCancelOrderShowMassage(){
    massageCancel.hidden=true;
    fillOutForm.hidden = false;/**показываем форму */
    doOrder.hidden = false;/**показываем скрываем кнопку */
}
function travelShowMassage() {
    cooking.innerHTML = 'курьер забрал пиццу';
    cooking.style.background = 'yellow'
}
function delivereShowMassage() {
    cooking.innerHTML = 'заказ доставлен';
    cooking.style.background = 'burlywood'
}
function serviceShowMassage() {
    cooking.hidden = true;
    service.hidden = false;

}
function thankShowMassage() {
    service.hidden = true;
    body.innerHTML = '<b>спасибо за ваш ответ<b>!'
}
export{cookingShowMassage,hideCancelOrderShowMassage,travelShowMassage,delivereShowMassage,
    serviceShowMassage,thankShowMassage};