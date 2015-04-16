<html>
<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Twitter API</title>
    
    <link href="css/bootstrap.min.css" rel="stylesheet"/>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"/>
    <link href="css/style.css" rel="stylesheet"/>
    
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" type="text/javascript"></script>
    <script src="js/script.js"></script>
</head>

<body>
    
    <div class="container">
        <?php
        ini_set('display_errors', 1);
        require_once('TwitterAPIExchange.php');
        
        /** Set access tokens here - see: https://dev.twitter.com/apps/ **/
        $settings = array(
            'oauth_access_token' => "60704009-Zf2RbZ3Fzf5oebwKqEhKQ7MubycBXpxBJbxUSSJ5s",
            'oauth_access_token_secret' => "RnqUu6Lbsbjco13RXSkeHJFYt8IDmvZ0PxlOVAWNo83Fl",
            'consumer_key' => "sNvO27vDJQOPjlZEqt0JAqnPU",
            'consumer_secret' => "TBsMU8rvvJtKs1eILsdJyjmYGixheGemE50PXmEBIy8dX6w546"
        );
        
        /** URL for REST request, see: https://dev.twitter.com/docs/api/1.1/ **/
        $url = 'https://api.twitter.com/1.1/blocks/create.json';
        $requestMethod = 'GET';
        
        /** POST fields required by the URL above. See relevant docs as above **/
        $postfields = array(
            'screen_name' => 'usernameToBlock', 
            'skip_status' => '1'
        );
        
        /** Perform a POST request and echo the response 
        $twitter = new TwitterAPIExchange($settings);
        echo $twitter->buildOauth($url, $requestMethod)
                     ->setPostfields($postfields)
                     ->performRequest();**/
        
        /** Perform a GET request and echo the response **/
        /** Note: Set the GET field BEFORE calling buildOauth(); **/
        $url = 'https://api.twitter.com/1.1/search/tweets.json';
        $getfield = '?q=%23gameofthrones&result_type=popular';
        $requestMethod = 'GET';
        $twitter = new TwitterAPIExchange($settings);
        
        $tweetData = json_decode($twitter->setGetfield($getfield)
                    ->buildOauth($url, $requestMethod)
                    ->performRequest(), $assoc = TRUE);             
        
        /**echo $tweetData;**/
        
        foreach($tweetData['statuses'] as $items)
            {
                $userArray = $items['user'];
                
                echo "<ul class='tweet col-md-12'><li class='twitter-list'><div class='twitter-pic col-md-1 col-sm-1 col-xs-1'><img src='" . $userArray['profile_image_url'] . "'></></div>";
                echo "<div class='twitter-text col-md-11 col-sm-11 col-xs-11'><div class='twitter-name'>" . $userArray['name'] . $userArray['screen_name'] . "</div>";
                echo "<div class='twitter-tweet'>" . $items['text'] . "'</div>'";
                echo  $items['created_at'] . "</div></li></ul>";

            }
            
        /*echo $twitter->setGetfield($getfield)
                     ->buildOauth($url, $requestMethod)
                     ->performRequest();*/
                     
            
        ?>
    </div>
        
        
    <script src="js/bootstrap.min.js"></script>
</body>
</html>     