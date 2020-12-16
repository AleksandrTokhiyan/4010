const ls = localStorage.getItem("selected");
let selected = false;
let list = document.querySelectorAll(".list"),
    content = document.querySelector(".user-message-content"),
    open = document.querySelector(".open a");

//process
function process() {
    if (ls != null) {
        selected = true;
        click(list[ls], ls);
    }
    if (!selected) {
        click(list[0], 0);
    }

    list.forEach((l, i) => {
        l.addEventListener("click", function () {
            click(l, i);
        });
    });

    try {
        document.querySelector(".list.active").scrollIntoView(true);
    } catch {
    }

}

process();

//list click
function click(l, index) {
    list.forEach(x => {
        x.classList.remove("active");
    });
    if (l) {
        l.classList.add("active");
        document.querySelector("#chatBox-users-messages").classList.remove("opened");
        open.innerText = "UP";
        const
            user = l.querySelector(".user").innerText;
        content.querySelector(".info .user").innerHTML = user;
        document.querySelector(".message-wrap").scrollTop = document.querySelector(".message-wrap").scrollHeight;
        localStorage.setItem("selected", index);
    }
}

open.addEventListener("click", (e) => {
    const sidebar = document.getElementById("chatBox-users-messages");
    sidebar.classList.toggle("opened");
    if (sidebar.classList.value == 'opened')
        e.target.innerText = "DOWN";
    else
        e.target.innerText = "UP";
});


// Scrolling on click
function listWrapScroll(x, y) {
    document.getElementById("listWrapScrolling-effect").scrollBy(x, y);
}

function messageWrapScroll(x, y) {
    document.getElementById("messageWrap-effect").scrollBy(x, y);
}



// jQuery

$(document).on('click', '.individual-message', function () {
    let show = $(this).data('show');
    let c = $(this);

    $(show).removeClass("hide").siblings().addClass("hide");
    $(c).removeClass("hide").addClass("active").siblings().removeClass("active");

});