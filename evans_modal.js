var modal_frm = document.getElementById('evans_modal');
var cards = document.querySelectorAll("#emodal");
var evans_modal_content = '<div class="evans_modal_content"><img id="modaled" src="alt" alt=""></div>';
for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    card.onclick = function() {
        if (this.id.indexOf('emodal') >= 0) {
            var modal_img = this.getElementsByTagName("img")[0].src;
            console.log(modal_img);
            modal_frm.innerHTML = evans_modal_content;
            var imgSrc = document.getElementById('modaled').src = modal_img;
            modal_frm.classList.toggle('active_modal');


        } else {
            this.classList.add("block");
            this.classList.remove("rotated");
        }
    };
}
modal_frm.onclick = function() {
    modal_frm.classList.toggle('active_modal');
}