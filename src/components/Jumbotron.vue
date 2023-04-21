
<template>
<section>
<div class="video-container">
    <div class="overlay"></div>
<video id="myVideo" ref="videoPlayer" autoplay muted @ended="restartVideo">
<source src="../assets/img/interstellar.mp4">
</video>
<div class="preview">
<h1 class="text-white">Interstellar</h1>
<div class="d-flex align-items-center justify-content-center">
<button class="btn btn-white text-white border-white " @click="toggleVideo">{{ (isPlaying ? 'Pause' : 'Play') }} <i class="fa-solid fa-play"></i></button>
</div>
</div> 
</div> 
</section>

</template>



<script>
export default {
    name: 'Jumbotron',
    data() {
        return {
            
          
        }
    },
methods: { 
    restartVideo() {
         const myVideo = document.getElementById("myVideo");
          myVideo.currentTime = 0;
           myVideo.play(); } 
        },
        methods:{
             toggleVideo() {
                 if (this.isPlaying) {
                     this.$refs.videoPlayer.pause();
                     }
                      else { 
                        this.$refs.videoPlayer.play(); 
                    }
                       this.isPlaying = !this.isPlaying;
                 }, 
                 restartVideo() { 
                    this.$refs.videoPlayer.currentTime = 0;
                     this.$refs.videoPlayer.play(); 
                     this.isPlaying = true;
                     } }
                    }
                     </script>

<style lang="scss" scoped>
.video-container{
    position: relative;
}
.preview{
    position: absolute;
    left: 75px;
    top:230px;

}
video{
    width: 100%;
    height: 5%;
    
}
h1{
    font-size: 60px;
}
.overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.4;
}
</style>