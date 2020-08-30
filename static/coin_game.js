let coins= [];

function refresh_plot(){
    let coins_html = "";
    coins.forEach(function (coin) {
        coins_html += "<img src='static/" + coin + ".jpg' width='100'>";
    });
    $("#coin_canvas").html(coins_html);
}

function add_coin(coin){
    console.log(coin);
    coins.push(coin);
    refresh_plot();
}

function pop_coins(){
    coins.pop();
    refresh_plot();
}

function reset_coins(reset_target=true){
    coins = [];
    if (reset_target) {
        coin_range = $("#select_coin_range").val().split(";");
        let min = coin_range[0];
        let max = coin_range[1];    // In euros
        console.log("Val es " + String(coin_range));
        console.log("Min es " + String(min));
        console.log("Max es " + String(max));
        random_number = Math.max(Math.random() * (max - min) + min, min);
        $("#target_coins").val(Number(random_number).toFixed(2) + "€");
    }
    refresh_plot();
}

function check_coins(){
    let sum = 0;
    coins.forEach(function (coin) {
        sum += parseInt(coin) / 100;
    });
    target_value = $("#target_coins").val();
    console.log("La suma es " + String(sum) + "€ y el objetivo era: " + String(target_value));
    if (target_value == Number(sum).toFixed(2) + "€") {
        $("#modal_ok").modal(true);
        reset_coins();
    }else{
        $("#modal_no_ok").modal(true);
    }
}


$( document ).ready(function() {
    reset_coins();
});

