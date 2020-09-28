@extends('layout.App')

@include('include.sidebar')

@section('Home')    
<div>    
    @{{ this.$route }}
<router-view></router-view>
			
			
     

</div>
@endsection