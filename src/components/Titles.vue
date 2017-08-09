<template>
  <div>
    <router-link class="btn btn-primary" to="/titles/add">
      Add title
    </router-link>
    <table class="table table-hover">
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      <tr v-for="title in titles">
        <td>{{title.id}}</td>
        <td>{{title.title}}</td>
        <td>
          <router-link v-bind:to="'titles/' + title.id+'/edit'" class="btn btn-success">
            Edit
          </router-link>
        </td>
        <td>
          <button v-on:click="deleteTitle(id)" class="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      titles: []
    }
  },
  methods: {
    fetchTitles() {
      this.$http.get('http://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(result => this.titles = result)
    },
    deleteTitle(id) {
      this.$http.get('http://jsonplaceholder.typicode.com/posts' + id)
        .then(() => {
          this.fetchTitles();
        });
    }
  },
  created: function() {
    this.fetchTitles();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
