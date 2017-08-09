<template>
  <div class="form">
    <div class="form-group">
      <label for="name">Name category</label>
      <input v-model="title.title" class="form-control" type="text" id="name" name="name">
    </div>
    <div class="form-group">
      <button v-on:click="saveCategory" class="btn btn-primary">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: {
        name: ''
      }
    }
  },
  methods: {
    saveCategory() {
      this.$http.put('http://jsonplaceholder.typicode.com/posts', this.title.id, this.category)
        .then(() => {
          this.$router.push({path: '/titles'});
        });
    },
    getTitle(id) {
      this.$http.get('http://jsonplaceholder.typicode.com/posts' + id + '/edit')
        .then(response => response.json())
        .then(result => this.title = result);
    }
  },
  created: function() {
      this.getTitle(this.$route.params.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
