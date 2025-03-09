$(function (){
  $('.c-hamburger').click(function (){
    $(this).toggleClass('active')
    $('.l-header__nav').toggleClass('active')
  })
  $('.l-header-nav__list a').click(function (){
   $('.c-hamburger').removeClass('active')
   $('.l-header__nav').removeClass('active')
 })
});