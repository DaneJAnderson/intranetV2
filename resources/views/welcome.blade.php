<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <link rel="stylesheet" href="{{ asset('css/app.css') }}" />
        <link rel="stylesheet" href="{{ asset('css/js/app.vuetify-components.css') }}" />
        {{-- <script defer src="{{ asset('js/app.js') }}"></script> --}}
    </head>
    <body>
        <div id="app" data-app>
            <h1 class="text-danger"> Welcome to Vue Laravel !</h1>
            <example-component></example-component>
            <test-component></test-component>
        </div>        
    </body>

<script defer src="{{ asset('js/manifest.js') }}"></script>  
<script defer src="{{ asset('js/vendor.js') }}"></script>
<script defer src="{{ asset('js/app.js') }}"></script>
<script src="{{ mix('/js/app.js') }}"></script>
</html>
