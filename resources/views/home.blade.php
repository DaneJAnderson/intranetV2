@extends('layout.App')

@include('include.sidebar')

@section('Home')    
<div>    

<router-view></router-view>

</div>
@endsection