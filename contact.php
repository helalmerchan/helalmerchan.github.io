
<?php 
    
    $missing = array();
    $error = array();

    if (isset($_POST['send'])) {
                        // PUT THE EMAIL ID OF RECEIVER
        $to         =   'holly@syner-g.ca'; //holly@syner-g.ca
        $subject    =   'A message from your website contact form.';

        $required   =   array('name', 'email', 'message');
        $expected   =   array('name',  'email', 'phone', 'message');

                        // PUT THE EMAIL ID OF YOUR SERVER
        $header     =   "From: Syner-G Massage Therapy<holly@syner-g.ca>\r\n"; //holly@syner-g.ca
        $header     .=  'Content-Type: text/plain; charset=utf-8';

        require('./inc/processmail.php');

    }
        
?>
   
<div class="container-white">

    <?php include './inc/header.php' ; ?>

    
        <!--Section Contact -->
        <section class="services contact section-contents">
            <h5 class="sr-only">Section Main</h5>
            <div class="container contact-form">
                <div class="row">  
                    <div class="col-md-6">
                        <?php if ($_POST && $suspect) { ?>
                            <h3 class="warning">This email can not be sent$</h3>   
                        <?php } 

                        elseif ($missing || $error) { ?>
                            <h3 class="warning">Please fill out all of the required fields!</h3>   
                        <?php } ?>

                        <h4>Send Us A Message</h4>                        

                        <form action="" method="post" id="form-entry" >
                            <ul class="list-unstyled">
                                <li>
                                    <!-- <label for="Name">Name:</label> -->

                                    <?php if ($missing && in_array('name', $missing)) { ?>
                                        <span class="warning">Please enter your name.</span>
                                    <?php } ?>                                    
                                    <input type="text" id="name" name="name" placeholder="Name" <?php if (isset($name)) {
                                       echo 'value="' . htmlentities($name, ENT_COMPAT, 'UTF-8' ) . '"';

                                    } ?> required>
                                                                        
                                </li>
                               
                                <li>
                                    <!-- <label for="email">Email: </label> -->
                                    <?php 
                                    if ($missing && in_array('email', $missing)) { ?>
                                        <span class="warning">Please enter your valid email id.</span>
                                    <?php } 
                                    elseif (isset($error['email'])) { ?>
                                        <span class="warning">Invalid email address.</span>
                                    <?php } ?>

                                    <input type="email" id="email" name="email" placeholder="Email" <?php if (isset($email)) {
                                       echo 'value="' . htmlentities($email, ENT_COMPAT, 'UTF-8' ) . '"';
                                    } ?> required>
                                    
                                </li>

                                <li>
                                    <!-- <label for="phone">Phone Number</label> -->
                                    <input type="text" id="phone" name="phone" placeholder="Phone" <?php if (isset($phone)) {
                                       echo 'value="' . htmlentities($phone, ENT_COMPAT, 'UTF-8' ) . '"';

                                    } ?>>
                                </li>

                                <li>
                                    <!-- <label for="message">Message</label> -->
                                    <?php if ($missing && in_array('message', $missing)) { ?>
                                        <span class="warning">Please enter your message.</span>
                                    <?php } ?>
                                    <textarea name="message" id="message" placeholder="Message" required><?php if(isset($message)){echo htmlentities($message,ENT_COMPAT,'UTF-8');} ?></textarea>
                                    
                                </li>
                                <li>
                                    <input type="submit" name="send" value="Send">
                                </li>
                            </ul>
                            <span>
                                <?php 
                                    if(isset($mailsent) && $mailsent) {                                        
                                        echo '<h3 class="seccess">Thanks! Your message has been sent.</h3>';
                                    } 
                                ?>
                            </span>
                        </form>                        
                    </div>

                    <div class="col-md-5 col-md-offset-1">
                        <h4>Contact Information</h4>  
                        <address>
                            <p>
                                <span class="min-width">Address:</span> 1535 Main Street Unit 100 Stittsville, ON <br>
                                <span class="min-width">Phone:</span> 613-854-2203 <br>
                                <span class="min-width">Holly:</span> <a href="mailto:holly@syner-g.ca">holly@syner-g.ca</a><br>
                                <span class="min-width">Blair:</span> <a href="mailto:blair@syner-g.ca">blair@syner-g.ca</a>
                            </p>
                        </address> 

                        <div class="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.513977690455!2d-75.92195508461872!3d45.25762005522513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccdf8b29eabd2db%3A0x836b07d22ef2e14e!2s1535+Stittsville+Main+St+%23100%2C+Stittsville%2C+ON+K2S+1P1%2C+Canada!5e0!3m2!1sen!2sbd!4v1477658556403" width="368" height="215" frameborder="0" style="border:0" allowfullscreen></iframe>
                        </div> 

                        <div class="parking">
                            <p>
                                Parking: <br>
                                One designated spot to the rear of the building, plenty of space in the public parking lot across the street!
                            </p> 

                            <a href="https://www.facebook.com/SynerGMT/" target="_blank"><img src="images/facebook.png" alt="Facebook"> Find us on Facebook</a>
                        </div>                     
                    </div>

                </div>
            </div>
        </section><!--End Section Contact -->

 </div>

     <?php include './inc/footer.php' ; ?>

