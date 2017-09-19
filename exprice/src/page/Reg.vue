<template>
	<div class="reg">
    	<h1>{{ msg }}</h1>
    	<input  placeholder="用户名" type="text" /><br	/><br	/>					
		<input type="password" placeholder="密码" />	<br	/><br	/>											
    	<button>注册</button><br	/><br/>	
		<p @click="toLog">去登录</p>
    </div>
</template>

<script>
	export default {
	  name: 'reg',
	  data () {
	    return {
	      msg: 'Welcome to Reg'
	    }
	  },
	  methods: {		
		toLog(){
			this.$router.push('Log')	
		}
	}
	}
</script>

<style>
</style>


