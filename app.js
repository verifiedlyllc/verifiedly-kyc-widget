


//address page of kyb and it's template

const addressPage = document.createElement('template')
addressPage.innerHTML = `
<!DOCTYPE html>
<html lang="en">

<head>
<link rel="stylesheet" type="text/css"  href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605461/css/console_mksvog.css">
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605461/css/dracula.min_graxc3.css">
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605465/css/reset.min_ihxu18.css">

<link rel="shortcut icon" href="https://res.cloudinary.com/verifiedly/image/upload/v1625613183/favicon_f5k5ae.png" type="image/x-icon" />
<!-- Bootstrap 4.5 -->
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605462/css/bootstrap.min_l5tfnu.css" type="text/css" />
<!-- animate -->
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625613146/css/animate_l5mser.css" type="text/css" />
<!-- Swiper -->
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605471/css/swiper.min_xi214w.css" />
<!-- icons -->
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605462/css/icons_vdegdz.css" type="text/css" />
<!-- aos -->
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605460/css/aos_b6mqul.css" type="text/css" />
<!-- main css -->
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625838299/main_gma76t.css" type="text/css" />
<!-- normalize -->
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605464/css/normalize_vjmkir.css" type="text/css" /> 
</head>

<body class="bg-white d-flex flex flex-column justify-content-center align-item-center">

  <div class="container d-flex justify-content-center align-item-center flex-column">
    <div class="row d-flex justify-content-center align-item-center flex-column">
   
      <div class="col-lg-12 mx-auto my-auto d-flex  flex-column">
   
    <div class="row">
       <div class="col-lg-12 padding-py-3 padding-px-3">
        <div class="">
          <form action="" class="row">
            <div class="col-md-12 padding-px-1">
              <input type="radio" class="custom_check" value="driver" name="document" id="driver" >
      
            <label for="driver" class="row custom_check_cover padding-px-1 margin-t-1 margin-b-1 padding-py-1 bg-snow rounded-9">
             
              <div class="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-start align-items-center flex-row">
           <img src="https://res.cloudinary.com/verifiedly/image/upload/v1624369801/document01_o8opny.png" alt="" class="document_cover">
                <h4 class="font-s-19">Driver’s Licence</h4>
          
              </div>
           
            </label>
            <input type="radio" class="custom_check" name="document" id="passport" value="passport" >
              <label  for="passport" class="row padding-px-1 custom_check_cover margin-t-1 margin-b-1 padding-py-1 bg-snow rounded-9">
                
                <div class="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-start align-items-center flex-row">
             <img src="https://res.cloudinary.com/verifiedly/image/upload/v1624369801/document02_cwvdhp.png" alt="" class="document_cover">
                  <h4 class="font-s-19">Passport</h4>
                
            
                </div>
             
              </label>
              <input type="radio" class="custom_check" name="document" value="national" id="national" >
              <label for="national" class="row padding-px-1 custom_check_cover margin-t-1 margin-b-1 padding-py-1 bg-snow rounded-9">
                <input type="radio" class="custom_check" name="document" value="national" id="national" >
                <div class="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-start align-items-center flex-row">
             <img src="https://res.cloudinary.com/verifiedly/image/upload/v1624369801/document03_r4hlxr.png" alt="" class="document_cover">
                  <h4 class="font-s-19">National ID</h4>
              
                </div>
             
              </label>
              <input type="radio" class="custom_check" name="document" value="voters" id="voters" >
              <label for="voters" class="row padding-px-1 margin-t-1 custom_check_cover margin-b-1 padding-py-1 bg-snow rounded-9">
             
            
                <div class="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-start align-items-center flex-row">
             <img src="https://res.cloudinary.com/verifiedly/image/upload/v1624369801/document04_bvkfab.png" alt="" class="document_cover">
                  <h4 class="font-s-19">Voter ID card</h4>
              
                </div>
             
        </label>
     
              

            </div>
      
     
         

       
            <div class="col-12 d-flex d-md-flex justify-content-between margin-t-5 position-relative zindex-fixed">
              <a class="btn btn_md_primary back_to_start_btn padding-px-6 padding-py-2  bg-snow c-black rounded-12 h-fit-content">
                Back
            </a>
       
              <a class="btn verification_btn btn_md_primary padding-px-6 padding-py-2  bg-blue rounded-12 c-white h-fit-content">
                Next
              </a>
            </div>
          </form>
        </div>
       </div>
        
    </div>


    <div class="row">
        <div class="col-12 text-center padding-t-6 mx-auto margin-t-6">
            Powered by verifiedly <img src="https://res.cloudinary.com/verifiedly/image/upload/v1624041053/verifiedly_logo_ppus4g.svg" class="img_logo" alt="verifiedly logo">
        </div>
    </div>
    <div class="footer padding-py-2 padding-px-2"></div>

      </div>
    </div>
  </div>
  <!-- jquery -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605454/js/jquery-3.5.0_inc3z0.js" type="text/javascript"></script>
  <!-- jquery-migrate -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605453/js/jquery-migrate.min_gcnjzt.js" type="text/javascript"></script>
  <!-- popper -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/popper.min_lb4jbh.js" type="text/javascript"></script>
  <!-- bootstrap -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605452/js/bootstrap.min_klzrbk.js" type="text/javascript"></script>
  <!--
  ============
  vendor file
  ============
   -->
  <!-- particles -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/particles.min_fhbnsj.js" type="text/javascript"></script>
  <!-- TweenMax -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/TweenMax.min_sbb0pr.js" type="text/javascript"></script>
  <!-- ScrollMagic -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/ScrollMagic_maenwt.js" type="text/javascript"></script>
  <!-- animation.gsap -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/animation.gsap_hln4sr.js" type="text/javascript"></script>
  <!-- addIndicators -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/debug.addIndicators.min_ed7lew.js" type="text/javascript"></script>
  <!-- Swiper js -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/swiper.min_ggjmrz.js" type="text/javascript"></script>
  <!-- countdown -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/countdown_rkm6v5.js" type="text/javascript"></script>
  <!-- simpleParallax -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/simpleParallax.min_lelhtg.js" type="text/javascript"></script>
  <!-- waypoints -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/waypoints.min_s1k8uw.js" type="text/javascript"></script>
  <!-- counterup -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/jquery.counterup.min_ifepdt.js" type="text/javascript"></script>
  <!-- charming -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/charming.min_kxgeny.js" type="text/javascript"></script>
  <!-- imagesloaded -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/imagesloaded.pkgd.min_qin0k4.js" type="text/javascript"></script>
  <!-- BX-Slider -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/jquery.bxslider.min_ya1lyo.js" type="text/javascript"></script>
  <!-- Sharer -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/sharer_nrvblc.js" type="text/javascript"></script>
  <!-- sticky -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/sticky.min_r2i69h.js" type="text/javascript"></script>
  <!-- Aos -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/aos_nh4eaq.js" type="text/javascript"></script>
  <!-- main file -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605454/js/main_feltmm.js" type="text/javascript"></script>
  <!-- sass -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625604222/sass_otc3tz.js" type="text/javascript"></script>


</body>

</html>
<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>

`

//first page of kyb and it's template

const indexPage = document.createElement('template')

indexPage.innerHTML =`
<!DOCTYPE html>
<html lang="en">

<head>
<link rel="stylesheet" type="text/css"  href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605461/css/console_mksvog.css">
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605461/css/dracula.min_graxc3.css">
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605465/css/reset.min_ihxu18.css">

<link rel="shortcut icon" href="https://res.cloudinary.com/verifiedly/image/upload/v1625613183/favicon_f5k5ae.png" type="image/x-icon" />
<!-- Bootstrap 4.5 -->
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605462/css/bootstrap.min_l5tfnu.css" type="text/css" />
<!-- animate -->
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625613146/css/animate_l5mser.css" type="text/css" />
<!-- Swiper -->
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605471/css/swiper.min_xi214w.css" />
<!-- icons -->
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605462/css/icons_vdegdz.css" type="text/css" />
<!-- aos -->
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605460/css/aos_b6mqul.css" type="text/css" />
<!-- main css -->
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625838299/main_gma76t.css" type="text/css" />
<!-- normalize -->
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605464/css/normalize_vjmkir.css" type="text/css" /> 
</head>

<body class="bg-snow d-flex position-relative flex flex-column justify-content-center align-item-center">
  
<div class="info_tab position-absolute">

</div>

  <div class="container d-flex justify-content-center align-item-center flex-column">
    <div class="row d-flex justify-content-center align-item-center flex-column">
      <div class="col-lg-12 mx-auto my-auto d-flex  flex-column">  
    <div class="row">
       <div class="col-lg-12 padding-py-2 padding-px-2">
        <div class="">
          <form action="" class="row for_cc_four">
   <div class="col-md-12 d-flex flex-column align-items-center justify-content-center">
<img src="https://res.cloudinary.com/verifiedly/image/upload/v1624987836/logo_1_cfwvpw.svg" class="mx-auto main_logo margin-b-1"  alt="">
    <h5 class="text-center font-s-16">[App name] uses Verifiedly to perform identity verification.</h5>
   </div>
   <div class="col-md-12 margin-t-1">
     <h6>Things we will need</h6>
  <ul class="c-gray margin-t-1 margin-b-1">
    <li class=" margin-t-1 margin-b-1">Government issued ID</li>
    <li  class=" margin-t-1 margin-b-1">Some personal details</li>
    <li  class=" margin-t-1 margin-b-1">Your beautiful face</li>
  </ul>
   </div>



            <div class="row margin-t-2 padding-px-1">
              <div class="col-lg-12 text-center d-flex">
                <p class="font-s-12 text-center">By continuing this verification, you agree to Verifiedly's <a href="#" class="c-blue"> privacy policy</a> agreement</p>
              </div>
              <div class="col-12 d-md-flex flex-column justify-content-between d-flex ">
                <a class="btn btn_md_primary redirect_btn agree_btn padding-px-4 padding-py-2  margin-b-1  bg-blue rounded-12 c-white h-fit-content">
                  I Agree
                </a>
                <a class="btn btn_md_primary margin-t-1 margin-b-1 padding-px-4 padding-py-2  c-black rounded-12 c-white border_cancel h-fit-content">
                  Cancel
              </a>
         
        
              </div>
            </div>
     
         

       
           
          </form>
        </div>
       </div>
        
    </div>


    <div class="row">
      <div class="col-12 text-center padding-t-6 mx-auto margin-t-6">
        Powered by verifiedly <img src="https://res.cloudinary.com/verifiedly/image/upload/v1624041053/verifiedly_logo_ppus4g.svg" class="img_logo" alt="verifiedly logo">
    </div>
    </div>
    <div class="footer padding-py-2 padding-px-2"></div>

      </div>
    </div>
  </div>
  <!-- jquery -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605454/js/jquery-3.5.0_inc3z0.js" type="text/javascript"></script>
  <!-- jquery-migrate -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605453/js/jquery-migrate.min_gcnjzt.js" type="text/javascript"></script>
  <!-- popper -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/popper.min_lb4jbh.js" type="text/javascript"></script>
  <!-- bootstrap -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605452/js/bootstrap.min_klzrbk.js" type="text/javascript"></script>
  <!--
  ============
  vendor file
  ============
   -->
  <!-- particles -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/particles.min_fhbnsj.js" type="text/javascript"></script>
  <!-- TweenMax -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/TweenMax.min_sbb0pr.js" type="text/javascript"></script>
  <!-- ScrollMagic -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/ScrollMagic_maenwt.js" type="text/javascript"></script>
  <!-- animation.gsap -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/animation.gsap_hln4sr.js" type="text/javascript"></script>
  <!-- addIndicators -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/debug.addIndicators.min_ed7lew.js" type="text/javascript"></script>
  <!-- Swiper js -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/swiper.min_ggjmrz.js" type="text/javascript"></script>
  <!-- countdown -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/countdown_rkm6v5.js" type="text/javascript"></script>
  <!-- simpleParallax -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/simpleParallax.min_lelhtg.js" type="text/javascript"></script>
  <!-- waypoints -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/waypoints.min_s1k8uw.js" type="text/javascript"></script>
  <!-- counterup -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/jquery.counterup.min_ifepdt.js" type="text/javascript"></script>
  <!-- charming -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/charming.min_kxgeny.js" type="text/javascript"></script>
  <!-- imagesloaded -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/imagesloaded.pkgd.min_qin0k4.js" type="text/javascript"></script>
  <!-- BX-Slider -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/jquery.bxslider.min_ya1lyo.js" type="text/javascript"></script>
  <!-- Sharer -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/sharer_nrvblc.js" type="text/javascript"></script>
  <!-- sticky -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/sticky.min_r2i69h.js" type="text/javascript"></script>
  <!-- Aos -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/aos_nh4eaq.js" type="text/javascript"></script>
  <!-- main file -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605454/js/main_feltmm.js" type="text/javascript"></script>
  <!-- sass -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625604222/sass_otc3tz.js" type="text/javascript"></script>

</body>

</html>
<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
<script>


</script>


`


const getStartPage = document.createElement('template')

getStartPage.innerHTML=`

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description"
    content="Welcome to Verifiedly" />
  <meta name="keywords"
    content="Automate and solve your users identity verification" />
  <meta name="author" content="Verifiedly - Automate and solve your users identity verification" />

  <title>Verifiedly KYB - Business Verification </title>
  <!-- favicon -->
  <link rel="stylesheet" type="text/css"  href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605461/css/console_mksvog.css">
  <link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605461/css/dracula.min_graxc3.css">
  <link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605465/css/reset.min_ihxu18.css">
  
  <link rel="shortcut icon" href="https://res.cloudinary.com/verifiedly/image/upload/v1625613183/favicon_f5k5ae.png" type="image/x-icon" />
  <!-- Bootstrap 4.5 -->
  <link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605462/css/bootstrap.min_l5tfnu.css" type="text/css" />
  <!-- animate -->
  <link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625613146/css/animate_l5mser.css" type="text/css" />
  <!-- Swiper -->
  <link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605471/css/swiper.min_xi214w.css" />
  <!-- icons -->
  <link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605462/css/icons_vdegdz.css" type="text/css" />
  <!-- aos -->
  <link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605460/css/aos_b6mqul.css" type="text/css" />
  <!-- main css -->
  <link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625838299/main_gma76t.css" type="text/css" />
  <!-- normalize -->
  <link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605464/css/normalize_vjmkir.css" type="text/css" /> 
 
</head>

<body class="bg-white flex flex-column d-flex justify-content-center align-item-center">
 

  <div class="container h-100vh d-flex justify-content-center align-item-center flex-column">
    <div class="row h-100vh d-flex justify-content-center align-item-center flex-column">
   
      <div class="col-lg-12 mx-auto my-auto d-flex  flex-column">
      <div class="row">
      <div class="form_cc_four">
          <form action="" class="row">
            
            <div class="col-md-12">
              <div class="form-group">
                <label for="SSN" class="type_name"></label>
                <input id="SSN" type="text" class="form-control" placeholder="••• •• 1234">
              </div>
            </div>
       
            <div class="col-md-6">
              <div class="form-group">
                <label for="number">Phone Number</label>
                <input id="number" type="number" class="form-control" autocomplete="tel" placeholder="••• •• 1234">
              
              </div>
            </div>
      
        
            <div class="col-md-6">
              <div class="form-group">
                <label for="country">Country</label>
                <select id="country" class="form-control custom-select">
                  <option>Nigeria</option>
                  <option>Egypt</option>
                  <option>United State</option>
                  <option>Ghana</option>
                </select>
              </div>
            </div>
               
            <div class="col-md-12">
              <label for="otp">Please enter the OTP sent to your phone</label>
             <div class="row d-flex flex-row otp_section padding-px-1">
               <div class="col_otp">
                 <div class="form-group">
                  <input id="otp" type="number" maxlength="1" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" onkeyup={this.focusEvent(this, 'sec')} class="form-control otp" >
              
                 </div>
               </div>
               <div class="col_otp">
                <div class="form-group">
                 <input id="sec" maxlength="1" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" onkeyup="focusEvent(this, 'thir')" type="number"  class="form-control otp" >
             
                </div>
              </div>
              <div class="col_otp">
                <div class="form-group">
                 <input id="thir" maxlength="1" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" onkeyup="focusEvent(this, 'fourh')" type="number" class="form-control otp" >
             
                </div>
              </div>
              <div class="col_otp">
                <div class="form-group">
                 <input id="fourh" type="number" maxlength="1"  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" class="form-control otp" >
             
                </div>
              </div>
             </div>

             <div class="row">
             <div class="col-lg-12 margin-t-1">
              <h6 class="font-s-13">Didn’t receive OTP? <a href="#" class="otp_resent">Resend</a></h6>
             </div>
             </div>
            </div>

            <div class="col-lg-12">
              <span class="d-flex d-md-flex flex-row justify-content-start align-items-center">
              <svg class='margin-t-1' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M8.67106 14.9447C12.353 14.9447 15.3377 11.9599 15.3377 8.278C15.3377 4.5961 12.353 1.61133 8.67106 1.61133C4.98916 1.61133 2.00439 4.5961 2.00439 8.278C2.00439 11.9599 4.98916 14.9447 8.67106 14.9447Z" stroke="black" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.6709 10.9447V8.27808" stroke="black" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.6709 5.61133H8.67757" stroke="black" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="16" height="16" fill="white" transform="translate(0.670898 0.278076)"/>
</clipPath>
</defs>
</svg>

              <p class=" font-s-12 margin-t-3 ml-1">Your information is secured and safe with us</p>
              </span>
            </div>
            <div class="col-12 d-md-flex justify-content-end margin-t-2">
        
              <a class="btn btn_lg_primary business_btn  padding-px-6 padding-py-2  bg-blue rounded-12 c-white h-fit-content">
                  Next
              </a>
            </div>
          </form>
        </div>
      
  </div>



    <div class="row">
      <div class="col-12 text-center padding-t-6 mx-auto margin-t-6">
        Powered by verifiedly <img src="https://res.cloudinary.com/verifiedly/image/upload/v1624041053/verifiedly_logo_ppus4g.svg" class="img_logo" alt="verifiedly logo">
    </div>
    </div>
    <div class="footer padding-py-2 padding-px-2"></div>

      </div>
    </div>
  </div>
  <!-- jquery -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605454/js/jquery-3.5.0_inc3z0.js" type="text/javascript"></script>
  <!-- jquery-migrate -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605453/js/jquery-migrate.min_gcnjzt.js" type="text/javascript"></script>
  <!-- popper -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/popper.min_lb4jbh.js" type="text/javascript"></script>
  <!-- bootstrap -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605452/js/bootstrap.min_klzrbk.js" type="text/javascript"></script>
  <!--
  ============
  vendor file
  ============
   -->
  <!-- particles -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/particles.min_fhbnsj.js" type="text/javascript"></script>
  <!-- TweenMax -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/TweenMax.min_sbb0pr.js" type="text/javascript"></script>
  <!-- ScrollMagic -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/ScrollMagic_maenwt.js" type="text/javascript"></script>
  <!-- animation.gsap -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/animation.gsap_hln4sr.js" type="text/javascript"></script>
  <!-- addIndicators -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/debug.addIndicators.min_ed7lew.js" type="text/javascript"></script>
  <!-- Swiper js -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/swiper.min_ggjmrz.js" type="text/javascript"></script>
  <!-- countdown -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/countdown_rkm6v5.js" type="text/javascript"></script>
  <!-- simpleParallax -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/simpleParallax.min_lelhtg.js" type="text/javascript"></script>
  <!-- waypoints -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/waypoints.min_s1k8uw.js" type="text/javascript"></script>
  <!-- counterup -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/jquery.counterup.min_ifepdt.js" type="text/javascript"></script>
  <!-- charming -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/charming.min_kxgeny.js" type="text/javascript"></script>
  <!-- imagesloaded -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/imagesloaded.pkgd.min_qin0k4.js" type="text/javascript"></script>
  <!-- BX-Slider -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/jquery.bxslider.min_ya1lyo.js" type="text/javascript"></script>
  <!-- Sharer -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/sharer_nrvblc.js" type="text/javascript"></script>
  <!-- sticky -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/sticky.min_r2i69h.js" type="text/javascript"></script>
  <!-- Aos -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/aos_nh4eaq.js" type="text/javascript"></script>
  <!-- main file -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605454/js/main_feltmm.js" type="text/javascript"></script>
  <!-- sass -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625604222/sass_otc3tz.js" type="text/javascript"></script>

</body>

</html>
<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
<script>
 

</script>

`


const businessPage = document.createElement('template')

businessPage.innerHTML = `

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description"
    content="Welcome to Verifiedly" />
  <meta name="keywords"
    content="Automate and solve your users identity verification" />
  <meta name="author" content="Verifiedly - Automate and solve your users identity verification" />

  <title>Verifiedly KYB - Business Verification</title>
  <!-- favicon -->
  <link rel="stylesheet" type="text/css"  href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605461/css/console_mksvog.css">
  <link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605461/css/dracula.min_graxc3.css">
  <link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605465/css/reset.min_ihxu18.css">
  
  <link rel="shortcut icon" href="https://res.cloudinary.com/verifiedly/image/upload/v1625613183/favicon_f5k5ae.png" type="image/x-icon" />
  <!-- Bootstrap 4.5 -->
  <link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605462/css/bootstrap.min_l5tfnu.css" type="text/css" />
  <!-- animate -->
  <link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625613146/css/animate_l5mser.css" type="text/css" />
  <!-- Swiper -->
  <link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605471/css/swiper.min_xi214w.css" />
  <!-- icons -->
  <link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605462/css/icons_vdegdz.css" type="text/css" />
  <!-- aos -->
  <link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605460/css/aos_b6mqul.css" type="text/css" />
  <!-- main css -->
  <link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625838299/main_gma76t.css" type="text/css" />
  <!-- normalize -->
  <link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605464/css/normalize_vjmkir.css" type="text/css" /> 
 
 
</head>

<body class="bg-white flex flex-column">
 
  <div class="logo">
    <div class="container">
     <div class="row">
       <div class="col-lg-12 padding-py-2 padding-px-3">
        <a href="http://verified.ly">
          <img src="https://res.cloudinary.com/verifiedly/image/upload/v1624987836/logo_1_cfwvpw.svg" class="imag_logo" alt=""></a>
       </div>
     </div>
    </div>
     </div>
  <div class="wrapper bg-white">

  <div class="row d-flex justify-content-center align-item-center">
    <div class="col-lg-12">
      <div class="bg-white ">    
        <div class="row">
          <div class="form_cc_four">
           
                <h6 class="c-gray">Provide the following information</h6>
       
          </div>
          </div>
   
            </form>
          </div>
        
    </div>


    <div class="row">
      <div class="col-12 text-center padding-t-6 mx-auto margin-t-6">
        Powered by verifiedly <img src="https://res.cloudinary.com/verifiedly/image/upload/v1624041053/verifiedly_logo_ppus4g.svg" class="img_logo" alt="verifiedly logo">
    </div>

    </div>
  <div class="footer padding-py-2 padding-px-2"></div>

      </div>
    </div>
   
  </div>
  </div>
    <!-- [id] content -->
  
  


    <!-- Start Section Loader -->
    <!-- <section class="loading_overlay">
      <div class="loader_logo">
        <img class="logo" src="../../assets/img/logo.svg" />
      </div>
    </section> -->
    <!-- End. Loader -->


  <!-- End. wrapper -->
               <!-- End FAQ -->
        
               <!-- jquery -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605454/js/jquery-3.5.0_inc3z0.js" type="text/javascript"></script>
               <!-- jquery-migrate -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605453/js/jquery-migrate.min_gcnjzt.js" type="text/javascript"></script>
               <!-- popper -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/popper.min_lb4jbh.js" type="text/javascript"></script>
               <!-- bootstrap -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605452/js/bootstrap.min_klzrbk.js" type="text/javascript"></script>
               <!--
               ============
               vendor file
               ============
                -->
               <!-- particles -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/particles.min_fhbnsj.js" type="text/javascript"></script>
               <!-- TweenMax -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/TweenMax.min_sbb0pr.js" type="text/javascript"></script>
               <!-- ScrollMagic -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/ScrollMagic_maenwt.js" type="text/javascript"></script>
               <!-- animation.gsap -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/animation.gsap_hln4sr.js" type="text/javascript"></script>
               <!-- addIndicators -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/debug.addIndicators.min_ed7lew.js" type="text/javascript"></script>
               <!-- Swiper js -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/swiper.min_ggjmrz.js" type="text/javascript"></script>
               <!-- countdown -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/countdown_rkm6v5.js" type="text/javascript"></script>
               <!-- simpleParallax -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/simpleParallax.min_lelhtg.js" type="text/javascript"></script>
               <!-- waypoints -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/waypoints.min_s1k8uw.js" type="text/javascript"></script>
               <!-- counterup -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/jquery.counterup.min_ifepdt.js" type="text/javascript"></script>
               <!-- charming -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/charming.min_kxgeny.js" type="text/javascript"></script>
               <!-- imagesloaded -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/imagesloaded.pkgd.min_qin0k4.js" type="text/javascript"></script>
               <!-- BX-Slider -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/jquery.bxslider.min_ya1lyo.js" type="text/javascript"></script>
               <!-- Sharer -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/sharer_nrvblc.js" type="text/javascript"></script>
               <!-- sticky -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/sticky.min_r2i69h.js" type="text/javascript"></script>
               <!-- Aos -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/aos_nh4eaq.js" type="text/javascript"></script>
               <!-- main file -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605454/js/main_feltmm.js" type="text/javascript"></script>
               <!-- sass -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625604222/sass_otc3tz.js" type="text/javascript"></script>
               <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>      
</body>

</html>

`



const verificationPage = document.createElement('template')

verificationPage.innerHTML = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description"
    content="Welcome to Verifiedly" />
  <meta name="keywords"
    content="Automate and solve your users identity verification" />
  <meta name="author" content="Verifiedly - Automate and solve your users identity verification" />

  <title>Verifiedly KYC - Front Photo </title>
  <!-- favicon -->

  <link rel="stylesheet" type="text/css"  href="./assets/css/console.css">
  <link rel="stylesheet" href="./assets/css/dracula.min.css">
  <link rel="stylesheet" href="./assets/css/reset.min.css">
 
  <link rel="shortcut icon" href="/assets/favicon.png" type="image/x-icon" />
  <!-- Bootstrap 4.5 -->
  <link rel="stylesheet" href="./assets/css/bootstrap.min.css" type="text/css" />
  <!-- animate -->
  <link rel="stylesheet" href="./assets/css/animate.css" type="text/css" />
  <!-- Swiper -->
  <link rel="stylesheet" href="./assets/css/swiper.min.css" />
  <!-- icons -->
  <link rel="stylesheet" href="./assets/css/icons.css" type="text/css" />
  <!-- aos -->
  <link rel="stylesheet" href="./assets/css/aos.css" type="text/css" />
  <!-- main css -->
  <link rel="stylesheet" href="./assets/css/main.css" type="text/css" />
  <!-- normalize -->
  <link rel="stylesheet" href="./assets/css/normalize.css" type="text/css" />
 
</head>

<body class="bg-white  d-flex flex flex-column justify-content-center align-item-center">
 


  <div class="container d-flex justify-content-center align-item-center flex-column">
    <div class="row d-flex justify-content-center align-item-center flex-column">
   
      <div class="col-lg-12 mx-auto my-auto d-flex  flex-column">
    
    <div class="row">
       <div class="col-lg-12 padding-py-1 padding-px-1">
        <div class="">
          <form action="" class="row">

            <div class="col-lg-12 align-items-center justify-content-center text-center">

              <div class="section">
                <img src="https://res.cloudinary.com/verifiedly/image/upload/v1624405749/image_nlfdtc.svg" alt="" class="passport_holder margin-t-4 margin-b-4">
                         
              <div class="rounded-25 text_full bg-snow padding-px-1 padding-py-1 flex text-center justify-content-center align-items-center">
                First we'll take a photo of the front of your photo ID
              </div>      
              </div>
              
              
                        </div>

     
         

       
            <div class="col-12 d-flex d-md-flex justify-content-between margin-t-4">
              <a class="btn btn_lg_primary  padding-px-6 padding-py-2 back_to_business_btn bg-snow c-black rounded-12 c-white h-fit-content">
                Back
            </a>
       
              <a onclick={take_snapshot()} class="btn btn_lg_primary redirect_btn padding-px-6 padding-py-2  bg-blue rounded-12 c-white h-fit-content">
                Next
              </a>
            </div>
          </form>
        </div>
       </div>
        
    </div>


    <div class="row">
        <div class="col-12 text-center padding-t-6 mx-auto margin-t-6">
            Powered by verifiedly <img src="https://res.cloudinary.com/verifiedly/image/upload/v1624041053/verifiedly_logo_ppus4g.svg" class="img_logo" alt="verifiedly logo">
        </div>
    </div>
    <div class="footer padding-py-2 padding-px-2"></div>

      </div>
    </div>
  </div>

  <!-- jquery -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605454/js/jquery-3.5.0_inc3z0.js" type="text/javascript"></script>
  <!-- jquery-migrate -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605453/js/jquery-migrate.min_gcnjzt.js" type="text/javascript"></script>
  <!-- popper -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/popper.min_lb4jbh.js" type="text/javascript"></script>
  <!-- bootstrap -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605452/js/bootstrap.min_klzrbk.js" type="text/javascript"></script>
  <!--
  ============
  vendor file
  ============
   -->
  <!-- particles -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/particles.min_fhbnsj.js" type="text/javascript"></script>
  <!-- TweenMax -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/TweenMax.min_sbb0pr.js" type="text/javascript"></script>
  <!-- ScrollMagic -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/ScrollMagic_maenwt.js" type="text/javascript"></script>
  <!-- animation.gsap -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/animation.gsap_hln4sr.js" type="text/javascript"></script>
  <!-- addIndicators -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/debug.addIndicators.min_ed7lew.js" type="text/javascript"></script>
  <!-- Swiper js -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/swiper.min_ggjmrz.js" type="text/javascript"></script>
  <!-- countdown -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/countdown_rkm6v5.js" type="text/javascript"></script>
  <!-- simpleParallax -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/simpleParallax.min_lelhtg.js" type="text/javascript"></script>
  <!-- waypoints -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/waypoints.min_s1k8uw.js" type="text/javascript"></script>
  <!-- counterup -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/jquery.counterup.min_ifepdt.js" type="text/javascript"></script>
  <!-- charming -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/charming.min_kxgeny.js" type="text/javascript"></script>
  <!-- imagesloaded -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/imagesloaded.pkgd.min_qin0k4.js" type="text/javascript"></script>
  <!-- BX-Slider -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/jquery.bxslider.min_ya1lyo.js" type="text/javascript"></script>
  <!-- Sharer -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/sharer_nrvblc.js" type="text/javascript"></script>
  <!-- sticky -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/sticky.min_r2i69h.js" type="text/javascript"></script>
  <!-- Aos -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/aos_nh4eaq.js" type="text/javascript"></script>
  <!-- main file -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605454/js/main_feltmm.js" type="text/javascript"></script>
  <!-- sass -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625604222/sass_otc3tz.js" type="text/javascript"></script>


</body>

</html>
<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>




`
const finishPage = document.createElement('template')

finishPage.innerHTML = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description"
    content="Welcome to Verifiedly" />
  <meta name="keywords"
    content="Automate and solve your users identity verification" />
  <meta name="author" content="Verifiedly - Automate and solve your users identity verification" />

  <title>Verifiedly KYB - Success</title>
  <!-- favicon -->
  <link rel="stylesheet" type="text/css"  href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605461/css/console_mksvog.css">
  <link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605461/css/dracula.min_graxc3.css">
  <link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605465/css/reset.min_ihxu18.css">
  
  <link rel="shortcut icon" href="https://res.cloudinary.com/verifiedly/image/upload/v1625613183/favicon_f5k5ae.png" type="image/x-icon" />
  <!-- Bootstrap 4.5 -->
  <link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605462/css/bootstrap.min_l5tfnu.css" type="text/css" />
  <!-- animate -->
  <link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625613146/css/animate_l5mser.css" type="text/css" />
  <!-- Swiper -->
  <link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605471/css/swiper.min_xi214w.css" />
  <!-- icons -->
  <link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605462/css/icons_vdegdz.css" type="text/css" />
  <!-- aos -->
  <link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605460/css/aos_b6mqul.css" type="text/css" />
  <!-- main css -->
  <link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625838299/main_gma76t.css" type="text/css" />
  <!-- normalize -->
  <link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605464/css/normalize_vjmkir.css" type="text/css" /> 
  </head>

<body class="bg-white flex flex-column">
 

  <div class="wrapper bg-white">

<div class="row  d-flex justify-content-center align-item-center">
    <div class="col-lg-12 ">
      <div class="bg-white container ">
        <div class="row text-center flex justify-content-center align-items-center  padding-px-1 padding-py-1">
      
<div class="col-lg-12 flex text-center  justify-content-center align-items-center  ">

    <span class="icon_wrapper mx-auto text-center align-self-center margin-b-2 padding-px-2 padding-py-2">
      <lottie-player src="https://assets1.lottiefiles.com/temporary_files/Zurqqs.json"  background="transparent"  speed="1"  style="max-width: 300px; max-height: 300px; width: 100%; height: 100%;"  loop autoplay></lottie-player>

    </span>
    <h4>Congratulations</h4>
    <p class="c-gray margin-b-2">We have received your information for KYB 
        and will get back to you shortly</p>
                <a class="btn btn_lg_primary close_icon_btn padding-px-6 padding-py-2  bg-blue rounded-12 c-white h-fit-content">
                    Head home
                </a>
</div>
          </div>
 


    <div class="row">
      <div class="col-12 text-center padding-t-6 mx-auto margin-t-1">
        Powered by verifiedly <img src="https://res.cloudinary.com/verifiedly/image/upload/v1624041053/verifiedly_logo_ppus4g.svg" class="img_logo" alt="verifiedly logo">
    </div>
    </div>
    <div class="footer padding-py-2 padding-px-2"></div>
      </div>
    </div>
   
  </div>
  </div>
    <!-- [id] content -->

  

    <!-- Start Section Loader -->
    <!-- <section class="loading_overlay">
      <div class="loader_logo">
        <img class="logo" src="../../assets/img/logo.svg" />
      </div>
    </section> -->
    <!-- End. Loader -->


  <!-- End. wrapper -->
               <!-- End FAQ -->
        
               <!-- jquery -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605454/js/jquery-3.5.0_inc3z0.js" type="text/javascript"></script>
               <!-- jquery-migrate -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605453/js/jquery-migrate.min_gcnjzt.js" type="text/javascript"></script>
               <!-- popper -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/popper.min_lb4jbh.js" type="text/javascript"></script>
               <!-- bootstrap -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605452/js/bootstrap.min_klzrbk.js" type="text/javascript"></script>
               <!--
               ============
               vendor file
               ============
                -->
               <!-- particles -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/particles.min_fhbnsj.js" type="text/javascript"></script>
               <!-- TweenMax -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/TweenMax.min_sbb0pr.js" type="text/javascript"></script>
               <!-- ScrollMagic -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/ScrollMagic_maenwt.js" type="text/javascript"></script>
               <!-- animation.gsap -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/animation.gsap_hln4sr.js" type="text/javascript"></script>
               <!-- addIndicators -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/debug.addIndicators.min_ed7lew.js" type="text/javascript"></script>
               <!-- Swiper js -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/swiper.min_ggjmrz.js" type="text/javascript"></script>
               <!-- countdown -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/countdown_rkm6v5.js" type="text/javascript"></script>
               <!-- simpleParallax -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/simpleParallax.min_lelhtg.js" type="text/javascript"></script>
               <!-- waypoints -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/waypoints.min_s1k8uw.js" type="text/javascript"></script>
               <!-- counterup -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/jquery.counterup.min_ifepdt.js" type="text/javascript"></script>
               <!-- charming -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/charming.min_kxgeny.js" type="text/javascript"></script>
               <!-- imagesloaded -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/imagesloaded.pkgd.min_qin0k4.js" type="text/javascript"></script>
               <!-- BX-Slider -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/jquery.bxslider.min_ya1lyo.js" type="text/javascript"></script>
               <!-- Sharer -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/sharer_nrvblc.js" type="text/javascript"></script>
               <!-- sticky -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/sticky.min_r2i69h.js" type="text/javascript"></script>
               <!-- Aos -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/aos_nh4eaq.js" type="text/javascript"></script>
               <!-- main file -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605454/js/main_feltmm.js" type="text/javascript"></script>
               <!-- sass -->
               <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625604222/sass_otc3tz.js" type="text/javascript"></script>
             
             
</body>

</html>
<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
<script>


</script>

`
//main modal template

const template = document.createElement('template')

template.innerHTML=`
<!DOCTYPE html>
<html lang="en">
<head>

<link rel="stylesheet" type="text/css"  href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605461/css/console_mksvog.css">
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605461/css/dracula.min_graxc3.css">
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605465/css/reset.min_ihxu18.css">


<link rel="shortcut icon" href="https://res.cloudinary.com/verifiedly/image/upload/v1625613183/favicon_f5k5ae.png" type="image/x-icon" />
<!-- Bootstrap 4.5 -->
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605462/css/bootstrap.min_l5tfnu.css" type="text/css" />
<!-- animate -->
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625613146/css/animate_l5mser.css" type="text/css" />
<!-- Swiper -->
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605471/css/swiper.min_xi214w.css" />
<!-- icons -->
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605462/css/icons_vdegdz.css" type="text/css" />
<!-- aos -->
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605460/css/aos_b6mqul.css" type="text/css" />
<!-- main css -->
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625838299/main_gma76t.css" type="text/css" />
<!-- normalize -->
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605464/css/normalize_vjmkir.css" type="text/css" />


</head>



<body class="bg-snow  h-100vh  d-flex position-relative  flex flex-column justify-content-center align-item-center">


<div class="container">
<div class="row">
<div class="col-lg-6 mx-auto">

<a class="btn btn_md_primary redirect_btn padding-px-4 padding-py-2 margin-t-1 margin-b-1  bg-blue rounded-12 c-white h-fit-content">
Verify with Verifiedly
</a>


</div>
</div>
<div class="kyc_modal_background">

<div class="kyc_modal">
<div class="logo">
<div class="container">
 <div class="row">
   <div class="col-lg-12 padding-py-2 padding-px-1">
    <a href="http://verified.ly">
      <img src="https://res.cloudinary.com/verifiedly/image/upload/v1624987836/logo_1_cfwvpw.svg" class="imag_logo" alt=""></a>
   </div>
 </div>
</div>
 </div>

<div class="row">
<div class="col-lg-11 mx-auto">
<div class="kyc_objects"></div>
<div class="kyc_page2"></div>
<div class="kyc_page3"></div>
<div class="kyc_page4"></div>
<div class="kyc_page5"></div>
</div>
</div>



<span class="close_icon">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 6L18 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</span>

</div>
  </div>
</div>
<div class='webcam_script'></div>


  <!-- jquery -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605454/js/jquery-3.5.0_inc3z0.js" type="text/javascript"></script>
  <!-- jquery-migrate -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605453/js/jquery-migrate.min_gcnjzt.js" type="text/javascript"></script>
  <!-- popper -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/popper.min_lb4jbh.js" type="text/javascript"></script>
  <!-- bootstrap -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605452/js/bootstrap.min_klzrbk.js" type="text/javascript"></script>
  <!--
  ============
  vendor file
  ============
   -->
  <!-- particles -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/particles.min_fhbnsj.js" type="text/javascript"></script>
  <!-- TweenMax -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/TweenMax.min_sbb0pr.js" type="text/javascript"></script>
  <!-- ScrollMagic -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/ScrollMagic_maenwt.js" type="text/javascript"></script>
  <!-- animation.gsap -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/animation.gsap_hln4sr.js" type="text/javascript"></script>
  <!-- addIndicators -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/debug.addIndicators.min_ed7lew.js" type="text/javascript"></script>
  <!-- Swiper js -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/swiper.min_ggjmrz.js" type="text/javascript"></script>
  <!-- countdown -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/countdown_rkm6v5.js" type="text/javascript"></script>
  <!-- simpleParallax -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/simpleParallax.min_lelhtg.js" type="text/javascript"></script>
  <!-- waypoints -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/waypoints.min_s1k8uw.js" type="text/javascript"></script>
  <!-- counterup -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/jquery.counterup.min_ifepdt.js" type="text/javascript"></script>
  <!-- charming -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/charming.min_kxgeny.js" type="text/javascript"></script>
  <!-- imagesloaded -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/imagesloaded.pkgd.min_qin0k4.js" type="text/javascript"></script>
  <!-- BX-Slider -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/jquery.bxslider.min_ya1lyo.js" type="text/javascript"></script>
  <!-- Sharer -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/sharer_nrvblc.js" type="text/javascript"></script>
  <!-- sticky -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/sticky.min_r2i69h.js" type="text/javascript"></script>
  <!-- Aos -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/aos_nh4eaq.js" type="text/javascript"></script>
  <!-- main file -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605454/js/main_feltmm.js" type="text/javascript"></script>
  <!-- sass -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625604222/sass_otc3tz.js" type="text/javascript"></script>


 
</body>

<script type="text/javascript">
//assign modal
const kycModalBackground = document.querySelector('.kyc_modal_background');
//assign button
const redirectBtn = document.querySelector('.redirect_btn');
const showModal = () => {
  alert('hello');
      // kycModalBackground.style.display = 'block'
}



    //add eventlistener to button that initializes the modal and kyc process

    redirectBtn.addEventListener('click', showModal);

</script>
</html>
`

const scriptLink = `https://res.cloudinary.com/verifiedly/raw/upload/v1625849805/webcam_u5dmbv.js`;

const scriptElement = document.createElement("script");
scriptElement.src = scriptLink;

class VerifiedlyKYC extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.render()        
  
        
    }
    //shows modal when button is clicked
    showModal(expandState){
  

      const kycModalBackground = this.shadowRoot.querySelector('.kyc_modal_background')
  
if(expandState === true){
  kycModalBackground.classList.add("showModal")

}
else{
  kycModalBackground.classList.remove("showModal")
}

          };

          render(){
          
        
          
          
           
            const kycObjects = this.shadowRoot.querySelector(".kyc_objects")
            kycObjects.appendChild(indexPage.content.cloneNode(true));
          const kycPage2 = this.shadowRoot.querySelector('.kyc_page2')
          kycPage2.appendChild(getStartPage.content.cloneNode(true));
          kycPage2.style.display = 'none'
          
          const kycPage3 = this.shadowRoot.querySelector('.kyc_page3')
          kycPage3.appendChild(addressPage.content.cloneNode(true));
          kycPage3.style.display = 'none'
          
          const kycPage4 = this.shadowRoot.querySelector('.kyc_page4')
          kycPage4.appendChild(verificationPage.content.cloneNode(true));
          kycPage4.style.display = 'none'
          
          const kycPage5 = this.shadowRoot.querySelector('.kyc_page5')
          kycPage5.appendChild(finishPage.content.cloneNode(true));
          kycPage5.style.display = 'none'


              // handle onload script element
              scriptElement.onload = () => {
             
               Webcam.set({
                 height: -1,
                 width: -1,
                 constraints: {
                   width: 1000,
                   height: 1000
                 }
               });
         
     
             };
             this.shadowRoot.appendChild(scriptElement);
                    }
        

          getStartedRender(){
            
      const kycObjects = this.shadowRoot.querySelector('.kyc_objects')
      kycObjects.style.display = 'none'
      const kycPage2 = this.shadowRoot.querySelector('.kyc_page2')
      kycPage2.style.display = 'flex'

         
              
                  

          }



          verificationRender(){
           
     
          const kycPage3 = this.shadowRoot.querySelector('.kyc_page2')
          kycPage3.style.display = 'none'
          const kycPage4 = this.shadowRoot.querySelector('.kyc_page3')
        
          kycPage4.style.display = 'flex'

          
          //start of webcamjs
  const section = this.shadowRoot.querySelector('.section')
  const passportHolder = this.shadowRoot.querySelector('.passport_holder')

  setTimeout(() => {
    passportHolder.classList.add("hide_photo")
    section.innerHTML = `
    <div class="col-lg-10 camera_section rounded-0 text-center mx-auto">
  
  <div class="camera_cover">
    <div class="camera_line"></div>
    <div id="my_camera" class="my_camera">
  
      
        
    </div>
  
  </div>
  <div class="rounded-25 text_full margin-t-2 bg-snow padding-px-1 padding-py-1 flex text-center justify-content-center align-items-center">
    First we'll take a photo of the front of your photo ID
  </div>
  
  
  </div>
    `
    const cameraElement = document.createElement("div");
    cameraElement.id = "camera_box";
    this.shadowRoot.appendChild(cameraElement);

    Webcam.attach(cameraElement);
  }, 3000);
  
  
          }

          businessRender(){

            const kycPage2 = this.shadowRoot.querySelector('.kyc_page3')
            kycPage2.style.display = 'none'
            const kycPage3 = this.shadowRoot.querySelector('.kyc_page4')
            kycPage3.style.display = 'flex'
          }

          finishRender(){
            const kycPage3 = this.shadowRoot.querySelector('.kyc_page4')
            kycPage3.style.display = 'none'
            const kycPage4 = this.shadowRoot.querySelector('.kyc_page5') 
            kycPage4.style.display = 'flex'
          }
          
          backToBis(){
            const kycPage3 = this.shadowRoot.querySelector('.kyc_page4')
          
            kycPage3.style.display = 'none'
            const kycPage2 = this.shadowRoot.querySelector('.kyc_page3')
            kycPage2.style.display = 'flex'
          }

          backToStart(){
            const kycPage3 = this.shadowRoot.querySelector('.kyc_page3')
          
            kycPage3.style.display = 'none'
            const kycPage2 = this.shadowRoot.querySelector('.kyc_page2')
            kycPage2.style.display = 'flex'
          }

          focusEvent = (first, last)=>{
            if(first.value.length){
                this.shadowRoot.getElementById(last).focus()
            }


            alert("first")
            
            maxLength = otpInput.getAttribute('maxlength');
            
            if (otpInput.value.length > otpInput.maxLength){
              otpInput.value = otpInput.value.slice(0, otpInput.maxLength)
            }
            
            }
        


          connectedCallback () {
        
    this.shadowRoot.querySelector('.redirect_btn').addEventListener('click', () => this.showModal(true))
    this.shadowRoot.querySelector('.close_icon').addEventListener('click', () => this.showModal(false))
    this.shadowRoot.querySelector('.border_cancel').addEventListener('click', () => this.showModal(false))
    this.shadowRoot.querySelector('.agree_btn').addEventListener('click', () => this.getStartedRender())
    this.shadowRoot.querySelector('.verification_btn').addEventListener('click', () => this.businessRender())
    this.shadowRoot.querySelector('.business_btn').addEventListener('click', () => this.verificationRender())
    this.shadowRoot.querySelector('.back_to_business_btn').addEventListener('click', () => this.backToBis())
    this.shadowRoot.querySelector('.back_to_start_btn').addEventListener('click', () => this.backToStart())
    this.shadowRoot.querySelector('#otp').addEventListener('keyup', () => this.focusEvent(first,last))
 

    // this.shadowRoot.querySelector('.finish_btn').addEventListener('click', () => this.finishRender())
    this.shadowRoot.querySelector('.close_icon_btn').addEventListener('click', () => this.showModal(false)) 
    const customSelect =  this.shadowRoot.querySelector('.custom-select');
    const otpInput =  this.shadowRoot.querySelector('.otp');
      
      const typeName =  this.shadowRoot.querySelector('.type_name');
      if(customSelect.value === "Nigeria"){
    
    typeName.innerHTML = "NIN"
    }
    else{
    typeName.innerHTML = "SSN"
    
    }
    
   
  
      // this._shadowRoot.appendChild(scriptElement);
    
    
    
      
      customSelect.addEventListener('change', ()=>{
        // typeName.innerHTML = `${customSelect.value}`
    if(customSelect.value === "Nigeria"){
    
      typeName.innerHTML = "NIN"
    }
    else{
      typeName.innerHTML = "SSN"
    
    }
      });






  function take_snapshot() {
    Webcam.snap( function(data_uri) {
     
      document.getElementById('my_camera').innerHTML = '<img src="'+data_uri+'"/>';

      location.assign("/back.html")
    } );
  };
  



    
if(this.getAttribute("api-key")){

              console.log(this.getAttribute("api-key"))
          
            }else{
              alert("please add your api key")
            }
          
          };


}

customElements.define("verifiedly-kycbtn", VerifiedlyKYC)