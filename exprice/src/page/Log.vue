<template>
  <div class="log">
    <h1>{{ msg }}</h1>      
		<p>BLALA</p>			    	
		<input  placeholder="用户名" type="text" /><br	/><br	/>					
		<input type="password" placeholder="密码" />	<br	/><br	/>											
    <button @click="submitForm()">登陆</button><br	/><br/>	
    <p @click="toReg">去注册</p>
  </div>

</template>

<script>
export default {
  name: 'log',
  data () {
    return {
      msg: 'Welcome to  Log'
    }
  },
  methods: {
			submitForm() {				
				this.$router.push('dashboard')			
			},
			toReg(){
				this.$router.push('Reg')	
			}
		}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
