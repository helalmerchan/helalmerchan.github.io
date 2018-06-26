

<?php     

   // CURRENT-MENU CLASS
    $currentpage = basename($_SERVER['SCRIPT_FILENAME']); 
    // PAGE TITLE
    $pagetitle = basename($_SERVER['SCRIPT_FILENAME'], '.php'); 
    $pagetitle = str_ireplace('index', 'home', $pagetitle);
    $pagetitle = ucfirst($pagetitle);
?>

<!doctype html>
<html class="no-js" lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Holly Milliner | <?php echo $pagetitle; ?></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,600,700" rel="stylesheet">

        <!-- Place favicon.ico in the root directory -->

        <link rel="icon" href="images/favicon.ico"/>
        <link rel="shortcut icon" href="images/favicon.ico"/>
        <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png">
        <link rel="apple-touch-icon" sizes="57x57" href="images/apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="72x72" href="images/apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="114x114" href="images/apple-icon-114x114.png">

        
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link href="css/hover-min.css" rel="stylesheet">

        <link rel="stylesheet" href="style.css">

        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
            <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
        <script src="js/modernizr-2.8.3.min.js"></script>
    </head>
    <body class="has-bg">
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- Header-->
        <header class="site-header">
            <ul class="top-menus list-inline text-center">
                <!--<li><span class="sprites-icon icon-envelope">envelope</span> <a href="mailto:info@syner-g.ca">info@syner-g.ca</a></li>-->
                <li><span class="sprites-icon icon-phone">phone</span> 613.854.2203</li>
                <li>
                    <!-- ClinicSense Button -->
                    <script type="text/javascript">
                     var host = (('https:' == document.location.protocol) ? 'https://' : 'http://');
                     var params = "?caption=" + encodeURIComponent("Book an Appointment");
                     document.write(unescape('%3Cscript src="' + host + 'syner-gmassagetherapy.clinicsense.com/book_widget/') + params + unescape('" type="text/javascript"%3E%3C/script%3E'));
                    </script>
                </li>
            </ul>

            <div class="logo-section">
                <div class="container">
                    <h1 class="logo text-center"><a href="index">Holly Milliner</a></h1>
                </div>
            </div>

            <!-- Navbar -->
            <nav class="navbar navbar-center" id="main-navbar" role="navigation">
                <div class="container">                   
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
                            <span class="sr-only">toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>                        
                    </div>
                    <div class="collapse navbar-collapse" id="navbar-collapse">
                        <ul class="nav navbar-nav">
                            <li><a href="index" <?php if ($currentpage == 'index.php') {echo 'class="current"';} ?>>Home</a></li>
                            <li><a href="about" <?php if ($currentpage == 'about.php') {echo 'class="current"';} ?>>About</a></li>                            
                            <li><a href="services" <?php if ($currentpage == 'services.php') {echo 'class="current"';} ?>>Services</a></li>
                            <li><a href="pricing" <?php if ($currentpage == 'pricing.php') {echo 'class="current"';} ?>>Pricing</a></li>                            
                            <li><a href="contact" <?php if ($currentpage == 'contact.php') {echo 'class="current"';} ?>>Contact</a></li>

                            <li class="no-icon">
                                <!-- ClinicSense Button -->
                                <script type="text/javascript">
                                 var host = (('https:' == document.location.protocol) ? 'https://' : 'http://');
                                 var params = "?caption=" + encodeURIComponent("Book Now");
                                 document.write(unescape('%3Cscript src="' + host + 'syner-gmassagetherapy.clinicsense.com/book_widget/') + params + unescape('" type="text/javascript"%3E%3C/script%3E'));
                                </script>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav><!-- end Navbar -->           
        </header><!--End Header-->

