<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>  
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        {{-- <meta name="viewport" content="width=device-width, initial-scale=1"> --}}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        {{-- <base href="/intranet/public/" /> --}}
        {{-- <base href="{{ url('/') }}" /> --}}
        <script>window.Laravel = { csrfToken: '{{ csrf_token() }}' }</script>       

        <link rel="stylesheet" href="{{ asset('css/app.css') }}" />
        <link rel="stylesheet" href="{{ asset('css/js/app.vuetify-components.css') }}" />   
        <link rel="icon" href="{{ url('/') }}/images/COKSODALITY_LOGO.png" type="image/gif" sizes="16x16">     

        {{-- <title>{{ config('app.name', @yield('title')) }}</title>     --}}
        <title>COKCU  @yield('title')</title>    
    </head>
    <script  src="{{ asset('js/SmoothScrollBar.js') }}"></script>
    <script>
        init();
        // ---- CONSTANT URL VARIABLES  ---- //

    window.publicURL = "{{  url('/') ?? $publicURL ?? ''  }}";  
    window.storageURL = window.location.protocol+'//'+window.location.hostname+'/intranet/storage/app/public/';  
    window.urlAPI = window.publicURL+'/api';
    // console.log(window.publicURL);    
    </script>
    
<style>
#sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 30px;  
}

#home {
    margin-top: -90vh !important;
}

#tools{
    margin-top: 120px !important;
    margin-left: 50px;
    margin-right: 50px;
}


/* Center the loader */
#loader {
  position: absolute;
  left: 50%;
  top: 70%;
  z-index: 1;
  width: 120px;
  height: 120px;
  margin: -76px 0 0 -76px;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  /* border-top: 16px solid #3498db; */
  border-top: 16px solid orange;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Add animation to "page content" */
.animate-bottom {
  position: relative;
  -webkit-animation-name: animatebottom;
  -webkit-animation-duration: 1s;
  animation-name: animatebottom;
  animation-duration: 1s
}

@-webkit-keyframes animatebottom {
  from { bottom:-100px; opacity:0 } 
  to { bottom:0px; opacity:1 }
}

@keyframes animatebottom { 
  from{ bottom:-100px; opacity:0 } 
  to{ bottom:0; opacity:1 }
}

/* #splash { 
  text-align: center;
  padding-top: 150px;  
  z-index: 2;
  background: white;
  width: 100%;
  height: 100vh;
  position: absolute;
} */

</style>

       <body  > {{------- Smooth ScrollBar onload="init()"------}}

    {{--    
        <div id="splash">
        <div id="loader"></div>
        <h1 style="color:rgb(226, 147, 0); padding-bottom: 5px">Welcome to the Intranet</h1>        
        <img src="{{ url('/') }}/images/COKSODALITY_LOGO.png"  width="300px" height="100px" />
        <br/><br/>
        <h3>Please wait Loading... </h3>

        </div>
         <script>
        	setTimeout(()=>{
		document.getElementById("app").style.display = "block";
	}, 3000);
        </script> --}}

            <div id="app"> 
                <v-app >
                   
                {{-- --------------- Header --------------- --}}
                <div class="header">
                        @include('include.header')
                </div>

                <v-row  no-gutters dense>

                {{-- -------------- SideBar -------------  --}}
             <v-col v-if="this.$route.name == 'Home'" id="sticky"  cols=2 >        
                @section('Sidebar')
                 sidebar.
                @show               
            </v-col>
                {{-- --------------- Content ------------- --}}
                <v-col v-if="this.$route.name == 'Home'" 
                id="home" offset=2 cols=10 class="pl-10 pr-5">
                    @yield('Home')
                </v-col>
                {{-- Remove Banner and SideBar if not at Home route --}}
                <v-col v-else id="tools">
                    @yield('Home')
                </v-col>

                </v-row>

               
                {{-- ---------------- Footer ----------- --}}

<div class="footer">    
        @include('include.footer')
</div>


                </v-app>
     </div>   
       </body>
       <script defer src="{{ asset('js/manifest.js') }}"></script>  
     <script defer src="{{ asset('js/js/vendor.js') }}"></script>    
	   <script defer src="{{ asset('js/js/app.js') }}"></script>
	   {{-- <script defer src="{{ asset('js/SmoothScrollBar.js') }}"></script> --}}
</html>
