
<?php
include "./inc/doctype.inc";
include "./inc/topelement.inc";
include "./inc/whichPage.php";
?>
  <head>
<?php 
include "./inc/title.php";
include "./inc/metas.inc";
include "./inc/styles.inc"; ?>
  </head>
  <body>
    <div id="container">
      <div id="container-inner">
<?php include "./inc/header.inc"; ?>
        <div id="wrapper">
<?php include"./inc/content.php"; ?>
          </div>
<?php 
include "./inc/navigation.php";
?>

      </div>
<?php include"./inc/footer.inc"; ?>
    </div>
  </body>
</html>
