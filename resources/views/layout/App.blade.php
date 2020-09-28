<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>  
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <script>window.Laravel = { csrfToken: '{{ csrf_token() }}' }</script>       

        <link rel="stylesheet" href="{{ asset('css/app.css') }}" />
        <link rel="stylesheet" href="{{ asset('css/js/app.vuetify-components.css') }}" />        

        {{-- <title>{{ config('app.name', @yield('title')) }}</title>     --}}
        <title>COKCU  @yield('title')</title>    
    </head>
       <body>
            <div id='app' data-app>
              
                {{-- --------------- Header --------------- --}}
                <div class="header">
                        @include('include.header')
                </div>

                {{-- --------------- Content ------------- --}}
                <div class="content">
                    @yield('Home')
                </div>

                {{-- -------------- SideBar -------------  --}}
                <div class="sidebar">
                @section('Sidebar')
                 sidebar.
                @show
            </div>       
               
                {{-- ---------------- Footer ----------- --}}
  <div class="footer">
        @include('include.footer')
    </div>




     </div>   
       </body>
       <script defer src="{{ asset('js/manifest.js') }}"></script>  
	   <script defer src="{{ asset('js/vendor.js') }}"></script>
	   <script defer src="{{ asset('js/app.js') }}"></script>
	   <script src="{{ mix('/js/app.js') }}"></script>
</html>
