
      $(document).ready(function (){
          
          $usernameerror=false;
          $emailerror=false;
          $passworderror=false;
          $confirmerror=false;
          $mobileerror=false;
          $finalerror=false;
          
          $('#username').focusout(function(){
              
              
              checkusername();
              
            
          });
          
            $('#password').focusout(function(){
              
              
              checkpassword();
              
            
          }); 
          $('#confirmpass').focusout(function(){
              
              
              checkconfirm();
              
            
          });
          $('#email').focusout(function(){
              
              
              checkemail();
              
            
          });  
          $('#mobile').focusout(function(){
              
              
              checkmobile();
              
            
          });
          
          
          $('[placeholder]').focusin(function(){
             
              $inputplaceholder=  $(this).attr('placeholder');
              $(this).attr("data-text", $inputplaceholder);
              $(this).attr('placeholder','');
              
          })
          .focusout(function(){
             
              $datatext=$(this).attr('data-text');
              $(this).attr('placeholder',$datatext);
              
              
          });
          
          $('#submit').click(function(){
              
              
              
               checkusername();
               checkpassword();
               checkconfirm();
               checkemail();
               checkmobile();
              
              
            
              if($usernameerror||$passworderror||$confirmerror||$mobileerror||$emailerror)
                 {
                    
                     $finalerror=true;
                    
                 }
              else{
                    $finalerror=false;
                 }
              
              return !$finalerror;
              

          });
          
          
          
          function checkusername()
          {
              
              
              $username=$('#username').val();
              if($username=="")
                  {
                      $('#alertusername').text('username is empty');
                      $usernameerror=true;
                      $('#alertusername').show();
                      
                      
                  }
              else if($username.length<5){
                   $('#alertusername').text('username must be larger than 5 letters');
                  $usernameerror=true;
                    $('#alertusername').show();
              }
              else{
                  $('#alertusername').hide();
                  $usernameerror=false;
              }
              
              
          }
          
          
          
          function checkemail()
          {
              
              
              $emailexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
              $email=$('#email').val();
              
               if($email=="")
                  {
                      $('#alertemail').text('email is empty');
                      $emailerror=true;
                      $('#alertemail').show();
                      
                      
                  }
              else if(!$emailexp.test($email)){
                   $('#alertemail').text('Not valid email address ex:- xxx@xxx.com');
                   $emailerror=true;
                    $('#alertemail').show();
              }
              else{
                  $('#alertemail').hide();
                   $emailerror=false;
              }
              
              
              
              
          }
          
          function checkpassword(){
              
               $password=$('#password').val();
              if($password=="")
                  {
                      $('#alertpassword').text('username is empty');
                      $passworderror=true;
                      $('#alertpassword').show();
                      
                      
                  }
              else if($password.length<5 ||$password.length>20){
                   $('#alertpassword').text('password must be between 5 and 20 letters');
                   $passworderror=true;
                    $('#alertpassword').show();
              }
              else{
                  $('#alertpassword').hide();
                   $passworderror=false;
              }
          }
          
          function checkconfirm()
          {
               $password=$('#password').val();
               $confirm=$('#confirmpass').val();
              
              
               if($confirm.length==0)
                  {
                      $('#alertconfirm').text('confirm password is empty');
                      $confirmerror=true;
                      $('#alertconfirm').show();
                      
                      
                  }
              else if($confirm!=$password){
                   $('#alertconfirm').text("confirm password doesn't match");
                   $confirmerror=true;
                    $('#alertconfirm').show();
              }
              else{
                  $('#alertconfirm').hide();
                   $confirmerror=false;
              }
              
              
          }
          
          function checkmobile()
          {
              $mobileex=/^[0][1-9]\d{9}$|^[1-9]\d{9}$/;
              $mobile=$('#mobile').val();
                if($mobile.length==0)
                  {
                      $('#alertmobile').text('mobile is empty');
                      $mobileerror=true;
                      $('#alertmobile').show();
                      
                      
                  }
              else if(!$mobileex.test($mobile)){
                   $('#alertmobile').text("not valid mobile number ex:- 01000000000");
                    $mobileerror=true;
                    $('#alertmobile').show();
              }
              else{
                  $('#alertmobile').hide();
                    $mobileerror=false;
              }
              
              
          }
          
          
          
          $('#shpassword').click(function (){
              
              if( $('#password').attr('type')=='text')
                  {
                        $('#password').attr('type','password');
                        $('#shpassword').html('<i class="fas fa-eye"></i>');  
                  }
              else{
                    $('#password').attr('type','text');
                    $('#shpassword').html('<i class="fas fa-eye-slash"></i>');  
                  
              }
            
          });
          
      });
      
  