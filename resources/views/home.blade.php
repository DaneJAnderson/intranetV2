@extends('layout.App')


@section('Sidebar')
<sidebar-component></sidebar-component> 
@endsection

@section('Home')
<router-view></router-view>
@endsection