$(function () {
    $('.header__toggle-menu').click(function () {
        $('.menu_payment-page').toggleClass('menu_payment-page_show');
        $('.shadow').toggleClass('header__shadow_show');
    });

    $('.bank-card-form__input-number_field').mask('999');
});