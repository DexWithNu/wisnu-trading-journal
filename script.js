const SUPABASE_URL =
"https://wjlcomwjeqvczywazzcl.supabase.co";

const SUPABASE_KEY =
"sb_publishable_vuafOjr1hweFZLOZ-Zpjeg_JPSddTqG";

const supabase =
window.supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
);

const form =
document.getElementById(
"tradeForm"
);

form.addEventListener(
"submit",
async (e)=>{

e.preventDefault();

const pair =
document.getElementById("pair").value;

const direction =
document.getElementById("direction").value;

const timeframe =
document.getElementById("timeframe").value;

const session =
document.getElementById("session").value;

const pnl =
document.getElementById("pnl").value;

const balanceBefore =
document.getElementById("balanceBefore").value;

const balanceAfter =
document.getElementById("balanceAfter").value;

const reason =
document.getElementById("reason").value;

const { error } =
await supabase
.from("trades")
.insert([{
pair,
direction,
timeframe,
session,
pnl,
balance_before:
balanceBefore,
balance_after:
balanceAfter,
reason
}]);

if(error){
alert("Error save trade");
return;
}

alert("Trade Saved 😎");

form.reset();

});
