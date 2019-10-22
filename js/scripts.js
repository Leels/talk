$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Meow?</li>");
    $("ul#webpage").prepend("<li>Bow-wow!</li>");
    $("ul#user").children("li").first().click(function() {
  $(this).remove();
});
$("ul#webpage").children("li").first().click(function() {
  $(this).remove();
});
});

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Hiiissssssssss</li>");
    $("ul#webpage").prepend("<li>Whimper whimper</li>");
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Puurrrrrr</li>");
    $("ul#webpage").prepend("<li>Silence</li>");
  });
});
