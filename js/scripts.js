$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();

    var sentence1Input = $("input#sentence1").val();
    console.log(sentence1Input);
    // var item2Input = $("input#item2").val();
    // var item3Input= $("input#item3").val();
    // var item4Input = $("input#item4").val();



    var wordArray1 = sentence1Input
    console.log("wordarr1", wordArray1);
    alert(typeof wordArray1);

    var wordArray2 = wordArray1.split(" ");

    console.log("word2", wordArray2);

    var wordArray3 = wordArray2.map(function(words) {
      if (words.length >= 3) {
        return words;
      }
      });// } else if
      //     words.pop();
      // }
      //var filtered = wordArray3.filter(function(words) {
      //  return true;
      //});
      //console.log("filtered", filtered);
      //console.log(filtered);
      //var array4 = wordArray3.filter(Number)
    console.log("word3", wordArray3)

    var wordArray4 = wordArray3.filter(Boolean);
    console.log("word4", wordArray4)



    var wordArray5 = wordArray4.reverse()
    console.log("word5", wordArray5)
    // var listArray3 = listArray2.sort();

    var wordArray6 = wordArray5.join(' ');
    console.log("word6", wordArray6);


    // $(".item1").append(listArray3[0]);
    // $(".item2").append(listArray3[1]);
    // $(".item3").append(listArray3[2]);
    // $(".item4").append(listArray3[3]);
    //
    $(".newSentence").text(wordArray6);
    // $(".this2").text(listArray3[1]);
    // $(".this3").text(listArray3[2]);
    // $(".this4").text(listArray3[3]);



    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);
    // $(".beverage").text(beverageInput);
    // $(".flavor").text(flavor);

    $("#blanks").hide();

    $("#words").show();

    // $("input:radio[name=flavor]:checked").children("value")first();

  });
});
