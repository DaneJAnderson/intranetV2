<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>  
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        {{-- <meta name="viewport" content="width=device-width, initial-scale=1"> --}}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        {{-- <base href="/intranetV2/public/" /> --}}
        {{-- <base href="{{ url('/') }}" /> --}}
        <script>window.Laravel = { csrfToken: '{{ csrf_token() }}' }</script>       

        <link rel="stylesheet" href="{{ asset('css/app.css') }}" />
        <link rel="stylesheet" href="{{ asset('css/js/app.vuetify-components.css') }}" />        

        {{-- <title>{{ config('app.name', @yield('title')) }}</title>     --}}
        <title>COKCU  @yield('title')</title>    
    </head>
    <script>
    window.publicURL = "{{ $publicURL ?? url('/') ?? ''  }}";  
    console.log(window.publicURL);    
    </script>
    
    <style>

#sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

#home {
    margin-top: -85vh !important;
}

    </style>
       <body onload="init()"> {{------- Smooth ScrollBar ------}}
            <div id="app"> 
                <v-app>
                   
                {{-- --------------- Header --------------- --}}
                <div class="header">
                        @include('include.header')
                </div>

                <v-row  no-gutters dense>

                {{-- -------------- SideBar -------------  --}}
             <v-col id="sticky"  cols=2 >        
                @section('Sidebar')
                 sidebar.
                @show               
            </v-col>
                {{-- --------------- Content ------------- --}}
                <v-col id="home" offset=2 cols=10 class="pl-10 pr-5">                
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
	   {{-- <script defer src="{{ mix('js/js/app.js') }}"></script> --}}
	   <script defer src="{{ asset('js/SmoothScrollBar.js') }}"></script>
</html>
