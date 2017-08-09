<template>
  <div class="form">
    <div class="form-group">
      <label for="name">New title</label>
      <input v-model="title.title" class="form-control" type="text" id="title" name="title">
    </div>
    <div class="form-group">
      <button v-on:click="saveTitle" class="btn btn-primary">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: {
        title: ''
      }
    }
  },
  methods: {
    saveTitle() {
      this.$http.post('http://jsonplaceholder.typicode.com/posts', this.title)
        .then(() => {
          this.$router.push({path: '/titles'});
        });
    }
  },
  created: function() {
    // this.fetchTitles();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
