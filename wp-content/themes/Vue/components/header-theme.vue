<template>
	<header>
    <nav class="main-nav">
      <div class="container">
        <div class="row">
          <div class="menu-main-container">
            <ul >
              <li v-for="link in links">
                <router-link :to="{ path: link.object_slug } " >{{ link.title }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
	</header>
</template>
<script type="text/babel">
export default {
	data() {
		return {
			message: 'footer Vue!',
      links: this.getMenu(2),
		}
	},

	methods: {
		getMenu(id){
        this.$http.get('/wp-json/wp-api-menus/v2/menus/'+id).then(response => {
          this.links = response.body.items;
        }, response => {
         console.log('Error: Menu not loaded')
        });
		}
	}
}
</script>
