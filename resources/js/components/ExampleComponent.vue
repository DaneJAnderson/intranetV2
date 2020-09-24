<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body bg-info text-white">
                        I'm an example component.
                    </div>
                </div>
            </div>
        </div>
            <v-card>Tell me what</v-card>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script> 
