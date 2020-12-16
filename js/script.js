// Scrolling on click
function scrollingTbl(x, y) {
    document.getElementById("platinum_package_body").scrollBy(x, y);
    document.getElementById("gold_package_body").scrollBy(x, y);
    document.getElementById("silver_package_body").scrollBy(x, y);
    document.getElementById("bronze_package_body").scrollBy(x, y);
}

$(document).on('click', '.package-item', function () {
    let show = $(this).data('show');
    let c = $(this);

    $(show).removeClass("hide").siblings().addClass("hide");
    $(c).removeClass("hide").addClass("active-package").siblings().removeClass("active-package");

});


/*  Media Menu toggle  */

let menuToggler = document.getElementById('menuToggler');
let menuTogglerLabel = document.getElementById('menuTogglerLabel');

menuToggler.addEventListener('change', function () {
    if (menuToggler.checked) {
        menuTogglerLabel.setAttribute('aria-pressed', 'true');
    } else {
        menuTogglerLabel.setAttribute('aria-pressed', 'false');
    }
});