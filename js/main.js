function copyText(textId) {
    var range = document.createRange();
    range.selectNode(document.getElementById(textId));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}
$('.nav-burger').click(function () {
    $('.main-nav').slideToggle(200)
    if ($('.nav-burger ion-icon').attr('name') == 'reorder-three-outline') {
      $('.nav-burger ion-icon').attr('name', 'close-outline')
    } else {
      $('.nav-burger ion-icon').attr('name', 'reorder-three-outline')
    }
  });