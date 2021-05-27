<?php
global $whichPage;
$fileName= basename($PHP_SELF);
$whichInclude = "./inc/".ereg_replace(".php$" , ".htmlf", $fileName);

if ($fileName != "index.php") {
$name2words = ucwords(ereg_replace("-", " ", $fileName));
$whichPage=  ereg_replace(".php$" , "", $name2words);
if ($whichPage== "Danzarin") { $whichPage= "Danzar&iacute;n"; }
if ($whichPage== "Cortina1") { $whichPage= "Cortina #1"; }
if ($whichPage== "Cortina2") { $whichPage= "Cortina #2"; }
if ($whichPage== "Cortina3") { $whichPage= "Cortina #3"; }
}
else {
$whichPage="Here we go";
}

?>