<template>
    <div>
        <h1>Welcome to Home !</h1>
        <notice-component></notice-component>
        <birthday-component></birthday-component>
        <gallery-component></gallery-component>
    </div>
</template>
<script>
import NoticeComponent from './NoticeComponent'
import BirthdayComponent from './BirthdayComponent'
import GalleryComponent from './GalleryComponent'
export default {
    name: 'HomeComponent',
    components: {
        NoticeComponent,
        BirthdayComponent,
        GalleryComponent
    }
}
</script>