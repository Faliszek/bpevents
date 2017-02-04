require('../css/main.scss');

document.addEventListener('DOMContentLoaded', function(){
    deleteHtmlMargin();
});

function deleteHtmlMargin(){
    document.getElementsByClassName('no-js')[0].style.marginTop = '0px'
}