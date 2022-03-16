<template>
  <div></div>
</template>

<script>
import axios from "axios"

export default {
  name: "ComponentWithAsyncCall",
  
  created() {
    this.makeApiCall()
  },
  
  methods: {
    async makeApiCall() {
      console.log("Making api call");
      let data = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
      return data.json();
      }
  }
}
</script>