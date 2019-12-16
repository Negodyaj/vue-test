<template>
	<div>
		<div>
			Store works!! {{greeting}}
		</div>
		<div>
			<input :value="someData" @input="updateMyProperty($event)"/>
		</div>
		{{someData}}
	</div>
</template>

<script lang="ts" src="./Store.ts" />
<style lang="scss" src="./Store.scss" />
