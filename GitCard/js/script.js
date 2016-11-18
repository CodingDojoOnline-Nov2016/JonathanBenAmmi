$(document).ready(function(){
    console.log("working")

    $("form").submit(function(e){
        console.log(e)
        e.preventDefault()
        var fields = {
            "firstName": $('#first-name').val(),
            "lastName": $('#last-name').val(),
            "description": $('#description').val()
        }
        var $ele = $('<div></div>')
        $ele.html("<h2>"+ fields.firstName + " " + fields.lastName + "</h2><p>"+ fields.description + "</p>")
        $(".cards").append($ele)
        $('input:first-child, input:nth-child(2), textarea').val(null)
        console.log(typeof null)

        // return false
    })

    $("div.cards").on("click", "h2", function(){
        $(this).siblings().toggle("slow")
    })
})
