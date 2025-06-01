<?php
    include("includes/header.php");

    if(isset($_GET['id'])) {
        $id= $_GET['id'];
    } else {
        $id = 0;
    }  
?>

   <div class="main_column" id="main_column">
       <div class="posts_area" id="single-post">
           <?php
                $post = new POST ($con, $userLoggedIn);
                $post->getSinglePost($id);
           ?>
       </div>
   </div>

   