$("#btn-f").hide()

$("p:first").click(function() {
    $(this).hide()
})

$(".card-image").dblclick(function() {
    $(this).hide()
})

$("p").hover(function() {
        $(this).css("color", "green")
    },
    function() {
        $(this).css("color", "black")
    }
)

// $("h1").on({
//     click: function() {
//         $(this).css("color", "blue")
//     },
//     dblclick: function() {
//         $(this).css("color", "yellow")
//     },
//     mouseenter: function() {
//         $(this).css("color", "grey")
//     }
// })

$("h1").on({
    mouseenter: function() {
        $(this).css("background-color", "lightgray")
    },
    mouseleave: function() {
        $(this).css("background-color", "white")
    },
    click: function() {
        $(this).css("background-color", "yellow")
    }
})