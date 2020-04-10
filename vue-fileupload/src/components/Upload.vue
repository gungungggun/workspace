<template>
  <div>
    <vue-dropzone
      ref="myVueDropzone"
      id="dropzone"
      :options="dropzoneOptions"
      @vdropzone-sending="sending"
      method="PUT"
    >
    </vue-dropzone>
    <textarea v-model="signurl" placeholder="Signed URL" class="signedurl"></textarea>
    <button @click="uploadFile">Upload</button>
  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
  components: {
    vueDropzone: vue2Dropzone
  },
  data() {
    return {
      fff: null,
      file: null,
      signurl: '',
      dropzoneOptions: {
        url: 'http://localhost',
        method: 'PUT',
        autoProcessQueue: false,
        thumbnailWidth: 150,
        maxFilesize: 500
      }
    }
  },
  methods: {
    sending(file, xhr) {
      const _send = xhr.send
      xhr.send = () => {
        _send.call(xhr, file)
      }
    },
    uploadFile() {
      this.$refs.myVueDropzone.dropzone.options.url = this.signurl
      this.$refs.myVueDropzone.processQueue()
    }
  }
}
</script>

<style>
.signedurl {
  margin-top: 30px;
  border: 1px solid #ccc;
  width: 97%;
  height: 200px;
  padding: 10px;
}
</style>
